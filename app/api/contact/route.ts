import { NextResponse } from "next/server";
import { addInquiryToMailchimp, mailchimpConfigured, type Inquiry } from "@/lib/mailchimp";

/**
 * Receives the contact form (components/contact-form.tsx). It checks the fields, then adds the inquiry to the
 * Mailchimp audience (lib/mailchimp.ts) and, when CONTACT_WEBHOOK_URL is set, also forwards it there as JSON.
 * It answers ok once at least one of them has it. While neither is set up it answers 503, and the form falls
 * back to opening the visitor's email app with the message filled in, so no inquiry is lost.
 */

const LIMITS = { name: 120, email: 160, company: 160, phone: 40, need: 120, message: 4000 } as const;
type Field = keyof typeof LIMITS;

const text = (value: unknown, field: Field) => (typeof value === "string" ? value.trim().slice(0, LIMITS[field]) : "");

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "invalid" }, { status: 400 });

  // a hidden field people never see; if it is filled, a bot filled it, so it is accepted and dropped
  if (typeof body.fx_hp_field === "string" && body.fx_hp_field.trim()) {
    console.warn("[contact] dropped: the hidden bot field was filled");
    return NextResponse.json({ ok: true });
  }

  const inquiry: Inquiry = {
    name: text(body.name, "name"),
    email: text(body.email, "email"),
    company: text(body.company, "company"),
    phone: text(body.phone, "phone"),
    need: text(body.need, "need"),
    message: text(body.message, "message"),
  };
  // the name, an email (Mailchimp keeps every contact by it) and a contact number are required
  const phoneDigits = inquiry.phone.replace(/\D/g, "").length;
  if (!inquiry.name || phoneDigits < 7 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) {
    console.warn("[contact] turned down: name, email or phone missing or invalid");
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!mailchimpConfigured() && !webhook) {
    console.warn("[contact] not sent: neither Mailchimp nor a webhook is set up in .env.local");
    return NextResponse.json({ error: "not-configured" }, { status: 503 });
  }

  const [toMailchimp, toWebhook] = await Promise.all([
    mailchimpConfigured() ? addInquiryToMailchimp(inquiry) : false,
    webhook
      ? fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...inquiry, source: "faxtor.in contact form", receivedAt: new Date().toISOString() }),
          signal: AbortSignal.timeout(8000),
        })
          .then((response) => response.ok)
          .catch(() => false)
      : false,
  ]);

  // one line per inquiry in the server log, so it is easy to see where each one went
  console.info(`[contact] inquiry: Mailchimp ${toMailchimp ? "saved" : "failed"}${webhook ? `, webhook ${toWebhook ? "sent" : "failed"}` : ""}`);
  return toMailchimp || toWebhook ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "delivery" }, { status: 502 });
}

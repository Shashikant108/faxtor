import { NextResponse } from "next/server";

/**
 * Receives the contact form (components/contact-form.tsx). It checks the fields, then forwards the inquiry
 * as JSON to CONTACT_WEBHOOK_URL (any CRM, email service or automation webhook). While no webhook is set it
 * answers 503, and the form falls back to opening the visitor's email app with the message filled in, so no
 * inquiry is lost.
 */

const LIMITS = { name: 120, email: 160, company: 160, phone: 40, need: 120, message: 4000 } as const;
type Field = keyof typeof LIMITS;

const text = (value: unknown, field: Field) => (typeof value === "string" ? value.trim().slice(0, LIMITS[field]) : "");

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "invalid" }, { status: 400 });

  // a hidden field people never see; if it is filled, a bot filled it, so it is accepted and dropped
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true });

  const inquiry = {
    name: text(body.name, "name"),
    email: text(body.email, "email"),
    company: text(body.company, "company"),
    phone: text(body.phone, "phone"),
    need: text(body.need, "need"),
    message: text(body.message, "message"),
  };
  if (!inquiry.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email) || !inquiry.need || !inquiry.message) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ error: "not-configured" }, { status: 503 });

  const sent = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...inquiry, source: "faxtor.in contact form", receivedAt: new Date().toISOString() }),
  }).catch(() => null);

  return sent?.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "delivery" }, { status: 502 });
}

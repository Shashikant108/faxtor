"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_INFO } from "@/lib/site-config";
import { ArrowIcon } from "./arrow-icon";

type Status = "idle" | "sending" | "sent" | "mailto";

/**
 * The "Send us a message" form. The browser checks the required fields itself; the inquiry then goes to
 * /api/contact (app/api/contact/route.ts). If that cannot deliver it yet, the visitor's email app opens with
 * the same message addressed to Faxtor, so it still reaches us. It appears twice (the contact section and the
 * dialog), so each copy takes its own `idPrefix` to keep the field ids unique.
 */
export function ContactForm({ needs, idPrefix = "contact" }: { needs: readonly string[]; idPrefix?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => null);

    if (response?.ok) {
      form.reset();
      setStatus("sent");
      return;
    }

    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company && `Company: ${data.company}`,
      data.phone && `Phone: ${data.phone}`,
      `Looking for: ${data.need}`,
      "",
      data.message,
    ]
      .filter((line) => line !== undefined && line !== "")
      .join("\n");
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(`Inquiry: ${data.need}`)}&body=${encodeURIComponent(body)}`;
    setStatus("mailto");
  };

  return (
    <form className="contact-card" onSubmit={submit}>
      <h3 id={`${idPrefix}-title`} className="cta-title">
        Send us a message
      </h3>

      <div className="form-grid">
        <label className="sr-only" htmlFor={`${idPrefix}-name`}>Your name</label>
        <input id={`${idPrefix}-name`} name="name" className="field" placeholder="Your name*" autoComplete="name" required maxLength={120} />

        <label className="sr-only" htmlFor={`${idPrefix}-email`}>Business email</label>
        <input id={`${idPrefix}-email`} name="email" type="email" className="field" placeholder="Business email*" autoComplete="email" required maxLength={160} />

        <label className="sr-only" htmlFor={`${idPrefix}-company`}>Company name</label>
        <input id={`${idPrefix}-company`} name="company" className="field" placeholder="Company name" autoComplete="organization" maxLength={160} />

        <label className="sr-only" htmlFor={`${idPrefix}-phone`}>Contact number</label>
        <input id={`${idPrefix}-phone`} name="phone" type="tel" className="field" placeholder="Contact number" autoComplete="tel" maxLength={40} />

        <label className="sr-only" htmlFor={`${idPrefix}-need`}>What are you looking for?</label>
        <select id={`${idPrefix}-need`} name="need" className="field field-select sm:col-span-2" required defaultValue="">
          <option value="" disabled>
            What are you looking for?*
          </option>
          {needs.map((need) => (
            <option key={need}>{need}</option>
          ))}
          <option>Something else</option>
        </select>

        <label className="sr-only" htmlFor={`${idPrefix}-message`}>Tell us more about your requirements</label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          className="field field-area sm:col-span-2"
          placeholder="Tell us more about your requirements*"
          required
          maxLength={4000}
        />

        {/* left empty by people; only bots fill it (app/api/contact/route.ts drops those) */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      </div>

      <div className="form-foot">
        <button type="submit" className="btn btn-sm" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit inquiry"}
          <ArrowIcon className="h-5 w-5" />
        </button>
        <p className="form-note" aria-live="polite">
          {status === "sent" && "Thank you! We will get back to you within 1–2 business days."}
          {status === "mailto" && "Your email app has opened with your message. Just press send."}
          {/* the response-time hint is left out on phones, where the button stands alone; the outcome messages above always show */}
          {(status === "idle" || status === "sending") && <span className="max-sm:hidden">We typically respond within 1–2 business days.</span>}
        </p>
      </div>
    </form>
  );
}

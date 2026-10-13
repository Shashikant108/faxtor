"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_INFO } from "@/lib/site-config";
import { ArrowIcon } from "./arrow-icon";

type Status = "idle" | "sending" | "sent" | "mailto";

/**
 * The "Send us a message" form. Only the name and contact number are required, and the browser checks them
 * itself; the inquiry then goes to /api/contact (app/api/contact/route.ts). If that cannot deliver it yet, the visitor's email app opens with
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
      `Phone: ${data.phone}`,
      data.email && `Email: ${data.email}`,
      data.company && `Company: ${data.company}`,
      data.need && `Looking for: ${data.need}`,
      "",
      data.message,
    ]
      .filter((line) => line !== undefined && line !== "")
      .join("\n");
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(data.need ? `Inquiry: ${data.need}` : `Inquiry from ${data.name}`)}&body=${encodeURIComponent(body)}`;
    setStatus("mailto");
  };

  return (
    <form className="contact-card" onSubmit={submit}>
      <h3 id={`${idPrefix}-title`} className="cta-title">
        Send us a message
      </h3>
      <p className="form-intro">Fill in the details and we’ll get back to you within 1–2 business days.</p>

      <div className="form-grid">
        <label className="sr-only" htmlFor={`${idPrefix}-name`}>Your name</label>
        <input id={`${idPrefix}-name`} name="name" className="field" placeholder="Your name*" autoComplete="name" required maxLength={120} />

        <label className="sr-only" htmlFor={`${idPrefix}-email`}>Business email</label>
        <input id={`${idPrefix}-email`} name="email" type="email" className="field" placeholder="Business email" autoComplete="email" maxLength={160} />

        <label className="sr-only" htmlFor={`${idPrefix}-company`}>Company name</label>
        <input id={`${idPrefix}-company`} name="company" className="field" placeholder="Company name" autoComplete="organization" maxLength={160} />

        <label className="sr-only" htmlFor={`${idPrefix}-phone`}>Contact number</label>
        <input id={`${idPrefix}-phone`} name="phone" type="tel" className="field" placeholder="Contact number*" autoComplete="tel" required pattern="[\d\s\+\-\(\)]{7,40}" title="A phone number, at least 7 digits" maxLength={40} />

        <label className="sr-only" htmlFor={`${idPrefix}-need`}>What are you looking for?</label>
        <select id={`${idPrefix}-need`} name="need" className="field field-select sm:col-span-2" defaultValue="">
          <option value="" disabled>
            What are you looking for?
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
          placeholder="Tell us more about your requirements"
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
        </p>
      </div>
    </form>
  );
}

"use client";

import { useRef, useState, type FormEvent } from "react";
import { CONTACT_INFO } from "@/lib/site-config";
import { ArrowIcon } from "./arrow-icon";

type Status = "idle" | "sending" | "sent" | "mailto";

/**
 * The "Send us a message" form. The name, email and contact number are required, and the browser checks them
 * itself; the inquiry then goes to /api/contact (app/api/contact/route.ts), which adds it to Mailchimp. If that
 * cannot deliver it, the visitor's email app opens with the same message addressed to Faxtor, so it still
 * reaches us. Once it is sent, a small "thank you" dialog opens over the page; closing it also closes the contact
 * dialog when the form was sent from there. It appears twice (the contact section and the dialog), so each copy
 * takes its own `idPrefix` to keep the field ids unique.
 */
export function ContactForm({ needs, idPrefix = "contact" }: { needs: readonly string[]; idPrefix?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const thanksRef = useRef<HTMLDialogElement>(null);

  // the page stays still behind the thank-you dialog, as behind the contact dialog
  const showThanks = () => {
    document.documentElement.classList.add("dialog-open");
    thanksRef.current?.showModal();
  };
  const closeThanks = () => {
    thanksRef.current?.close();
    // sent from the contact dialog: that closes too
    const host = formRef.current?.closest("dialog");
    if (host?.open) host.close();
    document.documentElement.classList.remove("dialog-open");
  };

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
      showThanks();
      return;
    }

    const body = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
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
    <>
      <form ref={formRef} className="contact-card" onSubmit={submit}>
        <h3 id={`${idPrefix}-title`} className="cta-title">
          Send us a message
        </h3>
        <p className="form-intro">Fill in the details and we’ll get back to you within 1–2 business days.</p>

        <div className="form-grid">
          <label className="sr-only" htmlFor={`${idPrefix}-name`}>Your name</label>
          <input id={`${idPrefix}-name`} name="name" className="field" placeholder="Your name*" autoComplete="name" required maxLength={120} />

          <label className="sr-only" htmlFor={`${idPrefix}-email`}>Business email</label>
          <input id={`${idPrefix}-email`} name="email" type="email" className="field" placeholder="Business email*" autoComplete="email" required maxLength={160} />

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

          {/* left empty by people; only bots fill it (app/api/contact/route.ts drops those). Its name is one no
              browser autofill knows, so a person's saved details never land in it */}
          <input name="fx_hp_field" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        </div>

        <div className="form-foot">
          <button type="submit" className="btn btn-sm" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Submit inquiry"}
            <ArrowIcon className="h-5 w-5" />
          </button>
          <p className="form-note" aria-live="polite">
            {status === "mailto" && "Your email app has opened with your message. Just press send."}
          </p>
        </div>
      </form>

      <dialog
        ref={thanksRef}
        className="thanks-dialog"
        aria-labelledby={`${idPrefix}-thanks-title`}
        // Escape closes it the same way the button does
        onCancel={(event) => {
          event.preventDefault();
          closeThanks();
        }}
        onClick={(event) => {
          // a click on the dimmed backdrop closes it too
          if (event.target === event.currentTarget) closeThanks();
        }}
      >
        <span aria-hidden="true" className="thanks-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h2 id={`${idPrefix}-thanks-title`} className="thanks-title">
          Thank you!
        </h2>
        <p className="thanks-copy">Your inquiry has reached us. Our team will get back to you within 1–2 business days.</p>
        <button type="button" className="btn btn-sm thanks-close" onClick={closeThanks}>
          Done
        </button>
      </dialog>
    </>
  );
}

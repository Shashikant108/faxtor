import { createHash } from "node:crypto";

// Adds a contact form inquiry to the Mailchimp audience. Server only: the API key never reaches the browser.
// Needs MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID and MAILCHIMP_SERVER (the "us2" part of the key) in .env.local.
//
// In the audience each inquiry shows as a contact with its First name, Last name, Phone, Company, Service (what
// they are looking for) and Message, a "Website inquiry" tag plus a tag for the service picked, and the full
// message as a note on the contact (the Message field keeps the first 255 characters). SERVICE and MESSAGE are
// text fields added to the audience for this; the others come with every Mailchimp audience.

export type Inquiry = { name: string; email: string; company: string; phone: string; need: string; message: string };

// every inquiry gets this tag, so website leads are easy to find in the audience
const INQUIRY_TAG = "Website inquiry";
// Mailchimp keeps a text field to 255 characters and a note to 1,000
const FIELD_LIMIT = 255;
const NOTE_LIMIT = 1000;

export const mailchimpConfigured = () =>
  Boolean(process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_AUDIENCE_ID && process.env.MAILCHIMP_SERVER);

/**
 * Creates the contact, or updates it when that email is already in the audience, with the name and company; then
 * adds the phone on its own, since Mailchimp checks a Phone field's format and turns the whole request down when a
 * number does not fit it, which would otherwise lose the company too. Then it tags the contact and keeps the full
 * message, phone included, as a note. Returns false only if the contact could not be saved at all, so the form
 * can fall back to email.
 */
export async function addInquiryToMailchimp(inquiry: Inquiry): Promise<boolean> {
  const key = process.env.MAILCHIMP_API_KEY;
  const audience = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER;
  if (!key || !audience || !server) return false;

  const member = createHash("md5").update(inquiry.email.toLowerCase()).digest("hex");
  const base = `https://${server}.api.mailchimp.com/3.0/lists/${audience}/members/${member}`;
  const call = (path: string, method: "PUT" | "PATCH" | "POST", body: unknown) =>
    fetch(base + path, {
      method,
      headers: { Authorization: `Basic ${Buffer.from(`faxtor:${key}`).toString("base64")}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    }).catch(() => null);

  const [firstName, ...rest] = inquiry.name.split(/\s+/);
  const names = { FNAME: firstName, LNAME: rest.join(" ") };
  const contact = (mergeFields: Record<string, string>) =>
    call("", "PUT", {
      email_address: inquiry.email,
      // only a new contact takes this; someone who once unsubscribed stays unsubscribed
      status_if_new: "subscribed",
      merge_fields: mergeFields,
    });

  // only the details that were given, so an update never blanks what a contact already has
  const details = Object.fromEntries(
    Object.entries({
      COMPANY: inquiry.company,
      SERVICE: inquiry.need,
      MESSAGE: inquiry.message.replace(/\s+/g, " ").slice(0, FIELD_LIMIT),
    }).filter(([, value]) => value),
  );
  const saved = await contact({ ...names, ...details });
  if (!saved?.ok) {
    console.error("Mailchimp did not save the contact:", saved ? saved.status : "no response", saved ? await saved.text() : "");
    return false;
  }

  const phone = await call("", "PATCH", { merge_fields: { PHONE: inquiry.phone } });
  if (!phone?.ok) {
    console.error("Mailchimp did not take the phone number (it is still in the note):", phone ? phone.status : "no response", phone ? await phone.text() : "");
  }

  // the contact is in; the tags and the note only add detail, so a failure there does not fail the inquiry
  const tags = [INQUIRY_TAG, inquiry.need].filter(Boolean).map((name) => ({ name, status: "active" }));
  const note = [
    "Website contact form",
    inquiry.need && `Looking for: ${inquiry.need}`,
    inquiry.company && `Company: ${inquiry.company}`,
    `Phone: ${inquiry.phone}`,
    inquiry.message && `\n${inquiry.message}`,
  ]
    .filter(Boolean)
    .join("\n")
    .slice(0, NOTE_LIMIT);
  await Promise.all([call("/tags", "POST", { tags }), call("/notes", "POST", { note })]);

  return true;
}

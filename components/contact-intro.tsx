import { CONTACT_INFO } from "@/lib/site-config";
import { MailIcon, PhoneIcon, PinIcon } from "./footer-icons";

const WAYS = [
  { label: "Email us", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, Icon: MailIcon, tone: "sky" },
  { label: "Call us", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`, Icon: PhoneIcon, tone: "violet" },
  { label: "Our office", value: CONTACT_INFO.location, Icon: PinIcon, tone: "teal" },
];

/**
 * The invitation beside the contact form: label, heading, a line of copy and the three ways to reach us. The
 * contact section and the contact dialog both show it, so they always say the same thing. In the dialog the
 * three ways stay in one row but turn `compact` (icon above text), since half a dialog is narrow.
 */
export function ContactIntro({ headingId, compact = false }: { headingId?: string; compact?: boolean }) {
  return (
    <div>
      <p className="eyebrow">Contact us</p>
      <span className="eyebrow-line mt-3 lg:mt-[0.5vw]" />
      <h2 id={headingId} className="contact-heading mt-6 lg:mt-[1.4vw]">
        Let’s build a solution{" "}
        <span className="block">
          for <span className="text-gradient">your business.</span>
        </span>
      </h2>
      <p className="contact-copy">
        Tell us about your goals, your challenges or an idea you’d like to explore. Our team will get back to you to discuss
        the right approach for your business.
      </p>

      <address className={compact ? "contact-ways contact-ways-compact" : "contact-ways"}>
        {WAYS.map(({ label, value, href, Icon, tone }) => {
          const body = (
            <>
              <span className="tone-icon contact-way-icon" data-tone={tone}>
                <Icon />
              </span>
              <span>
                <span className="contact-way-label">{label}</span>
                <span className="contact-way-value">{value}</span>
              </span>
            </>
          );
          return href ? (
            <a key={label} href={href} className="contact-way">
              {body}
            </a>
          ) : (
            <span key={label} className="contact-way">
              {body}
            </span>
          );
        })}
      </address>
    </div>
  );
}

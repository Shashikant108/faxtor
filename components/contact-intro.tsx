type IconProps = { className?: string };

function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8 14h2M12 14h2M8 17h2" />
    </svg>
  );
}

function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 4.5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H11l-4.5 3.5V17.5H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
      <path d="M8 10h8M8 13.5h5" />
    </svg>
  );
}

function BulbIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 17.5h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V17h5.2v-1.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

const PROMISES = [
  { title: "30-minute call", note: "No commitment", Icon: CalendarIcon, tone: "sky" },
  { title: "Understand", note: "your business", Icon: ChatIcon, tone: "violet" },
  { title: "Explore", note: "the right solution", Icon: BulbIcon, tone: "teal" },
];

/**
 * The invitation beside the contact form: label, heading, a line of copy and what the first conversation looks
 * like. The contact section and the contact dialog both show it, so they always say the same thing. (The ways to
 * reach us, email, phone and office, are in the footer.)
 */
export function ContactIntro({ headingId }: { headingId?: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 lg:gap-[0.8vw]">
        <p className="eyebrow">Let’s get started</p>
        <span aria-hidden="true" className="eyebrow-line" />
      </div>
      <h2 id={headingId} className="contact-heading mt-6 lg:mt-[1.4vw]">
        Have a business{" "}
        <span className="block">
          <span className="text-gradient">challenge in mind?</span>
        </span>
      </h2>
      <p className="contact-copy">
        Tell us what you want to improve, simplify or build. Let’s explore the right solution for your business.
      </p>

      <ul className="contact-promises">
        {PROMISES.map(({ title, note, Icon, tone }) => (
          <li key={title} className="contact-promise">
            <span className="tone-icon contact-promise-icon" data-tone={tone}>
              <Icon />
            </span>
            <span className="contact-promise-title">{title}</span>
            <span className="contact-promise-note">{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

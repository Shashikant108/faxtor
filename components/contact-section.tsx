import { ContactForm } from "./contact-form";
import { ContactIntro } from "./contact-intro";
import { Fold } from "./fold";
import { SERVICES } from "./services-section";

/** The glossy ribbon loop at the left edge of the section, drawn in code. */
function RibbonArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ribbon-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6f7dff" />
          <stop offset="1" stopColor="#a68bff" />
        </linearGradient>
        <linearGradient id="ribbon-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9e2ff" />
          <stop offset="0.45" stopColor="#b9a4ff" />
          <stop offset="1" stopColor="#7f8cff" />
        </linearGradient>
      </defs>
      <ellipse cx="96" cy="120" rx="74" ry="92" fill="none" stroke="url(#ribbon-back)" strokeWidth="30" opacity="0.55" transform="rotate(-18 96 120)" />
      <path d="M40 46C84 6 168 36 168 120S110 230 58 206" fill="none" stroke="url(#ribbon-front)" strokeWidth="30" strokeLinecap="round" />
      <path d="M48 50C88 18 158 44 160 118" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/**
 * Section 8, contact. On desktop the invitation and the ways to reach us sit left of the form; on tablet and
 * phones the form follows below. Every "Discuss your requirements" button on the page lands here (#contact).
 */
export function ContactSection() {
  return (
    <Fold tone="light" id="contact" className="section-clip isolate">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
        <RibbonArt className="contact-ribbon" />
        <div className="container-page py-14 sm:py-20 lg:py-[3.4vw]">
          <div className="contact-grid">
            <ContactIntro />

            <ContactForm needs={SERVICES.map((service) => service.title)} />
          </div>
        </div>
      </div>
    </Fold>
  );
}

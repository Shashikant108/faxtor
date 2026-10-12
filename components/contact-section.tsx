import { ContactForm } from "./contact-form";
import { ContactIntro } from "./contact-intro";
import { Fold } from "./fold";
import { SERVICES } from "./services-section";

/** Soft green leaves rising from the bottom left corner of the section, drawn in code. */
function LeavesArt({ className }: { className?: string }) {
  const leaf = (d: string, opacity = 1) => <path d={d} fill="url(#leaf-fill)" opacity={opacity} />;
  return (
    <svg viewBox="0 0 220 260" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="leaf-fill" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#86e0a8" />
          <stop offset="1" stopColor="#1f8a55" />
        </linearGradient>
      </defs>
      {leaf("M60 260C40 200 46 120 96 52c18 70 6 150-36 208Z", 0.75)}
      {leaf("M78 260c4-70 40-130 112-160-14 72-56 130-112 160Z", 0.9)}
      {leaf("M40 260C10 220-2 170 8 110c40 34 52 90 32 150Z", 0.55)}
      {leaf("M96 260c30-40 76-62 124-60-24 36-70 58-124 60Z", 0.7)}
      <path d="M66 258C70 190 82 120 96 56M82 258c22-58 58-110 106-154M42 258C30 210 18 160 10 112" fill="none" stroke="#ffffff" strokeWidth="1.4" opacity="0.35" />
    </svg>
  );
}

/**
 * Section 8, contact. On desktop the invitation sits left of the form; on tablet and phones the form follows
 * below. Every "Discuss your requirements" button on the page lands here (#contact).
 */
export function ContactSection() {
  return (
    <Fold tone="light" id="contact" className="section-clip isolate">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
        <LeavesArt className="contact-leaves" />
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

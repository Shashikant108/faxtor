import type { CSSProperties } from "react";
import Link from "next/link";
import { CONTACT_HREF, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/site-config";
import { InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon, YouTubeIcon } from "./footer-icons";

const SOCIAL_ICONS = { linkedin: LinkedInIcon, instagram: InstagramIcon, youtube: YouTubeIcon } as const;

// until each service has its own page, its link leads to that section of the home page
// TODO: point Careers at its page once it exists
const COLUMNS = [
  {
    title: "Solutions",
    accent: "#1b8cff",
    links: [
      "ERP Software",
      "CRM Software",
      "Custom Web Applications",
      "Business Automation",
      "Website Development",
      "Mobile App Development",
      "SaaS Development",
      "Licensing & White-Label Solutions",
    ].map((label) => ({ label, href: "/#services" })),
  },
  {
    title: "Company",
    accent: "#e366d6",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/#how-we-work" },
      { label: "Industries", href: "/#industries" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: CONTACT_HREF },
    ],
  },
];

const CONTACTS = [
  { label: CONTACT_INFO.email, Icon: MailIcon, href: `mailto:${CONTACT_INFO.email}` },
  { label: CONTACT_INFO.phone, Icon: PhoneIcon, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}` },
  { label: CONTACT_INFO.location, Icon: PinIcon },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

/**
 * The footer: the brand, then Solutions, Company and Contact, each set off by a thin line on desktop; below
 * them the copyright and the legal pages. The dark background is drawn with gradients, so the only image is the
 * Faxtor mark. On phones Solutions and Company sit side by side with Contact below them; on tablet the three sit
 * side by side under the brand.
 */
export function SiteFooter() {
  return (
    <footer className="footer relative z-10 isolate overflow-hidden text-white">
      <div className="container-page pb-6 pt-10 sm:pb-8 sm:pt-16 lg:pb-[1.4vw] lg:pt-[3.4vw]">
        <div className="footer-grid">
          {/* brand */}
          <div className="footer-brand">
            <Link href="/" aria-label="Faxtor home" className="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark.svg" alt="" width={200} height={200} className="h-[1.15em] w-auto" />
              Faxtor
            </Link>
            <p className="footer-tagline mt-2 pl-[calc(var(--fs-footer-logo)*1.36)] lg:mt-[0.4vw]">From chaos to clarity</p>
            <p className="footer-copy mt-5 max-w-[420px] lg:mt-[1.6vw] lg:max-w-none">
              We build custom software that helps businesses streamline operations, connect systems and grow with confidence.
            </p>
            <ul className="mt-5 flex gap-3 sm:gap-4 lg:mt-[1.6vw] lg:gap-[1.1vw]">
              {SOCIAL_LINKS.map(({ label, href, network }) => {
                const Icon = SOCIAL_ICONS[network];
                return (
                  <li key={network}>
                    <a href={href} aria-label={label} className="footer-social">
                      <Icon className="h-[42%] w-[42%]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* link columns */}
          <nav aria-label="Footer" className="footer-links">
            {COLUMNS.map((column) => (
              <div key={column.title} className="footer-column">
                <h2 className="footer-heading">{column.title}</h2>
                <span className="footer-heading-line" style={{ "--accent": column.accent } as CSSProperties} />
                <ul className="mt-3 grid gap-2 sm:mt-4 sm:gap-2.5 lg:mt-[1.1vw] lg:gap-[0.55vw]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* contact stays open on every screen */}
            <div className="footer-contact-column">
              {/* on phones the heading is left to screen readers: the icons already say what these are */}
              <h2 className="footer-heading max-sm:sr-only">Contact</h2>
              <span className="footer-heading-line max-sm:hidden" style={{ "--accent": "#2dd4bf" } as CSSProperties} />
              <address className="footer-contact-list">
                {CONTACTS.map(({ label, Icon, href }) => {
                  const content = (
                    <>
                      <Icon className="footer-contact-icon" />
                      {label}
                    </>
                  );
                  return href ? (
                    <a key={label} href={href} className="footer-contact-line hover:text-white">
                      {content}
                    </a>
                  ) : (
                    <span key={label} className="footer-contact-line">
                      {content}
                    </span>
                  );
                })}
              </address>
            </div>
          </nav>
        </div>

        {/* copyright and the legal pages */}
        <div className="footer-bottom">
          <p className="footer-legal">© {new Date().getFullYear()} Faxtor Learning Pvt.&nbsp;Ltd. All rights reserved.</p>
          {/* on phones the two links sit at either edge of the row; from tablet they sit together, split by a line */}
          <ul className="flex items-center max-sm:w-full max-sm:justify-between">
            {LEGAL.map((link, index) => (
              <li key={link.href} className={index > 0 ? "sm:border-l sm:border-white/20 sm:pl-3 lg:pl-[0.9vw]" : "sm:pr-3 lg:pr-[0.9vw]"}>
                <Link href={link.href} className="footer-legal-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

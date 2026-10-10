import type { CSSProperties } from "react";
import Link from "next/link";
import { CONTACT_HREF, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/site-config";
import { AwsMark, InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon, YouTubeIcon } from "./footer-icons";

const SOCIAL_ICONS = { linkedin: LinkedInIcon, instagram: InstagramIcon, youtube: YouTubeIcon } as const;

// TODO: point each "#" at its page once those pages exist
const COLUMNS = [
  {
    title: "Our Solutions",
    accent: "#1b8cff",
    links: [
      "Website Development",
      "Custom Web Applications",
      "ERP Software",
      "CRM Software",
      "Business Automation",
      "WhatsApp Automation",
      "Mobile App Development",
      "White-Label Mobile Apps",
      "SaaS Development",
      "Source Code Licensing",
    ].map((label) => ({ label, href: "#" })),
  },
  {
    title: "Industries",
    accent: "#8b5cf6",
    links: [
      "Education & Training",
      "Manufacturing & Production",
      "Retail & E-commerce",
      "Import Export & Trading",
      "Construction & Project Management",
      "Real Estate & Property",
      "Financial Services & Lending",
      "Travel & Hospitality",
      "Telecom & Field Services",
      "Garment Manufacturers",
      "SMEs & Businesses",
    ].map((label) => ({ label, href: "#" })),
  },
  {
    title: "Company",
    accent: "#e366d6",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Work", href: "#our-work" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: CONTACT_HREF },
    ],
  },
  {
    title: "Legal",
    accent: "#2dd4bf",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
];

const CONTACTS = [
  { label: CONTACT_INFO.location, Icon: PinIcon },
  { label: CONTACT_INFO.email, Icon: MailIcon, href: `mailto:${CONTACT_INFO.email}` },
  { label: CONTACT_INFO.phone, Icon: PhoneIcon, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}` },
];

/**
 * The footer: brand, link columns, then a bar with contact details, hosting and copyright. The dark
 * background is drawn with gradients, so the only image is the Faxtor mark. On phones the link columns
 * sit two by two, on tablet in three (Company above Legal), and from desktop next to the brand as in the design.
 */
export function SiteFooter() {
  return (
    <footer className="footer relative z-10 isolate overflow-hidden text-white">
      <div className="container-page pb-6 pt-10 sm:pb-8 sm:pt-16 lg:pb-[2.2vw] lg:pt-[3.6vw]">
        <div className="grid gap-9 sm:gap-12 lg:grid-cols-[minmax(0,21%)_1px_minmax(0,1fr)] lg:gap-[3.2vw]">
          {/* brand */}
          <div className="sm:grid sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start sm:gap-x-12 lg:block">
            <div>
              <Link href="/" aria-label="Faxtor home" className="footer-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-mark.svg" alt="" width={200} height={200} className="h-[1.15em] w-auto" />
                Faxtor
              </Link>
              <p className="footer-tagline mt-2 pl-[calc(var(--fs-footer-logo)*1.36)] lg:mt-[0.4vw]">From chaos to clarity</p>
            </div>

            <div>
              <p className="footer-copy mt-5 max-w-[420px] sm:mt-0 lg:mt-[2.6vw] lg:max-w-none">
                We build custom software platforms for growing businesses — helping you streamline operations, improve
                efficiency and scale with confidence.
              </p>
              <ul className="mt-5 flex gap-3 sm:mt-6 sm:gap-4 lg:mt-[1.8vw] lg:gap-[1.1vw]">
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
          </div>

          <span aria-hidden="true" className="hidden bg-white/15 lg:block" />

          {/* link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:grid-cols-[1fr_1.3fr_0.9fr] md:grid-rows-[auto_1fr] lg:grid-rows-none lg:grid-cols-[1fr_1.3fr_0.85fr_0.75fr] lg:gap-[2vw]">
            {COLUMNS.map((column, index) => (
              // on tablet Company and Legal share the third column, so the two long lists span both rows
              <div key={column.title} className={index < 2 ? "md:row-span-2 lg:row-span-1" : undefined}>
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
          </nav>
        </div>

        {/* contact, hosting and copyright */}
        <div className="mt-9 flex flex-col gap-6 border-t border-white/15 pt-6 sm:mt-12 sm:gap-8 sm:pt-8 lg:mt-[2.4vw] lg:flex-row lg:items-center lg:justify-between lg:gap-[2vw] lg:pt-[1.5vw]">
          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-0">
            {CONTACTS.map(({ label, Icon, href }) => {
              const content = (
                <>
                  <Icon className="h-[18px] w-[18px] shrink-0 sm:h-5 sm:w-5 lg:h-[1.3vw] lg:w-[1.3vw] lg:min-h-4 lg:min-w-4" />
                  {label}
                </>
              );
              return (
                <li key={label} className="footer-contact">
                  {href ? (
                    <a href={href} className="flex items-center gap-3 transition-colors hover:text-[#7cc4ff] lg:gap-[0.8vw]">
                      {content}
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 lg:gap-[0.8vw]">{content}</span>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 lg:gap-x-0">
            <div className="flex items-center gap-2 lg:gap-[0.5vw] lg:pr-[1.4vw]">
              <AwsMark className="h-7 w-auto sm:h-8 text-white lg:h-[2.2vw] lg:min-h-7" />
              <span className="footer-note">Securely hosted on AWS</span>
            </div>
            <p className="footer-legal lg:border-l lg:border-white/15 lg:pl-[1.4vw]">
              © {new Date().getFullYear()} Faxtor Learning Pvt. Ltd.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

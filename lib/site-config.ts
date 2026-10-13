// content shared by more than one component: change it here once

// TODO: confirm the live domain; every link Google sees (canonical, sitemap, share previews) is built from it
export const SITE_URL = "https://faxtor.in";
export const SITE_NAME = "Faxtor";
export const SITE_TAGLINE = "From chaos to clarity";
export const SITE_TITLE = "Faxtor | Custom Software, ERP & CRM Development in Bangalore";
export const SITE_DESCRIPTION =
  "Faxtor builds custom software, ERP, CRM, web and mobile apps for growing businesses, bringing sales, orders, operations and payments into one system.";
export const SITE_KEYWORDS = [
  "custom software development",
  "ERP software",
  "CRM software",
  "business automation",
  "WhatsApp automation",
  "web application development",
  "mobile app development",
  "SaaS development",
  "software company in Bangalore",
  "software for SMEs",
];

// section links start with "/" so they also work from other pages (they lead back to that part of the home page)
export const CONTACT_HREF = "/#contact";

export const NAV_LINKS = [
  { label: "Solutions", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Our Work", href: "/#how-we-work" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const CONTACT_INFO = {
  location: "Bangalore, India",
  email: "hello@faxtor.in",
  phone: "+91 88618 30244",
} as const;

// TODO: replace "#" with the real profile links
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", network: "linkedin" },
  { label: "Instagram", href: "#", network: "instagram" },
  { label: "YouTube", href: "#", network: "youtube" },
] as const;

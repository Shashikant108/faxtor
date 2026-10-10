// content shared by more than one component: change it here once

export const CONTACT_HREF = "#contact";

export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Our Work", href: "#our-work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const CONTACT_INFO = {
  location: "Bangalore, India",
  email: "hello@faxtor.in",
  phone: "+91 80 4719 1959",
} as const;

// TODO: replace "#" with the real profile links
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", network: "linkedin" },
  { label: "Instagram", href: "#", network: "instagram" },
  { label: "YouTube", href: "#", network: "youtube" },
] as const;

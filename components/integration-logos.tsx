// The logos of the "Software Integrations" row, drawn in code in each brand's colours. They are pictures only
// (aria-hidden): the name under each one is real text. Each sets its own width from its height.

import type { ReactNode } from "react";

type LogoProps = { className?: string };

const svg = (viewBox: string, className: string | undefined, children: ReactNode) => (
  <svg viewBox={viewBox} className={className} aria-hidden="true" fontFamily="var(--font-jakarta), system-ui, sans-serif">
    {children}
  </svg>
);

export const StripeLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 72 32",
    className,
    <text x="36" y="23" textAnchor="middle" fontSize="23" fontWeight="800" letterSpacing="-1" fill="#635bff">
      stripe
    </text>,
  );

export const AwsLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 60 36",
    className,
    <>
      <text x="30" y="19" textAnchor="middle" fontSize="20" fontWeight="600" fill="#232f3e">
        aws
      </text>
      <path d="M10 25c11 6 28 6 38 0" fill="none" stroke="#ff9900" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M44 22.5l5.5 2-3 4.6" fill="none" stroke="#ff9900" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </>,
  );

export const WhatsAppLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 40 40",
    className,
    <>
      <path d="M20 3a17 17 0 0 0-14.6 25.7L3 37l8.5-2.3A17 17 0 1 0 20 3Z" fill="#25d366" />
      <path
        d="M14.6 11.6c-.4-.9-.8-.9-1.2-.9h-1c-.4 0-.9.1-1.4.7-.5.5-1.8 1.8-1.8 4.3s1.9 5 2.1 5.3c.3.4 3.6 5.8 8.9 7.9 4.4 1.7 5.3 1.4 6.3 1.3.9-.1 3-1.2 3.4-2.4.4-1.2.4-2.2.3-2.4-.1-.2-.5-.3-1-.6l-3.5-1.7c-.5-.2-.8-.3-1.2.2-.3.5-1.3 1.7-1.6 2-.3.4-.6.4-1.1.1a13 13 0 0 1-6.4-5.6c-.5-.8.5-.8 1.4-2.6.2-.3.1-.6 0-.9l-1.6-3.9Z"
        fill="#fff"
      />
    </>,
  );

export const ZoomLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 40 40",
    className,
    <>
      <circle cx="20" cy="20" r="18" fill="#2d8cff" />
      <rect x="9.5" y="14" width="15" height="12" rx="3" fill="#fff" />
      <path d="M26 18.2l5.2-3.4v10.4L26 21.8Z" fill="#fff" />
    </>,
  );

export const PayPalLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 34 40",
    className,
    <>
      <path d="M11 2h11c6 0 9.5 3 8.6 8.6C29.5 17 25 20 19 20h-4.3L12.5 34H5Z" fill="#003087" />
      <path d="M15.4 8h9.4c4.5 0 7.6 2.4 6.8 7.2C30.7 21 26.6 24 21.4 24h-3.6L15.8 37H9.4Z" fill="#009cde" opacity="0.92" />
    </>,
  );

export const DropboxLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 44 40",
    className,
    <g fill="#0061ff">
      <path d="M12 3 2 9.5l10 6.5 10-6.5Z" />
      <path d="M32 3 22 9.5l10 6.5 10-6.5Z" />
      <path d="M2 22.5 12 29l10-6.5L12 16Z" />
      <path d="M32 16l-10 6.5L32 29l10-6.5Z" />
      <path d="M12 31.2 22 37.5l10-6.3-10-6.4Z" />
    </g>,
  );

export const BigBlueButtonLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 40 40",
    className,
    <>
      <circle cx="20" cy="20" r="18" fill="#283274" />
      <path d="M15 10v13a5.5 5.5 0 1 0 5.5-5.5H17" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
    </>,
  );

export const CcAvenueLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 76 28",
    className,
    <text x="38" y="19" textAnchor="middle" fontSize="13.5" fontWeight="700" letterSpacing="-0.3">
      <tspan fill="#0f75bc">CC</tspan>
      <tspan fill="#1f2937">Avenue</tspan>
    </text>,
  );

export const VimeoLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 40 40",
    className,
    <>
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#1ab7ea" />
      <path d="M31 14.4c-.1 2.4-1.8 5.7-5 9.9-3.3 4.4-6.1 6.5-8.4 6.5-1.4 0-2.6-1.3-3.6-3.9l-2-7.2c-.7-2.6-1.5-3.9-2.4-3.9l-1.9 1.2-1.1-1.5 3.6-3.2c1.6-1.4 2.8-2.1 3.6-2.2 1.9-.2 3.1 1.1 3.5 3.9.5 3 .8 4.9 1 5.6.6 2.5 1.2 3.8 1.9 3.8.5 0 1.3-.8 2.4-2.5 1-1.7 1.6-3 1.7-3.9.2-1.5-.4-2.2-1.7-2.2-.6 0-1.3.1-1.9.4 1.3-4.2 3.7-6.2 7.2-6.1 2.6.1 3.9 1.8 3.7 5.1Z" fill="#fff" />
    </>,
  );

export const SmsLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 44 36",
    className,
    <>
      <rect x="3" y="5" width="38" height="26" rx="4" fill="#fff4f2" stroke="#f2685b" strokeWidth="2.4" />
      <path d="M4.5 7.5 22 20l17.5-12.5" fill="none" stroke="#f2685b" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M4.5 29 17 16.5M39.5 29 27 16.5" fill="none" stroke="#f7a07a" strokeWidth="2" strokeLinecap="round" />
    </>,
  );

export const RazorpayLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 48 40",
    className,
    <>
      <rect x="1" y="1" width="46" height="38" rx="7" fill="#0c1a47" />
      <path d="M10.5 26.5 14 13h5.5l-1 3.5" fill="none" stroke="#3395ff" strokeWidth="2.6" strokeLinejoin="round" />
      <text x="28" y="23.5" textAnchor="middle" fontSize="8" fontWeight="800" fontStyle="italic" fill="#fff">
        Razorpay
      </text>
    </>,
  );

export const EmailLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 44 36",
    className,
    <>
      <rect x="3" y="5" width="38" height="26" rx="4" fill="#eaf2ff" stroke="#2b7de9" strokeWidth="2.4" />
      <path d="M4.5 7.5 22 20l17.5-12.5" fill="none" stroke="#2b7de9" strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="22" cy="19.5" r="4.6" fill="none" stroke="#2b7de9" strokeWidth="2" />
    </>,
  );

export const GoogleLogo = ({ className }: LogoProps) =>
  svg(
    "0 0 48 48",
    className,
    <>
      <path fill="#ea4335" d="M24 9.5c3.5 0 6.7 1.2 9.2 3.6l6.9-6.9C35.9 2.4 30.5 0 24 0 14.6 0 6.5 5.4 2.6 13.2l8 6.2C12.4 13.7 17.7 9.5 24 9.5Z" />
      <path fill="#4285f4" d="M47 24.6c0-1.6-.2-3.1-.4-4.6H24v9h12.9c-.6 3-2.3 5.5-4.8 7.2l7.7 6c4.5-4.2 7.2-10.4 7.2-17.6Z" />
      <path fill="#fbbc05" d="M10.5 28.6c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6l-8-6.2A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.2Z" />
      <path fill="#34a853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.7-6c-2.2 1.5-4.9 2.3-8.2 2.3-6.3 0-11.6-4.2-13.5-9.9l-8 6.2C6.5 42.6 14.6 48 24 48Z" />
    </>,
  );

// The four small philosophy icons of the About Us page (app/about/page.tsx), drawn in code like the rest of the
// site so they stay sharp at any size.
import type { ReactNode } from "react";

type IconProps = { className?: string };

// the four philosophy icons: line icons that take the colour of their round badge (currentColor)
const line = (children: ReactNode) =>
  function LineIcon({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        {children}
      </svg>
    );
  };

export const UnderstandIcon = line(
  <>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m20 20-4.8-4.8" />
    <path d="M8 10.5h5M10.5 8v5" />
  </>,
);

export const BuildRightIcon = line(
  <>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
    <path d="M17 14v6M14 17h6" />
  </>,
);

export const PartnerIcon = line(
  <>
    <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
    <path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2l-3.9-3.9a2.8 2.8 0 0 0-4 0l-.9.9a1.4 1.4 0 0 1-2-2l2.8-2.8a4 4 0 0 1 4.8-.6l.5.3a3 3 0 0 0 2 .3L21 6" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1.4 1.4 0 0 0 2-2" />
    <path d="M3 4h8" />
  </>,
);

export const SimpleIcon = line(
  <>
    <path d="M12 3.5 13.9 9l5.6 1-4.1 3.9 1 5.6-4.4-2.6-4.4 2.6 1-5.6L4.5 10l5.6-1Z" />
  </>,
);

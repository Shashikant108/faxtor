// The Industries icons: a small line icon for each card (it takes its colour from the tinted square around it,
// currentColor), and the illustration on the "your industry isn't listed" card, drawn in code in the same glossy
// style as the other sections.
import type { ReactNode } from "react";
import { Ground, Paints } from "./service-icons";

type IconProps = { className?: string };

const line = (children: ReactNode) =>
  function LineIcon({ className }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        {children}
      </svg>
    );
  };

export const EducationIcon = line(
  <>
    <path d="M2.5 9 12 4.5 21.5 9 12 13.5Z" />
    <path d="M6.5 11v4.5c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3V11" />
    <path d="M21.5 9v5" />
  </>,
);

export const ManufacturingIcon = line(
  <>
    <path d="M3 20.5V10l5 3V10l5 3V10l5 3V4h3v16.5Z" />
    <path d="M7 17h2M11.5 17h2M16 17h2" />
  </>,
);

export const RetailIcon = line(
  <>
    <path d="M3 4h2.5l2.2 10.5h10.6L20.5 7H7" />
    <circle cx="9.5" cy="19" r="1.4" />
    <circle cx="16.5" cy="19" r="1.4" />
  </>,
);

export const TradeIcon = line(
  <>
    <path d="M3.5 14h17l-2.2 4.5a2 2 0 0 1-1.8 1.1H7.5a2 2 0 0 1-1.8-1.1Z" />
    <path d="M6.5 14v-3.5h11V14M9 10.5V7.5h6v3M12 7.5V4.5" />
    <path d="M2.5 21.5c1.5 0 1.5-.8 3-.8s1.5.8 3 .8 1.5-.8 3-.8 1.5.8 3 .8 1.5-.8 3-.8 1.5.8 3 .8" />
  </>,
);

export const ConstructionIcon = line(
  <>
    <path d="M4 21V5.5h2.5V21M4 21h6" />
    <path d="M6.5 6 19 5v2.5H6.5" />
    <path d="M17 7.5v4.5M15.5 12h3l-.5 2.5h-2Z" />
    <path d="M9.5 6l-3 3M12 6 9 9" />
  </>,
);

export const RealEstateIcon = line(
  <>
    <path d="M3.5 21h17M5.5 21V4.5h8V21M13.5 9.5h5V21" />
    <path d="M8 8h3M8 11.5h3M8 15h3M16 13h.5M16 16.5h.5" />
  </>,
);

export const FinanceIcon = line(
  <>
    <path d="M9 3.5h6M9 6.5h6M10.5 3.5c2 0 3 .9 3 2.4s-1 2.4-3 2.4H9l4.5 4" />
    <path d="M2.5 16.5h3.5l3 1.5h4a1.5 1.5 0 0 1 0 3H8" />
    <path d="M13.5 19.5 19 16a1.6 1.6 0 0 1 2 2.4l-5 4h-9l-3-1.5" />
  </>,
);

export const TelecomIcon = line(
  <>
    <circle cx="12" cy="9" r="1.6" />
    <path d="M12 10.6 8.5 21M12 10.6 15.5 21M9.7 17.5h4.6" />
    <path d="M8.2 5.5a5.2 5.2 0 0 0 0 7M15.8 5.5a5.2 5.2 0 0 1 0 7M5.6 3a8.8 8.8 0 0 0 0 12M18.4 3a8.8 8.8 0 0 1 0 12" />
  </>,
);

export const PlatformIcon = line(
  <>
    <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15" />
  </>,
);

export const MembershipIcon = line(
  <>
    <circle cx="12" cy="7.5" r="3" />
    <circle cx="5.5" cy="10" r="2.2" />
    <circle cx="18.5" cy="10" r="2.2" />
    <path d="M6.5 20.5v-1a5.5 5.5 0 0 1 11 0v1M2 19.5v-.5a3.5 3.5 0 0 1 4.5-3.3M22 19.5v-.5a3.5 3.5 0 0 0-4.5-3.3" />
  </>,
);

/** The "your industry isn't listed" picture: an app window being shaped by a gear, a paper plane flying off. */
export function CustomBuildArt({ className }: IconProps) {
  const p = "ind-custom";
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={66} rx={48} />
      <path d="M30 30c20-18 52-24 78-18" fill="none" stroke="#9fb3ec" strokeWidth="1.4" strokeDasharray="3 4" strokeLinecap="round" />
      <path d="m112 6 18 4-12 14-2-7Z" fill={`url(#${p}-blue)`} />
      <path d="m116 17 14-7" stroke="#eef3ff" strokeWidth="1.2" />
      <g filter={`url(#${p}-lift)`}>
        <rect x="26" y="24" width="74" height="56" rx="7" fill={`url(#${p}-panel)`} />
        <path d="M33 24h60a7 7 0 0 1 7 7v4H26v-4a7 7 0 0 1 7-7Z" fill={`url(#${p}-blue)`} />
      </g>
      <circle cx="33" cy="29.5" r="1.6" fill="#fff" />
      <circle cx="38.5" cy="29.5" r="1.6" fill="#fff" />
      <circle cx="44" cy="29.5" r="1.6" fill="#fff" />
      <rect x="34" y="42" width="40" height="5" rx="2.5" fill={`url(#${p}-mix)`} />
      <rect x="34" y="52" width="52" height="4" rx="2" fill="#c9d7ff" />
      <rect x="34" y="60" width="44" height="4" rx="2" fill="#c9d7ff" />
      <rect x="34" y="68" width="30" height="4" rx="2" fill="#dbe4ff" />
      <g filter={`url(#${p}-lift)`}>
        <g fill={`url(#${p}-purple)`}>
          {teeth.map((angle) => (
            <rect key={angle} x="100" y="58" width="9" height="10" rx="2" transform={`rotate(${angle} 104.5 76)`} />
          ))}
          <circle cx="104.5" cy="76" r="14" />
        </g>
      </g>
      <circle cx="104.5" cy="76" r="5.5" fill="#eef3ff" />
    </svg>
  );
}

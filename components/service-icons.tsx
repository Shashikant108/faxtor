// The glossy illustrations on the "What we build" cards, drawn in code (no images). Each one sits in a
// 120 x 100 box with a soft shadow under it; colours follow the design: light panels, brand blue and purple.

type ArtProps = { className?: string };

/** The gradients every illustration uses, under ids that start with `p` so two drawings never clash. */
export function Paints({ p }: { p: string }) {
  return (
    <defs>
      <linearGradient id={`${p}-panel`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#e3ebff" />
      </linearGradient>
      <linearGradient id={`${p}-back`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#dfe8ff" />
        <stop offset="1" stopColor="#b9cbff" />
      </linearGradient>
      <linearGradient id={`${p}-blue`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8fb8ff" />
        <stop offset="1" stopColor="#3f6df5" />
      </linearGradient>
      <linearGradient id={`${p}-purple`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#c2a6ff" />
        <stop offset="1" stopColor="#7440ee" />
      </linearGradient>
      <linearGradient id={`${p}-mix`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7fb2ff" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
      <filter id={`${p}-lift`} x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#3d55c8" floodOpacity="0.22" />
      </filter>
    </defs>
  );
}

/** The soft shadow an illustration stands on. */
export const Ground = ({ cx = 60, rx = 38 }: { cx?: number; rx?: number }) => (
  <ellipse cx={cx} cy="92" rx={rx} ry="4.5" fill="#4b63d6" opacity="0.16" />
);

export function WebsiteArt({ className }: ArtProps) {
  const p = "art-web";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground />
      <rect x="28" y="12" width="76" height="56" rx="8" fill={`url(#${p}-back)`} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="16" y="22" width="80" height="60" rx="8" fill={`url(#${p}-panel)`} />
        <path d="M24 22h64a8 8 0 0 1 8 8v4H16v-4a8 8 0 0 1 8-8Z" fill={`url(#${p}-mix)`} />
      </g>
      <circle cx="24" cy="28" r="1.8" fill="#fff" />
      <circle cx="30" cy="28" r="1.8" fill="#fff" />
      <circle cx="36" cy="28" r="1.8" fill="#fff" />
      <rect x="23" y="40" width="34" height="34" rx="4" fill="#dce6ff" />
      <circle cx="47" cy="48" r="4" fill="#a98bff" />
      <path d="M23 70l11-13 8 8 6-5 9 10v0a4 4 0 0 1-4 4H27a4 4 0 0 1-4-4Z" fill={`url(#${p}-blue)`} />
      <rect x="62" y="42" width="26" height="4" rx="2" fill="#8fb0ff" />
      <rect x="62" y="51" width="22" height="3.5" rx="1.75" fill="#c9d7ff" />
      <rect x="62" y="59" width="25" height="3.5" rx="1.75" fill="#c9d7ff" />
      <rect x="62" y="67" width="16" height="3.5" rx="1.75" fill="#c9d7ff" />
    </svg>
  );
}

export function WebAppArt({ className }: ArtProps) {
  const p = "art-app";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground />
      <g filter={`url(#${p}-lift)`}>
        <rect x="40" y="10" width="64" height="48" rx="7" fill={`url(#${p}-back)`} />
        <path d="M47 10h50a7 7 0 0 1 7 7v3H40v-3a7 7 0 0 1 7-7Z" fill={`url(#${p}-purple)`} />
      </g>
      <g filter={`url(#${p}-lift)`}>
        <rect x="18" y="28" width="68" height="54" rx="7" fill={`url(#${p}-panel)`} />
        <path d="M25 28h54a7 7 0 0 1 7 7v4H18v-4a7 7 0 0 1 7-7Z" fill={`url(#${p}-blue)`} />
      </g>
      <circle cx="25" cy="33.5" r="1.6" fill="#fff" />
      <circle cx="30.5" cy="33.5" r="1.6" fill="#fff" />
      <circle cx="36" cy="33.5" r="1.6" fill="#fff" />
      <rect x="25" y="45" width="16" height="30" rx="3" fill="#dfe8ff" />
      <rect x="28" y="49" width="10" height="3" rx="1.5" fill="#9cb7ff" />
      <rect x="28" y="55" width="10" height="3" rx="1.5" fill="#c9d7ff" />
      <rect x="28" y="61" width="10" height="3" rx="1.5" fill="#c9d7ff" />
      <rect x="46" y="45" width="33" height="13" rx="3" fill={`url(#${p}-mix)`} opacity="0.85" />
      <rect x="46" y="62" width="15" height="13" rx="3" fill="#cdbaff" />
      <rect x="64" y="62" width="15" height="13" rx="3" fill="#b9cdff" />
    </svg>
  );
}

export function ErpArt({ className }: ArtProps) {
  const p = "art-erp";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground />
      <g filter={`url(#${p}-lift)`}>
        <rect x="12" y="24" width="96" height="58" rx="10" fill={`url(#${p}-panel)`} />
      </g>
      <rect x="22" y="56" width="10" height="18" rx="2.5" fill={`url(#${p}-blue)`} />
      <rect x="36" y="44" width="10" height="30" rx="2.5" fill={`url(#${p}-blue)`} />
      <rect x="50" y="34" width="10" height="40" rx="2.5" fill={`url(#${p}-mix)`} />
      <circle cx="84" cy="53" r="15" fill="none" stroke="#dbe5ff" strokeWidth="8" />
      <circle cx="84" cy="53" r="15" fill="none" stroke={`url(#${p}-purple)`} strokeWidth="8" strokeDasharray="62 94" transform="rotate(-90 84 53)" strokeLinecap="round" />
      <circle cx="84" cy="53" r="15" fill="none" stroke="#5f8cff" strokeWidth="8" strokeDasharray="20 94" strokeDashoffset="-66" transform="rotate(-90 84 53)" strokeLinecap="round" />
    </svg>
  );
}

export function CrmArt({ className }: ArtProps) {
  const p = "art-crm";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground />
      <rect x="26" y="16" width="80" height="54" rx="9" fill={`url(#${p}-back)`} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="14" y="24" width="84" height="58" rx="9" fill={`url(#${p}-panel)`} />
      </g>
      <circle cx="38" cy="50" r="15" fill={`url(#${p}-purple)`} />
      <circle cx="38" cy="45.5" r="5.5" fill="#fff" />
      <path d="M28 59.5a10 10 0 0 1 20 0 15 15 0 0 1-20 0Z" fill="#fff" />
      <rect x="60" y="38" width="28" height="5" rx="2.5" fill={`url(#${p}-blue)`} />
      <rect x="60" y="48" width="24" height="4" rx="2" fill="#c3d3ff" />
      <rect x="60" y="57" width="27" height="4" rx="2" fill="#c3d3ff" />
      <rect x="60" y="66" width="18" height="4" rx="2" fill="#c3d3ff" />
    </svg>
  );
}

export function AutomationArt({ className }: ArtProps) {
  const p = "art-auto";
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground />
      {/* the turning arrows around the gear */}
      <path d="M30 40a32 32 0 0 1 52-17" fill="none" stroke={`url(#${p}-blue)`} strokeWidth="5" strokeLinecap="round" />
      <path d="m80 15 4 9-10 1" fill="none" stroke="#4f7cf7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M90 58a32 32 0 0 1-52 17" fill="none" stroke={`url(#${p}-purple)`} strokeWidth="5" strokeLinecap="round" />
      <path d="m40 83-4-9 10-1" fill="none" stroke="#8250f0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <g filter={`url(#${p}-lift)`}>
        <g fill={`url(#${p}-mix)`}>
          {teeth.map((angle) => (
            <rect key={angle} x="55" y="25" width="10" height="12" rx="2.5" transform={`rotate(${angle} 60 49)`} />
          ))}
          <circle cx="60" cy="49" r="19" />
        </g>
      </g>
      <circle cx="60" cy="49" r="8" fill="#eef3ff" />
      <circle cx="60" cy="49" r="3.5" fill="#7d5cf3" />
    </svg>
  );
}

export function WhatsAppArt({ className }: ArtProps) {
  const p = "art-wa";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${p}-green`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5af08f" />
          <stop offset="1" stopColor="#14a765" />
        </linearGradient>
        <filter id={`${p}-lift`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#119a5a" floodOpacity="0.3" />
        </filter>
      </defs>
      <Ground />
      <g filter={`url(#${p}-lift)`}>
        <path d="M60 14a33 33 0 0 0-28.6 49.5L27 81l18-4.4A33 33 0 1 0 60 14Z" fill={`url(#${p}-green)`} />
      </g>
      <path d="M60 18a29 29 0 0 0-25 43.7" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M49.5 36.5c-1.3 0-3 .5-4 2.3-1.3 2.3-1 6.2 2.6 11.2 3.8 5.3 9.4 9.4 14.6 10.6 4.3 1 6.9-.4 7.9-2.3.6-1.2.7-2.6.3-3.1-.4-.6-4.8-2.8-5.8-3-.9-.2-1.6.6-2.5 1.8-.6.9-1.5 1-2.4.5a18 18 0 0 1-8.3-7.4c-.5-.9-.3-1.6.4-2.2 1-.9 2-1.8 1.8-2.8-.2-1-2-5.3-2.6-5.5-.5-.1-1.1-.1-2-.1Z"
        fill="#fff"
      />
    </svg>
  );
}

export function SaasArt({ className }: ArtProps) {
  const p = "art-saas";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground />
      <g filter={`url(#${p}-lift)`}>
        <path d="M38 50a14 14 0 0 1 2-27.8A19 19 0 0 1 76 18a14 14 0 0 1 9 27 9 9 0 0 1-6 5Z" fill={`url(#${p}-blue)`} />
      </g>
      <path d="M44 25a15 15 0 0 1 28-4" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
      {[46, 60, 74].map((y, i) => (
        <g key={y} filter={`url(#${p}-lift)`}>
          <rect x="40" y={y} width="48" height="12" rx="3.5" fill={i === 1 ? `url(#${p}-mix)` : `url(#${p}-purple)`} />
          <circle cx="47" cy={y + 6} r="1.8" fill="#7dffb0" />
          <rect x="53" y={y + 4.5} width="26" height="3" rx="1.5" fill="#fff" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}

export function MobileAppArt({ className }: ArtProps) {
  const p = "art-mob";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground />
      <g filter={`url(#${p}-lift)`}>
        <rect x="34" y="8" width="40" height="78" rx="9" fill={`url(#${p}-blue)`} />
        <rect x="38" y="14" width="32" height="66" rx="6" fill="#eef3ff" />
      </g>
      <rect x="49" y="10.5" width="10" height="2" rx="1" fill="#dfe8ff" />
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={42 + col * 13}
            y={20 + row * 15}
            width="11"
            height="11"
            rx="3"
            fill={(row + col) % 2 ? `url(#${p}-purple)` : `url(#${p}-mix)`}
          />
        )),
      )}
      <rect x="42" y="66" width="24" height="9" rx="3" fill="#c9d7ff" />
      <g filter={`url(#${p}-lift)`}>
        <rect x="70" y="40" width="34" height="24" rx="6" fill={`url(#${p}-panel)`} />
      </g>
      <rect x="76" y="46" width="16" height="3.5" rx="1.75" fill="#8fb0ff" />
      <rect x="76" y="53" width="22" height="3" rx="1.5" fill="#cbd8ff" />
    </svg>
  );
}

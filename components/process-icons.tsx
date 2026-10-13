// The four "How we work" illustrations, drawn in code like the "What we build" ones (same 120 x 100 box,
// same paints), plus the small round icons of "A partner throughout".
import { Ground, Paints } from "./service-icons";

type ArtProps = { className?: string };

/** 01: two chat bubbles, yours and ours. */
export function TalkArt({ className }: ArtProps) {
  const p = "art-talk";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={58} rx={44} />
      <g filter={`url(#${p}-lift)`}>
        <path d="M56 40h40a10 10 0 0 1 10 10v16a10 10 0 0 1-10 10h-4l2 9-11-9H56a10 10 0 0 1-10-10V50a10 10 0 0 1 10-10Z" fill={`url(#${p}-panel)`} />
      </g>
      <circle cx="66" cy="58" r="3" fill="#b9c8f5" className="art-type" />
      <circle cx="76" cy="58" r="3" fill="#a9b9ef" className="art-type art-d2" />
      <circle cx="86" cy="58" r="3" fill="#99aaea" className="art-type art-d3" />
      <g className="art-float">
        <g filter={`url(#${p}-lift)`}>
          <path d="M24 12h40a12 12 0 0 1 12 12v18a12 12 0 0 1-12 12H36l-13 11 2-11h-1a12 12 0 0 1-12-12V24a12 12 0 0 1 12-12Z" fill={`url(#${p}-blue)`} />
        </g>
        <circle cx="32" cy="33" r="3.6" fill="#fff" className="art-type" />
        <circle cx="44" cy="33" r="3.6" fill="#fff" className="art-type art-d2" />
        <circle cx="56" cy="33" r="3.6" fill="#fff" className="art-type art-d3" />
      </g>
    </svg>
  );
}

/** 02: a list of requirements and the flow it turns into. */
export function PlanArt({ className }: ArtProps) {
  const p = "art-plan";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={58} rx={46} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="8" y="28" width="62" height="54" rx="8" fill={`url(#${p}-panel)`} />
      </g>
      <circle cx="18" cy="42" r="2.6" fill="#b9c8f5" />
      <rect x="25" y="39.5" width="34" height="5" rx="2.5" fill={`url(#${p}-mix)`} className="art-line" />
      <circle cx="18" cy="55" r="2.6" fill="#b9c8f5" />
      <rect x="25" y="52.5" width="26" height="5" rx="2.5" fill="#9fb7ff" className="art-line art-d2" />
      <circle cx="18" cy="68" r="2.6" fill="#b9c8f5" />
      <rect x="25" y="65.5" width="30" height="5" rx="2.5" fill={`url(#${p}-purple)`} opacity="0.85" className="art-line art-d3" />
      <path d="M86 30v12h-6M86 42v14h8" fill="none" stroke="#8fa8f0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <g filter={`url(#${p}-lift)`}>
        <rect x="76" y="8" width="22" height="22" rx="5" fill={`url(#${p}-blue)`} className="art-float" />
        <rect x="58" y="34" width="24" height="20" rx="5" fill={`url(#${p}-blue)`} className="art-float art-d2" />
        <rect x="88" y="48" width="24" height="20" rx="5" fill={`url(#${p}-purple)`} className="art-float art-d3" />
      </g>
    </svg>
  );
}

/** 03: a code window, the </> badge and a gear. */
export function BuildArt({ className }: ArtProps) {
  const p = "art-build";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <defs>
        <linearGradient id={`${p}-dark`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a3566" />
          <stop offset="1" stopColor="#151d45" />
        </linearGradient>
      </defs>
      <Ground cx={60} rx={46} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="8" y="12" width="82" height="64" rx="8" fill={`url(#${p}-dark)`} />
      </g>
      <circle cx="16" cy="20" r="1.8" fill="#8fa8f0" />
      <circle cx="22" cy="20" r="1.8" fill="#8fa8f0" />
      <circle cx="28" cy="20" r="1.8" fill="#8fa8f0" />
      <rect x="16" y="30" width="30" height="3.4" rx="1.7" fill="#5b8cff" className="art-code" />
      <rect x="20" y="37" width="40" height="3.4" rx="1.7" fill="#4a5a9a" className="art-code art-d2" />
      <rect x="20" y="44" width="26" height="3.4" rx="1.7" fill="#8f72f2" className="art-code art-d3" />
      <rect x="16" y="51" width="34" height="3.4" rx="1.7" fill="#4a5a9a" className="art-code art-d4" />
      <rect x="20" y="58" width="22" height="3.4" rx="1.7" fill="#5b8cff" className="art-code art-d5" />
      <g filter={`url(#${p}-lift)`}>
        <rect x="52" y="56" width="36" height="24" rx="6" fill={`url(#${p}-purple)`} />
      </g>
      <path d="M64 63l-5 5 5 5M76 63l5 5-5 5M72 61l-4 14" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <g className="art-spin">
        <g filter={`url(#${p}-lift)`}>
          <path
            d="M101 52l3 .5 1 3.6 2.8 1.6 3.5-1.2 2.1 2.1-1.2 3.5 1.6 2.8 3.6 1 .5 3-.5 3-3.6 1-1.6 2.8 1.2 3.5-2.1 2.1-3.5-1.2-2.8 1.6-1 3.6-3 .5-3-.5-1-3.6-2.8-1.6-3.5 1.2-2.1-2.1 1.2-3.5-1.6-2.8-3.6-1-.5-3 .5-3 3.6-1 1.6-2.8-1.2-3.5 2.1-2.1 3.5 1.2 2.8-1.6 1-3.6Z"
          fill={`url(#${p}-blue)`}
        />
      </g>
        <circle cx="101" cy="68" r="5.5" fill="#eef3ff" />
      </g>
    </svg>
  );
}

/** 04: bars that keep rising, an arrow and a small plant. */
export function GrowArt({ className }: ArtProps) {
  const p = "art-grow";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <defs>
        <linearGradient id={`${p}-leaf`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5fcf8a" />
          <stop offset="1" stopColor="#1f8a55" />
        </linearGradient>
      </defs>
      <Ground cx={58} rx={48} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="10" y="70" width="14" height="18" rx="3" fill={`url(#${p}-blue)`} className="art-rise" />
        <rect x="28" y="60" width="14" height="28" rx="3" fill={`url(#${p}-blue)`} className="art-rise art-d2" />
        <rect x="46" y="48" width="14" height="40" rx="3" fill={`url(#${p}-mix)`} className="art-rise art-d3" />
        <rect x="64" y="34" width="14" height="54" rx="3" fill={`url(#${p}-purple)`} className="art-rise art-d4" />
      </g>
      <g className="art-arrow">
        <path d="M8 58C30 52 52 40 82 14" fill="none" stroke={`url(#${p}-blue)`} strokeWidth="3.4" strokeLinecap="round" />
        <path d="M72 12l13-2-3 13Z" fill="#3f6df5" />
      </g>
      <g className="art-sway">
      <path d="M100 66c-8-6-10-16-6-26 6 6 8 16 6 26Z" fill={`url(#${p}-leaf)`} />
      <path d="M101 66c2-10 8-18 16-20-1 9-7 17-16 20Z" fill={`url(#${p}-leaf)`} />
      <path d="M99 68c-6-2-12-8-12-16 7 2 11 9 12 16Z" fill={`url(#${p}-leaf)`} opacity="0.85" />
      </g>
      <path d="M90 68h20l-2.5 18a3 3 0 0 1-3 2.6h-9a3 3 0 0 1-3-2.6Z" fill={`url(#${p}-panel)`} filter={`url(#${p}-lift)`} />
    </svg>
  );
}

type IconProps = { className?: string };

export function GearIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10.3 1.8h3.4l.5 2.7c.6.2 1.2.5 1.7.9l2.6-1 1.7 2.9-2.1 1.8c.1.6.1 1.2 0 1.8l2.1 1.8-1.7 2.9-2.6-1c-.5.4-1.1.7-1.7.9l-.5 2.7h-3.4l-.5-2.7c-.6-.2-1.2-.5-1.7-.9l-2.6 1-1.7-2.9 2.1-1.8a6 6 0 0 1 0-1.8L3.8 7.3l1.7-2.9 2.6 1c.5-.4 1.1-.7 1.7-.9l.5-2.7ZM12 8.4a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Z" transform="translate(0 1)" />
    </svg>
  );
}

export function CapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.4 3.2a1.4 1.4 0 0 1 1.2 0l9.6 4.6c.7.3.7 1.3 0 1.6l-9.6 4.6a1.4 1.4 0 0 1-1.2 0L1.8 9.4c-.7-.3-.7-1.3 0-1.6l9.6-4.6Z" />
      <path d="M5.5 12.4v3.8c0 1.8 2.9 3.6 6.5 3.6s6.5-1.8 6.5-3.6v-3.8l-5.3 2.5a2.8 2.8 0 0 1-2.4 0l-5.3-2.5Z" opacity="0.75" />
      <path d="M21 9.2v5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function RefreshIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M19.5 9A8 8 0 0 0 5.2 7.2L3.5 9" />
      <path d="M3.5 4v5h5" />
      <path d="M4.5 15a8 8 0 0 0 14.3 1.8l1.7-1.8" />
      <path d="M20.5 20v-5h-5" />
    </svg>
  );
}

export function TeamIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="12" cy="7.5" r="3.3" />
      <circle cx="5.2" cy="9" r="2.4" opacity="0.8" />
      <circle cx="18.8" cy="9" r="2.4" opacity="0.8" />
      <path d="M6 18.5c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1Z" />
      <path d="M1 18c0-2.4 1.7-4.2 4-4.2.6 0 1.2.1 1.7.3A7 7 0 0 0 4.6 19H2a1 1 0 0 1-1-1ZM23 18c0-2.4-1.7-4.2-4-4.2-.6 0-1.2.1-1.7.3a7 7 0 0 1 2.1 4.9H22a1 1 0 0 0 1-1Z" opacity="0.8" />
    </svg>
  );
}

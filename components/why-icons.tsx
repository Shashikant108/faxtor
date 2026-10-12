// The "Why Faxtor" illustrations, drawn in code in the same 120 x 100 box and paints as the other sections.
import { Ground, Paints } from "./service-icons";

type ArtProps = { className?: string };

/** A gear outline: `teeth` square-ish teeth between an outer and an inner radius. */
function gearPath(cx: number, cy: number, outer: number, inner: number, teeth: number) {
  const points: string[] = [];
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i += 1) {
    const a = i * step - Math.PI / 2;
    const corners = [
      [inner, a - step * 0.5],
      [inner, a - step * 0.28],
      [outer, a - step * 0.18],
      [outer, a + step * 0.18],
      [inner, a + step * 0.28],
    ] as const;
    for (const [r, t] of corners) points.push(`${(cx + r * Math.cos(t)).toFixed(2)} ${(cy + r * Math.sin(t)).toFixed(2)}`);
  }
  return `M${points.join("L")}Z`;
}

/** An isometric cube whose top corner is at (x, y). */
function Cube({ x, y, s, top, left, right }: { x: number; y: number; s: number; top: string; left: string; right: string }) {
  return (
    <g>
      <path d={`M${x} ${y}l${s} ${s / 2}-${s} ${s / 2}-${s}-${s / 2}Z`} fill={top} />
      <path d={`M${x - s} ${y + s / 2}l${s} ${s / 2}v${s}l-${s}-${s / 2}Z`} fill={left} />
      <path d={`M${x} ${y + s}l${s}-${s / 2}v${s}l-${s} ${s / 2}Z`} fill={right} />
    </g>
  );
}

export function TeamArt({ className }: ArtProps) {
  const p = "art-team";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground rx={44} />
      <g filter={`url(#${p}-lift)`}>
        <circle cx="30" cy="38" r="9" fill={`url(#${p}-blue)`} />
        <path d="M14 82v-6a16 16 0 0 1 32 0v6Z" fill={`url(#${p}-blue)`} opacity="0.85" />
        <circle cx="90" cy="38" r="9" fill={`url(#${p}-purple)`} />
        <path d="M74 82v-6a16 16 0 0 1 32 0v6Z" fill={`url(#${p}-purple)`} opacity="0.85" />
        <circle cx="60" cy="27" r="13" fill={`url(#${p}-blue)`} />
        <path d="M36 86v-8a24 24 0 0 1 48 0v8Z" fill={`url(#${p}-mix)`} />
      </g>
    </svg>
  );
}

export function GlobeArt({ className }: ArtProps) {
  const p = "art-globe";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground rx={34} />
      <ellipse cx="60" cy="48" rx="46" ry="13" transform="rotate(-15 60 48)" fill="none" stroke={`url(#${p}-purple)`} strokeWidth="3.5" opacity="0.55" />
      <g filter={`url(#${p}-lift)`}>
        <circle cx="60" cy="48" r="28" fill={`url(#${p}-blue)`} />
      </g>
      <path d="M44 32c6-4 12-2 14 3s-4 7-2 11-6 6-10 3-8-4-8-9 2-6 6-8Z" fill="#bcd6ff" opacity="0.75" />
      <path d="M66 26c6 0 12 4 14 10s-2 8-7 7-5 4-9 2-4-8-2-12 0-7 4-7Z" fill="#bcd6ff" opacity="0.7" />
      <path d="M62 56c5-2 11 0 12 5s-3 9-8 10-8-3-8-7 1-6 4-8Z" fill="#bcd6ff" opacity="0.65" />
      <path d="M15.6 59.9A46 13 -15 0 0 104.4 36.1" fill="none" stroke={`url(#${p}-purple)`} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="104.4" cy="36.1" r="3.4" fill="#a98bff" />
    </svg>
  );
}

export function CubesArt({ className }: ArtProps) {
  const p = "art-cubes";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground rx={42} />
      <g filter={`url(#${p}-lift)`}>
        <Cube x={62} y={8} s={17} top="#e3edff" left="#9fc0ff" right="#7aa4ff" />
        <Cube x={42} y={36} s={19} top="#d6e6ff" left="#6fa2ff" right="#3f6df5" />
        <Cube x={82} y={36} s={19} top="#ece3ff" left="#b49bff" right="#7b4ff2" />
      </g>
    </svg>
  );
}

export function CertificateArt({ className }: ArtProps) {
  const p = "art-cert";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground rx={38} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="26" y="10" width="62" height="74" rx="8" fill={`url(#${p}-panel)`} />
      </g>
      <rect x="35" y="22" width="40" height="5" rx="2.5" fill="#a9bff5" />
      <rect x="35" y="33" width="34" height="4" rx="2" fill="#c9d7ff" />
      <rect x="35" y="42" width="38" height="4" rx="2" fill="#c9d7ff" />
      <rect x="35" y="51" width="24" height="4" rx="2" fill="#c9d7ff" />
      <path d="M78 70l-5 17 7-4 5 6 2-16ZM94 70l5 17-7-4-5 6-2-16Z" fill={`url(#${p}-blue)`} />
      <g filter={`url(#${p}-lift)`}>
        <circle cx="86" cy="64" r="13" fill={`url(#${p}-blue)`} />
      </g>
      <circle cx="86" cy="64" r="7.5" fill="none" stroke="#fff" strokeWidth="2.4" />
    </svg>
  );
}

export function CloudArt({ className }: ArtProps) {
  const p = "art-cloud";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground rx={46} />
      <path d="M26 72a18 18 0 0 1 2-36 24 24 0 0 1 45-8 20 20 0 0 1 29 22 14 14 0 0 1-8 22Z" fill={`url(#${p}-back)`} filter={`url(#${p}-lift)`} />
      <g filter={`url(#${p}-lift)`}>
        {[44, 58, 72].map((y) => (
          <g key={y}>
            <rect x="38" y={y} width="34" height="11" rx="3" fill="#2f4fd8" />
            <circle cx="44" cy={y + 5.5} r="1.6" fill="#9fd0ff" />
            <rect x="50" y={y + 4.5} width="16" height="2" rx="1" fill="#7f9cf5" />
          </g>
        ))}
      </g>
      <g filter={`url(#${p}-lift)`}>
        <circle cx="90" cy="68" r="17" fill="#fff" />
      </g>
      <text x="90" y="69" textAnchor="middle" fontSize="11" fontWeight="700" fill="#232f3e" fontFamily="var(--font-jakarta), system-ui, sans-serif">
        aws
      </text>
      <path d="M81 73c6 3 12 3 18 0" fill="none" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldArt({ className }: ArtProps) {
  const p = "art-shield";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground rx={30} />
      <g filter={`url(#${p}-lift)`}>
        <path d="M60 8l30 10v24c0 22-13 36-30 44-17-8-30-22-30-44V18Z" fill={`url(#${p}-mix)`} />
      </g>
      <path d="M60 16l22 7.5v18c0 16-9 27-22 33-13-6-22-17-22-33v-18Z" fill="#fff" opacity="0.18" />
      <path d="M48 46l9 9 16-18" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ScreensArt({ className }: ArtProps) {
  const p = "art-screens";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground rx={50} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="10" y="20" width="62" height="42" rx="4" fill="#3a4fc9" />
        <rect x="13" y="23" width="56" height="36" rx="2" fill={`url(#${p}-panel)`} />
        <path d="M4 64h74l-4 6H8Z" fill="#b9c4ea" />
      </g>
      <rect x="17" y="28" width="22" height="4" rx="2" fill="#a9bff5" />
      <rect x="17" y="36" width="46" height="3" rx="1.5" fill="#d3defb" />
      <rect x="17" y="43" width="40" height="3" rx="1.5" fill="#d3defb" />
      <rect x="17" y="50" width="30" height="3" rx="1.5" fill="#d3defb" />
      <g filter={`url(#${p}-lift)`}>
        <rect x="68" y="30" width="30" height="42" rx="4" fill="#3a4fc9" />
        <rect x="71" y="33" width="24" height="36" rx="2" fill={`url(#${p}-panel)`} />
        <rect x="94" y="44" width="18" height="34" rx="4" fill="#3a4fc9" />
        <rect x="96.5" y="47" width="13" height="27" rx="2" fill={`url(#${p}-panel)`} />
      </g>
      <rect x="74" y="38" width="16" height="3" rx="1.5" fill="#a9bff5" />
      <rect x="74" y="45" width="12" height="3" rx="1.5" fill="#d3defb" />
      <rect x="99" y="52" width="8" height="2.6" rx="1.3" fill="#a9bff5" />
      <rect x="99" y="58" width="8" height="2.6" rx="1.3" fill="#d3defb" />
    </svg>
  );
}

export function ScaleArt({ className }: ArtProps) {
  const p = "art-scale";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground rx={44} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="22" y="66" width="18" height="22" rx="3" fill={`url(#${p}-blue)`} />
        <rect x="46" y="54" width="18" height="34" rx="3" fill={`url(#${p}-blue)`} />
        <rect x="70" y="40" width="18" height="48" rx="3" fill={`url(#${p}-mix)`} />
      </g>
      <path d="M20 56C42 52 66 40 90 16" fill="none" stroke={`url(#${p}-purple)`} strokeWidth="7" strokeLinecap="round" />
      <path d="M78 12l18-3-3 18Z" fill="#7b4ff2" />
    </svg>
  );
}

export function ConnectArt({ className }: ArtProps) {
  const p = "art-connect";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground rx={46} />
      <path d="M34 50h22M56 28v44M56 50h30M56 28h28M56 72h10" fill="none" stroke="#c4d1f7" strokeWidth="1.6" />
      <g filter={`url(#${p}-lift)`}>
        <rect x="16" y="40" width="20" height="20" rx="5" fill="#fff" />
        <rect x="46" y="16" width="22" height="22" rx="5" fill="#fff" />
        <rect x="80" y="18" width="22" height="22" rx="6" fill="#25d366" />
        <rect x="56" y="62" width="22" height="22" rx="6" fill="#2d8cff" />
      </g>
      <rect x="20" y="45" width="12" height="10" rx="2" fill={`url(#${p}-mix)`} />
      <g transform="translate(50 20) scale(0.29)">
        <path fill="#ea4335" d="M24 9.5c3.5 0 6.7 1.2 9.2 3.6l6.9-6.9C35.9 2.4 30.5 0 24 0 14.6 0 6.5 5.4 2.6 13.2l8 6.2C12.4 13.7 17.7 9.5 24 9.5Z" />
        <path fill="#4285f4" d="M47 24.6c0-1.6-.2-3.1-.4-4.6H24v9h12.9c-.6 3-2.3 5.5-4.8 7.2l7.7 6c4.5-4.2 7.2-10.4 7.2-17.6Z" />
        <path fill="#fbbc05" d="M10.5 28.6c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6l-8-6.2A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.2Z" />
        <path fill="#34a853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.7-6c-2.2 1.5-4.9 2.3-8.2 2.3-6.3 0-11.6-4.2-13.5-9.9l-8 6.2C6.5 42.6 14.6 48 24 48Z" />
      </g>
      <path d="M91 23a6.5 6.5 0 0 0-5.6 9.8L84.5 36l3.3-.9A6.5 6.5 0 1 0 91 23Z" fill="none" stroke="#fff" strokeWidth="1.8" />
      <rect x="61" y="68" width="8" height="7" rx="1.6" fill="#fff" />
      <path d="M70 70.5l3.5-2v8l-3.5-2Z" fill="#fff" />
    </svg>
  );
}

export function SupportGearArt({ className }: ArtProps) {
  const p = "art-support";
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground rx={30} />
      <g filter={`url(#${p}-lift)`}>
        <path d={gearPath(60, 46, 34, 26, 9)} fill={`url(#${p}-blue)`} />
      </g>
      <circle cx="60" cy="46" r="15" fill="#2f63e8" opacity="0.35" />
      <circle cx="60" cy="46" r="10" fill="#eef3ff" />
    </svg>
  );
}

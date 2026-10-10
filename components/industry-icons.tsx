// The illustrations on the Industries cards, drawn in code (no images) in the same glossy style as the
// "What we build" cards. Each sits in a 140 x 100 box with a soft shadow under it.
import { Ground, Paints } from "./service-icons";

type ArtProps = { className?: string };

/** Gold for coins, under ids that start with `p`. */
function Gold({ p }: { p: string }) {
  return (
    <defs>
      <linearGradient id={`${p}-gold`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffd96e" />
        <stop offset="1" stopColor="#e39410" />
      </linearGradient>
    </defs>
  );
}

const Tree = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <rect x="-1.2" y="0" width="2.4" height="9" rx="1" fill="#7d8fc9" />
    <ellipse cx="0" cy="-3" rx="6" ry="8" fill="#7fb6ff" />
    <ellipse cx="-1.8" cy="-5" rx="2.5" ry="3.5" fill="#b8d6ff" />
  </g>
);

/** A small grid of windows. */
const Windows = ({ x, y, cols, rows, w = 5, h = 5, gap = 3, fill = "#7fa6ff" }: { x: number; y: number; cols: number; rows: number; w?: number; h?: number; gap?: number; fill?: string }) => (
  <g fill={fill}>
    {Array.from({ length: rows * cols }, (_, i) => (
      <rect key={i} x={x + (i % cols) * (w + gap)} y={y + Math.floor(i / cols) * (h + gap)} width={w} height={h} rx="1" />
    ))}
  </g>
);

export function EducationArt({ className }: ArtProps) {
  const p = "ind-edu";
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={70} rx={52} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="24" y="52" width="30" height="34" rx="2" fill={`url(#${p}-back)`} />
        <rect x="86" y="52" width="30" height="34" rx="2" fill={`url(#${p}-back)`} />
        <path d="M21 54 39 44l18 10Z" fill={`url(#${p}-blue)`} />
        <path d="M83 54l18-10 18 10Z" fill={`url(#${p}-blue)`} />
        <rect x="50" y="40" width="40" height="46" rx="2" fill={`url(#${p}-panel)`} />
        <path d="M45 43 70 24l25 19Z" fill={`url(#${p}-mix)`} />
      </g>
      <line x1="70" y1="25" x2="70" y2="9" stroke="#6a7fc9" strokeWidth="1.6" />
      <path d="M70 9h11l-3 3.5 3 3.5H70Z" fill={`url(#${p}-blue)`} />
      <circle cx="70" cy="36" r="4.5" fill="#fff" />
      <circle cx="70" cy="36" r="3" fill="#a98bff" />
      <path d="M63 86V70a7 7 0 0 1 14 0v16Z" fill={`url(#${p}-blue)`} />
      <Windows x={55} y={50} cols={1} rows={2} w={5} h={6} />
      <Windows x={80} y={50} cols={1} rows={2} w={5} h={6} />
      <Windows x={28} y={60} cols={3} rows={2} w={5} h={6} gap={3.5} />
      <Windows x={90} y={60} cols={3} rows={2} w={5} h={6} gap={3.5} />
      <Tree x={16} y={78} />
      <Tree x={124} y={78} />
    </svg>
  );
}

export function ManufacturingArt({ className }: ArtProps) {
  const p = "ind-mfg";
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={70} rx={50} />
      <rect x="62" y="14" width="8" height="34" rx="2" fill={`url(#${p}-purple)`} />
      <rect x="76" y="20" width="7" height="28" rx="2" fill={`url(#${p}-purple)`} />
      <g filter={`url(#${p}-lift)`}>
        <path d="M22 86V50l16-10v10l16-10v10l16-10v10h22v36Z" fill={`url(#${p}-panel)`} />
        <path d="M22 50l16-10v10l16-10v10l16-10v10h22v4H22Z" fill={`url(#${p}-blue)`} />
      </g>
      <Windows x={30} y={62} cols={4} rows={1} w={9} h={8} gap={5} fill="#86a8ff" />
      <rect x="30" y="76" width="50" height="4" rx="2" fill="#d4dfff" />
      <g filter={`url(#${p}-lift)`}>
        <g fill={`url(#${p}-mix)`}>
          {teeth.map((angle) => (
            <rect key={angle} x="100" y="46" width="9" height="10" rx="2" transform={`rotate(${angle} 104.5 66)`} />
          ))}
          <circle cx="104.5" cy="66" r="16" />
        </g>
      </g>
      <circle cx="104.5" cy="66" r="6.5" fill="#eef3ff" />
    </svg>
  );
}

export function RetailArt({ className }: ArtProps) {
  const p = "ind-ret";
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <defs>
        <linearGradient id={`${p}-pink`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ead5ff" />
          <stop offset="1" stopColor="#b98af5" />
        </linearGradient>
      </defs>
      <Ground cx={70} rx={44} />
      <path d="M50 30v-6a12 12 0 0 1 24 0v6" fill="none" stroke="#3f6df5" strokeWidth="3.5" strokeLinecap="round" />
      <g filter={`url(#${p}-lift)`}>
        <path d="M38 30h48l4 56H34Z" fill={`url(#${p}-blue)`} />
        <path d="M38 30h48l.6 8H37.4Z" fill="#fff" opacity="0.25" />
      </g>
      <path d="M86 52v-5a9 9 0 0 1 18 0v5" fill="none" stroke="#9a6cf0" strokeWidth="3" strokeLinecap="round" />
      <g filter={`url(#${p}-lift)`}>
        <path d="M78 52h34l3 34H75Z" fill={`url(#${p}-pink)`} />
      </g>
      <path d="M44 44h36" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ShippingArt({ className }: ArtProps) {
  const p = "ind-ship";
  const boxes = [
    { x: 34, y: 54, c: "#5f8cff" }, { x: 48, y: 54, c: "#8b5cf6" }, { x: 62, y: 54, c: "#ff9b6a" }, { x: 76, y: 54, c: "#5f8cff" },
    { x: 41, y: 45, c: "#7fb2ff" }, { x: 55, y: 45, c: "#f7b4d8" }, { x: 69, y: 45, c: "#a98bff" },
  ];
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <ellipse cx="70" cy="90" rx="56" ry="6" fill="#9cc0ff" opacity="0.35" />
      {boxes.map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width="13" height="8.5" rx="1.2" fill={b.c} />
      ))}
      <g filter={`url(#${p}-lift)`}>
        <rect x="94" y="34" width="20" height="28" rx="2" fill={`url(#${p}-panel)`} />
        <rect x="98" y="22" width="12" height="13" rx="2" fill={`url(#${p}-panel)`} />
      </g>
      <rect x="102" y="12" width="4" height="11" rx="1" fill="#6a7fc9" />
      <Windows x={97} y={39} cols={3} rows={2} w={3.5} h={3.5} gap={2.5} fill="#7fa6ff" />
      <g filter={`url(#${p}-lift)`}>
        <path d="M20 62h104l-10 22H32Z" fill={`url(#${p}-mix)`} />
      </g>
      <path d="M26 68h90" stroke="#fff" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ConstructionArt({ className }: ArtProps) {
  const p = "ind-con";
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={70} rx={50} />
      {/* the crane */}
      <g stroke="#3f6df5" strokeWidth="1.8" strokeLinecap="round" fill="none">
        <path d="M86 86V18M94 86V18" />
        <path d="M86 26l8 8M94 34l-8 8M86 42l8 8M94 50l-8 8M86 58l8 8M94 66l-8 8M86 74l8 8" />
        <path d="M40 18h70M40 24h54" />
        <path d="M44 18l6 6M56 18l6 6M68 18l6 6M80 18l6 6" />
      </g>
      <path d="M90 10l-6 8h12Z" fill="#3f6df5" />
      <line x1="52" y1="24" x2="52" y2="44" stroke="#6a7fc9" strokeWidth="1.4" />
      <rect x="47" y="44" width="10" height="5" rx="1" fill={`url(#${p}-purple)`} />
      <rect x="104" y="18" width="10" height="8" rx="1.5" fill={`url(#${p}-purple)`} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="26" y="54" width="34" height="32" rx="2" fill={`url(#${p}-panel)`} />
        <rect x="58" y="64" width="22" height="22" rx="2" fill={`url(#${p}-back)`} />
      </g>
      <Windows x={30} y={59} cols={4} rows={3} w={4.5} h={5} gap={3.2} />
      <Windows x={62} y={69} cols={2} rows={2} w={5} h={5} gap={4} fill="#8f7ff5" />
      <rect x="100" y="80" width="18" height="6" rx="1.5" fill="#ffb07a" />
      <rect x="104" y="75" width="12" height="5" rx="1.5" fill="#f7b4d8" />
    </svg>
  );
}

export function RealEstateArt({ className }: ArtProps) {
  const p = "ind-re";
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={70} rx={50} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="58" y="14" width="26" height="72" rx="2" fill={`url(#${p}-blue)`} />
        <rect x="80" y="34" width="22" height="52" rx="2" fill={`url(#${p}-panel)`} />
        <rect x="36" y="44" width="24" height="42" rx="2" fill={`url(#${p}-back)`} />
      </g>
      <Windows x={62} y={20} cols={3} rows={7} w={4.5} h={5} gap={3.2} fill="#dfe8ff" />
      <Windows x={84} y={40} cols={2} rows={5} w={5} h={5} gap={4} fill="#86a8ff" />
      <Windows x={40} y={50} cols={2} rows={4} w={6} h={5} gap={4} fill="#8f7ff5" />
      <Tree x={28} y={78} />
      <Tree x={110} y={78} />
      <Tree x={119} y={80} s={0.75} />
    </svg>
  );
}

export function FinanceArt({ className }: ArtProps) {
  const p = "ind-fin";
  const stack = (x: number, n: number) =>
    Array.from({ length: n }, (_, i) => (
      <g key={`${x}-${i}`}>
        <ellipse cx={x} cy={84 - i * 6} rx="10" ry="3.6" fill="#c97c05" />
        <rect x={x - 10} y={78 - i * 6} width="20" height="6" fill={`url(#${p}-gold)`} />
        <ellipse cx={x} cy={78 - i * 6} rx="10" ry="3.6" fill="#ffe08a" />
      </g>
    ));
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Gold p={p} />
      <Ground cx={72} rx={46} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="30" y="14" width="50" height="62" rx="6" fill={`url(#${p}-panel)`} transform="rotate(-8 55 45)" />
      </g>
      <g transform="rotate(-8 55 45)">
        <rect x="37" y="24" width="28" height="4" rx="2" fill="#8fb0ff" />
        <rect x="37" y="34" width="34" height="3.5" rx="1.75" fill="#c9d7ff" />
        <rect x="37" y="42" width="30" height="3.5" rx="1.75" fill="#c9d7ff" />
        <rect x="37" y="50" width="26" height="3.5" rx="1.75" fill="#c9d7ff" />
      </g>
      {stack(70, 3)}
      {stack(92, 4)}
      <g filter={`url(#${p}-lift)`}>
        <circle cx="96" cy="34" r="14" fill={`url(#${p}-purple)`} />
      </g>
      <circle cx="96" cy="34" r="10.5" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.4" />
      <path d="M91 28h10M91 32h10M94 28c5 0 5 8 0 8h-3l7 7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TravelArt({ className }: ArtProps) {
  const p = "ind-trv";
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={62} rx={40} />
      <path d="M104 64a8 8 0 0 1 1-16 11 11 0 0 1 21 2 7 7 0 0 1 0 14Z" fill="#dfe8ff" />
      <path d="M50 34v-8a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v8" fill="none" stroke="#3f6df5" strokeWidth="4" />
      <g filter={`url(#${p}-lift)`}>
        <rect x="38" y="32" width="48" height="52" rx="8" fill={`url(#${p}-blue)`} />
      </g>
      <path d="M52 40v38M62 40v38M72 40v38" stroke="#fff" strokeOpacity="0.35" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="46" cy="88" r="3" fill="#4053b0" />
      <circle cx="78" cy="88" r="3" fill="#4053b0" />
      <g filter={`url(#${p}-lift)`} transform="rotate(-22 108 30)">
        <path d="M84 30c0-2 2-3.5 5-3.5h30c4 0 7 1.5 7 3.5s-3 3.5-7 3.5H89c-3 0-5-1.5-5-3.5Z" fill={`url(#${p}-panel)`} />
        <path d="M104 27l-6-12h6l12 12ZM104 33l-6 12h6l12-12ZM88 27l-4-7h4l6 7Z" fill={`url(#${p}-mix)`} />
      </g>
    </svg>
  );
}

export function TelecomArt({ className }: ArtProps) {
  const p = "ind-tel";
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={70} rx={52} />
      <g stroke="#3f6df5" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M30 86 44 26l14 60" />
        <path d="M34 70h20M37 56h14M40 42h8M34 70l17-14M54 70 37 56M37 56l11-14M51 56 40 42" />
        <path d="M34 18a14 14 0 0 1 0-16M54 2a14 14 0 0 1 0 16M38 15a9 9 0 0 1 0-10M50 5a9 9 0 0 1 0 10" transform="translate(0 6)" />
      </g>
      <circle cx="44" cy="16" r="4" fill={`url(#${p}-purple)`} />
      <g filter={`url(#${p}-lift)`}>
        <path d="M66 50h34v32H66Z" fill={`url(#${p}-panel)`} />
        <path d="M100 58h14l8 12v12h-22Z" fill={`url(#${p}-blue)`} />
      </g>
      <path d="M103 61h9l5 8h-14Z" fill="#dfe8ff" />
      <rect x="70" y="64" width="26" height="4" rx="2" fill="#8fb0ff" />
      <circle cx="78" cy="84" r="5" fill="#4053b0" />
      <circle cx="78" cy="84" r="2" fill="#dfe8ff" />
      <circle cx="110" cy="84" r="5" fill="#4053b0" />
      <circle cx="110" cy="84" r="2" fill="#dfe8ff" />
    </svg>
  );
}

export function PlatformArt({ className }: ArtProps) {
  const p = "ind-saas";
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={70} rx={50} />
      <path d="M38 76a14 14 0 0 1 0-28 18 18 0 0 1 32-4 13 13 0 0 1 4 32Z" fill={`url(#${p}-back)`} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="50" y="22" width="56" height="54" rx="7" fill={`url(#${p}-panel)`} />
        <path d="M57 22h42a7 7 0 0 1 7 7v4H50v-4a7 7 0 0 1 7-7Z" fill={`url(#${p}-mix)`} />
      </g>
      <circle cx="57" cy="27.5" r="1.6" fill="#fff" />
      <circle cx="62.5" cy="27.5" r="1.6" fill="#fff" />
      <circle cx="68" cy="27.5" r="1.6" fill="#fff" />
      <rect x="57" y="40" width="30" height="4" rx="2" fill="#8fb0ff" />
      <rect x="57" y="49" width="38" height="3.5" rx="1.75" fill="#c9d7ff" />
      <rect x="57" y="57" width="26" height="3.5" rx="1.75" fill="#c9d7ff" />
      <g filter={`url(#${p}-lift)`}>
        <g fill={`url(#${p}-purple)`}>
          {teeth.map((angle) => (
            <rect key={angle} x="102" y="50" width="8" height="9" rx="2" transform={`rotate(${angle} 106 68)`} />
          ))}
          <circle cx="106" cy="68" r="14" />
        </g>
      </g>
      <circle cx="106" cy="68" r="5.5" fill="#eef3ff" />
    </svg>
  );
}

export function NetworkArt({ className }: ArtProps) {
  const p = "ind-net";
  const Person = ({ x, y, fill }: { x: number; y: number; fill: string }) => (
    <g filter={`url(#${p}-lift)`}>
      <circle cx={x} cy={y} r="11" fill={fill} />
      <circle cx={x} cy={y - 3} r="3.6" fill="#fff" />
      <path d={`M${x - 6} ${y + 6.5}a6 6 0 0 1 12 0 11 11 0 0 1-12 0Z`} fill="#fff" />
    </g>
  );
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={70} rx={30} />
      <g stroke="#9db4ff" strokeWidth="2">
        <line x1="70" y1="22" x2="50" y2="52" />
        <line x1="70" y1="22" x2="90" y2="52" />
        <line x1="50" y1="52" x2="90" y2="52" />
        <line x1="50" y1="52" x2="70" y2="80" />
        <line x1="90" y1="52" x2="70" y2="80" />
      </g>
      <Person x={70} y={22} fill={`url(#${p}-purple)`} />
      <Person x={50} y={52} fill={`url(#${p}-blue)`} />
      <Person x={90} y={52} fill={`url(#${p}-mix)`} />
      <circle cx="70" cy="80" r="5" fill={`url(#${p}-purple)`} />
    </svg>
  );
}

/** The picture on the "Your industry isn't listed?" card: a laptop with code, a gear, a cloud and a card. */
export function CustomBuildArt({ className }: ArtProps) {
  const p = "ind-custom";
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <Paints p={p} />
      <Ground cx={66} rx={50} />
      <path d="M76 22a7 7 0 0 1 1-14 10 10 0 0 1 19 2 6 6 0 0 1 0 12Z" fill={`url(#${p}-back)`} />
      <g filter={`url(#${p}-lift)`}>
        <rect x="26" y="26" width="72" height="48" rx="5" fill={`url(#${p}-blue)`} />
        <rect x="30" y="30" width="64" height="40" rx="3" fill="#eef3ff" />
        <path d="M18 76h88l-5 8H23Z" fill={`url(#${p}-mix)`} />
      </g>
      <path d="M52 42l-8 8 8 8M72 42l8 8-8 8M65 40l-6 20" fill="none" stroke="#5a6ff0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <g filter={`url(#${p}-lift)`}>
        <rect x="100" y="30" width="26" height="18" rx="4" fill={`url(#${p}-panel)`} />
      </g>
      <rect x="105" y="35" width="13" height="3" rx="1.5" fill="#a98bff" />
      <rect x="105" y="41" width="16" height="3" rx="1.5" fill="#cbd8ff" />
      <g filter={`url(#${p}-lift)`}>
        <g fill={`url(#${p}-purple)`}>
          {teeth.map((angle) => (
            <rect key={angle} x="97" y="56" width="8" height="9" rx="2" transform={`rotate(${angle} 101 72)`} />
          ))}
          <circle cx="101" cy="72" r="12.5" />
        </g>
      </g>
      <circle cx="101" cy="72" r="5" fill="#eef3ff" />
    </svg>
  );
}

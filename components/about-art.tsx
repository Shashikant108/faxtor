// The pictures of the About Us page (app/about/page.tsx), drawn in code like the rest of the site so they stay
// sharp at any size and need no photos: the hero's app window and team, the whiteboard of our process, the AI
// chip, the team cards and the four small philosophy icons. The ab-* classes in app/globals.css give them their gentle motion.
import type { ReactNode } from "react";

type ArtProps = { className?: string };

/** "Our approach": a whiteboard with the five steps on sticky notes, stepping down to the right, and a marker. */
export function ApproachBoardArt({ className }: ArtProps) {
  const notes = [
    { label: "Understand", fill: "#ffe48a" },
    { label: "Plan", fill: "#ffc4d4" },
    { label: "Build", fill: "#c6f1d3" },
    { label: "Train", fill: "#cfe2ff" },
    { label: "Support", fill: "#e3d6ff" },
  ];
  return (
    <svg viewBox="0 0 520 380" className={className} aria-hidden="true" fontFamily="var(--font-hand), cursive">
      <defs>
        <linearGradient id="ab-board" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eef2fb" />
        </linearGradient>
        <filter id="ab-note" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0b1b4d" floodOpacity="0.18" />
        </filter>
      </defs>
      <rect x="10" y="10" width="500" height="360" rx="18" fill="#c9d3ee" />
      <rect x="20" y="20" width="480" height="340" rx="12" fill="url(#ab-board)" />
      <text x="44" y="62" fontSize="26" fontWeight="600" fill="#2f4a9a">How we work</text>
      <path d="M44 72h120" stroke="#2f4a9a" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      {notes.map((note, index) => {
        const x = 44 + index * 86;
        const y = 96 + index * 46;
        return (
          <g key={note.label} className="ab-note" style={{ animationDelay: `${index * 0.5}s` }}>
            <g filter="url(#ab-note)" transform={`rotate(${index % 2 ? 3 : -3} ${x + 50} ${y + 30})`}>
              <rect x={x} y={y} width="100" height="60" rx="4" fill={note.fill} />
              <text x={x + 50} y={y + 38} fontSize="21" fontWeight="600" fill="#1b2a5e" textAnchor="middle">
                {note.label}
              </text>
            </g>
            {index < notes.length - 1 && (
              <path
                d={`M${x + 104} ${y + 30}q22 0 26 ${36}`}
                fill="none"
                stroke="#5b7cff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="4 5"
              />
            )}
          </g>
        );
      })}
      {/* the marker resting on the ledge */}
      <g transform="rotate(-8 420 368)">
        <rect x="360" y="356" width="104" height="14" rx="7" fill="#3f6df5" />
        <rect x="448" y="356" width="22" height="14" rx="4" fill="#1b2a5e" />
      </g>
    </svg>
  );
}

// a circuit trace from the chip's right edge (at height from) round one corner to a label (at height to)
const trace = (from: number, to: number) => {
  const turn = to > from ? 10 : -10;
  return `M240 ${from}H290Q300 ${from} 300 ${from + turn}V${to - turn}Q300 ${to} 310 ${to}H330`;
};

/** "AI that works": a glowing chip with circuit lines running out to what it does. */
export function AiChipArt({ className }: ArtProps) {
  const labels = [
    { text: "Smart automation", y: 70 },
    { text: "Data insights", y: 182 },
    { text: "AI assistants", y: 294 },
  ];
  return (
    // the box is cropped to the drawing (its labels run from y 70 to 338), so no empty band adds to the height
    <svg viewBox="0 56 520 292" className={className} aria-hidden="true" fontFamily="var(--font-jakarta), system-ui, sans-serif">
      <defs>
        <linearGradient id="ab-chip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1d2b78" />
          <stop offset="1" stopColor="#0d1442" />
        </linearGradient>
        <linearGradient id="ab-chip-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2fa8ff" />
          <stop offset="1" stopColor="#a77bff" />
        </linearGradient>
        <linearGradient id="ab-ai" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6cc6ff" />
          <stop offset="1" stopColor="#c4a8ff" />
        </linearGradient>
        <filter id="ab-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
      </defs>

      <circle cx="170" cy="190" r="110" fill="#4f6bff" opacity="0.45" filter="url(#ab-glow)" className="ab-pulse" />

      {/* circuit lines from the chip to each label, with a light running along them */}
      {labels.map(({ y }, index) => {
        const d = trace(160 + index * 30, y + 22);
        return (
          <g key={y}>
            <path d={d} fill="none" stroke="#3a4f9c" strokeWidth="2" />
            <path
              d={d}
              fill="none"
              stroke="url(#ab-chip-edge)"
              strokeWidth="2.4"
              strokeLinecap="round"
              pathLength={1}
              className="ab-flow"
              style={{ animationDelay: `${index * 0.7}s` }}
            />
          </g>
        );
      })}
      {/* pins on the other three sides */}
      {[0, 1, 2, 3].map((index) => (
        <g key={index} fill="#3a4f9c">
          <rect x="62" y={142 + index * 26} width="38" height="4" rx="2" />
          <rect x={122 + index * 26} y="78" width="4" height="34" rx="2" />
          <rect x={122 + index * 26} y="268" width="4" height="34" rx="2" />
        </g>
      ))}

      <rect x="100" y="112" width="140" height="156" rx="26" fill="url(#ab-chip-edge)" />
      <rect x="104" y="116" width="132" height="148" rx="23" fill="url(#ab-chip)" />
      <rect x="120" y="132" width="100" height="116" rx="16" fill="none" stroke="#2c3c8a" strokeWidth="1.5" />
      <text x="170" y="212" fontSize="58" fontWeight="800" textAnchor="middle" fill="url(#ab-ai)">
        AI
      </text>

      {labels.map(({ text, y }) => (
        <g key={text}>
          <rect x="330" y={y} width="180" height="44" rx="12" fill="#ffffff" opacity="0.08" stroke="#4a5fb0" />
          <circle cx="352" cy={y + 22} r="6" fill="url(#ab-chip-edge)" />
          <text x="368" y={y + 27} fontSize="15" fontWeight="600" fill="#e4eaff">
            {text}
          </text>
        </g>
      ))}
    </svg>
  );
}

type Look = { shirt: string; skin: string; hair: string };

/** A person in a round frame, centred on (cx, cy) with radius r; id names the clip, so it must be unique. */
function Person({ id, cx, cy, r, shirt, skin, hair }: Look & { id: string; cx: number; cy: number; r: number }) {
  const scale = r / 50;
  return (
    <g transform={`translate(${cx - 74 * scale} ${cy - 74 * scale}) scale(${scale})`}>
      <defs>
        <clipPath id={id}>
          <circle cx="74" cy="74" r="50" />
        </clipPath>
      </defs>
      <circle cx="74" cy="74" r="50" fill="#eef3ff" />
      <g clipPath={`url(#${id})`}>
        <path d="M30 128c4-26 22-40 44-40s40 14 44 40Z" fill={shirt} />
        <rect x="66" y="70" width="16" height="22" rx="7" fill={skin} />
        <circle cx="74" cy="56" r="20" fill={skin} />
        <path d="M53 56c0-15 9-24 21-24s22 9 21 24c-4-8-12-11-21-11s-17 3-21 11Z" fill={hair} />
      </g>
    </g>
  );
}

/**
 * The About Us hero: the platform we build for you, an app window with its modules and the road from the first
 * talk to support, with the three kinds of people who build it around it, on a soft glow in the logo's colours.
 */
export function HeroTeamArt({ className }: ArtProps) {
  const modules = [
    { label: "ERP", sub: "Operations", tone: "#3f8cff", soft: "#e1f1fe", icon: "M-7 6v-4M0 6v-10M7 6v-7" },
    { label: "CRM", sub: "Customers", tone: "#8b5cf6", soft: "#ece5fe", icon: "M0-7a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 1 0-7M-6.5 7c1-3.5 3.5-5 6.5-5s5.5 1.5 6.5 5" },
    { label: "Platforms", sub: "Your industry", tone: "#0f9f8f", soft: "#dcf6f1", icon: "M-4-5l-5 5 5 5M4-5l5 5-5 5" },
  ];
  const steps = ["Understand", "Plan", "Build", "Support"];
  const people = [
    { role: "Developers", shirt: "#3f8cff", skin: "#f1c7a5", hair: "#2b2140", cx: 84, cy: 120, r: 42, chipX: 26, chipY: 172 },
    { role: "Designers", shirt: "#8b5cf6", skin: "#c98d68", hair: "#1c1630", cx: 92, cy: 318, r: 36, chipX: 40, chipY: 364 },
    { role: "Support", shirt: "#14b8a6", skin: "#e2aa82", hair: "#3a2a20", cx: 522, cy: 196, r: 44, chipX: 470, chipY: 250 },
  ];
  return (
    <svg viewBox="0 0 600 440" className={className} aria-hidden="true" fontFamily="var(--font-jakarta), system-ui, sans-serif">
      <defs>
        <filter id="ab-hero-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="34" />
        </filter>
        <filter id="ab-hero-card" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#2846aa" floodOpacity="0.18" />
        </filter>
        <linearGradient id="ab-hero-brand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0a9bff" />
          <stop offset="1" stopColor="#7b3ff2" />
        </linearGradient>
      </defs>

      {/* the glow it all sits on */}
      <circle cx="470" cy="110" r="120" fill="#ffc32e" opacity="0.28" filter="url(#ab-hero-soft)" />
      <circle cx="150" cy="350" r="130" fill="#2ddaff" opacity="0.26" filter="url(#ab-hero-soft)" />
      <circle cx="330" cy="220" r="150" fill="#7b3ff2" opacity="0.12" filter="url(#ab-hero-soft)" />

      {/* the app window */}
      <g filter="url(#ab-hero-card)">
        <rect x="130" y="56" width="350" height="304" rx="22" fill="#ffffff" />
      </g>
      <circle cx="156" cy="82" r="5" fill="#ff6b7a" />
      <circle cx="172" cy="82" r="5" fill="#ffc32e" />
      <circle cx="188" cy="82" r="5" fill="#34c77b" />
      <rect x="208" y="75" width="96" height="14" rx="7" fill="#eef2fb" />
      <text x="154" y="128" fontSize="17" fontWeight="800" fill="#0b1b4d">
        Your business, one system
      </text>

      {modules.map((module, index) => {
        const x = 154 + index * 106;
        return (
          <g key={module.label}>
            <rect x={x} y="146" width="96" height="104" rx="14" fill={module.soft} />
            <rect x={x + 12} y="158" width="32" height="32" rx="9" fill={module.tone} />
            <path d={module.icon} transform={`translate(${x + 28} 174)`} fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <text x={x + 12} y="218" fontSize="15" fontWeight="800" fill="#0b1b4d">
              {module.label}
            </text>
            <text x={x + 12} y="236" fontSize="10.5" fill="#5a6488">
              {module.sub}
            </text>
          </g>
        );
      })}

      {/* the road from the first talk to support, with a light running along it */}
      <path d="M180 290H430" stroke="#e4e9f6" strokeWidth="5" strokeLinecap="round" />
      <path d="M180 290H430" stroke="url(#ab-hero-brand)" strokeWidth="5" strokeLinecap="round" pathLength={1} className="ab-flow" />
      {steps.map((step, index) => {
        const x = 180 + index * (250 / 3);
        return (
          <g key={step}>
            <circle cx={x} cy="290" r="8" fill="#ffffff" stroke="url(#ab-hero-brand)" strokeWidth="3" />
            <text x={x} y="320" fontSize="10.5" fontWeight="600" fill="#5a6488" textAnchor="middle">
              {step}
            </text>
          </g>
        );
      })}

      {/* the people who build it */}
      {people.map(({ role, chipX, chipY, ...person }, index) => (
        <g key={role} className="ab-bob" style={{ animationDelay: `${index * 0.7}s` }}>
          <circle cx={person.cx} cy={person.cy} r={person.r + 6} fill="#ffffff" filter="url(#ab-hero-card)" />
          <Person id={`ab-hero-${index}`} {...person} />
          <g filter="url(#ab-hero-card)">
            <rect x={chipX} y={chipY} width="112" height="28" rx="14" fill="#ffffff" />
          </g>
          <circle cx={chipX + 16} cy={chipY + 14} r="4.5" fill={person.shirt} />
          <text x={chipX + 28} y={chipY + 18.5} fontSize="12" fontWeight="700" fill="#0b1b4d">
            {role}
          </text>
        </g>
      ))}

      {/* what it adds up to */}
      <g filter="url(#ab-hero-card)">
        <rect x="290" y="378" width="200" height="42" rx="21" fill="#ffffff" />
      </g>
      <circle cx="314" cy="399" r="11" fill="#22c55e" />
      <path d="M308.5 399.5l3.8 3.8 6.6-7" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="334" y="405" fontSize="15" fontWeight="800" fill="#0b1b4d">
        Built around you
      </text>
    </svg>
  );
}

/** "Our team": three people cards, one per kind of role, and a badge for the in-house team. */
export function TeamCardsArt({ className }: ArtProps) {
  const people = [
    { role: "Developers", shirt: "#3f8cff", skin: "#f1c7a5", hair: "#2b2140", x: 30, y: 120 },
    { role: "Designers", shirt: "#8b5cf6", skin: "#c98d68", hair: "#1c1630", x: 186, y: 60 },
    { role: "Support", shirt: "#14b8a6", skin: "#e2aa82", hair: "#3a2a20", x: 342, y: 120 },
  ];
  return (
    <svg viewBox="0 0 520 380" className={className} aria-hidden="true" fontFamily="var(--font-jakarta), system-ui, sans-serif">
      <defs>
        <filter id="ab-card" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#2846aa" floodOpacity="0.18" />
        </filter>
      </defs>
      {people.map((person, index) => (
        <g key={person.role} className="ab-bob" style={{ animationDelay: `${index * 0.6}s` }}>
          <g filter="url(#ab-card)">
            <rect x={person.x} y={person.y} width="148" height="210" rx="20" fill="#ffffff" />
          </g>
          <Person id={`ab-team-${index}`} cx={person.x + 74} cy={person.y + 86} r={50} {...person} />
          <text x={person.x + 74} y={person.y + 160} fontSize="16" fontWeight="700" fill="#0b1b4d" textAnchor="middle">
            {person.role}
          </text>
          <rect x={person.x + 34} y={person.y + 176} width="80" height="7" rx="3.5" fill="#e6ebfa" />
          <rect x={person.x + 34} y={person.y + 176} width={50 + index * 10} height="7" rx="3.5" fill={person.shirt} opacity="0.85" />
        </g>
      ))}
      <g filter="url(#ab-card)">
        <rect x="170" y="318" width="180" height="46" rx="23" fill="#ffffff" />
      </g>
      <circle cx="196" cy="341" r="11" fill="#22c55e" />
      <path d="M190.5 341.5l3.8 3.8 6.6-7" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="216" y="347" fontSize="16" fontWeight="700" fill="#0b1b4d">
        100% in-house
      </text>
    </svg>
  );
}

// the four philosophy icons: line icons that take the colour of their round badge (currentColor)
const line = (children: ReactNode) =>
  function LineIcon({ className }: ArtProps) {
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

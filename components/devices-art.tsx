// The laptop, phone and plant of "A partner throughout", drawn in code so they stay sharp at any size.
// The laptop shows a Faxtor dashboard, the phone the same modules as a list.

const MENU = ["Dashboard", "Orders", "Inventory", "Customers", "Reports", "Settings"];
const STATS = [
  { label: "New orders", value: "349", tone: "#3f8cff" },
  { label: "Deliveries", value: "386", tone: "#7b5cf6" },
  { label: "Revenue", value: "₹4.2L", tone: "#22b8cf" },
];
const BARS = [38, 54, 46, 70, 62, 88, 76];
const PHONE_ROWS = [
  { label: "Orders", tone: "#3f8cff" },
  { label: "Inventory", tone: "#f59e0b" },
  { label: "Customers", tone: "#ef4a5d" },
  { label: "Tasks", tone: "#3f6df5" },
  { label: "Reports", tone: "#7b5cf6" },
];

export function DevicesArt({ className }: { className?: string }) {
  const p = "art-devices";
  return (
    <svg viewBox="0 0 720 420" className={className} aria-hidden="true" fontFamily="var(--font-jakarta), system-ui, sans-serif">
      <defs>
        <linearGradient id={`${p}-bars`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7b5cf6" />
          <stop offset="1" stopColor="#3f8cff" />
        </linearGradient>
        <linearGradient id={`${p}-base`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9deec" />
          <stop offset="1" stopColor="#8d96b4" />
        </linearGradient>
        <linearGradient id={`${p}-pot`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c9d1e8" />
        </linearGradient>
        <linearGradient id={`${p}-leaf`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5fd08c" />
          <stop offset="1" stopColor="#14704a" />
        </linearGradient>
        <filter id={`${p}-glow`} x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id={`${p}-card`} x="-10%" y="-10%" width="120%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#3d55c8" floodOpacity="0.14" />
        </filter>
        <clipPath id={`${p}-screen`}>
          <rect x="74" y="24" width="472" height="282" rx="6" />
        </clipPath>
      </defs>

      {/* the light the devices stand in */}
      <ellipse cx="350" cy="352" rx="300" ry="26" fill="#5b7cff" opacity="0.55" filter={`url(#${p}-glow)`} />

      {/* laptop */}
      <rect x="60" y="10" width="500" height="310" rx="16" fill="#111836" stroke="#323d73" strokeWidth="2" />
      <g clipPath={`url(#${p}-screen)`}>
        <rect x="74" y="24" width="472" height="282" fill="#f4f7ff" />
        <rect x="74" y="24" width="98" height="282" fill="#141d55" />
        <path d="M88 40l9-3v6l-9 3Z" fill="#f7a21b" />
        <path d="M88 47l9-3v7l-9 3Z" fill="#ef4a8c" />
        <path d="M91 55l6-2v6l-6 2Z" fill="#22b8f0" />
        <text x="104" y="52" fontSize="12" fontWeight="600" fill="#fff">Faxtor</text>
        {MENU.map((item, index) => (
          <g key={item}>
            {index === 0 && <rect x="82" y={74 + index * 24} width="82" height="18" rx="5" fill="#2b3a94" />}
            <circle cx="92" cy={83 + index * 24} r="3" fill={index === 0 ? "#7cc4ff" : "#7f8bc4"} />
            <text x="101" y={86 + index * 24} fontSize="8" fill={index === 0 ? "#fff" : "#b5c0ea"}>
              {item}
            </text>
          </g>
        ))}

        <text x="186" y="56" fontSize="14" fontWeight="800" fill="#0b1b4d">Dashboard</text>
        <rect x="430" y="42" width="78" height="16" rx="8" fill="#e6ebfa" />
        <circle cx="524" cy="50" r="8" fill="#c9d4f7" />

        {STATS.map((stat, index) => {
          const x = 186 + index * 118;
          return (
            <g key={stat.label} filter={`url(#${p}-card)`}>
              <rect x={x} y="72" width="108" height="58" rx="8" fill="#fff" />
              <rect x={x + 10} y="82" width="16" height="16" rx="4" fill={stat.tone} opacity="0.9" />
              <text x={x + 32} y="93" fontSize="7.5" fill="#6b7396">{stat.label}</text>
              <text x={x + 10} y="120" fontSize="15" fontWeight="800" fill="#0b1b4d">{stat.value}</text>
              <rect x={x + 64} y="112" width="32" height="6" rx="3" fill="#e3f7ec" />
            </g>
          );
        })}

        <g filter={`url(#${p}-card)`}>
          <rect x="186" y="142" width="226" height="152" rx="8" fill="#fff" />
          <rect x="422" y="142" width="110" height="152" rx="8" fill="#fff" />
        </g>
        <text x="198" y="162" fontSize="9" fontWeight="700" fill="#0b1b4d">Overview</text>
        {[0, 1, 2, 3].map((line) => (
          <line key={line} x1="198" x2="400" y1={182 + line * 24} y2={182 + line * 24} stroke="#eef1fa" />
        ))}
        {BARS.map((height, index) => (
          <rect key={index} x={206 + index * 27} y={278 - height} width="15" height={height} rx="3" fill={`url(#${p}-bars)`} />
        ))}
        <text x="434" y="162" fontSize="9" fontWeight="700" fill="#0b1b4d">Overview</text>
        <circle cx="477" cy="218" r="30" fill="none" stroke="#e6ebfa" strokeWidth="12" />
        <circle cx="477" cy="218" r="30" fill="none" stroke="#3f8cff" strokeWidth="12" strokeDasharray="85 189" transform="rotate(-90 477 218)" />
        <circle cx="477" cy="218" r="30" fill="none" stroke="#7b5cf6" strokeWidth="12" strokeDasharray="50 189" strokeDashoffset="-85" transform="rotate(-90 477 218)" />
        <circle cx="477" cy="218" r="30" fill="none" stroke="#22b8cf" strokeWidth="12" strokeDasharray="28 189" strokeDashoffset="-135" transform="rotate(-90 477 218)" />
        <text x="477" y="222" fontSize="10" fontWeight="800" fill="#0b1b4d" textAnchor="middle">2,640</text>
        <rect x="438" y="262" width="78" height="5" rx="2.5" fill="#e6ebfa" />
        <rect x="438" y="274" width="54" height="5" rx="2.5" fill="#e6ebfa" />
      </g>
      <path d="M30 320h560l26 16a6 6 0 0 1-3 7H7a6 6 0 0 1-3-7Z" fill={`url(#${p}-base)`} />
      <rect x="270" y="320" width="80" height="6" rx="3" fill="#7d86a6" />

      {/* phone */}
      <g transform="rotate(4 600 270)">
        <rect x="540" y="150" width="124" height="246" rx="20" fill="#0f1533" stroke="#3a4582" strokeWidth="2" />
        <rect x="548" y="158" width="108" height="230" rx="14" fill="#f6f8ff" />
        <rect x="586" y="164" width="32" height="7" rx="3.5" fill="#0f1533" />
        <text x="560" y="190" fontSize="9" fontWeight="800" fill="#0b1b4d">Faxtor</text>
        {PHONE_ROWS.map((row, index) => (
          <g key={row.label} filter={`url(#${p}-card)`}>
            <rect x="556" y={200 + index * 36} width="92" height="28" rx="7" fill="#fff" />
            <rect x="563" y={207 + index * 36} width="14" height="14" rx="4" fill={row.tone} opacity="0.9" />
            <text x="583" y={217 + index * 36} fontSize="8.5" fontWeight="600" fill="#0b1b4d">{row.label}</text>
          </g>
        ))}
      </g>

      {/* plant */}
      <path d="M690 330c-22-18-30-52-18-86 18 22 24 56 18 86Z" fill={`url(#${p}-leaf)`} />
      <path d="M692 330c4-34 22-60 28-64 2 30-10 52-28 64Z" fill={`url(#${p}-leaf)`} opacity="0.9" />
      <path d="M688 334c-18-6-34-24-36-50 20 8 32 28 36 50Z" fill={`url(#${p}-leaf)`} opacity="0.8" />
      <path d="M694 334c10-20 22-30 26-32-2 18-12 28-26 32Z" fill={`url(#${p}-leaf)`} opacity="0.75" />
      <path d="M662 330h56l-6 72a6 6 0 0 1-6 5.5h-32a6 6 0 0 1-6-5.5Z" fill={`url(#${p}-pot)`} />
    </svg>
  );
}

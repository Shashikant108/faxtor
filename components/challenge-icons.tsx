// icons of the challenge list: they take their colour from the round badge around them (currentColor)

type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12V7.2" className="clock-hand" />
      <path d="M12 12l3.2 2" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M7 2.5h7.2L19 7.3V19a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19V5A2.5 2.5 0 0 1 7 2.5Z" />
      <path d="M8.5 12h7M8.5 15.5h7M8.5 8.8h3" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" fill="none" className="doc-lines" />
    </svg>
  );
}

export function BellIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
      <g className="bell-ring">
        <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15L6 16.5Z" />
        <path d="M10 21a2 2 0 0 0 4 0" />
      </g>
      <circle cx="18" cy="5.5" r="2.6" fill="currentColor" stroke="none" className="dot-blink" />
    </svg>
  );
}

export function BarsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="3.5" y="12" width="4.4" height="8.5" rx="1.4" className="bar-a" />
      <rect x="9.8" y="7.5" width="4.4" height="13" rx="1.4" className="bar-b" />
      <rect x="16.1" y="3" width="4.4" height="17.5" rx="1.4" className="bar-c" />
    </svg>
  );
}

export function CoinsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <g className="coin-bob">
      <ellipse cx="9.5" cy="6.5" rx="6" ry="2.7" />
      <path d="M3.5 9.2v2.3c0 1.5 2.7 2.7 6 2.7s6-1.2 6-2.7V9.2c-1.3 1.2-3.7 1.9-6 1.9s-4.7-.7-6-1.9Z" />
      <path d="M3.5 14.2v2.3c0 1.5 2.7 2.7 6 2.7s6-1.2 6-2.7v-2.3c-1.3 1.2-3.7 1.9-6 1.9s-4.7-.7-6-1.9Z" />
      <ellipse cx="16" cy="12" rx="5" ry="2.3" opacity="0.85" />
      <path d="M11 14.2v2.1c0 1.3 2.2 2.3 5 2.3s5-1 5-2.3v-2.1c-1.1 1-3.1 1.6-5 1.6s-3.9-.6-5-1.6Z" opacity="0.85" />
      </g>
    </svg>
  );
}

export function TrendIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke} strokeWidth={2.2}>
      <path d="M3.5 17 9.5 11l4 4 7-8" pathLength={1} className="trend-draw" />
      <path d="M15.5 7h5v5" />
    </svg>
  );
}

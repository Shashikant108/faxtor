// the three benefit icons, as SVG: they take their colour from the circle around them (currentColor)

type IconProps = { className?: string };

export function SaveTimeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.9 1.6 5 13.1c-.5.6 0 1.5.8 1.5h4.1l-1.5 7.7c-.2.9.9 1.4 1.5.7l9-11.7c.5-.6 0-1.5-.8-1.5h-4.1l1.6-7.6c.2-.9-.9-1.4-1.7-.6Z" />
    </svg>
  );
}

export function WorkSmarterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="3" y="12.5" width="5" height="8.5" rx="1.6" />
      <rect x="9.5" y="8" width="5" height="13" rx="1.6" />
      <rect x="16" y="2.5" width="5" height="18.5" rx="1.6" />
    </svg>
  );
}

export function AchieveMoreIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="12" cy="6.6" r="3.3" />
      <circle cx="4.7" cy="9" r="2.4" />
      <circle cx="19.3" cy="9" r="2.4" />
      <path d="M12 11.6c-3.4 0-6.1 2-6.1 4.6V19.6h12.2v-3.4c0-2.6-2.7-4.6-6.1-4.6Z" />
      <path d="M4.7 12.1C2.6 12.1 1 13.5 1 15.3v2.5h3.6v-1.6c0-1.5.6-2.8 1.7-3.8-.5-.2-1-.3-1.6-.3Z" />
      <path d="M19.3 12.1c2.1 0 3.7 1.4 3.7 3.2v2.5h-3.6v-1.6c0-1.5-.6-2.8-1.7-3.8.5-.2 1-.3 1.6-.3Z" />
    </svg>
  );
}

// the three benefit icons, as SVG: they take their colour from the circle around them (currentColor)

type IconProps = { className?: string };

export function SaveTimeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.9 1.6 5 13.1c-.5.6 0 1.5.8 1.5h4.1l-1.5 7.7c-.2.9.9 1.4 1.5.7l9-11.7c.5-.6 0-1.5-.8-1.5h-4.1l1.6-7.6c.2-.9-.9-1.4-1.7-.6Z" />
    </svg>
  );
}

/** a piggy bank with a coin dropping in; the eye and the coin slot are cut out of it */
export function SaveCostIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="10.6" cy="2.6" r="2.1" />
      <path
        fillRule="evenodd"
        d="M10.5 6.2c-4.4 0-8 2.8-8 6.4 0 2 1 3.7 2.7 4.9v2.2c0 .6.4 1 1 1h1.6c.6 0 1-.4 1-1v-1.1c.9.2 1.8.3 2.7.3s1.8-.1 2.7-.3v1.1c0 .6.4 1 1 1h1.6c.6 0 1-.4 1-1v-2.4c.8-.6 1.5-1.3 1.9-2.2h1c.6 0 1-.4 1-1v-2.5c0-.6-.4-1-1-1h-1.1c-.5-.9-1.2-1.7-2.1-2.4l.5-2.1c.1-.4-.3-.8-.7-.7l-2.5.7c-1.3-.5-2.7-.7-4.3-.7ZM8.4 8.3h4.2a.6.6 0 0 1 0 1.2H8.4a.6.6 0 0 1 0-1.2Zm7.9 2.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      />
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

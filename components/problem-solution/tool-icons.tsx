// icons for the scattered tools (left) and the connected modules (right) of section 2.
// The app-style ones are simple stand-ins in each app's colour; swap in official artwork if you have it.

type IconProps = { className?: string };

export function SheetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="14" y="6" width="28" height="36" rx="4" fill="#21a366" />
      <path d="M28 6h10a4 4 0 0 1 4 4v8H28z" fill="#33c481" />
      <path d="M28 18h14v12H28z" fill="#107c41" />
      <path d="M28 30h14v8a4 4 0 0 1-4 4H28z" fill="#185c37" />
      <rect x="6" y="13" width="22" height="22" rx="3.5" fill="#107c41" />
      <path d="m11.5 18.5 5.5 5.5-5.5 5.5M22.5 18.5 17 24l5.5 5.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mail-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4aa3ff" />
          <stop offset="1" stopColor="#1f6fe5" />
        </linearGradient>
      </defs>
      <rect x="5" y="11" width="38" height="27" rx="4.5" fill="url(#mail-body)" />
      <path d="m7 14 17 13 17-13" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M24 5a18.5 18.5 0 0 0-15.9 28L5.5 42.5l9.8-2.6A18.5 18.5 0 1 0 24 5Z" fill="#25d366" />
      <path d="M18.3 15.4c-.5-1-1-1-1.5-1h-1.2c-.4 0-1.1.2-1.7.8-.6.6-2.2 2.1-2.2 5.2s2.3 6 2.6 6.4c.3.4 4.4 7 10.8 9.5 5.3 2.1 6.4 1.7 7.6 1.6 1.2-.1 3.7-1.5 4.2-3 .5-1.5.5-2.7.4-3-.2-.3-.6-.4-1.2-.7l-4.2-2c-.6-.3-1-.4-1.4.2-.4.6-1.6 2-2 2.4-.4.4-.7.5-1.3.2-.6-.3-2.6-1-5-3.1-1.8-1.6-3.1-3.7-3.4-4.3-.4-.6 0-1 .3-1.3l.9-1.1c.3-.4.4-.6.6-1 .2-.4.1-.8 0-1.1l-1.9-4.8Z" fill="#fff" />
    </svg>
  );
}

export function DocsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="6" y="9" width="36" height="30" rx="5" fill="#e8eefc" />
      <rect x="11" y="15" width="18" height="3.6" rx="1.8" fill="#4f7cf0" />
      <rect x="11" y="22" width="26" height="3.6" rx="1.8" fill="#7ea3f7" />
      <rect x="11" y="29" width="14" height="3.6" rx="1.8" fill="#4f7cf0" />
      <rect x="28" y="29" width="9" height="3.6" rx="1.8" fill="#a9c1fa" />
    </svg>
  );
}

export function FileIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="file-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3d8bff" />
          <stop offset="1" stopColor="#1d5fe0" />
        </linearGradient>
      </defs>
      <path d="M13 5h15l10 10v24a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z" fill="url(#file-body)" />
      <path d="M28 5v7a3 3 0 0 0 3 3h7" fill="#8fbaff" />
      <path d="M15 23h16M15 29h16M15 35h10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function PeopleIcon({ className }: IconProps) {
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

export function PlaneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M44 5 4 21l14 5Z" fill="#8f9cf6" />
      <path d="M44 5 18 26l3 15Z" fill="#6c72ee" />
      <path d="M44 5 21 41l8-11Z" fill="#a5aef9" />
    </svg>
  );
}

export function SalesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="3.5" y="12" width="4.4" height="8.5" rx="1.4" className="bar-a" />
      <rect x="9.8" y="7.5" width="4.4" height="13" rx="1.4" className="bar-b" />
      <rect x="16.1" y="3" width="4.4" height="17.5" rx="1.4" className="bar-c" />
    </svg>
  );
}

export function GearIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10.3 2h3.4l.5 2.6a7.6 7.6 0 0 1 1.9 1.1l2.5-.9 1.7 2.9-2 1.7a7.7 7.7 0 0 1 0 2.2l2 1.7-1.7 2.9-2.5-.9a7.6 7.6 0 0 1-1.9 1.1l-.5 2.6h-3.4l-.5-2.6a7.6 7.6 0 0 1-1.9-1.1l-2.5.9-1.7-2.9 2-1.7a7.7 7.7 0 0 1 0-2.2l-2-1.7 1.7-2.9 2.5.9a7.6 7.6 0 0 1 1.9-1.1L10.3 2Zm1.7 6.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
      />
    </svg>
  );
}

export function RupeeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 5h11M7 9.5h11M9 5c5 0 5 9 0 9H7l8 6" />
    </svg>
  );
}

export function BoxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7Z" fill="currentColor" />
      <path d="M3.8 7.2 12 11.6l8.2-4.4M12 11.6v9.6" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" fill="none" opacity="0.85" />
    </svg>
  );
}

export function ReportIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M7 2.5h7.2L19 7.3V19a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19V5A2.5 2.5 0 0 1 7 2.5Z" />
      <path d="M8.5 12h7M8.5 15.5h7M8.5 8.8h3" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" fill="none" />
    </svg>
  );
}

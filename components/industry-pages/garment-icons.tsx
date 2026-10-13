// The line icons of the garment manufacturing page (app/industries/manufacturing/page.tsx). Each takes the colour
// of the round or square badge around it (currentColor).

const PATHS = {
  bag: ["M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", "M3 6h18", "M16 10a4 4 0 0 1-8 0"],
  palette: ["M12 22a10 10 0 1 1 10-10c0 2.5-2 3.5-3.5 3.5H16a2 2 0 0 0-1.5 3.3A2 2 0 0 1 12 22Z", "M7.5 10.5h.01", "M10.5 7h.01", "M15 7.5h.01"],
  scissors: ["M6 3a3 3 0 1 0 0 6a3 3 0 1 0 0-6", "M6 15a3 3 0 1 0 0 6a3 3 0 1 0 0-6", "M20 4 8.12 15.88", "M14.47 14.48 20 20", "M8.12 8.12 12 12"],
  layers: ["m12 2 10 5-10 5L2 7Z", "m2 17 10 5 10-5", "m2 12 10 5 10-5"],
  clip: ["M9 2h6v4H9z", "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", "M9 12h6", "M9 16h6"],
  truck: [
    "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    "M15 18H9",
    "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    "M7 16a2 2 0 1 0 0 4a2 2 0 1 0 0-4",
    "M17 16a2 2 0 1 0 0 4a2 2 0 1 0 0-4",
  ],
  chat: ["M7.9 20A9 9 0 1 0 4 16.1L2 22Z", "M8 12h.01", "M12 12h.01", "M16 12h.01"],
  slip: ["M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", "M16 8H8", "M16 12H8", "M13 16H8"],
  box: ["M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z", "m3.3 7 8.7 5 8.7-5", "M12 22V12"],
  calx: ["M8 2v4", "M16 2v4", "M3 10h18", "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "m14 14-4 4", "m10 14 4 4"],
  clock: ["M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18", "M12 7v5l3 2"],
  eye: ["M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z", "M12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6"],
  share: ["M18 2a3 3 0 1 0 0 6a3 3 0 1 0 0-6", "M6 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6", "M18 16a3 3 0 1 0 0 6a3 3 0 1 0 0-6", "m8.59 13.51 6.83 3.98", "m15.41 6.51-6.82 3.98"],
  trend: ["m22 7-8.5 8.5-5-5L2 17", "M16 7h6v6"],
  info: ["M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18", "M12 16v-4", "M12 8h.01"],
  quote: ["M3 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 6-4 6Z", "M15 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 6-4 6Z"],
} as const;

export type GarmentIconName = keyof typeof PATHS;

export function GarmentIcon({ name, className }: { name: GarmentIconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

/** The WhatsApp mark, filled, for the "WhatsApp us" buttons. */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.2 21.8l4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.7-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.6-.4Z" />
    </svg>
  );
}

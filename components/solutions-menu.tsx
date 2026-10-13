"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_HREF } from "@/lib/site-config";

type Tone = "sky" | "violet" | "indigo" | "rose" | "amber" | "teal";

// line icons (lucide-style), each taking the colour of its badge (currentColor)
const ICONS = {
  layers: ["m12 2 10 5-10 5L2 7Z", "m2 17 10 5 10-5", "m2 12 10 5 10-5"],
  users: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
  globe: ["M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20", "M2 12h20", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"],
  phone: ["M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z", "M12 18h.01"],
  grid: ["M3 3h7v7H3Z", "M14 3h7v7h-7Z", "M14 14h7v7h-7Z", "M3 14h7v7H3Z"],
  flow: ["M3 3h6v6H3Z", "M15 15h6v6h-6Z", "M6 9v3a3 3 0 0 0 3 3h6"],
  chat: ["M7.9 20A9 9 0 1 0 4 16.1L2 22Z"],
  cloud: ["M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"],
  check: ["M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18", "m9 12 2 2 4-4"],
} as const;

/** What we build, in the Solutions menu. A solution with its own page shows "You're here" on that page. */
export const SOLUTIONS: { title: string; copy: string; icon: keyof typeof ICONS; tone: Tone; href: string }[] = [
  { title: "ERP Software", copy: "Operations, inventory, purchases and reporting in one system.", icon: "layers", tone: "sky", href: "/#services" },
  { title: "CRM Software", copy: "Leads, follow-ups, sales and customer relationships.", icon: "users", tone: "rose", href: "/#services" },
  { title: "Website Development", copy: "Static and dynamic websites that bring in enquiries.", icon: "globe", tone: "violet", href: "/#services" },
  { title: "Mobile App Development", copy: "Android and iOS apps from one codebase.", icon: "phone", tone: "teal", href: "/#services" },
  { title: "Custom Web Applications", copy: "Software built around your exact workflow.", icon: "grid", tone: "indigo", href: "/#services" },
  { title: "Business Automation", copy: "Take repetitive manual work off your team.", icon: "flow", tone: "amber", href: "/#services" },
  { title: "WhatsApp Automation", copy: "Updates, reminders and alerts on WhatsApp.", icon: "chat", tone: "teal", href: "/#services" },
  { title: "SaaS Development", copy: "Turn your idea into a subscription product.", icon: "cloud", tone: "violet", href: "/#services" },
  { title: "Licensing & White-Label", copy: "Faxtor platforms under your own brand.", icon: "check", tone: "teal", href: "/#services" },
];

function SolutionIcon({ name }: { name: keyof typeof ICONS }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

/** The nine solutions as links, each an icon beside its name and a line; the menu and the phone menu share it. */
export function SolutionsList({ onPick }: { onPick?: () => void }) {
  const pathname = usePathname();
  return (
    <ul className="solutions-list">
      {SOLUTIONS.map(({ title, copy, icon, tone, href }) => {
        const here = !href.includes("#") && pathname === href;
        return (
          <li key={title}>
            <Link href={href} onClick={onPick} className="solution-link" aria-current={here ? "page" : undefined}>
              <span className="solution-icon" data-tone={tone}>
                <SolutionIcon name={icon} />
              </span>
              <span className="min-w-0">
                <span className="solution-title">
                  {title}
                  {here && <span className="solution-here">You’re here</span>}
                </span>
                <span className="solution-copy">{copy}</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * "Solutions" in the desktop header: opens on hover or click into a panel of the nine solutions and a call to
 * book a call; closes on leaving it, on Escape, on a click outside or on picking a link.
 */
export function SolutionsMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef(0);
  const panelId = useId();
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const onClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const show = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  // a short grace, so the pointer can cross the gap between the button and the panel
  const hide = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 150);
  };

  return (
    <div ref={rootRef} className="solutions-menu" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        className="nav-link solutions-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        data-open={open || undefined}
        // a pointer has already opened it on hover, so its click keeps it open; the keyboard toggles it
        onClick={(event) => (event.detail === 0 ? setOpen((value) => !value) : show())}
      >
        Solutions
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="solutions-chevron" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div id={panelId} className="solutions-panel" data-open={open || undefined} hidden={!open}>
        <div className="container-page">
          <div className="solutions-card">
            <SolutionsList onPick={() => setOpen(false)} />
            <div className="solutions-cta">
              <div>
                <p className="solutions-cta-eyebrow">Not sure where to start?</p>
                <p className="solutions-cta-title">Tell us what’s slowing you down. We’ll suggest the right fit.</p>
              </div>
              <Link href={CONTACT_HREF} onClick={() => setOpen(false)} className="btn btn-sm solutions-cta-btn">
                Book a 30-min call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

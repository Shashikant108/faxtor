"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { CONTACT_HREF } from "@/lib/site-config";
import { ContactForm } from "./contact-form";
import { ContactIntro } from "./contact-intro";

/**
 * A button that opens the contact form in a dialog, over the page, with the same invitation and ways to reach
 * us beside it as the contact section (components/contact-intro.tsx). It is a link to the contact section first,
 * so without JavaScript (and for search engines) it still leads to the form. The browser's own <dialog> keeps
 * keyboard focus inside, closes on Escape and hides the page from screen readers; a click on the dimmed
 * backdrop closes it too. While it is open the page behind does not scroll. Its content is only built the first
 * time it opens, so the page HTML does not carry a second copy of the contact heading and form (search engines
 * would read the heading twice, and first).
 */
export function ContactDialogButton({ children, className, needs }: { children: ReactNode; className?: string; needs: readonly string[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    // the page stays still behind the dialog, and gets its scrolling back when it closes (Escape included)
    const unlock = () => document.documentElement.classList.remove("dialog-open");
    // Escape fires "cancel" before closing, and not every browser follows it with "close", so both unlock
    dialog.addEventListener("close", unlock);
    dialog.addEventListener("cancel", unlock);
    return () => {
      dialog.removeEventListener("close", unlock);
      dialog.removeEventListener("cancel", unlock);
      unlock();
    };
  }, []);

  const open = (event: MouseEvent) => {
    // stop here too, so the smooth-scroll script does not also glide the page down to the contact section
    event.preventDefault();
    event.stopPropagation();
    document.documentElement.classList.add("dialog-open");
    // build the content first, so the dialog opens with it in place and focus lands inside
    flushSync(() => setMounted(true));
    dialogRef.current?.showModal();
  };

  return (
    <>
      <a href={CONTACT_HREF} className={className} onClick={open} aria-haspopup="dialog">
        {children}
      </a>

      <dialog
        ref={dialogRef}
        className="contact-dialog"
        aria-labelledby="dialog-contact-heading"
        // Lenis must not take the wheel inside the dialog, so its own content scrolls on small screens
        data-lenis-prevent=""
        onClick={(event) => {
          // a click on the dialog element itself, not on anything inside it, is a click on the backdrop
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {mounted && (
          <div className="contact-dialog-body">
            <button type="button" className="contact-dialog-close" aria-label="Close" onClick={() => dialogRef.current?.close()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-[45%] w-[45%]" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            <div className="contact-dialog-intro">
              <ContactIntro headingId="dialog-contact-heading" />
            </div>
            <ContactForm needs={needs} idPrefix="dialog-contact" />
          </div>
        )}
      </dialog>
    </>
  );
}

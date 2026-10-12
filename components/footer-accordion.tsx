"use client";

import { useEffect } from "react";

/**
 * On phones the footer's link columns fold away behind their headings, so the footer stays short; from
 * 640px up they are always open. The columns are rendered open, so tablet and desktop never see them shut,
 * and this closes them once the page is on a phone.
 */
export function FooterAccordion() {
  useEffect(() => {
    const phone = window.matchMedia("(max-width: 639.98px)");
    const sync = () => {
      document.querySelectorAll<HTMLDetailsElement>(".footer-column").forEach((column) => {
        column.open = !phone.matches;
      });
    };
    sync();
    phone.addEventListener("change", sync);
    return () => phone.removeEventListener("change", sync);
  }, []);

  return null;
}

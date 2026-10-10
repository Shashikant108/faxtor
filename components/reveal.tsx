"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades its content up into place the first time it scrolls into view. The look is `.reveal` in app/globals.css.
 * It waits until every image inside has loaded, so pictures, text and icons appear together. Wrap a whole
 * section's content in one Reveal (not each piece in its own) so the section arrives as one.
 */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let cancelled = false;

    // resolves once the image has loaded; a broken image must not hold the section back, so an error counts too
    const loaded = (img: HTMLImageElement) =>
      img.complete
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          });

    // a slow image may hold the section back only briefly, never leave it blank on screen
    const show = async () => {
      const images = Promise.all(Array.from(el.querySelectorAll("img"), loaded));
      await Promise.race([images, new Promise((resolve) => setTimeout(resolve, 400))]);
      if (!cancelled) el.classList.add("is-visible");
    };

    // start a little before the section enters the screen, so it is already on its way in when it shows,
    // instead of sitting blank until a share of a tall section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          void show();
        }
      },
      { rootMargin: "0px 0px 15% 0px" },
    );
    observer.observe(el);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

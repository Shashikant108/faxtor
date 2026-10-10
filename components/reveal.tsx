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

    const show = async () => {
      await Promise.all(Array.from(el.querySelectorAll("img"), loaded));
      if (!cancelled) el.classList.add("is-visible");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          void show();
        }
      },
      { threshold: 0.1 },
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

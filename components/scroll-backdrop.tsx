"use client";

import { useEffect, useRef } from "react";

type Rgb = [number, number, number];

/** "255 255 255" (a token in app/globals.css) as numbers. */
const readChannels = (name: string): Rgb => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const [r = 255, g = 255, b = 255] = raw.split(/\s+/).map(Number);
  return [r, g, b];
};

const smoothstep = (t: number) => t * t * (3 - 2 * t);
const mix = (a: Rgb, b: Rgb, t: number): Rgb => [
  Math.round(a[0] + (b[0] - a[0]) * t),
  Math.round(a[1] + (b[1] - a[1]) * t),
  Math.round(a[2] + (b[2] - a[2]) * t),
];

/**
 * The page's moving background. It is one fixed gradient behind everything; as the page scrolls it blends
 * from the tone of the fold in the middle of the screen to the tone of the next one, so the colour changes
 * with the scroll instead of switching at a hard edge. Folds name their tone with <Fold tone="...">, and the
 * tones themselves (--tone-<name>-top / -bottom) live in app/globals.css.
 */
export function ScrollBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backdrop = ref.current;
    if (!backdrop) return undefined;

    let frame = 0;
    const tones = new Map<string, { top: Rgb; bottom: Rgb }>();
    const toneOf = (name: string) => {
      let tone = tones.get(name);
      if (!tone) {
        tone = { top: readChannels(`--tone-${name}-top`), bottom: readChannels(`--tone-${name}-bottom`) };
        tones.set(name, tone);
      }
      return tone;
    };

    const paint = () => {
      frame = 0;
      const folds = Array.from(document.querySelectorAll<HTMLElement>("[data-fold]"));
      if (!folds.length) return;

      // where the middle of the screen is, against the middle of each fold
      const mid = window.innerHeight / 2;
      const centres = folds.map((fold) => {
        const rect = fold.getBoundingClientRect();
        return rect.top + rect.height / 2;
      });

      let index = 0;
      while (index < folds.length - 1 && centres[index + 1] <= mid) index += 1;
      const from = toneOf(folds[index].dataset.fold ?? "light");
      let top = from.top;
      let bottom = from.bottom;

      if (index < folds.length - 1 && centres[index] < mid) {
        const next = toneOf(folds[index + 1].dataset.fold ?? "light");
        const t = smoothstep((mid - centres[index]) / (centres[index + 1] - centres[index]));
        top = mix(from.top, next.top, t);
        bottom = mix(from.bottom, next.bottom, t);
      }

      backdrop.style.setProperty("--bd-top", top.join(" "));
      backdrop.style.setProperty("--bd-bottom", bottom.join(" "));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // folds can change height after images or fonts load
    const observer = new ResizeObserver(schedule);
    document.querySelectorAll("[data-fold]").forEach((fold) => observer.observe(fold));

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="page-backdrop" aria-hidden="true" />;
}

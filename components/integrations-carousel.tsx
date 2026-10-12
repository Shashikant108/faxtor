"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowIcon } from "./arrow-icon";

/**
 * The scrolling row of "Software Integrations". The row itself is the browser's own horizontal scroll (snapping
 * card by card), so a swipe on a phone is as smooth as any native list; the cards are rendered on the server and
 * passed in as children. Beside it an arrow each way, below it a dot for each screenful, and a slow autoplay that
 * moves one card at a time, waits while someone hovers, touches or tabs into the row, stops while the row is off
 * screen, and stays off for people who ask for less motion.
 */
export function IntegrationsCarousel({ children, label }: { children: ReactNode; label: string }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const measure = () => {
      const count = Math.max(1, Math.ceil((track.scrollWidth - 1) / track.clientWidth));
      const max = track.scrollWidth - track.clientWidth;
      setPages(count);
      setPage(max > 0 ? Math.round((track.scrollLeft / max) * (count - 1)) : 0);
    };

    // autoplay: one card every few seconds, back to the start at the end
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let paused = false;
    let onScreen = false;
    let resumeTimer = 0;
    const step = () => {
      if (paused || !onScreen || reduceMotion) return;
      const card = track.querySelector("li");
      const max = track.scrollWidth - track.clientWidth;
      if (!card || max <= 0) return;
      // the list is rendered twice, so once the first copy has scrolled by, the row jumps back by one copy
      // without animating; the second copy looks the same as the first, so the jump cannot be seen
      const copy = track.scrollWidth / 2;
      if (track.scrollLeft >= copy) track.scrollTo({ left: track.scrollLeft - copy, behavior: "instant" });
      const next = track.scrollLeft + card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || "0");
      track.scrollTo({ left: next > max + 2 ? 0 : next, behavior: "smooth" });
    };
    const timer = window.setInterval(step, 3200);
    const pause = () => {
      paused = true;
      window.clearTimeout(resumeTimer);
    };
    const resumeLater = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => (paused = false), 4000);
    };
    const visibility = new IntersectionObserver(([entry]) => (onScreen = entry.isIntersecting), { threshold: 0.4 });
    visibility.observe(track);

    const host = track.parentElement ?? track;
    host.addEventListener("pointerenter", pause);
    host.addEventListener("pointerleave", resumeLater);
    host.addEventListener("focusin", pause);
    host.addEventListener("focusout", resumeLater);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", resumeLater, { passive: true });
    track.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    measure();

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(resumeTimer);
      visibility.disconnect();
      host.removeEventListener("pointerenter", pause);
      host.removeEventListener("pointerleave", resumeLater);
      host.removeEventListener("focusin", pause);
      host.removeEventListener("focusout", resumeLater);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resumeLater);
      track.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const goTo = (target: number) => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const wrapped = (target + pages) % pages;
    track.scrollTo({ left: pages > 1 ? (max * wrapped) / (pages - 1) : 0, behavior: "smooth" });
  };

  return (
    <div className="logo-carousel">
      <div className="logo-band">
        <button type="button" className="logo-arrow left-1 sm:left-0" aria-label="Previous integrations" aria-controls="integrations-track" onClick={() => goTo(page - 1)}>
          <ArrowIcon className="h-[45%] w-[45%] rotate-180" />
        </button>
        <ul ref={trackRef} id="integrations-track" aria-label={label} className="logo-track">
          {children}
        </ul>
        <button type="button" className="logo-arrow right-1 sm:right-0" aria-label="Next integrations" aria-controls="integrations-track" onClick={() => goTo(page + 1)}>
          <ArrowIcon className="h-[45%] w-[45%]" />
        </button>
      </div>

      {pages > 1 && (
        <div className="logo-dots">
          {Array.from({ length: pages }, (_, index) => (
            <button
              key={index}
              type="button"
              className="logo-dot"
              aria-label={`Show integrations, part ${index + 1} of ${pages}`}
              aria-current={index === page || undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

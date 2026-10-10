"use client";

import { useEffect } from "react";

/**
 * Pauses the looping animations of every section that is off screen (CSS keyframes through `data-paused`,
 * see app/globals.css, and the SVG ones directly), so scrolling never pays for motion nobody can see.
 */
export function OffscreenPause() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target as HTMLElement;
          const paused = !entry.isIntersecting;
          section.toggleAttribute("data-paused", paused);
          section.querySelectorAll("svg").forEach((svg) => (paused ? svg.pauseAnimations() : svg.unpauseAnimations()));
        }
      },
      { rootMargin: "120px 0px" },
    );
    document.querySelectorAll("[data-fold]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}

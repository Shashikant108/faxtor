"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth, slightly eased scrolling for the whole page (Lenis), plus a gentle parallax: anything marked
 * `data-parallax="0.1"` drifts against the scroll by that share of its section's distance from the middle
 * of the screen (desktop only). In-page links glide to their section, stopping below the fixed header. Both
 * stay off for people who ask for less motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const header = document.querySelector<HTMLElement>(".site-header");
    const lenis = new Lenis({
      lerp: 0.09,
      autoRaf: true,
      anchors: { offset: -(header?.offsetHeight ?? 0) },
    });

    // touch screens scroll natively, a frame ahead of anything script can move, so a drifting picture there
    // would judder against the page; it only drifts on desktop, with a mouse or trackpad
    const desktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const drift = () => {
      if (!desktop.matches) {
        for (const layer of layers) layer.style.transform = "";
        return;
      }
      const middle = window.innerHeight / 2;
      for (const layer of layers) {
        const section = layer.closest<HTMLElement>("[data-fold]") ?? layer.parentElement;
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        // skip what is far off screen
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) continue;
        const offset = rect.top + rect.height / 2 - middle;
        // a 3D translate keeps the layer on the GPU, so moving it never repaints the picture
        layer.style.transform = `translate3d(0, ${(-offset * Number(layer.dataset.parallax)).toFixed(1)}px, 0)`;
      }
    };

    drift();
    lenis.on("scroll", drift);
    window.addEventListener("resize", drift);
    return () => {
      window.removeEventListener("resize", drift);
      lenis.destroy();
    };
  }, []);

  return null;
}

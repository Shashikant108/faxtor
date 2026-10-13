"use client";

import { useEffect, useRef, type ReactNode } from "react";

// how long each step stays the current one, how long the finished row rests, and the pause after the reset
const STEP_MS = 3200;
const HOLD_MS = 3600;
const RESET_MS = 700;

/**
 * The four "How we work" steps, played in turn like the design video: the current step's number lights up, its
 * picture finishes (labels pop in, ticks land, the build bar fills, the bars rise), the wavy line fills on to
 * the next step, and once all four are done the row rests, clears and plays again. It only marks the steps
 * (data-reached, data-current, data-link-done); app/globals.css draws every change. It runs while the row is on
 * screen, and people who ask for less motion see the finished row, still.
 */
export function HowWeWorkSteps({ children }: { children: ReactNode }) {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;
    const steps = Array.from(list.children) as HTMLElement[];

    // stage 0 is the cleared row, stage n means steps 1..n are reached and step n is the current one
    const show = (stage: number, current = true) => {
      steps.forEach((step, index) => {
        step.toggleAttribute("data-reached", index < stage);
        step.toggleAttribute("data-current", current && index === stage - 1);
        step.toggleAttribute("data-link-done", index < stage - 1);
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show(steps.length, false);
      return undefined;
    }

    let stage = 0;
    let timer = 0;
    const next = () => {
      stage = stage >= steps.length + 1 ? 0 : stage + 1;
      // past the last step the row stays finished, with no step lit, before it clears
      show(Math.min(stage, steps.length), stage <= steps.length);
      const wait = stage === 0 ? RESET_MS : stage > steps.length ? HOLD_MS : STEP_MS;
      timer = window.setTimeout(next, wait);
    };
    const stop = () => window.clearTimeout(timer);

    // play only while the row is on screen; it picks up where it was
    const visibility = new IntersectionObserver(
      ([entry]) => {
        stop();
        if (entry.isIntersecting) timer = window.setTimeout(next, stage === 0 ? 300 : STEP_MS);
      },
      { threshold: 0.35 },
    );
    visibility.observe(list);

    return () => {
      stop();
      visibility.disconnect();
    };
  }, []);

  return (
    <ol ref={listRef} className="steps">
      {children}
    </ol>
  );
}

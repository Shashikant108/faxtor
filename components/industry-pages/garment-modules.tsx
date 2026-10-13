"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "../arrow-icon";
import { GarmentIcon, type GarmentIconName } from "./garment-icons";

export type Stage = {
  name: string;
  icon: GarmentIconName;
  tone: "sky" | "rose" | "violet" | "teal" | "amber" | "indigo";
  desc: string;
  status: string;
  rows: { k: string; v: string; flag?: "ok" | "warn" }[];
  note: string;
};

// how long each stage stays on before the next one, while it plays by itself
const STAGE_MS = 4200;

/**
 * "One thread through your entire operation": one real order followed through the modules. The list of stages
 * sits beside the order card (above it on phones, as a row to swipe); the card shows what the system holds for
 * the order at that stage. It plays by itself while on screen and stops for good once someone picks a stage or
 * steps with the buttons; people who ask for less motion get the first stage, still.
 */
export function GarmentModules({ stages }: { stages: Stage[] }) {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const stage = stages[index];

  // each stage stays STAGE_MS from the moment it shows, so the line under it fills exactly until the next one;
  // the count only runs while the section is on screen
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let timer = 0;
    const visibility = new IntersectionObserver(
      ([entry]) => {
        window.clearTimeout(timer);
        if (entry.isIntersecting) timer = window.setTimeout(() => setIndex((current) => (current + 1) % stages.length), STAGE_MS);
      },
      { threshold: 0.3 },
    );
    visibility.observe(root);
    return () => {
      window.clearTimeout(timer);
      visibility.disconnect();
    };
  }, [auto, index, stages.length]);

  // on phones and tablets the stages are a row to swipe: keep the one on show in view, sliding the row only
  // (never the page)
  useEffect(() => {
    const list = listRef.current;
    const item = list?.children[index] as HTMLElement | undefined;
    if (!list || !item || getComputedStyle(list).overflowX === "visible") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({ left: item.offsetLeft - parseFloat(getComputedStyle(list).paddingLeft), behavior: reduce ? "auto" : "smooth" });
  }, [index]);

  const go = (next: number) => {
    setAuto(false);
    setIndex((next + stages.length) % stages.length);
  };

  return (
    <div ref={rootRef} className="gm-modules">
      <ol ref={listRef} className="gm-stages" aria-label="Modules, in the order an order moves through them">
        {stages.map((item, i) => (
          <li key={item.name}>
            <button type="button" className="gm-stage" aria-pressed={i === index} onClick={() => go(i)}>
              <span className="gm-stage-no">{String(i + 1).padStart(2, "0")}</span>
              <span className="gm-stage-icon" data-tone={item.tone}>
                <GarmentIcon name={item.icon} />
              </span>
              <span className="min-w-0">
                <span className="gm-stage-name">{item.name}</span>
                <span className="gm-stage-desc">{item.desc}</span>
              </span>
              {/* fills until the next stage while it plays by itself */}
              {auto && i === index && <span aria-hidden="true" className="gm-stage-timer" style={{ animationDuration: `${STAGE_MS}ms` }} />}
            </button>
          </li>
        ))}
      </ol>

      <div className="gm-order">
        <div className="gm-order-head">
          <div>
            <p className="gm-order-no">Order VN/JB/3050</p>
            <p className="gm-order-title">JK-1701 Mustard · Kurta–jacket set</p>
          </div>
          <span className="gm-order-status" data-done={index === stages.length - 1 || undefined}>
            {stage.status}
          </span>
        </div>

        {/* how far the order has come */}
        <div aria-hidden="true" className="gm-progress">
          {stages.map((item, i) => (
            <span key={item.name} data-on={i <= index || undefined} />
          ))}
        </div>

        {/* every stage is laid in the same place and only the one on show is visible, so the card keeps the height
            of the longest stage and nothing below it jumps as the stages change */}
        <div className="gm-panes" aria-live="polite">
          {stages.map((item, i) => (
            <div key={item.name} className="gm-pane" data-on={i === index || undefined} aria-hidden={i !== index}>
              <div className="gm-order-stage">
                <span className="gm-stage-icon" data-tone={item.tone}>
                  <GarmentIcon name={item.icon} />
                </span>
                <p className="gm-order-stage-name">{item.name}</p>
              </div>

              <dl className="gm-rows">
                {item.rows.map((row) => (
                  <div key={row.k} className="gm-row">
                    <dt>{row.k}</dt>
                    <dd data-flag={row.flag}>{row.v}</dd>
                  </div>
                ))}
              </dl>

              <p className="gm-note">
                <GarmentIcon name="info" className="gm-note-icon" />
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <div className="gm-order-nav">
          <button type="button" className="gm-nav-btn" onClick={() => go(index - 1)}>
            <ArrowIcon className="h-4 w-4 rotate-180" />
            Previous
          </button>
          <button type="button" className="gm-nav-btn gm-nav-next" onClick={() => go(index + 1)}>
            Next stage
            <ArrowIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

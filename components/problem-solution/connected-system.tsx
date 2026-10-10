"use client";

import { useEffect, useState } from "react";
import { BoxIcon, GearIcon, PeopleIcon, ReportIcon, RupeeIcon, SalesIcon } from "./tool-icons";

// Centres from the design in a 636 x 398 frame; widths in percent of the frame's width (cqw).
const FRAME = { w: 636, h: 398 };
const HUB = { x: 317, y: 208 };

const MODULES = [
  { key: "sales", label: "Sales", x: 222, y: 55, width: 25, tone: "violet", Icon: SalesIcon, update: "+3 new orders" },
  { key: "management", label: "Management", x: 477, y: 325, width: 31, tone: "violet", Icon: ReportIcon, update: "Report ready" },
  { key: "operations", label: "Operations", x: 469, y: 68, width: 29, tone: "violet", Icon: GearIcon, update: "2 tasks done" },
  { key: "customers", label: "Customers", x: 119, y: 185, width: 16.5, tone: "sky", Icon: PeopleIcon, update: "Reply sent", stacked: true },
  { key: "inventory", label: "Inventory", x: 179, y: 308, width: 29, tone: "amber", Icon: BoxIcon, update: "Stock synced" },
  { key: "finance", label: "Finance", x: 537, y: 203, width: 26.7, tone: "sky", Icon: RupeeIcon, update: "₹48,000 received" },
] as const;

const at = (x: number, y: number) => ({ left: `${(x / FRAME.w) * 100}%`, top: `${(y / FRAME.h) * 100}%` });
const spoke = (x: number, y: number, index: number) => {
  // a gentle curve from the hub out to the card, bending alternately left and right
  const bend = index % 2 ? 28 : -28;
  const mx = (HUB.x + x) / 2 + bend;
  const my = (HUB.y + y) / 2 - bend / 2;
  return `M${HUB.x} ${HUB.y} Q${mx} ${my} ${x} ${y}`;
};

/**
 * The solution side of section 2: Faxtor in the middle, every part of the business joined to it. Data keeps
 * running along the lines, and one module at a time lights up with a small update, like the reference video.
 */
export function ConnectedSystem() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % MODULES.length), 1900);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[636/398] w-full [container-type:inline-size]" aria-hidden="true">
      <svg viewBox={`0 0 ${FRAME.w} ${FRAME.h}`} className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="spoke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5aa8ff" />
            <stop offset="1" stopColor="#9b6cf7" />
          </linearGradient>
        </defs>
        {/* the dashed ring around the hub */}
        <circle cx={HUB.x} cy={HUB.y} r="128" fill="none" stroke="#b9c8f2" strokeWidth="1.2" strokeDasharray="3 7" className="ring-turn" />
        {MODULES.map((module, index) => {
          const d = spoke(module.x, module.y, index);
          return (
            <g key={module.key}>
              <path d={d} fill="none" stroke="url(#spoke)" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
              <circle r="4.2" fill="#3f8cff">
                <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${index * 0.43}s`} path={d} />
              </circle>
              <circle r="2.6" fill="#a77bff" opacity="0.9">
                <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${index * 0.43 + 1.3}s`} path={d} />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Faxtor at the centre */}
      <div className="absolute" style={{ ...at(HUB.x, HUB.y), width: "28cqw", transform: "translate(-50%, -50%)" }}>
        <span className="hub-ring absolute inset-0 rounded-full" />
        <div className="relative flex aspect-square flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_40%,#ffffff_55%,#eef3ff_100%)] shadow-[0_18px_40px_-16px_rgb(60_90_200/0.45),0_0_0_6px_rgb(255_255_255/0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.svg" alt="" width={200} height={200} className="w-[44%]" />
          <span className="-mt-[6%] font-logo text-[5.6cqw] font-medium leading-none text-[#3eb0c4]">Faxtor</span>
        </div>
      </div>

      {MODULES.map((module, index) => {
        const isActive = index === active;
        return (
          <div
            key={module.key}
            className="absolute"
            style={{ ...at(module.x, module.y), width: `${module.width}cqw`, transform: "translate(-50%, -50%)" }}
          >
            {/* the update this module just made */}
            <span
              className={`absolute bottom-full left-1/2 mb-[1.2cqw] flex -translate-x-1/2 items-center gap-[0.8cqw] whitespace-nowrap rounded-full bg-brand-navy px-[1.6cqw] py-[0.7cqw] font-display text-[max(1.9cqw,9px)] font-bold text-white shadow-lg transition-all duration-300 ${
                isActive ? "translate-y-0 opacity-100" : "translate-y-[0.8cqw] opacity-0"
              }`}
            >
              <span className="grid h-[2.4cqw] w-[2.4cqw] place-items-center rounded-full bg-[#22c55e] text-[1.6cqw]">✓</span>
              {module.update}
            </span>
            <div
              className={`flex items-center rounded-[2.2cqw] border bg-white/95 shadow-[0_12px_26px_-14px_rgb(50_70_160/0.4)] transition-all duration-300 ${
                "stacked" in module ? "flex-col gap-[1cqw] px-[1.4cqw] py-[1.8cqw]" : "gap-[2cqw] py-[1.5cqw] pl-[1.5cqw] pr-[2.6cqw]"
              } ${isActive ? "scale-[1.04] border-[#8fb3ff] shadow-[0_16px_30px_-12px_rgb(60_110_240/0.45)]" : "border-white"}`}
            >
              <span className="tone-icon [--icon-size:9cqw]" data-tone={module.tone}>
                <module.Icon />
              </span>
              <span className="font-display text-[max(2.5cqw,10.5px)] font-bold text-brand-navy">{module.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

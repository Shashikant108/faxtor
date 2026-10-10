"use client";

import { useEffect, useState } from "react";
import { ChatIcon, DocsIcon, FileIcon, MailIcon, PeopleIcon, PlaneIcon, SheetIcon } from "./tool-icons";

// Positions are the centres from the design, in a 521 x 619 frame; sizes are in percent of the frame's width
// (cqw), so the whole picture scales as one at every screen size.
const FRAME = { w: 521, h: 619 };

const CARDS = [
  { key: "sheets", label: "Spreadsheets", x: 241, y: 136, rotate: 8, size: 22, Icon: SheetIcon },
  { key: "emails", label: "Emails", x: 126, y: 199, rotate: -20, size: 20, Icon: MailIcon, badge: 19 },
  { key: "whatsapp", label: "WhatsApp", x: 351, y: 229, rotate: 18, size: 20, Icon: ChatIcon, badge: 29 },
  { key: "docs", label: "Documents", x: 246, y: 304, rotate: -12, size: 21, Icon: DocsIcon },
  { key: "tools", label: "Different Tools", x: 101, y: 369, rotate: -22, size: 20, Icon: FileIcon, badge: 7 },
  { key: "crm", label: "CRM", x: 381, y: 389, rotate: 15, size: 21, Icon: PeopleIcon },
] as const;

// loose sheets of paper drifting around the cards
const PAPERS = [
  { x: 116, y: 69, rotate: -30, size: 12 },
  { x: 456, y: 159, rotate: 25, size: 11 },
  { x: 481, y: 259, rotate: 20, size: 11 },
  { x: 446, y: 464, rotate: 25, size: 12 },
];

// the dashed threads between the cards: [from, to, bend]
const THREADS: [string, string, number][] = [
  ["sheets", "emails", -40],
  ["sheets", "whatsapp", 40],
  ["emails", "docs", 30],
  ["docs", "crm", -30],
  ["tools", "docs", -35],
  ["whatsapp", "crm", 30],
];

const at = (x: number, y: number) => ({ left: `${(x / FRAME.w) * 100}%`, top: `${(y / FRAME.h) * 100}%` });
const centre = (key: string) => CARDS.find((card) => card.key === key)!;

/**
 * The problem side of section 2: work spread over many tools. The cards drift on their own, their unread counts
 * keep changing, the threads between them run, and coins keep slipping into the hole below.
 */
export function ScatteredTools() {
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(CARDS.filter((card) => "badge" in card).map((card) => [card.key, (card as { badge: number }).badge])),
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    // the unread counts tick up and down a little, like a busy inbox
    const timer = window.setInterval(() => {
      setCounts((current) => {
        const keys = Object.keys(current);
        const key = keys[Math.floor(Math.random() * keys.length)];
        const step = Math.random() < 0.7 ? 1 + Math.floor(Math.random() * 2) : -1;
        return { ...current, [key]: Math.max(1, current[key] + step) };
      });
    }, 1300);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[521/619] w-full [container-type:inline-size]" aria-hidden="true">
      {/* threads between the cards */}
      <svg viewBox={`0 0 ${FRAME.w} ${FRAME.h}`} className="absolute inset-0 h-full w-full overflow-visible">
        {THREADS.map(([from, to, bend]) => {
          const a = centre(from);
          const b = centre(to);
          const mx = (a.x + b.x) / 2 + bend;
          const my = (a.y + b.y) / 2 - bend / 2;
          return (
            <path
              key={`${from}-${to}`}
              d={`M${a.x} ${a.y} Q${mx} ${my} ${b.x} ${b.y}`}
              className="thread"
              fill="none"
              stroke="#8ea6ec"
              strokeWidth="1.6"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />
          );
        })}
        {[[40, 180], [62, 250], [500, 320], [470, 500], [190, 545]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5.5" fill="#9fb4f5" className="dot-blink" />
        ))}
      </svg>

      {PAPERS.map((paper, index) => (
        <div
          key={index}
          className="absolute"
          style={{ ...at(paper.x, paper.y), width: `${paper.size}cqw`, transform: `translate(-50%, -50%) rotate(${paper.rotate}deg)` }}
        >
          <div className="paper-drift aspect-[4/5] rounded-[10%] bg-white/90 p-[18%] shadow-[0_6px_14px_-6px_rgb(60_80_160/0.35)]" style={{ animationDelay: `${index * -1.7}s` }}>
            <div className="h-[8%] w-3/4 rounded-full bg-[#c9d5f4]" />
            <div className="mt-[14%] h-[8%] w-full rounded-full bg-[#dbe3f7]" />
            <div className="mt-[14%] h-[8%] w-5/6 rounded-full bg-[#dbe3f7]" />
            <div className="mt-[14%] h-[8%] w-2/3 rounded-full bg-[#dbe3f7]" />
          </div>
        </div>
      ))}

      {/* the paper plane */}
      <div className="absolute" style={{ ...at(351, 39), width: "12cqw", transform: "translate(-50%, -50%)" }}>
        <PlaneIcon className="plane-glide block h-auto w-full" />
      </div>

      {/* the cards */}
      {CARDS.map((card, index) => (
        <div
          key={card.key}
          className="absolute"
          style={{ ...at(card.x, card.y), width: `${card.size}cqw`, transform: `translate(-50%, -50%) rotate(${card.rotate}deg)` }}
        >
          <div
            className="float-card relative flex aspect-square flex-col items-center justify-center gap-[6%] rounded-[22%] border border-white bg-gradient-to-br from-white to-[#eef2fe] shadow-[0_14px_26px_-12px_rgb(50_70_160/0.35),inset_0_-3px_0_rgb(210_220_250/0.8)]"
            style={{ animationDelay: `${index * -1.1}s` }}
          >
            <card.Icon className={`h-auto ${card.key === "crm" ? "w-[50%] text-[#3b6cf0]" : "w-[46%]"}`} />
            <span className="whitespace-nowrap text-center font-display text-[max(2.35cqw,8.5px)] font-bold leading-none text-brand-navy">
              {card.label}
            </span>
            {card.key in counts ? (
              <span
                key={counts[card.key]}
                className="badge-pop absolute -right-[6%] -top-[6%] grid h-[1.9em] min-w-[1.9em] place-items-center rounded-full bg-[#ef3b4f] px-[0.35em] font-display text-[max(2.4cqw,9px)] font-bold text-white shadow-[0_3px_8px_-2px_rgb(239_59_79/0.6)]"
              >
                {counts[card.key]}
              </span>
            ) : null}
          </div>
        </div>
      ))}

      {/* the funnel and the hole the coins slip into */}
      <div
        className="absolute bg-gradient-to-b from-[#f4f6fb] via-[#bcc4d6] to-[#7e889e]"
        style={{ ...at(304, 462), width: "22cqw", height: "20cqw", transform: "translateX(-50%)", clipPath: "polygon(30% 0, 70% 0, 100% 100%, 0 100%)", opacity: 0.85 }}
      />
      <div
        className="absolute rounded-[50%] bg-[radial-gradient(ellipse_at_center,#0f1424_0%,#2a3247_55%,#9aa3b8_80%,#dfe4ee_100%)] shadow-[0_8px_18px_-6px_rgb(20_30_60/0.5)]"
        style={{ ...at(304, 579), width: "34cqw", height: "9.5cqw", transform: "translate(-50%, -50%)" }}
      />
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className="coin-fall absolute"
          style={{ ...at(222, 420), width: "9cqw", animationDelay: `${index * 0.75}s` }}
        >
          <div className="grid aspect-square place-items-center rounded-full bg-gradient-to-br from-[#ffd76a] via-[#f7b52c] to-[#e08e0b] font-display text-[4.6cqw] font-extrabold text-[#a8650a] shadow-[inset_0_-3px_0_rgb(180_100_0/0.35),0_6px_12px_-4px_rgb(200_120_0/0.5)]">
            ₹
          </div>
        </div>
      ))}

      {/* the note */}
      <p
        className="absolute whitespace-nowrap font-hand text-[5.2cqw] font-medium leading-[1.05] text-[#4b5675]"
        style={{ ...at(126, 514), transform: "translate(-50%, -50%) rotate(-11deg)" }}
      >
        Opportunities and
        <br />
        revenue slip through
      </p>
      <svg viewBox="0 0 60 60" className="absolute w-[11cqw]" style={{ ...at(238, 528), transform: "translate(-50%, -50%)" }}>
        <path d="M6 10c22-6 38 10 38 34" fill="none" stroke="#2f3a56" strokeWidth="2.4" strokeLinecap="round" />
        <path d="m36 38 8 9 7-10" fill="none" stroke="#2f3a56" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

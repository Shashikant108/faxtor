import { DevicesArt } from "./devices-art";
import type { CSSProperties } from "react";
import { Fold } from "./fold";
import { HowWeWorkSteps } from "./how-we-work-steps";
import { BuildArt, CapIcon, GearIcon, GrowArt, PlanArt, RefreshIcon, TalkArt, TeamIcon } from "./process-icons";

// the small labels that pop in beside a step's picture while it plays: a coloured dot, or "team" (three faces and
// a tick) or "live" (a dark label with a green dot)
type Chip = { label: string; dot?: string; kind?: "team" | "live" };

const STEPS: { title: string[]; Art: typeof TalkArt; copy: string; chips: Chip[]; chipsAt?: "side" | "top" }[] = [
  {
    title: ["Tell us about", "your business"],
    Art: TalkArt,
    copy: "Share your goals, challenges and how your team works. No technical expertise needed.",
    chips: [
      { label: "Your goals", dot: "#3b82f6" },
      { label: "Your challenges", dot: "#f59e0b" },
      { label: "How your team works", dot: "#8b5cf6" },
    ],
  },
  {
    title: ["We plan the", "right solution"],
    Art: PlanArt,
    copy: "We map your processes, define the requirements and create a clear plan.",
    chips: [
      { label: "Processes mapped", dot: "#3b82f6" },
      { label: "Requirements defined", dot: "#f59e0b" },
      { label: "Clear plan", dot: "#22c55e" },
    ],
  },
  {
    title: ["We build, implement", "and train"],
    Art: BuildArt,
    copy: "We develop and implement the solution, onboard your team and provide staff training.",
    chips: [{ label: "Team trained", kind: "team" }, { label: "System live", kind: "live" }],
  },
  {
    title: ["We support", "and evolve"],
    Art: GrowArt,
    copy: "As your business grows, we help you refine the system, add new capabilities and keep improving.",
    chips: [{ label: "Capability added", dot: "#8b5cf6" }],
    chipsAt: "top",
  },
];

// motion: how the icon moves (the pi-* classes in app/globals.css): the gear turns, the cap bobs, the arrows
// come round, the team beats
const PROMISES = [
  { title: ["Smooth", "implementation"], Icon: GearIcon, tone: "#3ba4ff", motion: "pi-turn", copy: "Put the solution into practice with a planned rollout." },
  { title: ["Onboarding", "and staff training"], Icon: CapIcon, tone: "#9b6bff", motion: "pi-bob", copy: "Help your team understand the system and use it confidently." },
  { title: ["Ongoing", "improvement"], Icon: RefreshIcon, tone: "#38b6ff", motion: "pi-cycle", copy: "Add new modules and capabilities as your needs evolve." },
  { title: ["A long-term", "partner"], Icon: TeamIcon, tone: "#8f8cff", motion: "pi-beat", copy: "Work with a team that understands your business beyond launch." },
];

/**
 * Section 5, in two parts. "How we work": four steps in a row on desktop, joined by a wavy line, two on
 * tablet, and on phones a list with the picture left of the text; the steps play in turn
 * (components/how-we-work-steps.tsx). "A partner throughout": a dark band with
 * the promise and four points, with the live laptop and phone on the right (below the text on phones).
 * Every picture is drawn in code (components/process-icons.tsx, components/devices-art.tsx).
 */
export function HowWeWorkSection() {
  return (
    <>
      <Fold tone="light" id="how-we-work" className="section-clip isolate">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
          <div className="container-page py-14 sm:py-20 lg:pb-[3vw] lg:pt-[2.6vw]">
            <div className="text-center">
              <p className="eyebrow">How we work</p>
              <span className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
              <h2 className="heading-section mt-6 lg:mt-[1.4vw]">
                You know your business.{" "}
                <span className="text-gradient block lg:mx-auto lg:w-fit">We know how to build the solution.</span>
              </h2>
              <p className="copy-sm mx-auto mt-4 max-w-[640px] lg:mt-[1vw] lg:max-w-none">
                <span className="lg:block">Tell us what you do, what is holding you back, and where you want to go. </span>
                <span className="lg:block">
                  We’ll take it from there, from understanding your needs to building, launching and helping you make the most of your software.
                </span>
              </p>
            </div>

            <HowWeWorkSteps>
              {STEPS.map(({ title, Art, copy, chips, chipsAt = "side" }, index) => (
                <li key={copy} className="step">
                  <div className="step-head">
                    <span className="step-badge" data-even={index % 2 === 1 || undefined}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* the wavy line to the next step, desktop only */}
                    {index < STEPS.length - 1 && (
                      <span aria-hidden="true" className="step-link">
                        <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-full w-full overflow-visible">
                          <path d="M0 26C14 4 34 2 50 28S86 30 100 18" fill="none" stroke="url(#step-line)" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
                          {/* the same line in strong blue, drawn on once this step is done */}
                          <path
                            d="M0 26C14 4 34 2 50 28S86 30 100 18"
                            pathLength={1}
                            className="step-link-fill"
                            fill="none"
                            stroke="url(#step-line-done)"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                        <span className="step-dot" />
                      </span>
                    )}
                    <span className="step-art">
                      <Art className="h-full w-full" />
                      {chips.length > 0 && (
                        <span aria-hidden="true" className="step-chips" data-at={chipsAt}>
                          {chips.map(({ label, dot, kind }) => (
                            <span key={label} className="step-chip" data-kind={kind}>
                              {kind === "team" ? (
                                <span className="step-chip-faces">
                                  <i style={{ background: "#7c9cff" }} />
                                  <i style={{ background: "#f59ec0" }} />
                                  <i style={{ background: "#a78bfa" }} />
                                </span>
                              ) : (
                                <i className="step-chip-dot" style={{ background: kind === "live" ? "#22c55e" : dot }} />
                              )}
                              {label}
                              {kind === "team" && (
                                <svg viewBox="0 0 12 12" className="step-chip-tick">
                                  <circle cx="6" cy="6" r="6" fill="#22c55e" />
                                  <path d="M3.4 6.2l1.8 1.8 3.4-3.6" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </span>
                          ))}
                        </span>
                      )}
                    </span>
                  </div>
                  <div>
                    <h3 className="step-title">
                      {title[0]} <br className="max-sm:hidden" />
                      {title[1]}
                    </h3>
                    <p className="step-copy">{copy}</p>
                  </div>
                </li>
              ))}
            </HowWeWorkSteps>
            {/* the gradients of the wavy lines: soft at rest, strong blue once filled */}
            <svg aria-hidden="true" className="absolute h-0 w-0">
              <defs>
                <linearGradient id="step-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#8fb8ff" />
                  <stop offset="1" stopColor="#b99cff" />
                </linearGradient>
                <linearGradient id="step-line-done" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#2f7bff" />
                  <stop offset="1" stopColor="#5b5bf0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </Fold>

      {/* the band paints its own dark background, so it asks the page backdrop for a light tone: a deep one would
          bleed navy into the light sections either side while scrolling */}
      <Fold tone="tint" id="partner" className="partner isolate overflow-hidden text-white">
        <svg aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="none" className="partner-waves">
          <path d="M0 420C240 330 520 360 760 440S1180 560 1440 470V600H0Z" fill="#fff" opacity="0.035" />
          <path d="M0 500C300 430 560 470 820 530S1200 590 1440 540V600H0Z" fill="#fff" opacity="0.04" />
        </svg>

        <div className="container-page relative pb-14 pt-14 sm:pb-20 sm:pt-20 lg:pb-[2.6vw] lg:pt-[2.4vw]">
          <div className="relative z-10 lg:max-w-[52%]">
            <p className="eyebrow">A partner throughout</p>
            <span className="eyebrow-line mt-3 lg:mt-[0.5vw]" />
            <h2 className="heading-section mt-6 text-white lg:mt-[1.4vw]">
              More than just development.{" "}
              <span className="text-gradient-light block lg:whitespace-nowrap">A long-term partner for your business.</span>
            </h2>
            <p className="partner-copy mt-4 lg:mt-[1vw]">
              We don’t just build software and hand it over. We work alongside you to ensure the solution is implemented, your
              team is trained and you continue to get value from it as your business evolves.
            </p>
          </div>

          <DevicesArt className="partner-art" />

          <ul className="partner-points">
            {PROMISES.map(({ title, Icon, tone, motion, copy }, index) => (
              <li key={copy} className="partner-point">
                <span className="partner-icon" style={{ color: tone, "--i": index } as CSSProperties}>
                  <Icon className={`h-[46%] w-[46%] ${motion}`} />
                </span>
                <div>
                  <h3 className="partner-title">
                    {title[0]} <br className="max-sm:hidden" />
                    {title[1]}
                  </h3>
                  <p className="partner-text">{copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Fold>
    </>
  );
}

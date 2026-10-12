import Link from "next/link";
import { CONTACT_HREF } from "@/lib/site-config";
import { ArrowIcon } from "./arrow-icon";
import { DevicesArt } from "./devices-art";
import { Fold } from "./fold";
import { BuildArt, CapIcon, GearIcon, GrowArt, PlanArt, RefreshIcon, TalkArt, TeamIcon } from "./process-icons";

const STEPS = [
  {
    title: ["Tell us about", "your business"],
    Art: TalkArt,
    copy: "Share your goals, challenges and how your team works. No technical expertise needed.",
  },
  {
    title: ["We plan the", "right solution"],
    Art: PlanArt,
    copy: "We map your processes, define the requirements and create a clear plan.",
  },
  {
    title: ["We build, implement", "and train"],
    Art: BuildArt,
    copy: "We develop and implement the solution, onboard your team and provide staff training.",
  },
  {
    title: ["We support", "and evolve"],
    Art: GrowArt,
    copy: "As your business grows, we help you refine the system, add new capabilities and keep improving.",
  },
];

const PROMISES = [
  { title: ["Smooth", "implementation"], Icon: GearIcon, tone: "#3ba4ff", copy: "Put the solution into practice with a planned rollout." },
  { title: ["Onboarding", "and staff training"], Icon: CapIcon, tone: "#9b6bff", copy: "Help your team understand the system and use it confidently." },
  { title: ["Ongoing", "improvement"], Icon: RefreshIcon, tone: "#38b6ff", copy: "Add new modules and capabilities as your needs evolve." },
  { title: ["A long-term", "partner"], Icon: TeamIcon, tone: "#8f8cff", copy: "Work with a team that understands your business beyond launch." },
];

/**
 * Section 5, in two parts. "How we work": four steps in a row on desktop, joined by a wavy line, two on
 * tablet, and on phones a list with the picture left of the text. "A partner throughout": a dark band with
 * the promise, four points and the button, with the laptop and phone on the right (below the text on phones).
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

            <ol className="steps">
              {STEPS.map(({ title, Art, copy }, index) => (
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
                        </svg>
                        <span className="step-dot" />
                      </span>
                    )}
                    <span className="step-art">
                      <Art className="h-full w-full" />
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
            </ol>
            {/* the gradient every wavy line uses */}
            <svg aria-hidden="true" className="absolute h-0 w-0">
              <defs>
                <linearGradient id="step-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#8fb8ff" />
                  <stop offset="1" stopColor="#b99cff" />
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
            {PROMISES.map(({ title, Icon, tone, copy }) => (
              <li key={copy} className="partner-point">
                <span className="partner-icon" style={{ color: tone }}>
                  <Icon className="h-[46%] w-[46%]" />
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

          <div className="relative z-10 mt-10 flex justify-center lg:mt-[2vw]">
            <Link href={CONTACT_HREF} className="btn btn-lg partner-cta">
              Let’s build what’s next for your business
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Fold>
    </>
  );
}

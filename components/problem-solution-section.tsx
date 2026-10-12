import type { CSSProperties } from "react";
import Link from "next/link";
import { CONTACT_HREF } from "@/lib/site-config";
import { ArrowIcon } from "./arrow-icon";
import { BarsIcon, BellIcon, ClockIcon, CoinsIcon, DocumentIcon, TrendIcon } from "./challenge-icons";
import { Fold } from "./fold";
import { ConnectedSystem } from "./problem-solution/connected-system";
import { ScatteredTools } from "./problem-solution/scattered-tools";

const CHALLENGES = [
  { label: "More manual work", Icon: ClockIcon, tone: "sky" },
  { label: "Duplicate data", Icon: DocumentIcon, tone: "violet" },
  { label: "Missed follow-ups", Icon: BellIcon, tone: "rose" },
  { label: "No real-time visibility", Icon: BarsIcon, tone: "sky" },
  { label: "Revenue leakage", Icon: CoinsIcon, tone: "amber" },
  { label: "Difficult to scale", Icon: TrendIcon, tone: "violet" },
] as const;

/**
 * Section 2, the problem and the solution. Text, list, chips and the button are code and use the shared
 * tokens in app/globals.css; the three pictures (the scattered tools, the flow between, the connected system)
 * are artwork from the design and float gently. From desktop the parts sit where they do in the design,
 * placed in percent of one 1774 x 887 frame so the whole thing scales together; below that they stack.
 */
export function ProblemSolutionSection() {
  return (
    <Fold tone="lavender" id="solutions" className="section-clip isolate">
      {/* the whole section, background picture included, is on the page from the start */}
      <div className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
      {/* the same side space as every section; the frame inside keeps the design's proportions */}
      <div className="container-page py-14 sm:py-20 lg:pb-[2.5vw] lg:pt-0">
      <div className="relative lg:aspect-[1774/887]">
        {/* label, heading and intro */}
        <div className="relative z-10 text-center lg:absolute lg:inset-x-0 lg:top-[3.4%]">
          <p className="eyebrow">The Problem &amp; The Solution</p>
          <span className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
          <h2 className="heading-section mt-6 lg:mt-[1.5vw]">
            Important information is scattered
            <span className="text-gradient block lg:inline-block lg:w-full">across different tools and people.</span>
          </h2>
          <p className="copy-sm mx-auto mt-4 max-w-[640px] lg:mt-[1.2vw] lg:max-w-none">
            {/* on desktop the two sentences sit on two lines, as in the design */}
            <span className="lg:block lg:whitespace-nowrap">As your business grows, disconnected tools and manual processes can slow your team down. </span>
            <span className="lg:block lg:whitespace-nowrap">Faxtor brings your people, processes and information together.</span>
          </p>
        </div>

        {/* the problem: scattered tools */}
        <div className="mx-auto mt-10 w-full max-w-[460px] lg:absolute lg:left-[0.8%] lg:top-[21%] lg:mt-0 lg:w-[29.4%] lg:max-w-none">
          <ScatteredTools />
        </div>

        {/* the challenges */}
        <div className="relative z-10 mt-10 lg:absolute lg:left-[32.1%] lg:top-[34.2%] lg:mt-0 lg:w-[17.6%]">
          <span className="chip" data-tone="rose">The Challenges</span>
          <ul className="mt-3 grid gap-1 lg:mt-[0.6vw] lg:gap-[0.22vw]">
            {CHALLENGES.map(({ label, Icon, tone }, index) => (
              <li key={label}>
                <div
                  className="card-soft row-cycle flex items-center gap-3 border border-transparent px-3 py-2.5 lg:h-[3.5vw] lg:gap-[0.9vw] lg:px-[0.9vw] lg:py-0"
                  style={{ "--row-delay": `${index * 1.5}s` } as CSSProperties}
                >
                  <span className="tone-icon [--icon-size:2.5rem] lg:[--icon-size:2.25vw]" data-tone={tone}>
                    <Icon />
                  </span>
                  <span className="item-label">{label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* the flow between problem and solution (desktop only) */}
        <div className="pointer-events-none max-lg:hidden lg:absolute lg:left-[49.8%] lg:top-[37.2%] lg:w-[16.8%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/problem-solution/flow-wave.webp" alt="" width={298} height={325} className="sway block h-auto w-full" />
        </div>

        {/* the solution */}
        <div className="mt-12 lg:absolute lg:left-[66.7%] lg:top-[34.2%] lg:mt-0">
          <span className="chip" data-tone="sky">The Solution</span>
          <h3 className="heading-sub mt-3 lg:mt-[0.6vw]">One connected system.</h3>
        </div>

        <div className="mx-auto mt-6 w-full max-w-[640px] lg:absolute lg:left-[64.1%] lg:top-[44.2%] lg:mt-0 lg:w-[35.9%] lg:max-w-none">
          <ConnectedSystem />
        </div>

        {/* call to action */}
        <div className="mt-10 flex justify-center lg:absolute lg:bottom-[2.5%] lg:left-[51.2%] lg:mt-0 lg:-translate-x-1/2">
          <Link href={CONTACT_HREF} className="btn btn-lg">
            Discuss your requirements
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
      </div>
      </div>
    </Fold>
  );
}

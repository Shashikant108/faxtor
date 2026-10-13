import { ArrowIcon } from "./arrow-icon";
import { BarsIcon, BellIcon, ClockIcon, CoinsIcon, DocumentIcon, TrendIcon } from "./challenge-icons";
import { Fold } from "./fold";

// the order follows the revised design: revenue leakage second, duplicate data fifth
const CHALLENGES = [
  { label: "More manual work", note: "Time spent on repetitive tasks across different tools.", Icon: ClockIcon },
  { label: "Revenue leakage", note: "Errors, missed invoices and untracked opportunities.", Icon: CoinsIcon },
  { label: "Missed follow-ups", note: "Leads, orders or approvals slipping through.", Icon: BellIcon },
  { label: "No real-time visibility", note: "Hard to get a clear view of what’s happening.", Icon: BarsIcon },
  { label: "Duplicate data", note: "Information stored in multiple places.", Icon: DocumentIcon },
  { label: "Difficult to scale", note: "Systems become harder to manage as you grow.", Icon: TrendIcon },
];

/**
 * Section 2, the problem and the solution. On the left a soft red card lists what scattered tools lead to; an
 * arrow points to the right, to the connected system: one picture from the design, title included (the Faxtor
 * dashboard on a laptop with its modules around it, public/problem-solution/connected-system.webp). On tablet and phones the
 * two stack and the arrow points down.
 */
export function ProblemSolutionSection() {
  return (
    <Fold tone="lavender" id="solutions" className="section-clip isolate">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
        <div className="container-page pb-14 pt-8 sm:py-20 lg:pb-[3vw] lg:pt-[1.4vw]">
          <div className="text-center">
            <p className="eyebrow">The Problem &amp; The Solution</p>
            <span className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
            <h2 className="heading-section mt-6 lg:mt-[1.5vw]">
              From scattered tools to <span className="text-gradient">one connected system.</span>
            </h2>
            <p className="copy-sm mx-auto mt-4 max-w-[640px] lg:mt-[1vw] lg:max-w-none">
              Bring your people, processes and information together with a solution built around the way your business works.
            </p>
          </div>

          <div className="ps-grid">
            {/* the problem */}
            <div className="ps-problem">
              <span className="chip" data-tone="rose">
                The Challenges
              </span>
              <h3 className="heading-sub mt-4 lg:mt-[1vw]">Different tools. More issues.</h3>
              <p className="ps-lead">Important information is scattered, leading to:</p>
              <ul className="mt-4 lg:mt-[1vw]">
                {CHALLENGES.map(({ label, note, Icon }) => (
                  <li key={label} className="ps-challenge">
                    <span className="tone-icon ps-challenge-icon" data-tone="rose">
                      <Icon />
                    </span>
                    <span>
                      <span className="item-label block">{label}</span>
                      <span className="ps-challenge-note">{note}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* from problem to solution */}
            <span aria-hidden="true" className="ps-arrow">
              <ArrowIcon className="h-[42%] w-[42%] max-lg:rotate-90" />
            </span>

            {/* the solution: one picture, its title and line included; the title is also here as text for screen
                readers and search engines, since words inside a picture cannot be read */}
            <div className="ps-solution">
              <h3 className="sr-only">The solution: one connected system</h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/problem-solution/connected-system.webp"
                alt="The solution, one connected system: bring your key processes together in a single, easy-to-use platform. The Faxtor dashboard on a laptop, connected to quotations and estimates, inventory, orders, customers, invoices, production tracking and reports."
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="ps-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </Fold>
  );
}

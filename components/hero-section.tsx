import Link from "next/link";
import { CONTACT_HREF } from "@/lib/site-config";
import { ArrowIcon } from "./arrow-icon";
import { Fold } from "./fold";
import { AchieveMoreIcon, SaveTimeIcon, WorkSmarterIcon } from "./benefit-icons";
import { HeroVideo } from "./hero-video";
import { SiteHeader } from "./site-header";

const BENEFITS = [
  { label: "Save Time", Icon: SaveTimeIcon, tone: "sky" },
  { label: "Work Smarter", Icon: WorkSmarterIcon, tone: "violet" },
  { label: "Achieve More", Icon: AchieveMoreIcon, tone: "indigo" },
] as const;

/**
 * The hero. Colours, type sizes, buttons and the page frame come from the shared tokens and classes in
 * app/globals.css; only this section's own layout (the grid, where the video sits, the spacing) lives here.
 * From desktop it fills one screen, with the text on the left and the video on the right; below that it stacks.
 */
export function HeroSection() {
  return (
    <Fold tone="light" className="isolate overflow-hidden lg:flex lg:h-svh lg:min-h-[620px] lg:flex-col">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/hero/hero-bg.webp')] bg-cover bg-[position:right_center] bg-no-repeat"
      />
      <SiteHeader />

      <div className="container-page relative z-10 pb-16 pt-14 sm:pt-20 lg:flex lg:flex-1 lg:items-center lg:pb-[2vw] lg:pt-[min(2.9vw,6svh)]">
        <div className="lg:grid lg:w-full lg:grid-cols-[48vw_minmax(0,1fr)] lg:items-center">
          {/* above the video, so its soft left edge can never dim the text where the two meet on a wide screen */}
          <div className="relative z-10">
            <div className="max-w-[760px] lg:max-w-none">
              <p className="eyebrow">From chaos to clarity</p>
              <span className="eyebrow-line mt-3" />

              <h1 className="heading-display mt-6 lg:mt-[min(2.2vw,3svh)]">
                Software Your
                <span className="text-gradient inline-block">Business Deserves.</span>
              </h1>

              <p className="copy-lead mt-7 lg:mt-[min(1.2vw,2.4svh)]">Every business works differently.</p>
              <p className="copy-body mt-2 max-w-[720px] lg:max-w-none">
                {/* on desktop the lines break where the design breaks them */}
                <span className="lg:block lg:whitespace-nowrap">Faxtor brings your sales, orders, operations and payments together </span>
                <span className="lg:block lg:whitespace-nowrap">in one powerful system, built around your processes, your teams </span>
                <span className="lg:block lg:whitespace-nowrap">and the way you work.</span>
              </p>

              <Link href={CONTACT_HREF} className="btn btn-lg mt-9 lg:mt-[min(2.4vw,3.4svh)]">
                Discuss your requirements
                <ArrowIcon className="h-5 w-5" />
              </Link>
            </div>

            <ul className="mt-12 flex flex-wrap items-start gap-y-8 sm:mt-14 lg:-ml-[2.65vw] lg:mt-[min(3vw,6svh)]">
              {BENEFITS.map((benefit) => (
                <li key={benefit.label} className="benefit">
                  <span className="benefit-icon" data-tone={benefit.tone}>
                    <benefit.Icon />
                  </span>
                  <span className="benefit-label">{benefit.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <HeroVideo className="mt-10 lg:-ml-[5vw] lg:mt-0 lg:w-[calc(100%+10vw)] lg:-translate-x-[0.5vw]" />
        </div>
      </div>
    </Fold>
  );
}

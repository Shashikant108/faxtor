import { Fold } from "./fold";
import {
  CertificateArt,
  CloudArt,
  ConnectArt,
  CubesArt,
  GlobeArt,
  ScaleArt,
  ScreensArt,
  ShieldArt,
  SupportGearArt,
  TeamArt,
} from "./why-icons";

const PROOF = [
  { stat: "1000K+", title: "Platform Users", Art: TeamArt, copy: "Across our products and client solutions" },
  { title: "Global Clients", Art: GlobeArt, copy: "Working with businesses in India and international markets" },
  { title: "In-House Team", Art: CubesArt, copy: "Design, development, deployment and support all handled by our team" },
  { title: "Licensing Ready", Art: CertificateArt, copy: "Source code licensing and white-label options to launch under your own brand" },
];

const STRENGTHS = [
  { title: "Secure Cloud Hosting", Art: CloudArt, copy: "Deployed on AWS with industry best practices" },
  { title: "Built-in Security", Art: ShieldArt, copy: "Your data and application security taken care of" },
  { title: "Web & Mobile Apps", Art: ScreensArt, copy: "Works seamlessly across desktop, tablet and mobile" },
  { title: "Scalable Architecture", Art: ScaleArt, copy: "Designed to grow with your business" },
  { title: "Seamless Integrations", Art: ConnectArt, copy: "Connects with the tools your business uses" },
  { title: "Ongoing Support", Art: SupportGearArt, copy: "Regular updates and a responsive team when you need us" },
];

/**
 * Section 7, why Faxtor. Four proof cards (four in a row on desktop, two on tablet, a list on phones with the
 * picture left of the text), a labelled divider, then six strengths (six in a row, three on tablet, two on
 * phones). Every picture is drawn in code (components/why-icons.tsx); every title and number is real text.
 */
export function WhyFaxtorSection() {
  return (
    <Fold tone="tint" id="why-faxtor" className="section-clip isolate">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
        <div className="container-page py-14 sm:py-20 lg:py-[3.2vw]">
          <div className="text-center">
            <p className="eyebrow">Why Faxtor</p>
            <span className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
            <h2 className="heading-section mt-6 lg:mt-[1.4vw]">
              The expertise to <span className="text-gradient sm:whitespace-nowrap">build, deploy and grow</span>{" "}
              <span className="block">your software.</span>
            </h2>
            <p className="copy-sm mx-auto mt-4 max-w-[640px] lg:mt-[1vw] lg:max-w-none">
              <span className="lg:block">A specialized team, global exposure and end-to-end capabilities to deliver software </span>
              <span className="lg:block">that works in the real world.</span>
            </p>
          </div>

          <ul className="why-cards">
            {PROOF.map(({ stat, title, Art, copy }) => (
              <li key={title} className="card-glass why-card">
                <span className="why-art">
                  <Art className="h-full w-full" />
                </span>
                <div>
                  {stat && <p className="why-stat">{stat}</p>}
                  <h3 className="why-title">{title}</h3>
                  <p className="why-copy">{copy}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="why-divider">
            <span aria-hidden="true" className="why-divider-line" />
            <h3 className="eyebrow min-w-0 text-center sm:shrink-0">Built for how businesses work</h3>
            <span aria-hidden="true" className="why-divider-line" />
          </div>

          <ul className="why-strengths">
            {STRENGTHS.map(({ title, Art, copy }) => (
              <li key={title} className="why-strength">
                <span className="why-strength-art">
                  <Art className="h-full w-full" />
                </span>
                <h4 className="card-title">{title}</h4>
                <p className="card-copy">{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fold>
  );
}

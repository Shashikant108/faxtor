import type { Metadata } from "next";
import Link from "next/link";
import {
  AiChipArt,
  ApproachBoardArt,
  BuildRightIcon,
  HeroTeamArt,
  PartnerIcon,
  SimpleIcon,
  TeamCardsArt,
  UnderstandIcon,
} from "@/components/about-art";
import { ArrowIcon } from "@/components/arrow-icon";
import { Fold } from "@/components/fold";
import {
  ConstructionIcon,
  CustomBuildArt,
  EducationIcon,
  FinanceIcon,
  ManufacturingIcon,
  MembershipIcon,
  RealEstateIcon,
  RetailIcon,
  TelecomIcon,
} from "@/components/industry-icons";
import { CONTACT_HREF, CONTACT_INFO } from "@/lib/site-config";

const DESCRIPTION =
  "Faxtor is a custom software company in Bangalore. Our in-house team builds ERPs, CRMs, AI tools and industry platforms around the way your business works.";

export const metadata: Metadata = {
  title: "About Us",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Faxtor", description: DESCRIPTION },
};

// TODO: confirm these figures; they are the ones in the About Us design
const HERO_STATS = [
  { value: "10+", label: "Years of product building" },
  { value: "1M+", label: "Platform users" },
  { value: "20+", label: "Industries served" },
];
const TEAM_STATS = [
  { value: "6+", label: "Years in the industry" },
  { value: "50+", label: "Projects delivered" },
  { value: "100%", label: "In-house team" },
  { value: "Long-term", label: "Partnership approach" },
];

const PRINCIPLES = [
  { title: "Understand your business", Icon: UnderstandIcon, tone: "sky", copy: "We take the time to learn your workflows, challenges and goals." },
  { title: "Build the right solution", Icon: BuildRightIcon, tone: "violet", copy: "Custom tools shaped around your processes and goals." },
  { title: "Be a long-term partner", Icon: PartnerIcon, tone: "teal", copy: "We support and evolve the system as your business grows." },
  { title: "Keep it simple", Icon: SimpleIcon, tone: "amber", copy: "Practical, scalable and easy for your team to use." },
];

const INDUSTRY_TILES = [
  { name: "Education & Training", Icon: EducationIcon, tone: "sky" },
  { name: "Manufacturing", Icon: ManufacturingIcon, tone: "violet" },
  { name: "Retail & E‑commerce", Icon: RetailIcon, tone: "rose" },
  { name: "Financial Services", Icon: FinanceIcon, tone: "teal" },
  { name: "Real Estate", Icon: RealEstateIcon, tone: "indigo" },
  { name: "Construction", Icon: ConstructionIcon, tone: "amber" },
  { name: "Telecom & Field Services", Icon: TelecomIcon, tone: "violet" },
  { name: "Memberships & Networks", Icon: MembershipIcon, tone: "rose" },
];

/**
 * The About Us page. Seven parts: who we are with three figures, our approach (dark), our philosophy (its heading
 * centred over a row of four points), what we do (its heading centred over eight industries), our AI capabilities
 * (dark), our team with four figures, and an invitation to talk. The others put the text first and its picture
 * beside it on desktop (below it on phones). Every picture
 * is drawn in code (components/about-art.tsx and the home page's art), so the page needs no photos.
 */
export default function AboutPage() {
  return (
    <main>
      {/* 1. who we are */}
      <Fold tone="light" className="section-clip isolate">
        <div className="relative">
          <div aria-hidden="true" data-parallax="0.04" className="section-bg logo-glow-bg" />
          <div aria-hidden="true" className="header-space" />
          <div className="container-page about-split pb-14 pt-8 sm:pb-20 sm:pt-12 lg:pb-[3.4vw] lg:pt-[2.4vw]">
            <div>
              <p className="eyebrow">About Faxtor</p>
              <span aria-hidden="true" className="eyebrow-line mt-3 lg:mt-[0.5vw]" />
              <h1 className="about-title mt-6 lg:mt-[1.4vw]">
                People who build solutions <span className="text-gradient">with purpose.</span>
              </h1>
              <p className="about-copy">
                Faxtor is a custom software company based in Bangalore. We build business applications, from ERPs and
                CRMs to industry-specific platforms, that help businesses simplify operations, improve efficiency and grow
                with confidence.
              </p>
              <dl className="about-stats">
                {HERO_STATS.map(({ value, label }) => (
                  <div key={label} className="about-stat">
                    <dt className="sr-only">{label}</dt>
                    <dd className="about-stat-value">{value}</dd>
                    <dd className="about-stat-label">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <HeroTeamArt className="about-art" />
          </div>
        </div>
      </Fold>

      {/* 2. our approach */}
      <Fold tone="tint" className="about-dark isolate overflow-hidden text-white">
        <div className="container-page about-split py-12 sm:py-16 lg:py-[2.4vw]">
          <div>
            <p className="eyebrow">Our approach</p>
            <span aria-hidden="true" className="eyebrow-line mt-3 lg:mt-[0.5vw]" />
            <h2 className="heading-section mt-6 text-white lg:mt-[1.4vw]">
              From a deep understanding <span className="text-gradient-light">to a solution that works.</span>
            </h2>
            <p className="partner-copy mt-4 lg:mt-[1vw]">
              We take the time to understand your business: how you work, what is slowing you down and what you want to
              achieve. Our team then designs, builds and deploys a custom platform that fits your processes, with practical
              training and ongoing support so you get real value from day one.
            </p>
          </div>
          <ApproachBoardArt className="about-art about-art-sm" />
        </div>
      </Fold>

      {/* 3. our philosophy */}
      <Fold tone="light" className="section-clip isolate">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
          <div className="container-page py-14 sm:py-20 lg:py-[3.4vw]">
            <div className="text-center">
              <p className="eyebrow">Our philosophy</p>
              <span aria-hidden="true" className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
              <h2 className="heading-section mt-6 lg:mt-[1.4vw]">
                Business first, <span className="text-gradient">technology next.</span>
              </h2>
              {/* on desktop the copy runs in two lines */}
              <p className="about-copy mx-auto lg:max-w-none">
                <span className="lg:block">Technology should simplify, not complicate. That is why we pair a strong understanding of business </span>
                <span className="lg:block">with technical expertise, to build software that fits your processes, not the other way around.</span>
              </p>
            </div>
            <ul className="about-points">
              {PRINCIPLES.map(({ title, Icon, tone, copy }) => (
                <li key={title} className="card-glass about-point">
                  <span className="tone-icon about-point-icon" data-tone={tone}>
                    <Icon />
                  </span>
                  <h3 className="card-title mt-3 lg:mt-[0.8vw]">{title}</h3>
                  <p className="card-copy">{copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Fold>

      {/* 4. what we do */}
      <Fold tone="tint" className="section-clip isolate">
        <div className="relative">
          <div aria-hidden="true" data-parallax="0.04" className="section-bg logo-glow-bg" />
          <div className="container-page py-14 sm:py-20 lg:py-[3.4vw]">
            <div className="text-center">
              <p className="eyebrow">What we do</p>
              <span aria-hidden="true" className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
              <h2 className="heading-section mt-6 lg:mt-[1.4vw]">
                We solve real <span className="text-gradient">business problems.</span>
              </h2>
              {/* on desktop the copy runs in two lines */}
              <p className="about-copy mx-auto lg:max-w-none">
                <span className="lg:block">Whether it is a founder running operations on Excel or an admin team buried under </span>
                <span className="lg:block">WhatsApp messages, we turn chaos into clarity, whatever the industry.</span>
              </p>
              <Link href="/#services" className="about-link">
                Explore our solutions
                <ArrowIcon className="h-[1.1em] w-[1.1em]" />
              </Link>
            </div>
            <ul className="about-tiles" aria-label="Industries we work with">
              {INDUSTRY_TILES.map(({ name, Icon, tone }) => (
                <li key={name} className="card-glass about-tile">
                  <span className="industry-icon" data-tone={tone}>
                    <Icon />
                  </span>
                  <span className="about-tile-name">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Fold>

      {/* 5. our AI capabilities */}
      <Fold tone="tint" className="about-dark isolate overflow-hidden text-white">
        <div className="container-page about-split about-split-flip py-12 sm:py-16 lg:py-[2.4vw]">
          <div>
            <p className="eyebrow">Our AI capabilities</p>
            <span aria-hidden="true" className="eyebrow-line mt-3 lg:mt-[0.5vw]" />
            <h2 className="heading-section mt-6 text-white lg:mt-[1.4vw]">
              AI that works <span className="text-gradient-light">for your business.</span>
            </h2>
            <p className="partner-copy mt-4 lg:mt-[1vw]">
              We build practical AI capabilities that fit into your real workflows, from intelligent automation and data
              insights to custom AI tools, so your team can work faster, make better decisions and unlock new
              opportunities.
            </p>
            <Link href={CONTACT_HREF} className="about-link about-link-light">
              Explore AI possibilities
              <ArrowIcon className="h-[1.1em] w-[1.1em]" />
            </Link>
          </div>
          <AiChipArt className="about-art about-art-sm" />
        </div>
      </Fold>

      {/* 6. our team */}
      <Fold tone="light" className="section-clip isolate">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
          <div className="container-page about-split py-12 sm:py-16 lg:py-[2.4vw]">
            <div>
              <p className="eyebrow">Our team</p>
              <span aria-hidden="true" className="eyebrow-line mt-3 lg:mt-[0.5vw]" />
              <h2 className="heading-section mt-6 lg:mt-[1.4vw]">
                A dedicated in-house team <span className="text-gradient">with a big commitment.</span>
              </h2>
              <p className="about-copy">
                Our developers, designers and support professionals work closely with clients to turn ideas into practical,
                reliable solutions. We are hands-on, responsive and genuinely invested in the success of every project.
              </p>
              <dl className="about-stats about-stats-4">
                {TEAM_STATS.map(({ value, label }) => (
                  <div key={label} className="about-stat">
                    <dt className="sr-only">{label}</dt>
                    <dd className="about-stat-value">{value}</dd>
                    <dd className="about-stat-label">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <TeamCardsArt className="about-art about-art-sm" />
          </div>
        </div>
      </Fold>

      {/* 7. let's build together */}
      <Fold tone="tint" className="isolate">
        <div className="container-page pb-16 pt-4 sm:pb-24 lg:pb-[4vw] lg:pt-[1vw]">
          <div className="about-cta">
            <div>
              <p className="eyebrow">Let’s build together</p>
              <h2 className="heading-section mt-4 lg:mt-[1vw]">
                Have a business challenge <span className="text-gradient">we can help with?</span>
              </h2>
              <p className="about-copy">
                Tell us what you are trying to improve, automate or build. We would love to learn about your business.
              </p>
              <div className="about-cta-actions">
                <Link href={CONTACT_HREF} className="btn btn-sm btn-fit">
                  Book free 30 min consultation call
                  <ArrowIcon className="h-[1.1em] w-[1.1em]" />
                </Link>
                <a href={`mailto:${CONTACT_INFO.email}`} className="about-ghost">
                  Get in touch
                </a>
              </div>
            </div>
            <CustomBuildArt className="about-cta-art" />
          </div>
        </div>
      </Fold>
    </main>
  );
}

import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { ContactDialogButton } from "@/components/contact-dialog";
import { ContactSection } from "@/components/contact-section";
import { Fold } from "@/components/fold";
import { GarmentIcon, WhatsAppIcon, type GarmentIconName } from "@/components/industry-pages/garment-icons";
import { GarmentModules, type Stage } from "@/components/industry-pages/garment-modules";
import { SERVICES } from "@/components/services-section";
import { SITE_URL, WHATSAPP_HREF } from "@/lib/site-config";

const PATH = "/industries/manufacturing";
const TITLE = "Software for Garment & Apparel Manufacturers";
const DESCRIPTION =
  "Custom software for garment and apparel factories: orders, designs, production jobs, karigars, fabric stock, purchase orders, dispatch and agent payments in one system.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["garment manufacturing software", "apparel ERP", "karigar job work tracking", "fabric inventory software", "ethnic wear manufacturing software"],
  alternates: { canonical: PATH },
  openGraph: { url: PATH, title: `${TITLE} | Faxtor`, description: DESCRIPTION },
};

type Tone = "sky" | "rose" | "violet" | "teal" | "amber" | "indigo";

const BRANDS = [
  { name: "Avyaan", sub: "Garments" },
  { name: "Varnit", sub: "" },
  { name: "1AM", sub: "Studio Wear" },
];

// the daily reality on the left, what Faxtor puts in its place on the right
const COMPARE: { before: [GarmentIconName, string, string]; after: [GarmentIconName, string, string]; tone: Tone }[] = [
  {
    before: ["chat", "Orders live in WhatsApp chats", "Sizes, colours and changes get scattered across screenshots and calls."],
    after: ["bag", "Order intake", "Every order recorded with design, sizes, colours, customer and agent. No more digging through chats."],
    tone: "sky",
  },
  {
    before: ["slip", "Job slips on paper", "Which karigar has which design, how much fabric, due when? No one is sure."],
    after: ["scissors", "Production jobs", "Jobs assigned to masters and karigars with fabric metres, costs and expected delivery per component."],
    tone: "violet",
  },
  {
    before: ["box", "Stock counted from memory", "Fabric runs out mid-production, or dead stock quietly piles up."],
    after: ["layers", "Fabric & inventory", "Live stock of fabrics and finished goods, with consumption tracked against every job."],
    tone: "teal",
  },
  {
    before: ["calx", "Month-end surprises", "Actual cost per piece, delayed orders and agent dues become visible only when it is too late."],
    after: ["truck", "Dispatch & payments", "Delivery tracking, customer-wise outstanding and agent commissions, all in one view."],
    tone: "amber",
  },
];

const STAGES: Stage[] = [
  {
    name: "Order intake",
    icon: "bag",
    tone: "sky",
    desc: "Every order recorded with design, sizes, colours, customer and agent.",
    status: "Order recorded",
    rows: [
      { k: "Design", v: "JK-1701 Mustard" },
      { k: "Sizes", v: "38 × 3 · 40 × 2 · 42 × 3" },
      { k: "Total quantity", v: "8 pcs" },
      { k: "Customer", v: "Retailer, Pune" },
      { k: "Agent", v: "Assigned, commission auto-set" },
    ],
    note: "Entered once by the office. Changes are edited on the order, not sent as a new message.",
  },
  {
    name: "Design & catalogue",
    icon: "palette",
    tone: "rose",
    desc: "Design sets with images, components and fabric requirements, shareable with customers.",
    status: "Design set linked",
    rows: [
      { k: "Components", v: "Kurta · Jacket · Pant · Embroidery" },
      { k: "Kurta fabric", v: "1.80 m per piece" },
      { k: "Jacket fabric", v: "0.90 m per piece" },
      { k: "Pant fabric", v: "1.50 m per piece" },
      { k: "Catalogue", v: "Shareable with customer" },
    ],
    note: "Fabric needs come from the design set, so nobody estimates metres by eye.",
  },
  {
    name: "Production jobs",
    icon: "scissors",
    tone: "violet",
    desc: "Jobs assigned to masters and karigars with fabric metres, costs and delivery dates.",
    status: "In production",
    rows: [
      { k: "Kurta", v: "Irshad Master" },
      { k: "Jacket", v: "Saddam Master" },
      { k: "Pant", v: "Hamid Bhai" },
      { k: "Embroidery", v: "Unassigned", flag: "warn" },
      { k: "Assigned · Due", v: "4 Jul → 4 Aug 2026" },
    ],
    note: "Unassigned components are flagged, so a job never waits silently.",
  },
  {
    name: "Fabric & inventory",
    icon: "layers",
    tone: "teal",
    desc: "Live stock of fabrics and finished goods, with consumption tracked against every job.",
    status: "Fabric issued",
    rows: [
      { k: "Kurta fabric issued", v: "14.4 m" },
      { k: "Jacket fabric issued", v: "7.2 m" },
      { k: "Pant fabric issued", v: "12 m" },
      { k: "Total for this job", v: "33.6 m" },
      { k: "Stock after issue", v: "Updated live", flag: "ok" },
    ],
    note: "Every metre issued is tied to this job, so wastage shows up job by job.",
  },
  {
    name: "Purchase orders",
    icon: "clip",
    tone: "amber",
    desc: "Supplier POs raised and received, matched to what production actually needs.",
    status: "PO matched",
    rows: [
      { k: "Trigger", v: "Jacket fabric below reorder level" },
      { k: "PO raised to", v: "Fabric supplier" },
      { k: "Quantity", v: "40 m, Mustard jacket fabric" },
      { k: "Status", v: "Received", flag: "ok" },
    ],
    note: "You buy what production needs, not what someone remembers to order.",
  },
  {
    name: "Dispatch & payments",
    icon: "truck",
    tone: "indigo",
    desc: "Delivery tracking, customer-wise outstanding and agent commissions in one view.",
    status: "Dispatched",
    rows: [
      { k: "Cost per piece", v: "₹540.00" },
      { k: "Total cost", v: "₹4,320.00" },
      { k: "Dispatched", v: "8 pcs to Retailer, Pune", flag: "ok" },
      { k: "Customer outstanding", v: "Tracked on the order" },
      { k: "Agent commission", v: "Calculated automatically" },
    ],
    note: "Exact cost per piece before you commit, and every rupee owed visible in one view.",
  },
];

const RESULTS: { n: string; t: string; d: string; icon: GarmentIconName; tone: Tone }[] = [
  { n: "30%", t: "Fewer delivery delays", d: "Expected dates on every job, delayed orders flagged before customers call.", icon: "truck", tone: "sky" },
  { n: "12-15 hrs", t: "Saved every week", d: "Coordination that took calls, registers and follow-ups now takes a glance.", icon: "clock", tone: "violet" },
  { n: "15%", t: "Less fabric wastage", d: "Consumption planned per component and tracked against actuals, job by job.", icon: "scissors", tone: "teal" },
  { n: "100%", t: "Order visibility", d: "Every order, its stage, its cost and its karigar, visible to you at any moment.", icon: "eye", tone: "amber" },
];

const PROOF = [
  { n: "< 8 weeks", t: "to go live" },
  { n: "1,100+", t: "designs tracked" },
  { n: "0", t: "paper job slips" },
];

const FAQS = [
  ["Will my masters and karigars need to learn software?", "No. The system mirrors how your factory already works. Your office enters orders and jobs; masters can see their assigned work on a phone if you want them to."],
  ["We keep everything in Excel and registers today. What happens to that?", "We bring your existing designs, customers and stock into the system during setup, so your team doesn't retype anything."],
  ["How long does it take to go live?", "Our ethnic-wear client was live in under 8 weeks. After the first conversation we give you a clear timeline for your factory."],
  ["Do we pay per user, every month?", "No per-user rent forever. You own the system and your data, and it is white-label ready."],
  ["Does it work on the factory floor?", "Yes. Office desktop, factory floor tablet or your phone, with the same live data."],
  ["What will it cost?", "It depends on the modules your factory needs. After the 30-minute conversation we share a clear scope and a quote, with no obligation."],
];

// the services a garment system draws on, in the home page's own cards
const SERVICE_TITLES = ["ERP Software", "CRM Software", "Custom Web Applications", "Business Automation", "WhatsApp Automation", "Mobile App Development"];

// in pairs on phones, so the two long names come last, each on a row of its own (wide)
const OTHER_INDUSTRIES: { name: string; tone: Tone; wide?: boolean }[] = [
  { name: "Education & Training", tone: "sky" },
  { name: "Retail & E‑commerce", tone: "rose" },
  { name: "Import Export & Trading", tone: "teal" },
  { name: "Real Estate & Property", tone: "indigo" },
  { name: "Telecom & Field Services", tone: "violet" },
  { name: "Financial Services & Lending", tone: "teal" },
  { name: "Construction & Project Management", tone: "amber", wide: true },
  { name: "Memberships, Networks & Associations", tone: "rose", wide: true },
];

/** Breadcrumbs and the questions, in schema.org terms, so search results can show them. */
function GarmentStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/#industries` },
          { "@type": "ListItem", position: 3, name: "Garment & Apparel Manufacturing", item: `${SITE_URL}${PATH}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />;
}

/**
 * The garment and apparel manufacturing page, opened from the Manufacturing card in Industries. Built from the
 * home page's parts (eyebrows, headings, glass cards, tone icons and chips, and the soft backgrounds), in seven
 * parts: the promise beside a picture of Faxtor in a garment factory, what goes wrong today against what Faxtor puts in
 * its place, one order followed through the modules, results and a client's story, the services behind it with
 * the other industries, common questions, and an invitation to talk.
 */
export default function GarmentManufacturingPage() {
  const needs = SERVICES.map((service) => service.title);
  return (
    <main>
      <GarmentStructuredData />

      {/* 1. the promise */}
      <Fold tone="light" className="section-clip isolate">
        <div className="relative">
          {/* the home page hero's own backdrop */}
          <div aria-hidden="true" data-parallax="0.1" className="hero-bg" />
          <div aria-hidden="true" className="header-space" />
          <div className="container-page pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-[2.6vw] lg:pt-[5vw]">
            {/* the picture sits right of the words on desktop, below them on phones and tablets */}
            <div className="about-split">
              <div>
                <p className="eyebrow">For garment &amp; apparel manufacturers</p>
                <span aria-hidden="true" className="eyebrow-line mt-3 lg:mt-[0.5vw]" />
                <h1 className="about-title mt-6 lg:mt-[1.4vw]">
                  See every order, job &amp; payment <span className="text-gradient">in one screen.</span>
                </h1>
                <p className="about-copy">
                  Custom software that runs your factory end to end: from order intake and design to production, job workers,
                  fabric, dispatch and agent payments.
                </p>
                <div className="gm-actions">
                  <ContactDialogButton needs={needs} className="btn btn-lg btn-fit">
                    Book free 30 min consultation call
                    <ArrowIcon className="h-5 w-5" />
                  </ContactDialogButton>
                  <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="gm-whatsapp">
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp us
                  </a>
                </div>

                {/* the brands, in a row like the home hero's benefits: separated by thin lines, without icons */}
                <div className="gm-trust">
                  <p className="gm-trust-label">Trusted by garment brands</p>
                  <ul className="gm-brands">
                    {BRANDS.map(({ name, sub }) => (
                      <li key={name} className="gm-brand">
                        <span className="gm-brand-name">{name}</span>
                        {sub && <span className="gm-brand-sub">{sub}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* the first thing on screen, so it loads straight away */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/industries/garment-hero.webp"
                alt="Faxtor for garment factories: a laptop and phone showing the Faxtor dashboard with total orders, production, dispatch, payments due and recent orders, beside fabric rolls and a measuring tape; manage orders, track production, control inventory and handle payments, from raw material to production, dispatch and happy customers."
                width={1536}
                height={1024}
                fetchPriority="high"
                decoding="async"
                className="gm-hero-picture"
              />
            </div>

          </div>
        </div>
      </Fold>

      {/* 2. what goes wrong today */}
      <Fold tone="lavender" className="section-clip isolate">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
          <div className="container-page py-14 sm:py-20 lg:py-[3vw]">
            <div className="text-center">
              <p className="eyebrow">What goes wrong today</p>
              <span aria-hidden="true" className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
              <h2 className="heading-section mt-6 lg:mt-[1.4vw]">
                Your factory runs. <span className="text-gradient block lg:mx-auto lg:w-fit">But do you know where everything is right now?</span>
              </h2>
            </div>

            <div className="gm-compare">
              <div className="gm-compare-head" aria-hidden="true">
                <span className="chip" data-tone="rose">
                  The daily reality
                </span>
                <span />
                <span className="chip" data-tone="sky">
                  What Faxtor puts in its place
                </span>
              </div>
              <ul>
                {COMPARE.map(({ before, after, tone }, index) => (
                  <li key={before[1]} className="gm-compare-row" style={{ "--i": index } as CSSProperties}>
                    <div className="gm-compare-cell gm-before">
                      <span className="tone-icon gm-compare-icon" data-tone="rose">
                        <GarmentIcon name={before[0]} />
                      </span>
                      <span>
                        <span className="sr-only">Today: </span>
                        <span className="item-label block">{before[1]}</span>
                        <span className="ps-challenge-note">{before[2]}</span>
                      </span>
                    </div>
                    <span aria-hidden="true" className="gm-compare-arrow">
                      <ArrowIcon className="h-[45%] w-[45%] max-lg:rotate-90" />
                    </span>
                    <div className="gm-compare-cell gm-after">
                      <span className="tone-icon gm-compare-icon" data-tone={tone}>
                        <GarmentIcon name={after[0]} />
                      </span>
                      <span>
                        <span className="sr-only">With Faxtor: </span>
                        <span className="item-label block">{after[1]}</span>
                        <span className="ps-challenge-note">{after[2]}</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fold>

      {/* 3. one order through the modules */}
      <Fold tone="tint" className="section-clip isolate">
        <div className="relative">
          {/* the "What we build" backdrop, in the logo's colours */}
          <div aria-hidden="true" data-parallax="0.04" className="section-bg logo-glow-bg" />
          <div className="container-page py-14 sm:py-20 lg:py-[3vw]">
            <div className="text-center">
              <p className="eyebrow">Modules included</p>
              <span aria-hidden="true" className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
              <h2 className="heading-section mt-6 lg:mt-[1.4vw]">
                One thread through <span className="text-gradient">your entire operation.</span>
              </h2>
              <p className="about-copy mx-auto lg:max-w-none">
                Follow one real order through the system. Pick a module, or let it play. Modules are chosen per factory, so
                you only pay for what you use.
              </p>
            </div>
            <GarmentModules stages={STAGES} />
          </div>
        </div>
      </Fold>

      {/* 4. results and a client's story */}
      <Fold tone="tint" className="section-clip isolate">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
          <div className="container-page py-14 sm:py-20 lg:py-[3vw]">
            <div className="text-center">
              <p className="eyebrow">What changes for you</p>
              <span aria-hidden="true" className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
              <h2 className="heading-section mt-6 lg:mt-[1.4vw]">
                Results our <span className="text-gradient">manufacturing clients see.</span>
              </h2>
            </div>

            <ul className="gm-results">
              {RESULTS.map(({ n, t, d, icon, tone }) => (
                <li key={t} className="card-glass gm-result">
                  <div className="gm-result-head">
                    <span className="tone-icon gm-result-icon" data-tone={tone}>
                      <GarmentIcon name={icon} />
                    </span>
                    <p className="gm-result-value">{n}</p>
                  </div>
                  <h3 className="card-title">{t}</h3>
                  <p className="card-copy">{d}</p>
                </li>
              ))}
            </ul>

            <div className="gm-journey">
              <div>
                <p className="eyebrow">A client’s journey</p>
                <span aria-hidden="true" className="eyebrow-line mt-3 lg:mt-[0.5vw]" />
                <h3 className="heading-sub mt-5 lg:mt-[1.2vw]">An ethnic-wear manufacturer, ~450 orders a month</h3>
                <p className="about-copy">
                  Kurta–jacket sets and sherwanis, dispatched to retailers across Maharashtra, Gujarat and beyond. Orders came
                  in over WhatsApp, job slips were on paper, and fabric stock lived in the owner’s head. Faxtor mapped their
                  exact workflow (design sets, size-wise quantities, karigar assignments, fabric consumption per component) and
                  had the team live in under 8 weeks. Today every one of their 1,100+ active designs, 450 monthly orders and
                  each karigar’s job is tracked in one place, with cost per piece known before production starts.
                </p>
                {/* the three figures in one strip, a line between them */}
                <dl className="gm-proof">
                  {PROOF.map(({ n, t }) => (
                    <div key={t} className="gm-proof-item">
                      <dt className="sr-only">{t}</dt>
                      <dd className="gm-proof-value">{n}</dd>
                      <dd className="gm-proof-label">{t}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <figure className="gm-quote">
                <GarmentIcon name="quote" className="gm-quote-mark" />
                <blockquote className="gm-quote-text">
                  Managing our raw material stock, production pipeline and dispatch used to involve three different tools.
                  Faxtor built a custom solution that mirrors how we actually work, and reduced delays by almost 30%.
                </blockquote>
                <figcaption className="gm-quote-by">
                  <span aria-hidden="true" className="gm-quote-avatar">
                    RK
                  </span>
                  <span>
                    <span className="block font-bold text-white">Rahul Kothari</span>
                    <span className="block text-[#c9d4f7]">Owner, Avyaan Garments</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Fold>

      {/* 5. the services behind it, and the other industries */}
      <Fold tone="tint" className="section-clip isolate">
        <div className="relative">
          {/* the "What we build" backdrop, in the logo's colours */}
          <div aria-hidden="true" data-parallax="0.04" className="section-bg logo-glow-bg" />
          <div className="container-page py-14 sm:py-20 lg:py-[3vw]">
            <div className="text-center">
              <p className="eyebrow">Services we would use</p>
              <span aria-hidden="true" className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
              <h2 className="heading-section mt-6 lg:mt-[1.4vw]">
                The services behind <span className="text-gradient">a system like this.</span>
              </h2>
            </div>
            <ul className="gm-services">
              {SERVICES.filter((service) => SERVICE_TITLES.includes(service.title)).map(({ title, Art, copy }) => (
                <li key={title} className="card-glass service-card">
                  <div className="service-head">
                    <span className="service-art">
                      <Art className="h-full w-full" />
                    </span>
                    <h3 className="card-title">{title}</h3>
                  </div>
                  <p className="card-copy">{copy}</p>
                </li>
              ))}
            </ul>

            <div className="gm-others">
              <p className="gm-trust-label">Other industries we build for</p>
              <ul className="gm-others-list">
                {OTHER_INDUSTRIES.map(({ name, tone, wide }) => (
                  <li key={name} className={wide ? "gm-other-wide" : undefined}>
                    <Link href="/#industries" className="industry-tag gm-other" data-tone={tone}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fold>

      {/* 6. common questions */}
      <Fold tone="light" className="section-clip isolate">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
          <div className="container-page py-14 sm:py-20 lg:py-[3vw]">
            <div className="text-center">
              <p className="eyebrow">Common questions</p>
              <span aria-hidden="true" className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
              <h2 className="heading-section mt-6 lg:mt-[1.4vw]">
                Questions factory owners <span className="text-gradient">ask us.</span>
              </h2>
            </div>
            {/* one list, a line between questions; sharing a name, only one answer is open at a time */}
            <div className="gm-faqs">
              {FAQS.map(([q, a], index) => (
                <details key={q} name="gm-faq" className="gm-faq" open={index === 0}>
                  <summary>
                    <span className="gm-faq-q">{q}</span>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="gm-faq-chevron">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Fold>

      {/* 7. let's talk, the home page's contact section */}
      <ContactSection />
    </main>
  );
}

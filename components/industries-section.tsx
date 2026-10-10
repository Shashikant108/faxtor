import Link from "next/link";
import { CONTACT_HREF } from "@/lib/site-config";
import { ArrowIcon } from "./arrow-icon";
import { Fold } from "./fold";
import { Reveal } from "./reveal";
import {
  ConstructionArt,
  CustomBuildArt,
  EducationArt,
  FinanceArt,
  ManufacturingArt,
  NetworkArt,
  PlatformArt,
  RealEstateArt,
  RetailArt,
  ShippingArt,
  TelecomArt,
  TravelArt,
} from "./industry-icons";

// `span` is the card's width on desktop, in 24ths of the row: two rows of four, then three cards and the wide
// "not listed" card. TODO: point each "#" at its industry page once those pages exist.
const INDUSTRIES = [
  { title: "Education & Training", tip: "Fees, batches & attendance", Art: EducationArt, span: "lg:col-span-6", copy: "Schools, preschools, coaching centres and learning platforms." },
  { title: "Manufacturing & Production", tip: "Shop floor to dispatch", Art: ManufacturingArt, span: "lg:col-span-6", copy: "Production planning, inventory, procurement and supplier management." },
  { title: "Retail & E-commerce", tip: "Online & in-store, one stock", Art: RetailArt, span: "lg:col-span-6", copy: "Product catalogue, inventory, orders and customer management." },
  { title: "Import Export & Trading", tip: "Shipments & documents tracked", Art: ShippingArt, span: "lg:col-span-6", copy: "Purchase orders, supplier coordination, inventory, dispatch and documentation." },
  { title: "Construction & Project Management", tip: "Sites, BOQs & vendors", Art: ConstructionArt, span: "lg:col-span-6", copy: "BOQs, vendor quotations, procurement and project tracking." },
  { title: "Real Estate & Property", tip: "Plots, bookings & payments", Art: RealEstateArt, span: "lg:col-span-6", copy: "Project and plot management, quotations, sales and customer tracking." },
  { title: "Financial Services & Lending", tip: "Loan lifecycle, end to end", Art: FinanceArt, span: "lg:col-span-6", copy: "Loan processing, document management, approvals and disbursements." },
  { title: "Travel & Hospitality", tip: "Bookings to itineraries", Art: TravelArt, span: "lg:col-span-6", copy: "Bookings, customer management, operations and itinerary management." },
  { title: "Telecom & Field Services", tip: "Technicians on the map", Art: TelecomArt, span: "lg:col-span-5", copy: "Service requests, assignments, technician tracking and customer updates." },
  { title: "SaaS & Digital Platforms", tip: "Multi-tenant, ready to scale", Art: PlatformArt, span: "lg:col-span-5", copy: "Multi-tenant products, user management, subscriptions and integrations." },
  { title: "Memberships, Networks & Associations", tip: "Members, events & referrals", Art: NetworkArt, span: "lg:col-span-5", copy: "Members, events, referrals and commission tracking." },
];

/**
 * Section 4, industries. Eleven cards and a wide "your industry isn't listed?" card: on desktop four in a
 * row with the last row as in the design, two on tablet, one on phones (lying flat, picture on the left).
 * Each card shows a short tooltip on hover, and on phones on tap. Everything arrives together in one Reveal.
 */
export function IndustriesSection() {
  return (
    <Fold tone="tint" id="industries" className="section-clip isolate">
      <Reveal className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
        <div className="container-page py-14 sm:py-20 lg:py-[2.6vw]">
          <div className="text-center">
            <p className="eyebrow">Industries</p>
            <span className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
            <h2 className="heading-section mt-6 lg:mt-[1.4vw]">
              Built for businesses that <span className="text-gradient inline-block">work differently.</span>
            </h2>
            <p className="copy-sm mx-auto mt-4 max-w-[640px] lg:mt-[1vw] lg:max-w-none">
              <span className="lg:block">Every industry has its own processes, challenges and workflows. </span>
              <span className="lg:block">We build software around the way your business actually works.</span>
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-[1.8vw] lg:grid-cols-[repeat(24,minmax(0,1fr))] lg:gap-[1.1vw]">
            {INDUSTRIES.map(({ title, tip, Art, span, copy }, index) => (
              <div key={title} className={`card-glass industry-card tip-host ${span}`} tabIndex={0} aria-describedby={`industry-tip-${index}`}>
                <span id={`industry-tip-${index}`} role="tooltip" className="tip">
                  {tip}
                </span>
                <span className="industry-art">
                  <Art className="h-full w-full" />
                </span>
                <div>
                  <h3 className="card-title">{title}</h3>
                  <div className="industry-foot">
                    <p className="card-copy">{copy}</p>
                    <Link href="#" aria-label={`More about ${title}`} className="card-arrow">
                      <ArrowIcon className="h-[45%] w-[45%]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* the industry that is not on the list */}
            <div className="card-glass industry-cta lg:col-span-9">
              <div>
                <p className="label-caps">Something different in mind?</p>
                <h3 className="cta-title mt-3 lg:mt-[0.8vw]">
                  Your industry isn’t listed?
                  <span className="text-gradient block w-fit">Let’s build around your business.</span>
                </h3>
                <Link href={CONTACT_HREF} className="btn btn-sm mt-5 lg:mt-[1.4vw]">
                  Discuss your requirements
                  <ArrowIcon className="h-[1.1em] w-[1.1em]" />
                </Link>
              </div>
              <span aria-hidden="true" className="hidden self-stretch bg-brand-line/60 lg:block lg:w-px" />
              <CustomBuildArt className="industry-cta-art" />
            </div>
          </div>
        </div>
      </Reveal>
    </Fold>
  );
}

import Link from "next/link";
import { CONTACT_HREF } from "@/lib/site-config";
import { ArrowIcon } from "./arrow-icon";
import { Fold } from "./fold";
import {
  ConstructionIcon,
  CustomBuildArt,
  EducationIcon,
  FinanceIcon,
  ManufacturingIcon,
  MembershipIcon,
  PlatformIcon,
  RealEstateIcon,
  RetailIcon,
  TelecomIcon,
  TradeIcon,
} from "./industry-icons";

const INDUSTRIES = [
  {
    title: "Education & Training",
    Icon: EducationIcon,
    tone: "sky",
    copy: "Schools, preschools, coaching centres and learning platforms.",
    tags: ["Admissions", "Attendance", "Fees & Invoicing", "Student Records"],
  },
  {
    title: "Manufacturing & Production",
    Icon: ManufacturingIcon,
    tone: "violet",
    copy: "Production planning, inventory, procurement and supplier management.",
    tags: ["Production Planning", "Inventory", "Procurement", "Work Orders"],
  },
  {
    title: "Retail & E-commerce",
    Icon: RetailIcon,
    tone: "rose",
    copy: "Product catalogue, inventory, orders and customer management.",
    tags: ["Product Catalogue", "Order Management", "Inventory", "Customer Management"],
  },
  {
    title: "Import Export & Trading",
    Icon: TradeIcon,
    tone: "teal",
    copy: "Purchase orders, supplier coordination, inventory, dispatch and documentation.",
    tags: ["Purchase Orders", "Inventory", "Logistics", "Shipment Tracking"],
  },
  {
    title: "Construction & Project Management",
    Icon: ConstructionIcon,
    tone: "amber",
    copy: "BOQs, vendor quotations, procurement and project tracking.",
    tags: ["BOQ & Estimation", "Vendor Management", "Project Tracking", "Cost Control"],
  },
  {
    title: "Real Estate & Property",
    Icon: RealEstateIcon,
    tone: "indigo",
    copy: "Project and plot management, quotations, sales and customer tracking.",
    tags: ["Project Management", "Unit/Plot Sales", "Customer Tracking", "Property Listings"],
  },
  {
    title: "Financial Services & Lending",
    Icon: FinanceIcon,
    tone: "teal",
    copy: "Loan processing, document management, approvals and disbursements.",
    tags: ["Lead Management", "Application Tracking", "Disbursements", "Repayment Tracking"],
  },
  {
    title: "Telecom & Field Services",
    Icon: TelecomIcon,
    tone: "violet",
    copy: "Service requests, assignments, technician tracking and customer updates.",
    tags: ["Service Management", "Work Assignments", "Field Staff Tracking", "Complaint Management"],
  },
  {
    title: "SaaS & Digital Platforms",
    Icon: PlatformIcon,
    tone: "sky",
    copy: "Multi-tenant products, user management, subscriptions and integrations.",
    tags: ["Multi-tenant Setup", "User Management", "Subscriptions", "Integrations"],
  },
  {
    title: "Memberships, Networks & Associations",
    Icon: MembershipIcon,
    tone: "rose",
    copy: "Members, events, referrals and commission tracking.",
    tags: ["Member Management", "Event Management", "Referrals & Commissions", "Renewals"],
  },
];

/**
 * Section 4, industries. Ten cards, each an icon and name, a line on what we build for that industry and the
 * modules it usually needs, then a wide "your industry isn't listed" card: four in a row on desktop (the wide
 * card takes the last two places), two on tablet. On phones the ten cards become a row to swipe through, with
 * the wide card below it, so the section stays short.
 */
export function IndustriesSection() {
  return (
    <Fold tone="tint" id="industries" className="section-clip isolate">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
        <div className="container-page py-14 sm:py-20 lg:py-[2.8vw]">
          <div className="text-center">
            <p className="eyebrow">Industries</p>
            <span aria-hidden="true" className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
            <h2 className="heading-section mt-6 lg:mt-[1.5vw]">
              Built for businesses that <span className="text-gradient">work differently.</span>
            </h2>
            <p className="copy-sm mx-auto mt-4 max-w-[640px] lg:mt-[1vw] lg:max-w-none">
              Every industry has its own processes, challenges and workflows. We build software around the way your
              business actually works.
            </p>
          </div>

          <div className="industry-grid">
            <ul className="industry-list">
              {INDUSTRIES.map(({ title, Icon, tone, copy, tags }) => (
                <li key={title} className="card-glass industry-card">
                  <div className="industry-head">
                    <span className="industry-icon" data-tone={tone}>
                      <Icon />
                    </span>
                    <h3 className="card-title">{title}</h3>
                  </div>
                  <p className="industry-copy">{copy}</p>
                  <ul className="industry-tags" data-tone={tone} aria-label={`What we build for ${title}`}>
                    {tags.map((tag) => (
                      <li key={tag} className="industry-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p aria-hidden="true" className="industry-swipe">
              Swipe to see more <ArrowIcon className="h-[1.1em] w-[1.1em]" />
            </p>

            {/* the industry that is not on the list */}
            <div className="industry-cta">
              <div>
                <p className="eyebrow">Something different in mind?</p>
                <h3 className="industry-cta-title mt-3 lg:mt-[0.7vw]">
                  Your industry isn’t listed.{" "}
                  <span className="text-gradient block w-fit">Let’s build around your business.</span>
                </h3>
                <p className="industry-copy max-w-[30rem]">
                  Tell us about your workflow, and we’ll design a custom solution that fits your processes and your goals.
                </p>
                <Link href={CONTACT_HREF} className="btn btn-sm mt-5 lg:mt-[1.2vw]">
                  Discuss your requirements
                  <ArrowIcon className="h-[1.1em] w-[1.1em]" />
                </Link>
              </div>
              <CustomBuildArt className="industry-cta-art" />
            </div>
          </div>
        </div>
      </div>
    </Fold>
  );
}

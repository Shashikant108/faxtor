import Link from "next/link";
import { CONTACT_HREF } from "@/lib/site-config";
import { ArrowIcon } from "./arrow-icon";
import { Fold } from "./fold";
import {
  AutomationArt,
  CrmArt,
  ErpArt,
  MobileAppArt,
  SaasArt,
  WebAppArt,
  WebsiteArt,
  WhatsAppArt,
} from "./service-icons";

export const SERVICES = [
  { title: "ERP Software", Art: ErpArt, copy: "Manage your operations, inventory, purchases, staff and reporting in one system." },
  { title: "CRM Software", Art: CrmArt, copy: "Keep track of leads, follow-ups, sales and customer relationships in one place." },
  { title: "Custom Web Applications", Art: WebAppArt, copy: "Solutions built around your workflow, when off-the-shelf tools don’t fit." },
  { title: "Business Automation", Art: AutomationArt, copy: "Automate repetitive tasks and reduce manual work across your processes." },
  { title: "WhatsApp Automation", Art: WhatsAppArt, copy: "Send updates, reminders and alerts directly on WhatsApp." },
  { title: "SaaS Development", Art: SaasArt, copy: "Build and launch multi-tenant products that your customers can use and grow with." },
  { title: "Mobile App Development", Art: MobileAppArt, copy: "Android and iOS apps for your customers or field teams, built from one codebase." },
  { title: "Website Development", Art: WebsiteArt, copy: "Modern, mobile-ready websites that showcase your business and convert enquiries." },
];

/**
 * Section 3, what we build. Eight cards, four in a row on desktop, two on tablet; on phones each card
 * lies flat with its picture on the left so the list stays short.
 */
export function ServicesSection() {
  return (
    <Fold tone="tint" id="services" className="section-clip isolate">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/backgrounds/soft-waves.webp" alt="" width={1774} height={887} data-parallax="0.04" className="section-bg" />
        <div className="container-page py-14 sm:py-20 lg:py-[3.2vw]">
          <div className="text-center">
            <p className="eyebrow">What we build</p>
            <span className="eyebrow-line mx-auto mt-3 lg:mt-[0.5vw]" />
            <h2 className="heading-section mt-6 lg:mt-[1.5vw]">
              From everyday challenges to{" "}
              <span className="text-gradient block lg:mx-auto lg:w-fit">better ways of working.</span>
            </h2>
            <p className="copy-sm mx-auto mt-4 max-w-[640px] lg:mt-[1.1vw] lg:max-w-none">
              From your first website to the systems that run your operations, we help turn business needs into practical
              digital solutions.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-[2.2vw] lg:grid-cols-4 lg:gap-[1.15vw]">
            {SERVICES.map(({ title, Art, copy }) => (
              <div key={title} className="card-glass service-card">
                <span className="service-art">
                  <Art className="h-full w-full" />
                </span>
                <div>
                  <h3 className="card-title">{title}</h3>
                  <p className="card-copy">{copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center lg:mt-[2.2vw]">
            <Link href={CONTACT_HREF} className="btn btn-lg">
              Discuss your requirements
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </Fold>
  );
}

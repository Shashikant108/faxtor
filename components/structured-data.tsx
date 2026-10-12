import { CONTACT_INFO, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL, SOCIAL_LINKS } from "@/lib/site-config";
import { SERVICES } from "./services-section";

/**
 * Tells search engines who Faxtor is, in schema.org terms (JSON-LD): the company, the website, and the
 * local business with its services, so results can show the name, logo, contact details and services.
 * Every value comes from lib/site-config.ts and the "What we build" list.
 */
export function StructuredData() {
  const profiles = SOCIAL_LINKS.map((link) => link.href).filter((href) => href.startsWith("http"));
  const organization = `${SITE_URL}/#organization`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organization,
        name: SITE_NAME,
        legalName: "Faxtor Learning Pvt. Ltd.",
        slogan: SITE_TAGLINE,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        email: CONTACT_INFO.email,
        telephone: CONTACT_INFO.phone,
        ...(profiles.length ? { sameAs: profiles } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en-IN",
        publisher: { "@id": organization },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        description: SITE_DESCRIPTION,
        email: CONTACT_INFO.email,
        telephone: CONTACT_INFO.phone,
        parentOrganization: { "@id": organization },
        address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
        areaServed: { "@type": "Country", name: "India" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software development services",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.title, description: service.copy },
          })),
        },
      },
    ],
  };

  // "<" is escaped so no text in the data can ever close the script tag early
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
  );
}

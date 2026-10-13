import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

// served as /sitemap.xml; add each new page here as the site grows
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/industries/manufacturing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date("2023-07-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: new Date("2023-07-18"), changeFrequency: "yearly", priority: 0.3 },
  ];
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

// served as /robots.txt: every page may be crawled, and the sitemap is named for the crawlers
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

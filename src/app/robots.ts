import type { MetadataRoute } from "next";
import { getBaseUrl, buildCanonicalUrl } from "@/lib/marketplace";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: buildCanonicalUrl("/sitemap.xml"),
    host: getBaseUrl(),
  };
}

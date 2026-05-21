import type { MetadataRoute } from "next";
import { businessConfig } from "@/constants/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${businessConfig.business.websiteUrl}/sitemap.xml`,
  };
}

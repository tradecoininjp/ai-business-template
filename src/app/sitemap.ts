import type { MetadataRoute } from "next";
import { businessConfig } from "@/constants/business";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: businessConfig.business.websiteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

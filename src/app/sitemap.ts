import type { MetadataRoute } from "next";
import { listings } from "@/data/listings";
import { buildCanonicalUrl } from "@/lib/marketplace";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/listings", "/login", "/register", "/admin"];

  return [
    ...staticRoutes.map((routePath) => ({
      url: buildCanonicalUrl(routePath),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: routePath === "/" ? 1 : 0.7,
    })),
    ...listings.map((listing) => ({
      url: buildCanonicalUrl(`/listings/${listing.id}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.65,
    })),
  ];
}

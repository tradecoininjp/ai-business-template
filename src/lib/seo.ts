import type { Metadata, MetadataRoute } from "next";
import { businessConfig } from "@/constants/business";

type MetadataOptions = {
  pathname?: string;
  title?: string;
  description?: string;
  noIndex?: boolean;
};

function normalizePathname(pathname = "/") {
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function buildCanonicalUrl(pathname = "/") {
  const normalizedPathname = normalizePathname(pathname);
  return new URL(normalizedPathname, businessConfig.business.websiteUrl).toString();
}

export function buildMetadata({ pathname = "/", title, description, noIndex = false }: MetadataOptions = {}): Metadata {
  const resolvedTitle = title ?? businessConfig.seo.defaultTitle;
  const resolvedDescription = description ?? businessConfig.seo.description;
  const canonicalUrl = buildCanonicalUrl(pathname);

  return {
    metadataBase: new URL(businessConfig.business.websiteUrl),
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: businessConfig.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
          },
        },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      type: "website",
      siteName: businessConfig.business.name,
      url: canonicalUrl,
      locale: "en_US",
      images: [
        {
          url: businessConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: `${businessConfig.business.name} social preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [businessConfig.seo.ogImage],
    },
    other: {
      "business:contact_data:street_address": businessConfig.business.address,
      "business:contact_data:phone_number": businessConfig.business.phone,
      "business:contact_data:email": businessConfig.business.email,
      "business:contact_data:website": businessConfig.business.websiteUrl,
    },
  };
}

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  return [
    {
      url: buildCanonicalUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

export function buildRobotsConfig(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: buildCanonicalUrl("/sitemap.xml"),
    host: businessConfig.business.websiteUrl,
  };
}

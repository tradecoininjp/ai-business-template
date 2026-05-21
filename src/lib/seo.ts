import type { Metadata } from "next";
import { businessConfig } from "@/constants/business";

type MetadataOptions = {
  title?: string;
  description?: string;
};

export function buildMetadata(options: MetadataOptions = {}): Metadata {
  const title = options.title ?? businessConfig.seo.defaultTitle;
  const description = options.description ?? businessConfig.seo.description;

  return {
    metadataBase: new URL(businessConfig.business.websiteUrl),
    title,
    description,
    keywords: businessConfig.seo.keywords,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: businessConfig.business.name,
      url: businessConfig.business.websiteUrl,
      images: [
        {
          url: businessConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: `${businessConfig.business.name} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [businessConfig.seo.ogImage],
    },
  };
}

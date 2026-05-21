import { listings } from "@/data/listings";

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getFeaturedListings(limit = 3) {
  return listings.slice(0, limit);
}

export function getListingById(id: string) {
  return listings.find((listing) => listing.id === id);
}

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_APP_URL ?? "https://garrisongrooming-demo.vercel.app";
}

export function buildCanonicalUrl(pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(normalizedPath, getBaseUrl()).toString();
}

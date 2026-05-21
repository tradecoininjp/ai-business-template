import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { platformConfig } from "@/data/platform";
import { buildCanonicalUrl } from "@/lib/marketplace";
import "./globals.css";

const sansFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(buildCanonicalUrl("/")),
  title: `${platformConfig.name} | ${platformConfig.tagLine}`,
  description: platformConfig.description,
  keywords: ["marketplace", "booking", "saas", "nextjs", "vercel"],
  alternates: { canonical: buildCanonicalUrl("/") },
  openGraph: {
    type: "website",
    title: `${platformConfig.name} | ${platformConfig.tagLine}`,
    description: platformConfig.description,
    url: buildCanonicalUrl("/"),
    images: [{ url: "/marketplace/og-marketplace.svg", width: 1200, height: 630, alt: `${platformConfig.name} preview` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${platformConfig.name} | ${platformConfig.tagLine}`,
    description: platformConfig.description,
    images: ["/marketplace/og-marketplace.svg"],
  },
  icons: {
    icon: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}

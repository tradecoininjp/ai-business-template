import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premiumbarbershop.vercel.app"),
  title: {
    default: "Premium Barber Shop | Precision Grooming",
    template: "%s | Premium Barber Shop",
  },
  description:
    "Premium Barber Shop delivers precision cuts, luxury beard care, and modern grooming for men who value detail.",
  openGraph: {
    title: "Premium Barber Shop | Precision Grooming",
    description:
      "Book a luxury grooming experience with skilled barbers and a modern premium atmosphere.",
    url: "https://premiumbarbershop.vercel.app",
    siteName: "Premium Barber Shop",
    images: [
      {
        url: "/images/og-barber.svg",
        width: 1200,
        height: 630,
        alt: "Premium Barber Shop storefront branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Barber Shop | Precision Grooming",
    description:
      "High-end barber services with effortless online booking and trusted local expertise.",
    images: ["/images/og-barber.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

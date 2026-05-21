import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { businessConfig } from "@/constants/business";
import { getThemeConfig } from "@/constants/theme";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const sansFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const theme = getThemeConfig(businessConfig.themeKey as keyof typeof import("@/constants/theme").themes);

export const metadata: Metadata = buildMetadata();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className={`${theme.className} min-h-full`}>{children}</body>
    </html>
  );
}

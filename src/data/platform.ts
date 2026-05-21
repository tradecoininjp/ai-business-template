import type { DashboardStat, PlatformConfig } from "@/types/marketplace";

export const platformConfig: PlatformConfig = {
  name: "Bookly Market",
  tagLine: "Marketplace + Booking MVP",
  description:
    "A production-quality marketplace frontend with listing discovery, booking flow, and admin-ready structure.",
  hero: {
    eyebrow: "Vercel-Ready SaaS Frontend",
    title: "Discover trusted services and book in minutes",
    subtitle:
      "Browse verified listings, compare options, and complete a booking flow in a clean and conversion-focused experience.",
    primaryCtaLabel: "Explore Listings",
    primaryCtaHref: "/listings",
    secondaryCtaLabel: "Start as Provider",
    secondaryCtaHref: "/register",
  },
  navLinks: [
    { label: "Listings", href: "/listings" },
    { label: "Admin", href: "/admin" },
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
  ],
  categories: ["All", "Wellness", "Fitness", "Cleaning", "Home Services", "Beauty", "Education"],
  listingHighlights: ["Curated providers", "Transparent pricing", "Simple booking flow"],
  auth: {
    loginTitle: "Welcome back",
    registerTitle: "Create your provider account",
    loginSubtitle: "Access bookings, update your listings, and manage availability.",
    registerSubtitle: "Launch your business profile and start receiving service requests.",
  },
};

export const adminStats: DashboardStat[] = [
  { id: "active-listings", label: "Active Listings", value: "124", trend: "up", change: "+9.4%" },
  { id: "monthly-bookings", label: "Bookings (30d)", value: "1,842", trend: "up", change: "+14.1%" },
  { id: "conversion", label: "Conversion Rate", value: "7.8%", trend: "up", change: "+1.2%" },
  { id: "cancellations", label: "Cancellation Rate", value: "1.9%", trend: "down", change: "-0.6%" },
];

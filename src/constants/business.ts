import { premiumBarberServices } from "@/content/services";
import { premiumBarberTestimonials } from "@/content/testimonials";
import type { BusinessConfig } from "@/types/business";

export const businessConfig: BusinessConfig = {
  themeKey: "barber-luxury",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  business: {
    name: "Premium Barber Shop",
    slogan: "Precision grooming for modern gentlemen.",
    phone: "+1 (555) 123-9876",
    email: "bookings@premiumbarbershop.com",
    address: "128 Gold Street, Downtown District, NY",
    websiteUrl: "https://premiumbarbershop.vercel.app",
    bookingUrl: "#book",
  },
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  hero: {
    eyebrow: "Premium Grooming Studio",
    headline: "Look Sharp Every Week With Precision Barber Craft.",
    subheadline:
      "Executive-level cuts, beard detailing, and luxury care designed for clients who value first impressions.",
    primaryCtaLabel: "Book in 30 Seconds",
    primaryCtaHref: "#book",
    secondaryCtaLabel: "View Signature Services",
    secondaryCtaHref: "#services",
    backgroundImage: {
      src: "/images/hero-barber.svg",
      alt: "Luxury barber interior with modern styling chairs",
    },
  },
  trustIndicators: ["4.9 / 5 average rating", "2,000+ local clients", "Open 7 days"],
  trustMetrics: [
    { value: "15+", label: "Years" },
    { value: "4.9", label: "Rating" },
    { value: "2k+", label: "Clients" },
  ],
  services: premiumBarberServices,
  about: {
    eyebrow: "Built on Craft",
    title: "A neighborhood barber studio with premium standards.",
    description:
      "We combine classic barber discipline with a modern luxury experience so clients leave polished, confident, and camera-ready.",
    mission: "Deliver dependable grooming with detail, consistency, and a hospitality-first atmosphere.",
  },
  testimonials: premiumBarberTestimonials,
  gallery: [
    { src: "/images/hero-barber.svg", alt: "Premium barber studio interior" },
    { src: "/images/og-barber.svg", alt: "Premium barber brand presentation" },
  ],
  booking: {
    eyebrow: "Quick Booking",
    title: "Get your preferred time slot today.",
    description: "Prime evening appointments move quickly. Book online or call in under a minute.",
    primaryCtaLabel: "Reserve Online",
    primaryCtaHref: "#book",
  },
  contact: {
    eyebrow: "Contact",
    title: "Reach the studio",
    description: "Talk to the team, ask about availability, or request the right grooming package.",
    formCtaLabel: "Send Inquiry",
    businessHours: [
      { day: "Mon - Fri", hours: "9:00 AM - 8:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 7:00 PM" },
      { day: "Sunday", hours: "10:00 AM - 5:00 PM" },
    ],
  },
  seo: {
    defaultTitle: "Premium Barber Shop | Precision Grooming",
    description:
      "A production-ready local business website system for premium barber shops and modern service brands.",
    ogImage: "/images/og-barber.svg",
    keywords: ["barber shop website", "local business website", "premium grooming", "next.js template"],
  },
};

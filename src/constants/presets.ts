import { eliteGymServices, premiumBarberServices } from "@/content/services";
import { eliteGymTestimonials, premiumBarberTestimonials } from "@/content/testimonials";
import type { BusinessConfig } from "@/types/business";

export const barberPreset: BusinessConfig = {
  themeKey: "barber-luxury",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Map", href: "#map" },
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
    missionLabel: "Mission",
    mission: "Deliver dependable grooming with detail, consistency, and a hospitality-first atmosphere.",
    image: {
      src: "/images/hero-barber.svg",
      alt: "Barber team delivering precision grooming service",
    },
  },
  gallerySection: {
    eyebrow: "Studio Highlights",
    title: "See the atmosphere, detail, and finish",
    description:
      "Gallery media is configuration-driven, making this section easy to swap for gyms, plumbing teams, cleaning crews, and other local business verticals.",
  },
  testimonials: premiumBarberTestimonials,
  gallery: [
    { src: "/images/hero-barber.svg", alt: "Premium barber studio interior" },
    { src: "/images/og-barber.svg", alt: "Premium barber brand presentation" },
    { src: "/images/hero-barber.svg", alt: "Barber preparing beard sculpting service" },
    { src: "/images/og-barber.svg", alt: "Client-ready premium grooming finish" },
    { src: "/images/hero-barber.svg", alt: "Luxury barber tools and chair setup" },
    { src: "/images/og-barber.svg", alt: "Storefront and premium brand identity" },
  ],
  booking: {
    eyebrow: "Quick Booking",
    title: "Get your preferred time slot today.",
    description: "Prime evening appointments move quickly. Book online or call in under a minute.",
    primaryCtaLabel: "Reserve Online",
    primaryCtaHref: "#book",
    secondaryCtaLabel: "Call The Studio",
    secondaryCtaHref: "#contact",
  },
  contact: {
    eyebrow: "Contact",
    title: "Reach the studio",
    description: "Talk to the team, ask about availability, or request the right grooming package.",
    infoTitle: "Contact Info",
    hoursTitle: "Business Hours",
    formTitle: "Send a Request",
    formDescription: "Share what service you need and your preferred time. We will contact you shortly.",
    formCtaLabel: "Send Inquiry",
    formPlaceholders: {
      name: "Your name",
      email: "Email address",
      phone: "Phone number",
      message: "Tell us what service you need",
    },
    businessHours: [
      { day: "Mon - Fri", hours: "9:00 AM - 8:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 7:00 PM" },
      { day: "Sunday", hours: "10:00 AM - 5:00 PM" },
    ],
  },
  maps: {
    eyebrow: "Find Us",
    title: "Visit the studio",
    description: "Conveniently located in the downtown district with easy access and nearby parking.",
    embedUrl: "https://www.google.com/maps?q=128+Gold+Street,+Downtown+District,+NY&output=embed",
  },
  footer: {
    contactLabel: "Contact",
    exploreLabel: "Explore",
    socialLabel: "Social",
    copyrightText: "All rights reserved.",
  },
  seo: {
    defaultTitle: "Premium Barber Shop | Precision Grooming",
    description:
      "A production-ready local business website system for premium barber shops and modern service brands.",
    ogImage: "/images/og-barber.svg",
    keywords: ["barber shop website", "local business website", "premium grooming", "next.js template"],
  },
};

export const gymPreset: BusinessConfig = {
  themeKey: "barber-luxury",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Programs", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Map", href: "#map" },
    { label: "Contact", href: "#contact" },
  ],
  business: {
    name: "Forge Elite Gym",
    slogan: "Strength, conditioning, and coaching with measurable results.",
    phone: "+1 (555) 947-2230",
    email: "hello@forgeelitegym.com",
    address: "245 Iron Avenue, Midtown, NY",
    websiteUrl: "https://forgeelitegym.vercel.app",
    bookingUrl: "#book",
  },
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  hero: {
    eyebrow: "Elite Performance Facility",
    headline: "Train With Purpose. Perform At Your Best.",
    subheadline:
      "Coach-led programs for strength, fat loss, and athletic conditioning tailored to real schedules and real goals.",
    primaryCtaLabel: "Book A Trial Session",
    primaryCtaHref: "#book",
    secondaryCtaLabel: "Explore Programs",
    secondaryCtaHref: "#services",
    backgroundImage: {
      src: "/images/hero-barber.svg",
      alt: "Athletes training in a premium gym studio",
    },
  },
  trustIndicators: ["4.9 / 5 member rating", "1,500+ transformations", "Open daily"],
  trustMetrics: [
    { value: "12+", label: "Coaches" },
    { value: "4.9", label: "Rating" },
    { value: "24k", label: "Sessions" },
  ],
  services: eliteGymServices,
  about: {
    eyebrow: "Built for Progress",
    title: "A performance gym designed around coaching and consistency.",
    description:
      "Forge Elite Gym combines programming, accountability, and expert coaching so members build sustainable results without guesswork.",
    missionLabel: "Mission",
    mission: "Help local members become stronger, healthier, and more confident through structured training systems.",
    image: {
      src: "/images/hero-barber.svg",
      alt: "Gym coaching session with members",
    },
  },
  gallerySection: {
    eyebrow: "Training Environment",
    title: "See the space, sessions, and coaching quality",
    description:
      "Every gallery item is configuration-driven so teams can switch business verticals quickly without touching section markup.",
  },
  testimonials: eliteGymTestimonials,
  gallery: [
    { src: "/images/hero-barber.svg", alt: "Strength training zone inside Forge Elite Gym" },
    { src: "/images/og-barber.svg", alt: "Coach-led group training session" },
    { src: "/images/hero-barber.svg", alt: "Member conditioning circuit workout" },
    { src: "/images/og-barber.svg", alt: "Functional training and mobility session" },
    { src: "/images/hero-barber.svg", alt: "Athlete performance training area" },
    { src: "/images/og-barber.svg", alt: "Gym branding and premium interior" },
  ],
  booking: {
    eyebrow: "Start Strong",
    title: "Claim your free fitness assessment.",
    description: "Speak with a coach, define your goals, and start with a tailored 30-day training roadmap.",
    primaryCtaLabel: "Book Assessment",
    primaryCtaHref: "#book",
    secondaryCtaLabel: "Talk To A Coach",
    secondaryCtaHref: "#contact",
  },
  contact: {
    eyebrow: "Contact",
    title: "Reach our coaching team",
    description: "Ask about memberships, class times, and private training options.",
    infoTitle: "Gym Info",
    hoursTitle: "Opening Hours",
    formTitle: "Request Membership Details",
    formDescription: "Send your goals and preferred schedule. Our team will reply with a suitable plan.",
    formCtaLabel: "Send Request",
    formPlaceholders: {
      name: "Your full name",
      email: "Best email",
      phone: "Phone number",
      message: "Tell us your goals and training experience",
    },
    businessHours: [
      { day: "Mon - Fri", hours: "5:30 AM - 10:00 PM" },
      { day: "Saturday", hours: "7:00 AM - 8:00 PM" },
      { day: "Sunday", hours: "8:00 AM - 6:00 PM" },
    ],
  },
  maps: {
    eyebrow: "Find Us",
    title: "Train with us in Midtown",
    description: "Located near major transit routes with nearby parking options.",
    embedUrl: "https://www.google.com/maps?q=245+Iron+Avenue,+Midtown,+NY&output=embed",
  },
  footer: {
    contactLabel: "Contact",
    exploreLabel: "Explore",
    socialLabel: "Follow",
    copyrightText: "All rights reserved.",
  },
  seo: {
    defaultTitle: "Forge Elite Gym | Strength & Conditioning",
    description: "A scalable local business website preset for modern gyms, coaching studios, and fitness brands.",
    ogImage: "/images/og-barber.svg",
    keywords: ["gym website template", "fitness studio website", "strength coaching", "local business template"],
  },
};

export const businessPresets = {
  barber: barberPreset,
  gym: gymPreset,
} as const;

export type BusinessPresetKey = keyof typeof businessPresets;

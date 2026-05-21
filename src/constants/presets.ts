import type { BusinessConfig } from "@/types/business";

import {
  barberImagePack,
  cleaningImagePack,
  gymImagePack,
  plumbingImagePack,
} from "@/content/images";
import {
  eliteGymServices,
  premiumBarberServices,
  pristineCleaningServices,
  proPlumbingServices,
} from "@/content/services";
import {
  eliteGymTestimonials,
  premiumBarberTestimonials,
  pristineCleaningTestimonials,
  proPlumbingTestimonials,
} from "@/content/testimonials";

export const barberPreset: BusinessConfig = {
  themeKey: "barber-luxury",
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Book", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ],
  business: {
    name: "The Garrison Grooming Co.",
    slogan: "Refined Barbering for Modern Gentlemen",
    logo: barberImagePack.logo,
    phone: "+1 (555) 320-4477",
    email: "hello@garrisongrooming.com",
    address: "84 Mercer Street, New York, NY 10012",
    websiteUrl: "https://www.garrisongrooming.com",
    bookingUrl: "https://www.garrisongrooming.com/book",
  },
  socialLinks: {
    instagram: "https://instagram.com/garrisongrooming",
    facebook: "https://facebook.com/garrisongrooming",
  },
  hero: {
    eyebrow: "Award-Winning SoHo Barber Lounge",
    headline: "Precision Cuts, Elevated Confidence",
    subheadline:
      "Crafted grooming experiences for professionals who expect exceptional detail and signature style.",
    primaryCtaLabel: "Book Your Chair",
    primaryCtaHref: "#booking",
    secondaryCtaLabel: "Explore Services",
    secondaryCtaHref: "#services",
    backgroundImage: barberImagePack.hero,
  },
  trustIndicators: ["Premium Service", "Master Barbers", "5-Star Rated"],
  trustMetrics: [
    { value: "10+", label: "Years Experience" },
    { value: "20k+", label: "Appointments" },
    { value: "4.9", label: "Average Rating" },
  ],
  services: premiumBarberServices,
  about: {
    eyebrow: "Our Craft",
    title: "A Tradition of Precision Grooming",
    description:
      "For over a decade, our barbers have blended timeless technique with modern style to deliver a premium grooming experience.",
    missionLabel: "Our Mission",
    mission: "Help every client look sharp, feel confident, and leave with a style tailored to their identity.",
    image: barberImagePack.about,
  },
  gallerySection: {
    eyebrow: "Inside The Studio",
    title: "Luxury Atmosphere, Consistent Results",
    description: "Explore our premium environment, craftsmanship, and signature finishes.",
  },
  testimonials: premiumBarberTestimonials,
  gallery: barberImagePack.gallery,
  booking: {
    eyebrow: "Reserve Your Session",
    title: "Book Your Signature Appointment",
    description: "Appointments are tailored and limited daily. Secure your preferred time online.",
    primaryCtaLabel: "Book Now",
    primaryCtaHref: "https://www.garrisongrooming.com/book",
    secondaryCtaLabel: "Call Concierge",
    secondaryCtaHref: "tel:+15553204477",
  },
  contact: {
    eyebrow: "Contact",
    title: "Visit Our SoHo Lounge",
    description: "Walk-ins are limited. Book in advance for guaranteed service and personalized consultation.",
    infoTitle: "Contact Information",
    hoursTitle: "Business Hours",
    formTitle: "Send an Inquiry",
    formDescription: "Tell us your preferred service and timing.",
    formCtaLabel: "Send Message",
    formPlaceholders: {
      name: "Your name",
      email: "Your email",
      phone: "Your phone",
      message: "Tell us what service you are interested in",
    },
    businessHours: [
      { day: "Mon-Fri", hours: "9:00 AM - 8:00 PM" },
      { day: "Sat", hours: "9:00 AM - 7:00 PM" },
      { day: "Sun", hours: "10:00 AM - 5:00 PM" },
    ],
  },
  maps: {
    eyebrow: "Location",
    title: "Find Us in SoHo",
    description: "Conveniently located in downtown Manhattan.",
    embedUrl: "https://www.google.com/maps?q=84+Mercer+Street+New+York+NY+10012&output=embed",
  },
  footer: {
    contactLabel: "Contact",
    exploreLabel: "Explore",
    socialLabel: "Social",
    copyrightText: "© The Garrison Grooming Co. All rights reserved.",
  },
  seo: {
    defaultTitle: "The Garrison Grooming Co. | Luxury Barber Shop in SoHo, NYC",
    description:
      "Experience elite barbering in SoHo with bespoke haircuts, hot towel shaves, and grooming rituals tailored to your style.",
    ogImage: barberImagePack.ogImage,
    keywords: [
      "luxury barber nyc",
      "soho barber shop",
      "hot towel shave",
      "mens grooming nyc",
      "premium haircut",
    ],
  },
};

export const gymPreset: BusinessConfig = {
  themeKey: "barber-luxury",
  navigation: [
    { label: "Programs", href: "#services" },
    { label: "Results", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Facility", href: "#gallery" },
    { label: "Start", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ],
  business: {
    name: "Forge Elite Gym",
    slogan: "Train Stronger. Live Better.",
    logo: gymImagePack.logo,
    phone: "+1 (555) 810-2040",
    email: "hello@forgeelitegym.com",
    address: "220 West 29th Street, New York, NY 10001",
    websiteUrl: "https://www.forgeelitegym.com",
    bookingUrl: "https://www.forgeelitegym.com/start",
  },
  socialLinks: {
    instagram: "https://instagram.com/forgeelitegym",
    facebook: "https://facebook.com/forgeelitegym",
  },
  hero: {
    eyebrow: "Performance-Focused Training Center",
    headline: "Transform Your Strength and Conditioning",
    subheadline:
      "Join structured programs with expert coaches, measurable progress tracking, and a motivating community.",
    primaryCtaLabel: "Book Free Assessment",
    primaryCtaHref: "#booking",
    secondaryCtaLabel: "View Programs",
    secondaryCtaHref: "#services",
    backgroundImage: gymImagePack.hero,
  },
  trustIndicators: ["Expert Coaches", "Pro Equipment", "Goal Tracking"],
  trustMetrics: [
    { value: "95%", label: "Retention Rate" },
    { value: "300+", label: "Active Members" },
    { value: "4.9", label: "Average Rating" },
  ],
  services: eliteGymServices,
  about: {
    eyebrow: "Our Method",
    title: "Coaching That Delivers Measurable Progress",
    description:
      "Forge Elite Gym combines science-backed programming with dedicated coaching to help members build real results.",
    missionLabel: "Our Mission",
    mission: "Build stronger bodies and more confident lives through structured coaching and accountability.",
    image: gymImagePack.about,
  },
  gallerySection: {
    eyebrow: "Facility",
    title: "Train in a Premium Performance Space",
    description: "Explore our training zones, equipment, and coaching environment.",
  },
  testimonials: eliteGymTestimonials,
  gallery: gymImagePack.gallery,
  booking: {
    eyebrow: "Start Today",
    title: "Claim Your Free Performance Assessment",
    description: "Get a personalized roadmap tailored to your goals and current fitness level.",
    primaryCtaLabel: "Get Started",
    primaryCtaHref: "https://www.forgeelitegym.com/start",
    secondaryCtaLabel: "Call Team",
    secondaryCtaHref: "tel:+15558102040",
  },
  contact: {
    eyebrow: "Contact",
    title: "Visit Forge Elite Gym",
    description: "Drop in for a tour or schedule your first assessment.",
    infoTitle: "Contact Information",
    hoursTitle: "Business Hours",
    formTitle: "Send an Inquiry",
    formDescription: "Let us know your goals and preferred schedule.",
    formCtaLabel: "Send Message",
    formPlaceholders: {
      name: "Your name",
      email: "Your email",
      phone: "Your phone",
      message: "Tell us your fitness goals",
    },
    businessHours: [
      { day: "Mon-Fri", hours: "5:30 AM - 10:00 PM" },
      { day: "Sat", hours: "7:00 AM - 7:00 PM" },
      { day: "Sun", hours: "8:00 AM - 6:00 PM" },
    ],
  },
  maps: {
    eyebrow: "Location",
    title: "Train With Us in Midtown",
    description: "Find Forge Elite Gym in the heart of Manhattan.",
    embedUrl: "https://www.google.com/maps?q=220+West+29th+Street+New+York+NY+10001&output=embed",
  },
  footer: {
    contactLabel: "Contact",
    exploreLabel: "Programs",
    socialLabel: "Social",
    copyrightText: "© Forge Elite Gym. All rights reserved.",
  },
  seo: {
    defaultTitle: "Forge Elite Gym | Strength Training & Coaching in NYC",
    description:
      "Build strength, endurance, and confidence with elite coaching, personalized programming, and premium gym facilities.",
    ogImage: gymImagePack.ogImage,
    keywords: ["gym nyc", "strength training", "personal training", "sports performance", "fitness coaching"],
  },
};

export const plumbingPreset: BusinessConfig = {
  themeKey: "plumbing-pro",
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#gallery" },
    { label: "Book", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ],
  business: {
    name: "RapidFlow Plumbing",
    slogan: "Reliable Plumbing, Right On Time",
    logo: plumbingImagePack.logo,
    phone: "+1 (555) 661-0092",
    email: "service@rapidflowplumbing.com",
    address: "118 Riverfront Avenue, Austin, TX 78701",
    websiteUrl: "https://www.rapidflowplumbing.com",
    bookingUrl: "https://www.rapidflowplumbing.com/book",
  },
  socialLinks: {
    instagram: "https://instagram.com/rapidflowplumbing",
    facebook: "https://facebook.com/rapidflowplumbing",
  },
  hero: {
    eyebrow: "Licensed and Insured Local Experts",
    headline: "Plumbing Problems Solved Fast",
    subheadline:
      "From urgent leaks to planned upgrades, our certified team delivers dependable plumbing with transparent pricing.",
    primaryCtaLabel: "Schedule Service",
    primaryCtaHref: "#booking",
    secondaryCtaLabel: "See Services",
    secondaryCtaHref: "#services",
    backgroundImage: plumbingImagePack.hero,
  },
  trustIndicators: ["24/7 Emergency Service", "Licensed Technicians", "Upfront Pricing"],
  trustMetrics: [
    { value: "15+", label: "Years Experience" },
    { value: "8k+", label: "Service Calls" },
    { value: "4.9", label: "Average Rating" },
  ],
  services: proPlumbingServices,
  about: {
    eyebrow: "About RapidFlow",
    title: "Experienced Plumbing You Can Trust",
    description:
      "RapidFlow Plumbing helps homeowners and businesses prevent damage, reduce downtime, and keep systems running reliably.",
    missionLabel: "Our Mission",
    mission: "Deliver fast, code-compliant plumbing solutions with clear communication and lasting quality.",
    image: plumbingImagePack.about,
  },
  gallerySection: {
    eyebrow: "Recent Work",
    title: "From Emergencies to Full Upgrades",
    description: "See the quality and consistency behind our residential and commercial plumbing projects.",
  },
  testimonials: proPlumbingTestimonials,
  gallery: plumbingImagePack.gallery,
  booking: {
    eyebrow: "Book Service",
    title: "Request Same-Day or Scheduled Plumbing",
    description: "Share your issue and preferred timing. We will confirm quickly with a clear service plan.",
    primaryCtaLabel: "Request Appointment",
    primaryCtaHref: "https://www.rapidflowplumbing.com/book",
    secondaryCtaLabel: "Call Now",
    secondaryCtaHref: "tel:+15556610092",
  },
  contact: {
    eyebrow: "Contact",
    title: "Serving Homes and Businesses Across Austin",
    description: "Call now for urgent issues or schedule preventive maintenance to avoid costly breakdowns.",
    infoTitle: "Contact Information",
    hoursTitle: "Service Hours",
    formTitle: "Send a Service Request",
    formDescription: "Describe your plumbing issue and we will follow up quickly.",
    formCtaLabel: "Submit Request",
    formPlaceholders: {
      name: "Your name",
      email: "Your email",
      phone: "Your phone",
      message: "Describe your plumbing issue",
    },
    businessHours: [
      { day: "Mon-Fri", hours: "7:00 AM - 8:00 PM" },
      { day: "Sat", hours: "8:00 AM - 6:00 PM" },
      { day: "Sun", hours: "Emergency Service Available" },
    ],
  },
  maps: {
    eyebrow: "Service Area",
    title: "Based in Austin",
    description: "Fast response coverage across central Austin neighborhoods.",
    embedUrl: "https://www.google.com/maps?q=118+Riverfront+Avenue+Austin+TX+78701&output=embed",
  },
  footer: {
    contactLabel: "Contact",
    exploreLabel: "Services",
    socialLabel: "Social",
    copyrightText: "© RapidFlow Plumbing. All rights reserved.",
  },
  seo: {
    defaultTitle: "RapidFlow Plumbing | Emergency & Residential Plumbing in Austin",
    description:
      "Fast, professional plumbing service in Austin for emergency repairs, drain cleaning, water heater work, and preventive maintenance.",
    ogImage: plumbingImagePack.ogImage,
    keywords: ["plumber austin", "emergency plumbing", "drain cleaning", "water heater repair", "pipe replacement"],
  },
};

export const cleaningPreset: BusinessConfig = {
  themeKey: "cleaning-fresh",
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Quote", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ],
  business: {
    name: "Pristine Clean Services",
    slogan: "Healthy Spaces, Spotless Results",
    logo: cleaningImagePack.logo,
    phone: "+1 (555) 742-1880",
    email: "hello@pristinecleanservices.com",
    address: "540 Lakeview Drive, Seattle, WA 98101",
    websiteUrl: "https://www.pristinecleanservices.com",
    bookingUrl: "https://www.pristinecleanservices.com/quote",
  },
  socialLinks: {
    instagram: "https://instagram.com/pristinecleanservices",
    facebook: "https://facebook.com/pristinecleanservices",
  },
  hero: {
    eyebrow: "Flexible Scheduling, Consistent Quality",
    headline: "Cleaning Services You Can Count On",
    subheadline:
      "Enjoy spotless spaces and reliable service with trained teams, clear communication, and tailored cleaning plans.",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "#booking",
    secondaryCtaLabel: "Explore Services",
    secondaryCtaHref: "#services",
    backgroundImage: cleaningImagePack.hero,
  },
  trustIndicators: ["Background-Checked Staff", "Detail-Oriented Cleaning", "Reliable Scheduling"],
  trustMetrics: [
    { value: "500+", label: "Monthly Cleanings" },
    { value: "98%", label: "Client Retention" },
    { value: "4.9", label: "Average Rating" },
  ],
  services: pristineCleaningServices,
  about: {
    eyebrow: "About Us",
    title: "Detail-Driven Cleaning Professionals",
    description:
      "Pristine Clean Services helps homeowners and businesses maintain healthier, more welcoming environments with consistent procedures.",
    missionLabel: "Our Mission",
    mission: "Deliver reliable, high-quality cleaning that gives clients more comfort, time, and peace of mind.",
    image: cleaningImagePack.about,
  },
  gallerySection: {
    eyebrow: "Our Results",
    title: "Spotless Spaces, Every Time",
    description: "Explore examples from home deep cleans, office maintenance, and move-out projects.",
  },
  testimonials: pristineCleaningTestimonials,
  gallery: cleaningImagePack.gallery,
  booking: {
    eyebrow: "Get a Quote",
    title: "Request Your Cleaning Plan",
    description: "Tell us about your space and schedule. We will recommend the best package and pricing.",
    primaryCtaLabel: "Get My Quote",
    primaryCtaHref: "https://www.pristinecleanservices.com/quote",
    secondaryCtaLabel: "Call Team",
    secondaryCtaHref: "tel:+15557421880",
  },
  contact: {
    eyebrow: "Contact",
    title: "Book Cleaning Across the Seattle Area",
    description: "Reach out for recurring service, deep cleaning, or move-in and move-out support.",
    infoTitle: "Contact Information",
    hoursTitle: "Service Hours",
    formTitle: "Request Service",
    formDescription: "Share your cleaning needs and preferred timing.",
    formCtaLabel: "Submit Request",
    formPlaceholders: {
      name: "Your name",
      email: "Your email",
      phone: "Your phone",
      message: "Tell us the type of cleaning you need",
    },
    businessHours: [
      { day: "Mon-Fri", hours: "8:00 AM - 7:00 PM" },
      { day: "Sat", hours: "9:00 AM - 5:00 PM" },
      { day: "Sun", hours: "By Appointment" },
    ],
  },
  maps: {
    eyebrow: "Service Area",
    title: "Serving Seattle and Nearby Areas",
    description: "Fast and reliable cleaning coverage across the city.",
    embedUrl: "https://www.google.com/maps?q=540+Lakeview+Drive+Seattle+WA+98101&output=embed",
  },
  footer: {
    contactLabel: "Contact",
    exploreLabel: "Services",
    socialLabel: "Social",
    copyrightText: "© Pristine Clean Services. All rights reserved.",
  },
  seo: {
    defaultTitle: "Pristine Clean Services | Home & Office Cleaning in Seattle",
    description:
      "Top-rated cleaning team for homes, offices, move-in/out projects, and deep cleaning services across Seattle.",
    ogImage: cleaningImagePack.ogImage,
    keywords: ["cleaning service seattle", "home cleaning", "office cleaning", "move out cleaning", "deep cleaning"],
  },
};

export const businessPresets = {
  barber: barberPreset,
  gym: gymPreset,
  plumbing: plumbingPreset,
  cleaning: cleaningPreset,
} as const;

export type BusinessPresetKey = keyof typeof businessPresets;

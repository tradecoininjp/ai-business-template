import type { GalleryImage } from "@/types/business";

export type PresetAssetKey = "barber" | "gym" | "plumbing" | "cleaning";

export type PresetImagePack = {
  logo: GalleryImage;
  hero: GalleryImage;
  about: GalleryImage;
  gallery: GalleryImage[];
  ogImage: string;
};

export const barberImagePack: PresetImagePack = {
  logo: {
    src: "/images/logo-barber.svg",
    alt: "Premium Barber Shop logo",
  },
  hero: {
    src: "/images/hero-barber.svg",
    alt: "Luxury barber interior with modern styling chairs",
  },
  about: {
    src: "/images/hero-barber.svg",
    alt: "Barber team delivering precision grooming service",
  },
  gallery: [
    { src: "/images/hero-barber.svg", alt: "Premium barber studio interior" },
    { src: "/images/og-barber.svg", alt: "Premium barber brand presentation" },
    { src: "/images/hero-barber.svg", alt: "Barber preparing beard sculpting service" },
    { src: "/images/og-barber.svg", alt: "Client-ready premium grooming finish" },
    { src: "/images/hero-barber.svg", alt: "Luxury barber tools and chair setup" },
    { src: "/images/og-barber.svg", alt: "Storefront and premium brand identity" },
  ],
  ogImage: "/images/og-barber.svg",
};

export const gymImagePack: PresetImagePack = {
  logo: {
    src: "/images/logo-gym.svg",
    alt: "Forge Elite Gym logo",
  },
  hero: {
    src: "/images/hero-barber.svg",
    alt: "Athletes training in a premium gym studio",
  },
  about: {
    src: "/images/hero-barber.svg",
    alt: "Gym coaching session with members",
  },
  gallery: [
    { src: "/images/hero-barber.svg", alt: "Strength training zone inside Forge Elite Gym" },
    { src: "/images/og-barber.svg", alt: "Coach-led group training session" },
    { src: "/images/hero-barber.svg", alt: "Member conditioning circuit workout" },
    { src: "/images/og-barber.svg", alt: "Functional training and mobility session" },
    { src: "/images/hero-barber.svg", alt: "Athlete performance training area" },
    { src: "/images/og-barber.svg", alt: "Gym branding and premium interior" },
  ],
  ogImage: "/images/og-gym.svg",
};

export const plumbingImagePack: PresetImagePack = {
  logo: {
    src: "/images/logo-plumbing.svg",
    alt: "RapidFlow Plumbing logo",
  },
  hero: {
    src: "/images/hero-barber.svg",
    alt: "Licensed plumbing technicians at a residential service site",
  },
  about: {
    src: "/images/hero-barber.svg",
    alt: "Plumbing team performing system maintenance",
  },
  gallery: [
    { src: "/images/hero-barber.svg", alt: "Emergency plumbing response team" },
    { src: "/images/og-barber.svg", alt: "Water heater installation service" },
    { src: "/images/hero-barber.svg", alt: "Drain cleaning and diagnostics" },
    { src: "/images/og-barber.svg", alt: "Residential pipe replacement work" },
    { src: "/images/hero-barber.svg", alt: "Commercial plumbing maintenance" },
    { src: "/images/og-barber.svg", alt: "Plumbing brand service fleet" },
  ],
  ogImage: "/images/og-plumbing.svg",
};

export const cleaningImagePack: PresetImagePack = {
  logo: {
    src: "/images/logo-cleaning.svg",
    alt: "Pristine Clean Services logo",
  },
  hero: {
    src: "/images/hero-barber.svg",
    alt: "Professional cleaning team preparing a spotless interior",
  },
  about: {
    src: "/images/hero-barber.svg",
    alt: "Cleaning specialists in a premium office environment",
  },
  gallery: [
    { src: "/images/hero-barber.svg", alt: "Deep cleaning kitchen and living spaces" },
    { src: "/images/og-barber.svg", alt: "Recurring office cleaning service" },
    { src: "/images/hero-barber.svg", alt: "Move-out cleaning checklist completion" },
    { src: "/images/og-barber.svg", alt: "Post-construction cleaning crew" },
    { src: "/images/hero-barber.svg", alt: "Eco-friendly cleaning supplies in use" },
    { src: "/images/og-barber.svg", alt: "Pristine Clean branded equipment setup" },
  ],
  ogImage: "/images/og-cleaning.svg",
};

export const presetImagePacks: Record<PresetAssetKey, PresetImagePack> = {
  barber: barberImagePack,
  gym: gymImagePack,
  plumbing: plumbingImagePack,
  cleaning: cleaningImagePack,
};

export function getPresetImagePack(preset: PresetAssetKey): PresetImagePack {
  return presetImagePacks[preset];
}

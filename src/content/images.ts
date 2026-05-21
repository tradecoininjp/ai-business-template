import type { GalleryImage } from "@/types/business";

export type PresetImagePack = {
  hero: GalleryImage;
  about: GalleryImage;
  gallery: GalleryImage[];
  ogImage: string;
};

export const barberImagePack: PresetImagePack = {
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
  ogImage: "/images/og-barber.svg",
};

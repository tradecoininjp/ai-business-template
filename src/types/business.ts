export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLinks = {
  instagram?: string;
  facebook?: string;
  x?: string;
  tiktok?: string;
  youtube?: string;
};

export type ServiceIcon = "scissors" | "beard" | "razor" | "facial" | "style" | "kid";

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIcon;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type TrustMetric = {
  value: string;
  label: string;
};

export type BusinessHour = {
  day: string;
  hours: string;
};

export type BusinessIdentity = {
  name: string;
  slogan: string;
  logo?: GalleryImage;
  phone: string;
  email: string;
  address: string;
  websiteUrl: string;
  bookingUrl: string;
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCtaLabel: string;
  primaryCtaHref: `#${string}` | string;
  secondaryCtaLabel: string;
  secondaryCtaHref: `#${string}` | string;
  backgroundImage: GalleryImage;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  description: string;
  missionLabel: string;
  mission: string;
  image?: GalleryImage;
};

export type GalleryContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type BookingContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: `#${string}` | string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: `#${string}` | string;
};

export type ContactFormPlaceholders = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  description: string;
  infoTitle: string;
  hoursTitle: string;
  formTitle: string;
  formDescription: string;
  formCtaLabel: string;
  formPlaceholders: ContactFormPlaceholders;
  businessHours: BusinessHour[];
};

export type MapsContent = {
  eyebrow: string;
  title: string;
  description: string;
  embedUrl: string;
};

export type FooterContent = {
  contactLabel: string;
  exploreLabel: string;
  socialLabel: string;
  copyrightText: string;
};

export type SeoContent = {
  defaultTitle: string;
  description: string;
  ogImage: string;
  keywords: string[];
};

export type BusinessConfig = {
  themeKey: string;
  navigation: NavItem[];
  business: BusinessIdentity;
  socialLinks: SocialLinks;
  hero: HeroContent;
  trustIndicators: string[];
  trustMetrics: TrustMetric[];
  services: ServiceItem[];
  about: AboutContent;
  gallerySection: GalleryContent;
  testimonials: Testimonial[];
  gallery: GalleryImage[];
  booking: BookingContent;
  contact: ContactContent;
  maps: MapsContent;
  footer: FooterContent;
  seo: SeoContent;
};

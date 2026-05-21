export type ServiceItem = {
  title: string;
  description: string;
  icon: "scissors" | "beard" | "razor" | "facial" | "style" | "kid";
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Book", href: "#book" },
] as const;

export const trustIndicators = [
  "4.9 / 5 average rating",
  "2,000+ local clients",
  "Open 7 days",
] as const;

export const services: ServiceItem[] = [
  {
    title: "Precision Haircut",
    description:
      "Tailored cuts that match your style, face shape, and daily routine.",
    icon: "scissors",
  },
  {
    title: "Beard Sculpting",
    description:
      "Detailed beard shaping with premium oils for a clean, structured look.",
    icon: "beard",
  },
  {
    title: "Royal Hot Towel Shave",
    description:
      "Classic straight-razor experience with warm towel prep and soothing finish.",
    icon: "razor",
  },
  {
    title: "Skin Refresh Facial",
    description:
      "Quick deep-cleansing facial designed for men with active lifestyles.",
    icon: "facial",
  },
  {
    title: "Event Grooming",
    description:
      "Look your best for weddings, shoots, and corporate events.",
    icon: "style",
  },
  {
    title: "Kids Gentleman Cut",
    description:
      "Comfortable and stylish cuts for younger clients in a relaxed setting.",
    icon: "kid",
  },
];

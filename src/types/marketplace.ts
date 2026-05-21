export type Listing = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  category: string;
};

export type NavLinkItem = {
  label: string;
  href: string;
};

export type DashboardStat = {
  id: string;
  label: string;
  value: string;
  trend: "up" | "down" | "neutral";
  change: string;
};

export type PlatformConfig = {
  name: string;
  tagLine: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  navLinks: NavLinkItem[];
  categories: string[];
  listingHighlights: string[];
  auth: {
    loginTitle: string;
    registerTitle: string;
    loginSubtitle: string;
    registerSubtitle: string;
  };
};

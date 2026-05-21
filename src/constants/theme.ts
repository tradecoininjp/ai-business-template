export const themes = {
  "barber-luxury": {
    key: "barber-luxury",
    className: "theme-barber-luxury",
    label: "Barber Luxury",
    themeColor: "#0d0d0b",
    accentColor: "#c8a560",
  },
  "plumbing-pro": {
    key: "plumbing-pro",
    className: "theme-plumbing-pro",
    label: "Plumbing Pro",
    themeColor: "#0a1a26",
    accentColor: "#34b3ff",
  },
  "cleaning-fresh": {
    key: "cleaning-fresh",
    className: "theme-cleaning-fresh",
    label: "Cleaning Fresh",
    themeColor: "#0d1f1e",
    accentColor: "#6ddccf",
  },
} as const;

export type ThemeKey = keyof typeof themes;

export function getThemeConfig(themeKey: ThemeKey) {
  return themes[themeKey];
}

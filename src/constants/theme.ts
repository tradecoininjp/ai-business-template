export const themes = {
  "barber-luxury": {
    key: "barber-luxury",
    className: "theme-barber-luxury",
    label: "Barber Luxury",
    themeColor: "#0d0d0b",
    accentColor: "#c8a560",
  },
} as const;

export type ThemeKey = keyof typeof themes;

export function getThemeConfig(themeKey: ThemeKey) {
  return themes[themeKey];
}

import { businessPresets, type BusinessPresetKey } from "@/constants/presets";

const DEFAULT_PRESET: BusinessPresetKey = "barber";

export const presetKeys = Object.keys(businessPresets) as BusinessPresetKey[];

export function isBusinessPresetKey(value: string): value is BusinessPresetKey {
  return presetKeys.includes(value as BusinessPresetKey);
}

export function resolveBusinessPresetKey(rawPreset?: string | null): BusinessPresetKey {
  if (!rawPreset) {
    return DEFAULT_PRESET;
  }

  return isBusinessPresetKey(rawPreset) ? rawPreset : DEFAULT_PRESET;
}

export function resolveBusinessConfig(rawPreset?: string | null) {
  const presetKey = resolveBusinessPresetKey(rawPreset);

  return {
    presetKey,
    config: businessPresets[presetKey],
  };
}

export function resolveBusinessFromEnv() {
  return resolveBusinessConfig(process.env.NEXT_PUBLIC_BUSINESS_PRESET);
}

export function resolvePresetSlices(rawPreset?: string | null) {
  const { presetKey, config } = resolveBusinessConfig(rawPreset);

  return {
    presetKey,
    business: config.business,
    services: config.services,
    testimonials: config.testimonials,
    seo: config.seo,
    branding: {
      logo: config.business.logo,
      hero: config.hero.backgroundImage,
      gallery: config.gallery,
      ogImage: config.seo.ogImage,
      themeKey: config.themeKey,
    },
  };
}

import { barberPreset, businessPresets, type BusinessPresetKey } from "@/constants/presets";

const selectedPreset = (process.env.NEXT_PUBLIC_BUSINESS_PRESET ?? "barber") as BusinessPresetKey;

export const businessConfig = businessPresets[selectedPreset] ?? barberPreset;

export const activeBusinessPreset: BusinessPresetKey = businessPresets[selectedPreset] ? selectedPreset : "barber";

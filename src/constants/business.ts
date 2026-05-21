import { resolveBusinessFromEnv } from "@/lib/preset-resolver";

const resolvedPreset = resolveBusinessFromEnv();

export const businessConfig = resolvedPreset.config;

export const activeBusinessPreset = resolvedPreset.presetKey;

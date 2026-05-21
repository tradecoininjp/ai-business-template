# Vercel Multi-Preset Deployment Guide

## Objective

Run independent business websites from one repository and one reusable codebase, using separate Vercel projects per business preset.

Live deployment examples:

- https://garrisongrooming-demo.vercel.app/
- https://ironcoregym-demo.vercel.app/
- https://rapidplumbing-demo.vercel.app/
- https://pristineclean-demo.vercel.app/

## Prerequisites

- A single shared Git repository
- Preset switching controlled only by `NEXT_PUBLIC_BUSINESS_PRESET`
- No component rewrites required for business switching

## 1. Confirm available preset keys

Available keys:

- barber
- gym
- plumbing
- cleaning

Reference files:

- `src/constants/presets.ts`
- `src/lib/preset-resolver.ts`

## 2. Create Vercel projects per business type

1. Import the same Git repository into Vercel four times
2. Assign business-specific project names
3. Keep the default build command (`next build`)

## 3. Configure environment variables for each project

For each Vercel project, set:

- Key: `NEXT_PUBLIC_BUSINESS_PRESET`
- Value: target preset key

Example mapping:

- https://garrisongrooming-demo.vercel.app/ -> `barber`
- https://ironcoregym-demo.vercel.app/ -> `gym`
- https://rapidplumbing-demo.vercel.app/ -> `plumbing`
- https://pristineclean-demo.vercel.app/ -> `cleaning`

## 4. Post-deployment validation

Check each deployed URL for:

- Correct hero copy
- Correct services and testimonials
- Correct logo and visual theme
- Correct title, description, and OG image
- Correct phone and booking CTA targets

## 5. Asset and branding update operations

1. Add logo, OG image, and key visuals to `public/images/`
2. Update the target preset image pack in `src/content/images.ts`
3. If needed, update `src/constants/theme.ts` and `src/styles/tokens.css`
4. Redeploy only the affected Vercel project

## 6. Adding a new business type

1. Add a new preset in `src/constants/presets.ts`
2. Add services in `src/content/services.ts`
3. Add testimonials in `src/content/testimonials.ts`
4. Add image pack entries in `src/content/images.ts`
5. `src/lib/preset-resolver.ts` resolves the key automatically once registered
6. Create one new Vercel project and configure its preset environment variable

## 7. Operational best practices

- Keep business differences in preset/content layers
- Keep UI components shared across all businesses
- Manage conversion and SEO differences through configuration files
- Use one deployment URL per business to separate ownership and operations

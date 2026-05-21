# Portfolio Operations Guide

## 1. Clone and start the system

1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env.local`
4. Set `NEXT_PUBLIC_BUSINESS_PRESET`
5. Run `npm run dev` and verify initial rendering

## 2. Add a new business preset

1. Duplicate an existing preset in `src/constants/presets.ts`
2. Register the new key in `businessPresets`
3. Add service content in `src/content/services.ts`
4. Add testimonials in `src/content/testimonials.ts`
5. Add image pack entries in `src/content/images.ts`
6. If needed, add theme tokens in `src/constants/theme.ts` and `src/styles/tokens.css`

## 3. Branding replacement

Update:

- Business name, slogan, and contact details
- Navigation labels and CTA copy
- Hero heading and messaging
- Footer text

Main file:

- `src/constants/presets.ts`

## 4. Image, OG, and logo replacement

1. Add assets to `public/images/`
2. Update the preset image pack in `src/content/images.ts`
3. Verify each path for `logo`, `hero`, `gallery`, and `ogImage`
4. Add meaningful `alt` text for every image

## 5. Environment variable operations

### Local

- Use `.env.local`
- Set `NEXT_PUBLIC_BUSINESS_PRESET`

### Vercel

- Configure Environment Variables in each project
- Redeploy after changing values

## 6. Vercel deployment workflow

1. Connect the same repository to Vercel
2. Create one project per business type
3. Set `NEXT_PUBLIC_BUSINESS_PRESET` per project
4. Validate UI, CTA, and SEO after deployment

## 7. Mobile quality checklist before delivery

- First-view copy does not break
- CTA buttons are touch-friendly
- Sticky contact bar remains visible
- Navigation open/close behavior is smooth
- Image aspect ratios stay correct
- Loading speed feels fast on mobile devices

## 8. SEO and social checklist before delivery

- Title and description match the target business
- OG image matches the target business
- Favicon is visible
- Canonical URL matches the expected domain
- Sitemap and robots files are generated

## 9. Scaling principles

- Keep UI components shared wherever possible
- Keep differences inside preset and content layers
- Use one deployment URL per client business
- Reuse this delivery workflow as a standard template

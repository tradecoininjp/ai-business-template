# Local Business Template Delivery Playbook

## 1. Initial setup after cloning

1. Run `npm install`
2. Create `.env.local` from `.env.example`
3. Set `NEXT_PUBLIC_BUSINESS_PRESET` to the target business type
4. Run `npm run dev` and verify the page

Available presets:

- `barber`
- `gym`
- `plumbing`
- `cleaning`

## 2. Key files for business customization

- Business identity and conversion copy: `src/constants/presets.ts`
- Service catalog: `src/content/services.ts`
- Testimonials: `src/content/testimonials.ts`
- Image and logo replacement: `src/content/images.ts` and `public/images/`
- Theme colors: `src/constants/theme.ts` and `src/styles/tokens.css`

## 3. Asset and branding replacement flow

1. Place logo, hero, and OG assets in `public/images/`
2. Update the target preset paths and `alt` text in `src/content/images.ts`
3. Verify `business.logo` and `seo.ogImage` in `src/constants/presets.ts`
4. Validate visual layout and LCP image behavior on real devices

## 4. Adding a new business preset

1. Duplicate an existing preset object in `src/constants/presets.ts` and create a new key
2. Add the business services in `src/content/services.ts`
3. Add testimonials in `src/content/testimonials.ts`
4. Add the image pack in `src/content/images.ts`
5. If needed, add a new theme in `src/constants/theme.ts` and `src/styles/tokens.css`
6. Register the new key in `businessPresets` and validate via `.env.local`

## 5. Pre-delivery checklist

- `npm run build` succeeds
- Metadata (title, description, OG image) matches the target business
- Mobile call and booking actions remain visible
- Map section shows the correct business area
- Section copy aligns with client requirements

## 6. Deployment checklist for Vercel

1. Connect the repository to Vercel
2. Configure `NEXT_PUBLIC_BUSINESS_PRESET` in Environment Variables
3. Run a production deployment
4. Verify after deployment:
   - Homepage rendering
   - CTA links
   - OGP preview
   - Form and contact information

## 7. Recommended reuse strategy

- Use one branch per client project and keep business differences in preset files
- Keep UI components reusable; update only business-specific copy
- Always update image `alt` text together with visual replacements for SEO consistency

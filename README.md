# AI-Powered Local Business Website Template

A modern, reusable, production-ready website template for local service businesses.

Built for fast delivery, clean UI, strong SEO, and AI-assisted development.

## What This Project Solves

- Launch high-converting local business websites quickly
- Reuse one scalable codebase across multiple business types
- Keep implementation fast, maintainable, and production-ready

Business examples:

- Barber shops
- Gyms
- Cleaning services
- Plumbing services
- Landscaping businesses
- Other local service companies

## Features

- Modern landing page design
- Mobile-first responsive layout
- Fast-loading frontend
- Reusable section-based architecture
- Booking and contact flow support
- Google Maps support
- SEO-ready structure with semantic markup
- Scalable component system
- Deployment-ready setup

## Tech Stack

- Next.js
- TypeScript
- TailwindCSS
- GitHub Copilot
- Cursor AI
- v0
- Vercel

## Architecture

Reusable folder structure:

```bash
app/
components/
sections/
lib/
constants/
public/
styles/
```

Design goals:

- Fast iteration
- Maintainability
- Scalable template reuse
- Rapid client customization

## Development Workflow

AI-assisted delivery process:

1. Generate reusable UI structures
2. Customize branding and content
3. Optimize responsiveness and SEO
4. Deploy quickly to production

Typical delivery cycle: 3-5 business days per website.

## Business Presets

The project now supports multiple business presets through configuration only (no component rewrites).

Available presets:

- barber
- gym

Switch preset using environment variable:

```bash
# .env.local
NEXT_PUBLIC_BUSINESS_PRESET=gym
```

Preset source files:

- src/constants/presets.ts
- src/constants/business.ts
- src/content/services.ts
- src/content/testimonials.ts

## Content and Image Replacement Workflow

Use this workflow to customize each business without changing component code.

### 1. Select preset

- Set `NEXT_PUBLIC_BUSINESS_PRESET` in `.env.local`.
- Available values: `barber`, `gym`.

### 2. Replace business content

- Update text/content by preset in `src/constants/presets.ts`.
- Replace:
	- business identity (name, phone, email, address)
	- hero copy
	- about/booking/contact copy
	- maps URL
	- footer labels

### 3. Replace services and testimonials

- Edit service datasets in `src/content/services.ts`.
- Edit testimonial datasets in `src/content/testimonials.ts`.
- Keep structure and typing unchanged for drop-in reuse.

### 4. Replace images in one place

- Manage preset image packs in `src/content/images.ts`.
- Replace:
	- hero background image
	- about image
	- gallery image list + alt text
	- OG image path

### 5. Add a new business preset

1. Duplicate one preset object in `src/constants/presets.ts`.
2. Create/update matching services/testimonials/image packs.
3. Register the new preset key in `businessPresets`.
4. Set `NEXT_PUBLIC_BUSINESS_PRESET=<new-key>`.

## Current Status

In active development, focused on:

- Reusable local business landing page templates
- Scalable frontend architecture
- AI-assisted development workflow optimization

## Deployment

Ready for deployment on Vercel and Netlify.

## Future Improvements

- CMS integration
- Multi-template support
- Dynamic content management
- AI-generated content workflows
- Automated deployment pipeline
- Reusable business configuration system

## License

Private project for portfolio and development purposes.

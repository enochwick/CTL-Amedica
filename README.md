# CTL Amedica — Website

A modern rebuild of [ctlamedica.com](https://ctlamedica.com/) — the world's exclusive
provider of Silicon Nitride spinal implants.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Pages
- `/` — Home
- `/technology`, `/silicon-nitride`, `/nitro` — Technology story
- `/products` — Catalog (filter by `?category=`), `/products/[slug]` — device detail
- `/about` — Story, values, leadership
- `/publications` — Clinical evidence
- `/careers` — Openings
- `/contact` — Contact form (`POST /api/contact`)

## Where to edit
- **Brand colors / fonts** — `tailwind.config.ts`, `src/styles/tokens.css` (see `BRAND.md`)
- **Products** — `src/data/products.ts`
- **Navigation / contact info** — `src/data/site.ts`
- **Leadership / values** — `src/data/team.ts`
- **Logos** — `public/logos/`

## To do before launch
- Add real product photography to `public/images/products/` and wire into cards/detail pages
- Connect `/api/contact` to an email provider (Resend/SendGrid) or CRM
- Add real publications PDFs and careers listings
- See `STRUCTURE.md` for the full directory layout
```

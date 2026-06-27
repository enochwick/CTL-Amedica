# CTL Amedica — Project Structure

Rebuild of [ctlamedica.com](https://ctlamedica.com/). Spinal implant / medical device
marketing + product catalog site.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS

## Layout

```
src/
  app/
    (marketing)/            # Public-facing marketing routes (shared layout)
      page.tsx              # Home
      technology/           # Silicon nitride / core technology story
      products/             # Product catalog index
        [slug]/             # Individual product pages
      clinical-evidence/    # Studies, white papers, surgeon resources
      about/                # Company, mission, leadership
      news/                 # News index
        [slug]/             # Individual articles
      contact/              # Contact form + locations
    api/
      contact/              # Contact form submission handler
    layout.tsx              # Root layout (fonts, metadata)
    globals.css

  components/
    ui/                     # Buttons, inputs, cards — design primitives
    layout/                 # Header, footer, nav, mobile menu
    sections/               # Reusable page sections (hero, CTA, feature grids)
    products/               # Product-specific components (specs, gallery, filters)

  lib/                      # Utilities, helpers, API clients
  data/                     # Static/structured data (nav, product specs)
  hooks/                    # Custom React hooks
  styles/                   # Tailwind layers / design tokens

content/
  products/                 # Product content (MDX/JSON)
  news/                     # Article content (MDX/JSON)

public/
  images/{products,technology,team}/
  logos/                    # CTL Amedica brand assets
  documents/                # IFUs, brochures, white papers (PDF)
```

## Next steps
1. Initialize Next.js app (`package.json`, `tsconfig`, Tailwind config).
2. Pull brand assets (logo, colors, type) from the live site.
3. Build layout shell (header/footer), then home page.

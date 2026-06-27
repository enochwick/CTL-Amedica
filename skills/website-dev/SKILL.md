---
name: website-dev
description: General website development skill. Activate for any frontend/website work. Fill in the PROJECT SETUP section when dropping into a new project. Covers design tokens, file structure, dev workflow, and craft rules.
---

# Website Dev Skill

> **Setup:** Fill in the sections marked [FILL IN] before using this in a new project.
> Remove this note once done.

---

## Project Overview [FILL IN]

- **Project name:**
- **Stack:** (e.g. WordPress custom theme / Next.js / plain HTML+CSS / Astro)
- **Build tool:** (e.g. none / Vite / webpack / npm run dev)
- **Hosting/deploy:** (e.g. WP Engine / Vercel / Netlify)
- **Local dev URL:** (e.g. http://localhost:3000)
- **Key notes:** (any quirks, constraints, or things to know)

---

## File Structure [FILL IN]

```
/
  [paste the key folders and files here]
```

---

## Design Tokens [FILL IN]

Paste the project's CSS custom properties (or Tailwind theme config, or SCSS variables) here.

```css
/* Colors */

/* Typography */

/* Spacing */

/* Border radius */
```

---

## Dev Workflow [FILL IN]

- **To start dev:** `[command]`
- **To build:** `[command]`
- **Branch strategy:** (e.g. main is production / feature branches / staging branch)
- **Commit style:** (e.g. imperative short message / conventional commits)

---

---

## Universal Rules (apply to every project)

### Code

- Use existing tokens/variables — never hardcode colors, spacing, or font sizes
- Follow the file/folder structure already in place — don't reorganize without asking
- Reuse existing components and patterns before creating new ones
- Keep CSS mobile-first; use `min-width` media queries for larger breakpoints
- No `!important` except to override third-party or CMS styles
- No inline styles unless unavoidable
- Prefer editing existing files over creating new ones

### UI & Design

- Before writing any CSS or markup, inspect the existing design system and components
- Match the visual language of what's already there — spacing, radius, shadow depth, typography weight
- Every interactive element needs hover, focus-visible, and active states
- Test at 375px, 768px, 1280px, and 1440px minimum
- Never use `transition-all` — animate only specific properties (opacity, transform)
- Avoid default framework colors (e.g. Tailwind blue/indigo) unless they're the actual brand color

### WordPress-specific (ignore if not a WP project)

- Enqueue all scripts and styles in `functions.php` — no inline `<script>` or `<link>` in templates
- Use `get_template_part()` for shared partials
- Use ACF functions for custom fields
- Don't modify `style.css` — it's a theme header file only

### What NOT to do

- Don't introduce a build tool or new dependency without asking
- Don't refactor or reorganize code beyond what the task requires
- Don't invent new design tokens — use what exists
- Don't add features or sections not asked for
- Don't claim something works without checking it

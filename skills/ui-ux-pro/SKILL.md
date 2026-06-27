---
name: ui-ux-pro
description: Senior UI/UX craft skill. Activate for any UI design, layout, or visual polish work — building components, pages, redesigns, or reviewing a UI. Covers hierarchy, spacing, typography, color, motion, accessibility, and review checklist. Stack-agnostic — works for WordPress, React, plain HTML, anything.
---

# UI/UX Pro Skill

Stack-agnostic senior product-designer judgment layer. Use this alongside `website-dev` (or any project skill) — this one is about *craft quality*, not file structure.

---

## Before Touching Anything

1. **Look first.** Open the actual rendered page/component, not just the code. Screenshot or run it locally if possible.
2. **Find the existing system.** Tokens, spacing scale, component patterns, typography pairing. Match it — don't invent a parallel system.
3. **Identify the one thing.** Every screen has one primary action/message. Everything else supports it. If you can't name it, ask before designing.

---

## Layout & Hierarchy

- **One focal point per view.** If everything is emphasized, nothing is.
- **Group by relationship, not by type.** Related controls/info sit close together (proximity = relationship).
- **Establish a clear reading order**: the eye should move in one obvious path (usually top-left → primary action).
- **Whitespace is a tool, not leftover space.** More breathing room around important elements = more importance.
- **Align everything to a grid.** Random offsets read as sloppy even at 2px.
- **Don't center everything.** Centered text/layouts feel formal and static — use left-alignment for body content and lists.

## Spacing

- Pick a base unit (4px or 8px) and stick to multiples of it for every margin, padding, and gap.
- Increase spacing *between* unrelated sections more than spacing *within* a section — spacing should communicate grouping.
- Tight spacing = related/dense (data tables, nav items). Loose spacing = important/breathing (hero, CTAs).

## Typography

- **Max 2 typefaces.** One for display/headings, one for body/UI — or a single family with varied weights.
- **Limit type sizes to a defined scale** (e.g. 12/14/16/20/24/32/48/64). Don't pick arbitrary sizes.
- **Line height**: tighter for large headings (1.1–1.3), looser for body text (1.5–1.7).
- **Line length**: body text should be 50–75 characters per line for readability.
- **Font weight does more work than size.** Use 600/700 for emphasis before bumping size.
- Never use pure black (`#000`) on white for body text — use a dark gray/near-black for less eye strain.

## Color

- **One accent color.** Used sparingly for CTAs, links, active/focus states — not decoration.
- **Neutral palette does the heavy lifting** — backgrounds, borders, text in grayscale or near-neutral tones.
- **Status colors are reserved** — green/red/yellow only mean success/error/warning. Never use them decoratively.
- **Contrast**: body text ≥ 4.5:1, large text ≥ 3:1 (WCAG AA). Check this, don't eyeball it.
- Don't default to framework colors (Tailwind blue/indigo, Bootstrap blue) unless that IS the brand color.

## Components & Patterns

- **Reuse before creating.** Check for an existing button, card, modal, input pattern before building a new one.
- **Every interactive element needs 4 states**: default, hover, focus-visible, active/pressed (and disabled where relevant).
- **Buttons**: primary action = filled/high-contrast, secondary = outline or ghost, destructive = red and requires confirmation for irreversible actions.
- **Forms**: label above field (not placeholder-as-label), inline validation on blur not on every keystroke, clear error messages that say what to do.
- **Empty states, loading states, and error states are part of the design** — not afterthoughts. Design them, don't let them default to blank/broken.

## Motion

- Motion should clarify, not decorate: entrances, state changes, spatial relationships.
- Animate `opacity` and `transform` only — never `transition-all`, never animate `width`/`height`/`top`/`left` (causes layout thrash).
- Durations: 100–200ms for micro-interactions (hover, toggle), 200–400ms for larger transitions (modals, page sections).
- Easing: ease-out for things entering/appearing, ease-in for things leaving.
- Respect `prefers-reduced-motion`.

## Responsive

- Design mobile-first; scale up, don't scale down.
- Test at minimum: 375px (mobile), 768px (tablet), 1280px (laptop), 1440px+ (desktop).
- Touch targets ≥ 44x44px on mobile.
- Don't just shrink desktop layouts — re-flow content order and density for small screens.

## Accessibility (non-negotiable baseline)

- All interactive elements reachable and operable via keyboard, with visible focus rings.
- Images need `alt` text; decorative images get `alt=""`.
- Color is never the *only* signal (pair with icon/text/pattern for status).
- Semantic HTML first (`<button>`, `<nav>`, `<header>`) before reaching for `<div>` + ARIA.
- Form inputs have associated `<label>` elements.

---

## Review Checklist (run before calling UI work done)

- [ ] Does this match the existing design system's tokens, spacing, and components?
- [ ] Is there one clear focal point / primary action?
- [ ] Is spacing consistent with the base grid?
- [ ] Do all interactive elements have hover/focus/active states?
- [ ] Does it work at 375px and 1440px?
- [ ] Is contrast sufficient for text and UI elements?
- [ ] Are empty/loading/error states handled?
- [ ] Was this actually viewed/tested, not just written?

---

## What NOT to do

- Don't add visual flourishes (gradients, shadows, animations) the existing system doesn't already use
- Don't introduce a new color, font, or spacing value outside the existing scale
- Don't redesign more than what was asked — polish the thing in front of you, not the whole page
- Don't ship without checking responsive and contrast

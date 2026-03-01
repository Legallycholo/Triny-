# Design: Text Visibility & Modern Typography

**Project:** Consentida's Dominican Salon By Triny  
**Scope:** Whole-site text visibility, modern/futuristic look, nav keywords.  
**Status:** Implemented (see below for ongoing recommendations.)

---

## 1. What Was Done

### Text visibility (whole site)

- **CSS variables** in `app/globals.css`:
  - `--text-primary`: `rgb(245, 245, 240)` — main text
  - `--text-secondary`: `rgba(245, 245, 240, 0.9)` — subheads / emphasis
  - `--text-muted`: `rgba(245, 245, 240, 0.8)` — body, captions, links
  - `--text-tertiary`: `rgba(245, 245, 240, 0.75)` — labels, copyright, subtle UI

- **Sections updated** to use these variables instead of low-contrast grays or low opacity:
  - **Header:** Nav and Instagram use `var(--text-muted)`.
  - **Hero:** Sub-headline, trust line, scroll label use secondary/tertiary.
  - **Services:** Intro, pricing link, service list, bottom CTA use muted.
  - **Gallery:** Description, slide text, Before label, pagination, nav buttons use muted/tertiary.
  - **Testimonials:** Subtext, “Verified Client,” “See All Reviews,” pagination use muted/tertiary.
  - **Guarantee:** Body copy uses secondary.
  - **FAQ:** Accordion answers use muted.
  - **Footer:** All text (paragraph, “by Triny,” address, phone, category links, copyright, TanyMarketing) use muted/tertiary.
  - **CTA dialog:** Subtext, option descriptions, address use muted; close button uses muted.

- **SEO pages (15):**
  - Wrapped in `<div data-seo-page className="min-h-screen pt-16">`.
  - In `globals.css`, `[data-seo-page]` overrides Tailwind grays so that on the dark galaxy background:
    - `.text-gray-500/600/700/900` → `var(--text-primary)`
    - `.text-gray-400` and `.dark:text-gray-400` → `var(--text-muted)`
    - `.dark:text-gray-100/300` → primary/muted
    - Links (without solid bg) use muted with gold hover; borders/backgrounds use cream-tinted values.

Result: All text site-wide meets a minimum contrast level and is readable on the dark theme.

### Modern font (futuristic touch)

- **Syne** (Google Fonts) added in `app/layout.tsx` with `variable: "--font-syne"` and applied to `<body>`.
- In `globals.css`, `.font-display { font-family: var(--font-syne), ... }` for display/headings.
- **Hero H1** uses `font-display` in addition to `font-serif` so the main headline can use Syne where desired (e.g. “Beauty Salon in Stone Mountain”) for a more modern, slightly futuristic look while keeping Playfair for serif accent.

### Nav bar: main keywords

- In `components/sections/Header.tsx`, **NAV_LINKS** now includes (in order):
  1. **Beauty Salon** → `/beauty-salon`
  2. **Hair Salon** → `/hair-salon`
  3. **Hairdresser** → `/hairdresser`
  4. Services → `#services`
  5. Gallery → `#gallery`
  6. Reviews → `#reviews`
  7. FAQ → `#faq`

Desktop and mobile menus both show these links. Nav link color uses `var(--text-muted)` for visibility.

---

## 2. Best Recommendations (Ongoing)

### Fonts

- **Current stack:** Geist (body), Playfair Display (serif accent), Syne (display/headings via `.font-display`).
- **Alternatives** if you want to try a different “modern/futuristic” feel:
  - **Outfit** — geometric, clean; good for headings and UI.
  - **Space Grotesk** — tech-forward, slightly rounded; strong for headings.
  - **Plus Jakarta Sans** — modern, friendly; works for body and headings.
- **Usage:** Keep one sans for body (e.g. Geist or Outfit), one display for big headlines (Syne or Space Grotesk), and Playfair for a touch of elegance (taglines, “consentida,” etc.).

### Futuristic look (optional next steps)

- **Headings:** Use `font-display` (Syne) on more section titles (e.g. “The Investment,” “The Mastery Gallery,” “Client Experiences,” “Frequently Asked”) for a consistent modern look.
- **Letter-spacing:** Slightly increased tracking on hero and section titles (e.g. `tracking-tight` or `tracking-wide`) can feel more “tech.”
- **Subtle glow:** You already use gold/violet glow on CTAs; consider a very subtle text-shadow on key headlines (e.g. cream/gold at 10% opacity) for depth without clutter.
- **Borders / cards:** Keep the existing glass-card and gold-accent borders; they already support a premium, slightly futuristic feel.

### Visibility (maintenance)

- Use **only** the CSS variables for text on dark backgrounds:
  - Primary text: `var(--text-primary)` or `rgb(245, 245, 240)`.
  - Secondary: `var(--text-secondary)`.
  - Body/captions/links: `var(--text-muted)`.
  - Tertiary/labels: `var(--text-tertiary)`.
- Avoid raw gray hex (e.g. `#71717A`, `rgb(113, 113, 122)`) for text on `#09090B`; they fail contrast.
- Any new section or component on the dark theme should use these variables (or the same rgba values) so visibility stays consistent.

### Accessibility

- Current choices target roughly **WCAG AA** for normal text (cream on near-black). For strict AAA, consider bumping muted to at least 0.85 opacity if needed.
- Focus states for nav and buttons already use gold; keep visible focus rings on all interactive elements.

---

## 3. File Reference

| Area              | File(s) |
|-------------------|--------|
| CSS variables      | `app/globals.css` (`:root`, `@layer base`, `[data-seo-page]`) |
| Font (Syne)        | `app/layout.tsx` |
| Nav + keywords     | `components/sections/Header.tsx` |
| Hero visibility    | `components/sections/HeroSection.tsx` |
| Services           | `components/sections/ServicesSection.tsx` |
| Gallery            | `components/sections/GallerySection.tsx` |
| Testimonials       | `components/sections/TestimonialsSection.tsx` |
| Guarantee          | `components/sections/GuaranteeBanner.tsx` |
| FAQ                | `components/sections/FAQSection.tsx` |
| Footer             | `components/sections/Footer.tsx` |
| CTA dialog         | `components/ui/cta-dialog.tsx` |
| SEO pages          | All 15 pages under `app/beauty-salon/`, `app/hair-salon/`, `app/hairdresser/` (wrapped with `data-seo-page`) |

---

**Document version:** 1.0  
**Last updated:** 2025-02-28

# Local SEO Update — Implementation Plan

**Project:** Consentida's Dominican Salon By Triny  
**Scope:** 15 new SEO-optimized pages (3 category + 12 service)  
**Routing:** Next.js App Router, file-based (`app/` directory)  
**No code changes until implementation phase — this document is the plan only.**

---

## 1. Context & Constants

| Item | Value |
|------|--------|
| **Salon name** | Consentida's Dominican Salon By Triny |
| **City/location** | Stone Mountain, GA |
| **Live domain** | https://v0-triny.vercel.app/ |
| **Address** | 5226 Stone Mountain Hwy Suite D, Stone Mountain, GA 30087 |
| **Phone** | 787-964-1826 |
| **NAP** | Use the above Name, Address, Phone exactly on every new page |

---

## 2. Architecture (3-Tier)

| Tier | Purpose | Count |
|------|---------|--------|
| **Tier 1** | Homepage | 1 (existing: `app/page.tsx`) |
| **Tier 2** | Category pages | 3 (beauty-salon, hair-salon, hairdresser) |
| **Tier 3** | Service pages | 12 (4 under each category) |

---

## 3. Full Page Manifest

### 3.1 Category Pages (Tier 2)

| File | H1 | Title tag | Meta description keyword | URL slug (for jsonLd/breadcrumb) | Child services (for links grid) |
|------|-----|-----------|--------------------------|----------------------------------|----------------------------------|
| `app/beauty-salon/page.tsx` | Beauty Salon in Stone Mountain, GA | Beauty Salon in Stone Mountain GA \| Consentida's by Triny | Beauty Salon | beauty-salon | Eyebrow Tinting, Eyelash Extensions, Eyebrow Threading, Lash Lift |
| `app/hair-salon/page.tsx` | Hair Salon in Stone Mountain, GA | Hair Salon in Stone Mountain GA \| Consentida's by Triny | Hair Salon | hair-salon | Hair Colouring, Balayage, Highlights, Keratin Treatment |
| `app/hairdresser/page.tsx` | Hairdresser in Stone Mountain, GA | Hairdresser in Stone Mountain GA \| Consentida's by Triny | Hairdresser | hairdresser | Women's Haircut, Men's Haircut, Children's Haircut, Blow Dry |

### 3.2 Service Pages (Tier 3)

**Under Beauty Salon (`/beauty-salon/`)**

| File | H1 | Parent category | Category slug | Service slug | Sibling links (2–3) |
|------|-----|-----------------|---------------|--------------|---------------------|
| `app/beauty-salon/eyebrow-tinting/page.tsx` | Eyebrow Tinting in Stone Mountain, GA | Beauty Salon | beauty-salon | eyebrow-tinting | Eyelash Extensions, Eyebrow Threading, Lash Lift |
| `app/beauty-salon/eyelash-extensions/page.tsx` | Eyelash Extensions in Stone Mountain, GA | Beauty Salon | beauty-salon | eyelash-extensions | Eyebrow Tinting, Eyebrow Threading, Lash Lift |
| `app/beauty-salon/eyebrow-threading/page.tsx` | Eyebrow Threading in Stone Mountain, GA | Beauty Salon | beauty-salon | eyebrow-threading | Eyebrow Tinting, Eyelash Extensions, Lash Lift |
| `app/beauty-salon/lash-lift/page.tsx` | Lash Lift in Stone Mountain, GA | Beauty Salon | beauty-salon | lash-lift | Eyebrow Tinting, Eyelash Extensions, Eyebrow Threading |

**Under Hair Salon (`/hair-salon/`)**

| File | H1 | Parent category | Category slug | Service slug | Sibling links (2–3) |
|------|-----|-----------------|---------------|--------------|---------------------|
| `app/hair-salon/hair-colouring/page.tsx` | Hair Colouring in Stone Mountain, GA | Hair Salon | hair-salon | hair-colouring | Balayage, Highlights, Keratin Treatment |
| `app/hair-salon/balayage/page.tsx` | Balayage in Stone Mountain, GA | Hair Salon | hair-salon | balayage | Hair Colouring, Highlights, Keratin Treatment |
| `app/hair-salon/highlights/page.tsx` | Highlights in Stone Mountain, GA | Hair Salon | hair-salon | highlights | Hair Colouring, Balayage, Keratin Treatment |
| `app/hair-salon/keratin-treatment/page.tsx` | Keratin Treatment in Stone Mountain, GA | Hair Salon | hair-salon | keratin-treatment | Hair Colouring, Balayage, Highlights |

**Under Hairdresser (`/hairdresser/`)**

| File | H1 | Parent category | Category slug | Service slug | Sibling links (2–3) |
|------|-----|-----------------|---------------|--------------|---------------------|
| `app/hairdresser/womens-haircut/page.tsx` | Women's Haircut in Stone Mountain, GA | Hairdresser | hairdresser | womens-haircut | Men's Haircut, Children's Haircut, Blow Dry |
| `app/hairdresser/mens-haircut/page.tsx` | Men's Haircut in Stone Mountain, GA | Hairdresser | hairdresser | mens-haircut | Women's Haircut, Children's Haircut, Blow Dry |
| `app/hairdresser/childrens-haircut/page.tsx` | Children's Haircut in Stone Mountain, GA | Hairdresser | hairdresser | childrens-haircut | Women's Haircut, Men's Haircut, Blow Dry |
| `app/hairdresser/blow-dry/page.tsx` | Blow Dry in Stone Mountain, GA | Hairdresser | hairdresser | blow-dry | Women's Haircut, Men's Haircut, Children's Haircut |

---

## 4. Internal Linking Rules

- **Service → parent:** Every service page must link back to its parent category page (breadcrumb + "Explore More" section).
- **Category → children:** Each category page must link to all 4 of its child service pages in the "Our [Category] Services" grid.
- **Category → category:** Each category page should link to the other 2 category pages (e.g. Beauty Salon links to Hair Salon and Hairdresser). Add these in a small "Also see" or "More services" area, or in the CTA section.
- **Homepage → categories (optional):** Add links to all 3 category pages in `app/page.tsx` (e.g. via `components/sections/Footer.tsx` or a dedicated "Services" nav section). Do not modify other existing files except this optional update.

---

## 5. Category Page Template Variables

For each category page, set:

- `[SERVICE_CATEGORY]` → e.g. "Beauty Salon", "Hair Salon", "Hairdresser"
- `[KEYWORD]` → same as SERVICE_CATEGORY for the meta description
- `[url-slug]` → `beauty-salon` | `hair-salon` | `hairdresser`
- `[CHILD_SERVICE_LINKS]` → Four `<Link>` components to the four child service pages (see manifest above)
- **Cross-links:** Add two `<Link>` components to the other two category pages (e.g. on Beauty Salon: link to `/hair-salon` and `/hairdresser`).

---

## 6. Service Page Template Variables

For each service page, set:

- `[SERVICE NAME]` → e.g. "Eyebrow Tinting", "Women's Haircut"
- `[CATEGORY NAME]` → "Beauty Salon" | "Hair Salon" | "Hairdresser"
- `[category-slug]` → `beauty-salon` | `hair-salon` | `hairdresser`
- `[service-slug]` → from manifest (e.g. `eyebrow-tinting`, `womens-haircut`)
- `[SIBLING_SERVICE_LINKS]` → 2–3 `<Link>` components to sibling service pages (exclude current page)
- **LocalBusiness jsonLd:** Remove or omit `servesCuisine` (salon, not restaurant). Keep `priceRange: "$$"`, address, telephone, geo.
- **"What to Expect":** Write 2–3 unique, natural sentences per service (see Section 8).

---

## 7. "What to Expect" Copy Guidelines (per service)

Write 2–3 sentences that:

- Describe what the client experiences during the service.
- Mention Triny’s approach or expertise where relevant.
- Optionally mention technique or products; keep tone local and natural.

Suggested angles (expand in implementation):

| Service | Angle ideas |
|---------|-------------|
| Eyebrow Tinting | Shape + color, lasting definition, professional tint |
| Eyelash Extensions | Fullness, length, classic vs volume, aftercare |
| Eyebrow Threading | Precision, clean lines, less irritation than waxing |
| Lash Lift | Lift + curl without extensions, low maintenance |
| Hair Colouring | Full or partial color, consultation, shade match |
| Balayage | Hand-painted highlights, natural look, low maintenance |
| Highlights | Dimension, placement, foil or balayage options |
| Keratin Treatment | Smoothing, frizz control, lasting results |
| Women's Haircut | Consultation, shape for face, styling tips |
| Men's Haircut | Clean lines, clipper/scissor work, quick service |
| Children's Haircut | Patience, fun experience, family-friendly |
| Blow Dry | Styling, smooth or volume, event-ready |

---

## 8. Implementation Order

1. **Category pages (3)** — Enables correct parent URLs for service breadcrumbs and links.
   - `app/beauty-salon/page.tsx`
   - `app/hair-salon/page.tsx`
   - `app/hairdresser/page.tsx`
2. **Service pages under Beauty Salon (4)**
   - eyebrow-tinting, eyelash-extensions, eyebrow-threading, lash-lift
3. **Service pages under Hair Salon (4)**
   - hair-colouring, balayage, highlights, keratin-treatment
4. **Service pages under Hairdresser (4)**
   - womens-haircut, mens-haircut, childrens-haircut, blow-dry
5. **Optional:** Update `components/sections/Footer.tsx` (or `app/page.tsx`) to add links to `/beauty-salon`, `/hair-salon`, `/hairdresser`.

---

## 9. Technical Notes

- **Next.js:** App Router only; each route is a `page.tsx` in the appropriate `app/...` folder.
- **Styling:** Use existing Tailwind classes; match site’s black/white (and existing gold accents if desired).
- **Metadata:** Every page must have `metadata.title` and `metadata.description` as in the manifest.
- **Structured data:** Category pages: BreadcrumbList only. Service pages: BreadcrumbList + LocalBusiness in `@graph`; omit `servesCuisine` for LocalBusiness.
- **Component names:** Use valid React/TS names, e.g. `BeautySalonPage`, `EyebrowTintingPage`, `WomensHaircutPage`.

---

## 10. Progress Checklist

Use this checklist across sessions; check off items as you complete them.

### Tier 2 — Category pages

- [x] `app/beauty-salon/page.tsx` — metadata, jsonLd, breadcrumb, H1, intro, 4 child links, 2 category cross-links, CTA, NAP
- [x] `app/hair-salon/page.tsx` — metadata, jsonLd, breadcrumb, H1, intro, 4 child links, 2 category cross-links, CTA, NAP
- [x] `app/hairdresser/page.tsx` — metadata, jsonLd, breadcrumb, H1, intro, 4 child links, 2 category cross-links, CTA, NAP

### Tier 3 — Beauty Salon services

- [x] `app/beauty-salon/eyebrow-tinting/page.tsx` — metadata, jsonLd (Breadcrumb + LocalBusiness), breadcrumb, H1, What to Expect, Why Choose Us, sibling links, CTA, NAP
- [x] `app/beauty-salon/eyelash-extensions/page.tsx` — (same structure)
- [x] `app/beauty-salon/eyebrow-threading/page.tsx` — (same structure)
- [x] `app/beauty-salon/lash-lift/page.tsx` — (same structure)

### Tier 3 — Hair Salon services

- [x] `app/hair-salon/hair-colouring/page.tsx`
- [x] `app/hair-salon/balayage/page.tsx`
- [x] `app/hair-salon/highlights/page.tsx`
- [x] `app/hair-salon/keratin-treatment/page.tsx`

### Tier 3 — Hairdresser services

- [x] `app/hairdresser/womens-haircut/page.tsx`
- [x] `app/hairdresser/mens-haircut/page.tsx`
- [x] `app/hairdresser/childrens-haircut/page.tsx`
- [x] `app/hairdresser/blow-dry/page.tsx`

### Optional & QA

- [x] Add links to `/beauty-salon`, `/hair-salon`, `/hairdresser` in Footer (or homepage) — optional
- [x] NAP identical on all 15 pages (name, address, phone)
- [x] All internal links work (category ↔ service, category ↔ category)
- [x] All metadata titles/descriptions filled per manifest
- [x] LocalBusiness jsonLd on service pages has no `servesCuisine` (or omitted)
- [x] "What to Expect" has 2–3 sentences on every service page

---

**Document version:** 1.0  
**Last updated:** 2025-02-28  
**Status:** Implemented — 15 pages created; Footer updated with category links and TanyMarketing credit.

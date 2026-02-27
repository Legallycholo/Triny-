# Consentidas Dominican Hair Salon - Implementation Kickstart

**Project:** Premium Landing Page for Consentidas Dominican Hair Salon by Triny  
**Owner:** Triny (Professional Cosmetologist)  
**Location:** Stone Mountain, GA  
**Phone:** 787-964-1826  
**Instagram:** https://www.instagram.com/triny_dominicansalon/  
**Google Reviews:** https://www.google.com/search?q=Consentida%27s+Dominican+Salon+By+Triny%2C+Stone+Mountain+Highway%2C+Stone+Mountain%2C+GA

---

## 🎯 PROJECT OVERVIEW

A premium, luxury-focused landing page showcasing Triny's professional hair and salon services. The design emphasizes transformation, personalized care, and the "Consentidas" brand philosophy of spoiling customers. Mobile-first responsive design with aggressive conversion CTAs and ultraviolet glow effects.

---

## 📋 FEATURE SPECIFICATIONS

### A. HERO SECTION
- **Desktop Layout:** Side-by-side (text left, image right)
- **Mobile Layout:** Vertically stacked - Headline → CTA Button → Stylist Image
- **Text Alignment:** Left on desktop, center on mobile
- **Primary Headline:** "Restore Your Hair, Restore Your Confidence"
- **Subheadline:** Short emotional copy about transformation and professional care
- **CTA #1:** "Call Now" button with ultraviolet glow effect (hover only)
  - `tel:787-964-1826` link
  - Shimmering gold border with purple/blue glow on hover
- **Image:** Triny's professional portrait (user to provide)
- **Animations:** Fade-in on scroll, subtle parallax on desktop

### B. SERVICES SECTION
- **Layout:** 3-column grid on desktop, 2-column on tablet, 1-column on mobile
- **Card Components:** 
  - Service category title
  - 3-4 key services under each category
  - Subtle hover effect (lift, shadow increase)
- **Service Categories (Expandable):**
  1. Hair Design & Structural Maintenance
  2. Thermal & Protective Styling
  3. Chemical & Color Treatments
  4. Scalp & Hair Therapy
  5. Professional Esthetics (Skin, Brow, Lash)
  6. Nail Technology
  7. Barbering & Men's Grooming
- **Pricing Note:** Include small icon/tooltip explaining "Why Phone Pricing?"
  - Copy: "We must know the length of your hair and current health for fair pricing for all of our customers."
- **CTA #2:** "Schedule Consultation" button in section footer

### C. TRANSFORMATION GALLERY
- **Desktop:** 3-column grid of before/after image pairs
- **Tablet:** 2-column grid
- **Mobile:** Touch-swipeable single-image carousel (Swiper.js)
- **Image Format:** User provides images with naming convention (e.g., "before-001", "after-001")
- **Lazy Loading:** Implement with `loading="lazy"` attribute
- **Mobile Features:**
  - Native touch-swipe support
  - Pagination dots at bottom
  - Auto-play disabled (manual swipe only)
- **Desktop Features:**
  - Hover zoom effect
  - Smooth transitions

### D. TESTIMONIALS CAROUSEL (SWIPER.JS)
- **Total Slides:** 10 verified client testimonials
- **Library:** Swiper.js with "Fraction" pagination (e.g., "3/10")
- **Configuration:**
  - Auto-play: YES (3-4 second interval)
  - Loop: YES (infinite scroll)
  - Pagination: Fraction style (number format)
  - Navigation: Arrow buttons (prev/next)
- **Card Layout:**
  - Client name
  - Star rating (adjust 4.5-5 stars as needed)
  - Quoted testimonial text
  - Profession/context (if available)
- **Testimonials Source:** 10 verified real reviews provided
- **CTA Integration:** "See More Reviews" link → https://www.google.com/search?q=Consentida%27s+Dominican+Salon+By+Triny...
- **Desktop/Mobile:** Full-width carousel on both, swipe/arrow navigation on mobile

### E. WHY CHOOSE TRINY SECTION
- **Content:** 3-4 compelling reasons
  - Professional expertise & credentials
  - Personalized care approach
  - Transformation focus
  - Community & relationship building
- **Layout:** Text + supporting icons/imagery
- **Design:** Emphasis on emotional connection and trust

### F. FREQUENTLY ASKED QUESTIONS
- **Accordion Component:** Expandable FAQ items
- **Topics:** Hair care, pricing, appointment booking, maintenance tips
- **Mobile Behavior:** Full-width, easy tap targets
- **Sticky FAB Interaction:** FAB should hide when FAQ section is in view (avoid overlap)

### G. HEADER/NAVIGATION
- **Desktop:**
  - Logo/Brand name (left)
  - Phone number prominently displayed (right)
  - Sticky header on scroll
- **Mobile:**
  - Logo/Brand name (left)
  - Mobile menu icon (hamburger)
  - Sticky header

### H. STICKY MOBILE FAB (Floating Action Button)
- **Desktop:** Hidden - phone number in header instead
- **Mobile:** Sticky bottom-right corner
- **Styling:** Circular button with phone icon + "Call Now" text
- **Interactions:**
  - Hide when scrolling FAQ section (optional refinement)
  - `tel:` link to 787-964-1826
  - Ultraviolet glow effect
  - Pulsing animation
- **Size:** 56px × 56px (standard material design)

### I. FOOTER
- **Content:**
  - Business name & tagline
  - Phone: 787-964-1826
  - Address: Stone Mountain, GA
  - Social links:
    - Instagram: https://www.instagram.com/triny_dominicansalon/
    - Google Reviews link
  - Quick links: Services, FAQ, Contact
- **CTA #3:** "Call Now" or "Book Appointment" button
- **Copyright notice

### J. ALTERNATIVE COMMUNICATION CTASAA
- **Primary:** "Call Now" (phone icon)
  - `tel:787-964-1826`
  - Multiple placements (hero, services, footer)
- **Secondary:** "Message on Instagram" (Instagram icon)
  - Link to: https://www.instagram.com/triny_dominicansalon/
  - Placement: Footer, possibly in header
- **Styling:** Both buttons use ultraviolet glow on hover

---

## 🎨 DESIGN SYSTEM

### COLOR PALETTE (3-5 Colors Total)
1. **Primary Brand:** Zinc-950 (`#09090B` - Deep charcoal)
2. **Accent:** Champagne Gold (`#D4AF37` or `#E5C547` - Luxury gold)
3. **Neutral 1:** Off-white/Cream (`#F5F5F0`)
4. **Neutral 2:** Light gray (`#E5E5E5`)
5. **Accent - Ultraviolet Glow:** Violet-600 (`#7C3AED` - for hover effects)

### Typography
- **Headlines:** Serif font (elegant, Vogue-like) - e.g., Playfair Display
- **Body Text:** Sans-serif (readable, modern) - e.g., Inter
- **Max 2 font families total**

### Spacing Scale
- Use Tailwind's default spacing (4px increments): `p-4`, `gap-6`, `py-8`, etc.
- No arbitrary values (`p-[16px]`) - stick to the scale

### Border & Radius
- Border radius: `rounded-lg` (8px) for cards, `rounded-md` (6px) for buttons
- Subtle box shadows for depth

### Animations & Interactions
- **Scroll Animations:** Fade-in, slide-up effects on element visibility
- **Button Hover:** Ultraviolet glow on all CTAs (Zinc-950 bg + Violet-600 glow)
- **Carousel:** Smooth transitions (300-400ms)
- **Card Hover:** Lift effect (transform translateY -4px)
- **Mobile FAB:** Subtle pulse animation (continuous gentle scale pulse)

---

## 📱 RESPONSIVE DESIGN BREAKPOINTS

| Device | Breakpoint | Layout Changes |
|--------|-----------|-----------------|
| Mobile | `sm: 640px` | Single-column services, stacked hero, touch carousel |
| Tablet | `md: 768px` | 2-column services grid, similar layout to mobile |
| Desktop | `lg: 1024px` | 3-column services, side-by-side hero, static gallery |

---

## 🛠 TECHNICAL SPECIFICATIONS

### Frontend Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS + custom design tokens in `globals.css`
- **Components:** shadcn/ui + custom components
- **Carousel Library:** Swiper.js (for testimonials & mobile gallery)
- **Animations:** Tailwind CSS animations + custom CSS for scrolling effects
- **Images:** Next.js `<Image>` component with lazy loading

### Project Structure
```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx (root layout with fonts, metadata)
│   ├── page.tsx (main landing page)
│   └── globals.css (design tokens + custom styles)
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx (desktop grid + mobile carousel)
│   ├── Testimonials.tsx (Swiper carousel)
│   ├── WhyChooseTriny.tsx
│   ├── FAQ.tsx (accordion)
│   ├── Header.tsx (sticky navigation)
│   ├── Footer.tsx
│   ├── MobileCallFAB.tsx
│   └── ui/ (shadcn components)
├── public/
│   ├── images/ (hero, gallery, gallery-after, gallery-before)
│   └── icons/ (phone, instagram, etc.)
├── styles/
│   └── animations.css (scroll, glow, pulse animations)
├── package.json (dependencies)
└── tailwind.config.ts (custom theme)
```

### Key Dependencies
```json
{
  "swiper": "^11.0.0",
  "next": "^16.0.0",
  "react": "^19.0.0",
  "tailwindcss": "^3.4.0",
  "class-variance-authority": "^0.7.0"
}
```

### Design Tokens (globals.css)
- `--color-primary`: Zinc-950
- `--color-accent`: Champagne Gold
- `--color-accent-hover`: Violet-600 (glow)
- `--color-background`: Off-white
- `--color-text`: Zinc-950
- `--color-text-muted`: Light gray
- `--spacing-unit`: 4px (Tailwind default)
- `--border-radius`: 8px

---

## 📸 IMAGE ASSETS NEEDED

**User to provide the following:**

| Asset Name | Type | Description | Format | Notes |
|-----------|------|-------------|--------|-------|
| `hero-triny.jpg` | Portrait | Triny's professional stylist portrait (Hero section) | JPG/WebP | 600x800px min, high quality |
| `before-[001-003].jpg` | Before/After | 3 before images (transformation gallery) | JPG/WebP | Same dimensions as after |
| `after-[001-003].jpg` | Before/After | 3 after images (transformation gallery) | JPG/WebP | 800x600px or portrait |
| Optional: Additional gallery images | Gallery | Extra transformation photos | JPG/WebP | For carousel expansion |

**Naming Convention Example:**
- `before-001.jpg` + `after-001.jpg` (one transformation pair)
- `before-002.jpg` + `after-002.jpg`
- `before-003.jpg` + `after-003.jpg`

---

## 📝 CONTENT CHECKLIST

- [x] Real client testimonials (10 reviews provided)
- [x] Service categories & descriptions (comprehensive list provided)
- [ ] Triny's professional portrait (PENDING - user to provide)
- [ ] Before/after transformation images (PENDING - user to provide with naming convention)
- [x] Phone number: 787-964-1826
- [x] Instagram URL: https://www.instagram.com/triny_dominicansalon/
- [x] Google Reviews URL
- [ ] FAQ answers (to be finalized)
- [ ] Why Choose Triny - 3-4 key points (to be written)
- [ ] Exact pricing tiers (to adjust later)

---

## ✨ SPECIAL EFFECTS & ANIMATIONS

### 1. Ultraviolet CTA Glow
- **Default:** Zinc-950 button with Champagne Gold border
- **Hover:** Smooth transition to violet glow (box-shadow: 0 0 20px rgba(124, 58, 237, 0.7))
- **Duration:** 300ms
- **Applies to:** All primary CTAs (Hero, Services, Footer, Mobile FAB)

### 2. Mobile FAB Pulse
- **Animation:** Continuous gentle scale pulse (1 → 1.05 → 1)
- **Duration:** 2 seconds, loop
- **Purpose:** Draw attention without being annoying

### 3. Scroll Animations
- **Services Cards:** Fade in + slide up on scroll into view
- **Gallery Items:** Staggered fade-in on load
- **Text Sections:** Fade-in + subtle slide effects

### 4. Carousel Transitions
- **Testimonials:** Smooth 300ms fade + slide transition
- **Mobile Gallery:** Native Swiper transitions (400ms default)

### 5. Card Hover Effects
- **Lift:** transform translateY(-4px)
- **Shadow:** Increase box-shadow on hover
- **Duration:** 200ms ease-out

---

## 🎯 CONVERSION STRATEGY

### Call-to-Action Placement (Minimum 3)

1. **Hero Section CTA**
   - Large, prominent "Call Now" button
   - `tel:787-964-1826`
   - Ultraviolet glow on hover

2. **Services Section CTA**
   - Centered "Schedule Consultation" button
   - Below service grid
   - Same styling

3. **Footer CTA**
   - "Call Now" + "Message on Instagram" buttons
   - Side-by-side on desktop, stacked on mobile

4. **Mobile-Exclusive CTA**
   - Sticky FAB bottom-right
   - Phone icon + "Call Now" text
   - Pulsing animation

### Alternative Communication
- **Instagram DM:** Secondary CTA linking to Instagram profile
- **Phone Call:** Primary CTA with tel: link
- **No email form:** Phone-only by design (per requirements)

---

## 📊 ANALYTICS & TRACKING

- **Hosting:** Vercel
- **Analytics:** Ready for Google Analytics integration (to be added if needed)
- **Phone Tracking:** Optional enhancement for conversion measurement

---

## 🚀 DEVELOPMENT PHASES

### Phase 1: Foundation (Days 1-2)
- [x] Design tokens & color system setup
- [ ] Layout structure & responsive grid
- [ ] Header & Footer components
- [ ] Basic mobile FAB

### Phase 2: Core Sections (Days 3-4)
- [ ] Hero section with CTA
- [ ] Services grid with cards
- [ ] Why Choose Triny section
- [ ] FAQ accordion

### Phase 3: Media & Interactions (Days 5-6)
- [ ] Gallery setup (desktop grid + mobile carousel)
- [ ] Testimonials Swiper carousel
- [ ] Image optimization & lazy loading
- [ ] Scroll animations

### Phase 4: Polish & Optimization (Days 7-8)
- [ ] CTA placement & styling (ultraviolet glow)
- [ ] Mobile responsiveness fine-tuning
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] SEO optimization

### Phase 5: Deployment (Day 9)
- [ ] Final review & QA
- [ ] Vercel deployment
- [ ] Domain configuration
- [ ] Analytics setup

---

## 📋 DEPLOYMENT CHECKLIST

- [ ] All images optimized & in `/public` folder
- [ ] Design tokens finalized in `globals.css`
- [ ] All CTAs pointing to correct phone number
- [ ] Instagram links verified
- [ ] Google Reviews link tested
- [ ] Mobile FAB hides appropriately on desktop
- [ ] Animations smooth at 60fps
- [ ] Accessibility checks (WCAG - basic)
- [ ] Lighthouse performance score > 90
- [ ] Mobile viewport tested on multiple devices
- [ ] Vercel deployment configured
- [ ] Domain DNS pointed (if applicable)
- [ ] SEO meta tags added

---

## 🎓 NEXT STEPS

1. **User Provides Assets:**
   - Triny's professional portrait
   - Before/after transformation images (3 pairs minimum)
   - Any additional FAQ content

2. **Implementation Begins:**
   - Create component structure
   - Build design token system
   - Implement core sections
   - Add animations & interactivity

3. **Review Cycle:**
   - Preview & feedback
   - Refinements to content/styling
   - Final deployment prep

---

**Status:** Ready for Phase 1 - Foundation  
**Last Updated:** 2/26/2026  
**Contact:** Triny - 787-964-1826

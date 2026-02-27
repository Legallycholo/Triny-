# Consentidas Dominican Hair Salon - Design Tokens

**Brand:** Consentidas Dominican Hair Salon by Triny  
**Theme:** Premium Luxury, Vogue-Style Editorial  
**Color Count:** 5 colors total (brand requirement)

---

## 🎨 COLOR PALETTE

### Core Brand Colors

#### 1. **Primary: Zinc-950 (Deep Charcoal)**
- **Hex:** `#09090B`
- **RGB:** `9, 9, 11`
- **Usage:** Headers, body text, primary backgrounds, borders
- **Accessibility:** WCAG AAA contrast with off-white
- **Variants:**
  - Zinc-900: `#18181B` (secondary dark)
  - Zinc-800: `#27272A` (tertiary)
  - Zinc-700: `#3F3F46` (lighter alternative)

#### 2. **Accent: Champagne Gold (Luxury Accent)**
- **Hex:** `#D4AF37`
- **RGB:** `212, 175, 55`
- **Usage:** CTA buttons, borders, highlights, accents
- **Accessibility:** WCAG AA contrast with Zinc-950
- **Variants:**
  - Champagne Light: `#E5C547` (hover states, highlights)
  - Champagne Muted: `#C9A961` (secondary accents)

#### 3. **Accent Secondary: Ultraviolet Glow (Violet-600)**
- **Hex:** `#7C3AED`
- **RGB:** `124, 58, 237`
- **Usage:** Button hover glow, box-shadows, hover effects
- **Accessibility:** Paired with dark backgrounds, not standalone text
- **Variants:**
  - Violet-500: `#A78BFA` (lighter, more subtle)

#### 4. **Neutral 1: Off-White/Cream**
- **Hex:** `#FAFAF8`
- **RGB:** `250, 250, 248`
- **Usage:** Body background, card backgrounds, light text backgrounds
- **Accessibility:** Pairs with Zinc-950 for text

#### 5. **Neutral 2: Light Gray (Muted)**
- **Hex:** `#E5E5E5`
- **RGB:** `229, 229, 229`
- **Usage:** Borders, dividers, subtle backgrounds
- **Accessibility:** Sufficient contrast for secondary text

---

## 📐 CSS CUSTOM PROPERTIES (Design Tokens)

All tokens are defined in `app/globals.css` and follow this naming convention:

### Semantic Color Tokens
```css
/* Light Mode (Default) */
--background: #FAFAF8;           /* Page background */
--foreground: #09090B;           /* Primary text color */
--card: #FFFFFF;                 /* Card backgrounds */
--card-foreground: #09090B;      /* Card text */
--primary: #09090B;              /* Primary brand color */
--primary-foreground: #FAFAF8;   /* Text on primary */
--secondary: #F5F5F0;            /* Secondary background */
--secondary-foreground: #09090B; /* Text on secondary */
--muted: #E5E5E5;                /* Muted/disabled backgrounds */
--muted-foreground: #71717A;     /* Muted text */
--accent: #D4AF37;               /* Champagne gold accent */
--accent-foreground: #09090B;    /* Text on accent */
--accent-glow: #7C3AED;          /* Ultraviolet hover glow */
--border: #E5E5E5;               /* Border color */
--input: #FFFFFF;                /* Form input background */
--ring: #7C3AED;                 /* Focus ring color */
```

### Dark Mode
Dark mode variants are automatically applied with the `.dark` class, inverting backgrounds while maintaining accent colors for consistency.

---

## 🎯 COLOR USAGE GUIDE

| Component | Primary Color | Secondary Color | Accent Color |
|-----------|--------------|-----------------|--------------|
| **Headers** | Zinc-950 | - | Champagne |
| **Body Text** | Zinc-950 | - | - |
| **CTA Buttons** | Zinc-950 (bg) | Champagne (border) | Violet-600 (hover glow) |
| **Cards** | Off-white (bg) | Zinc-950 (text) | Champagne (border on hover) |
| **Borders** | Light Gray | - | - |
| **Links** | Champagne | - | Violet-600 (hover) |
| **Icons** | Zinc-950 | - | Champagne (active) |
| **Highlights** | - | - | Champagne |
| **Hover Effects** | - | - | Violet-600 (glow) |

---

## 🔤 TYPOGRAPHY

### Font Families
- **Headings (h1-h6):** Serif font for editorial luxury aesthetic
  - Recommended: Playfair Display, Bodoni, or Georgia
  - Applied via CSS: `font-serif`
  
- **Body Text (p, span, etc.):** Clean sans-serif for readability
  - Recommended: Inter, Geist, or system fonts
  - Applied via CSS: `font-sans`

### Font Sizing Scale
```
h1: 3.5rem (56px) - Hero headlines
h2: 2.25rem (36px) - Section titles
h3: 1.875rem (30px) - Subsection titles
h4: 1.5rem (24px) - Card titles
h5: 1.25rem (20px) - Small headings
h6: 1rem (16px) - Text emphasis
p:  1rem (16px) - Body copy
small: 0.875rem (14px) - Fine print
```

### Line Height
- **Headlines:** `1.2` (tight, dramatic)
- **Body Text:** `1.6` (readable, accessible)
- **Small Text:** `1.4`

### Letter Spacing
- **Headlines:** `0.025em` (subtle tracking)
- **Body:** Normal
- **Small Caps:** `0.1em`

---

## 📏 SPACING SCALE

All spacing follows Tailwind's default 4px increments (no arbitrary values):

```
0:    0px
1:    4px
2:    8px
3:    12px
4:    16px (default card padding)
5:    20px
6:    24px (default gap)
7:    28px
8:    32px (section padding)
10:   40px
12:   48px
16:   64px (large section gap)
20:   80px
24:   96px
```

**Usage Rules:**
- Cards: `p-6` (24px padding)
- Sections: `py-16` or `py-20` (64-80px vertical)
- Gap between items: `gap-6` (24px)
- Small gaps: `gap-4` (16px)

---

## 🎨 BORDER & RADIUS

### Border Radius
- `--radius: 0.625rem` (10px) - Base radius
  - `rounded-sm`: 2px (inputs)
  - `rounded-md`: 6px (buttons)
  - `rounded-lg`: 8px (cards) — **Primary**
  - `rounded-xl`: 12px (larger components)

### Borders
- **Default Border:** `border border-light-gray`
- **On Hover:** `border-champagne` (accent)
- **Focus State:** `border-violet-600 ring-2 ring-violet-500`

---

## ✨ ELEVATION & SHADOWS

### Box Shadows (Depth)
```css
/* No shadow (default) */
box-shadow: none;

/* Subtle (cards at rest) */
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

/* Medium (hover state) */
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);

/* Large (modals, floating elements) */
box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);

/* Glow Effect (CTA buttons on hover) */
box-shadow: 0 0 20px rgba(124, 58, 237, 0.7), inset 0 0 20px rgba(212, 175, 55, 0.2);
```

---

## 🎬 ANIMATIONS & TRANSITIONS

### Transition Timings
```css
/* Fast (100-200ms) - Button interactions */
transition-duration: 200ms;
transition-timing-function: ease-out;

/* Standard (300ms) - Carousel, hover states */
transition-duration: 300ms;
transition-timing-function: ease-out;

/* Slow (600ms) - Scroll animations */
transition-duration: 600ms;
transition-timing-function: ease-out;
```

### Keyframe Animations

#### 1. **Ultraviolet Glow (Button Hover)**
- **Duration:** 300ms
- **Effect:** Violet glow + Champagne inset
- **Trigger:** CTA button `:hover`
- **Class:** `.btn-glow`

#### 2. **FAB Pulse (Mobile)**
- **Duration:** 2s (infinite loop)
- **Effect:** Scale 1 → 1.05 + glow intensity pulse
- **Trigger:** Sticky bottom-right FAB
- **Class:** `.fab-pulse`

#### 3. **Scroll Fade In**
- **Duration:** 600ms
- **Effect:** Opacity 0→1, Y-translate 20px→0
- **Trigger:** Observed elements on scroll
- **Class:** `.scroll-fade-in`

#### 4. **Card Lift (Hover)**
- **Duration:** 200ms
- **Effect:** Translate Y -4px (lift), shadow increase
- **Trigger:** Service cards, gallery items
- **Class:** `.card-lift`

### Animation Stagger
Applied to multiple elements that appear sequentially:
```css
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
```

---

## 🔘 COMPONENT STYLING

### Buttons
```css
/* Default Button */
.btn-default {
  @apply px-6 py-3 rounded-md bg-zinc-950 text-cream font-medium;
}

/* Primary CTA Button (with glow) */
.btn-cta {
  @apply px-6 py-3 rounded-md bg-zinc-950 border-2 border-champagne text-cream font-medium;
  /* Glow applied on hover via .btn-glow */
}

/* Secondary Button */
.btn-secondary {
  @apply px-6 py-3 rounded-md bg-light-gray text-zinc-950 font-medium;
}
```

### Cards
```css
/* Standard Card */
.card {
  @apply rounded-lg bg-cream border border-light-gray p-6;
}

/* Hoverable Card */
.card-hover {
  @apply card card-lift;
}

/* Service Card */
.service-card {
  @apply card-hover border-zinc-950/10;
}
```

---

## 📱 RESPONSIVE BEHAVIOR

### Breakpoints (Tailwind Standard)
```
sm:  640px  - Mobile devices
md:  768px  - Tablets
lg:  1024px - Desktop
xl:  1280px - Large desktop
2xl: 1536px - Extra large
```

### Color Behavior
- **Colors are consistent across breakpoints**
- No color changes at different breakpoints
- Spacing and layout change, colors remain consistent

### Typography Responsive
```
/* Mobile (default) */
h1: 2.25rem

/* Tablet (md:) */
md:text-3xl (h1: 1.875rem)

/* Desktop (lg:) */
lg:text-4xl (h1: 2.25rem)
```

---

## ♿ ACCESSIBILITY

### Color Contrast
- **WCAG AAA:** Zinc-950 + Off-white (`#09090B` + `#FAFAF8`)
- **WCAG AA:** Champagne + Zinc-950 (`#D4AF37` + `#09090B`)
- **Avoid:** Violet-600 as text color on light backgrounds (insufficient contrast)
  - Use only as glow effects, borders, or focus states

### Focus States
```css
/* Default focus ring */
focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2

/* On dark backgrounds */
focus:ring-champagne
```

### Text Emphasis
- Use `<strong>` or `<b>` for important text (not color alone)
- Use icons + text for actions (not icons alone)
- Alt text for all images

---

## 🎯 DESIGN TOKEN REFERENCE TABLE

| Token | Light Value | Dark Value | Usage |
|-------|-------------|-----------|-------|
| `--background` | `#FAFAF8` | `#09090B` | Page bg |
| `--foreground` | `#09090B` | `#FAFAF8` | Text |
| `--primary` | `#09090B` | `#FAFAF8` | Brand color |
| `--accent` | `#D4AF37` | `#D4AF37` | Champagne accent |
| `--accent-glow` | `#7C3AED` | `#7C3AED` | Hover glow |
| `--card` | `#FFFFFF` | `#18181B` | Card bg |
| `--muted` | `#E5E5E5` | `#3F3F46` | Disabled states |
| `--border` | `#E5E5E5` | `#27272A` | Borders |
| `--ring` | `#7C3AED` | `#7C3AED` | Focus ring |

---

## 🚀 IMPLEMENTATION CHECKLIST

- [x] Color palette defined (5 colors)
- [x] CSS custom properties set in `globals.css`
- [x] Typography rules established
- [x] Spacing scale documented
- [x] Animation keyframes created
- [x] Accessibility verified (WCAG)
- [x] Dark mode support enabled
- [x] Utility classes created
- [ ] Component library built (next phase)
- [ ] Responsive testing completed (next phase)

---

## 📝 NOTES

- **No arbitrary color values** in components — always use the tokens
- **No gradient backgrounds** unless explicitly approved
- **Animations are subtle** — never distract from content
- **Spacing uses the 4px scale** — maintain visual rhythm
- **Gold accent (Champagne)** is the luxury differentiator — use sparingly
- **Violet-600 is the interactive color** — reserved for hover/focus states

---

**Last Updated:** 2/26/2026  
**Version:** 1.0 - Initial Design System  
**Maintainer:** Consentidas Dominican Hair Salon

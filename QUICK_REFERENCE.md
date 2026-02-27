# Consentidas - Quick Reference Guide

## 🎨 COLOR SWATCHES
```
Primary Dark:        #09090B (Zinc-950)
Luxury Gold:         #D4AF37 (Champagne)
Glow/Hover:          #7C3AED (Violet-600)
Background:          #FAFAF8 (Off-white)
Border/Muted:        #E5E5E5 (Light Gray)
```

## 🔗 CONTACT INFO
- **Phone:** 787-964-1826
- **Instagram:** https://www.instagram.com/triny_dominicansalon/
- **Google Reviews:** https://www.google.com/search?q=Consentida%27s+Dominican+Salon+By+Triny

## 📱 BREAKPOINTS
```
Mobile:   sm: 640px  (1-column)
Tablet:   md: 768px  (2-column)
Desktop:  lg: 1024px (3-column)
```

## 🎯 CTA PLACEMENTS (Minimum 4)
1. Hero Section
2. Services Section Footer
3. Footer
4. Mobile Sticky FAB (bottom-right)

## 📸 IMAGE NAMING CONVENTION
```
hero-triny.jpg
before-001.jpg → after-001.jpg
before-002.jpg → after-002.jpg
before-003.jpg → after-003.jpg
```

## ✨ ANIMATIONS
- **CTA Glow:** Violet shadow on hover (300ms)
- **FAB Pulse:** Scale animation (2s loop)
- **Card Lift:** -4px translateY on hover (200ms)
- **Scroll Fade:** Opacity + Y-slide (600ms)

## 📋 PAGE SECTIONS
1. Header (sticky, phone number on desktop)
2. Hero (stacked mobile, side-by-side desktop)
3. Services (3-column grid)
4. Gallery (static desktop, carousel mobile)
5. Testimonials (Swiper.js, 10 slides, auto-play)
6. Why Choose Triny (text + icons)
7. FAQ (accordion)
8. Footer (links + CTAs)
9. Mobile FAB (sticky, pulsing)

## 🛠 KEY CLASSES
- `.btn-glow` - CTA button with ultraviolet hover
- `.fab-pulse` - Mobile FAB pulse animation
- `.card-lift` - Card hover lift effect
- `.scroll-fade-in` - Scroll appear animation
- `.service-card` - Service card styling

## 📊 RESPONSIVE RULES
- Mobile: single-column, touch carousel, sticky FAB
- Tablet: 2-column services
- Desktop: 3-column services, static gallery, hidden FAB

## 🎓 DESIGN PRINCIPLES
- Luxury aesthetic (deep dark + gold accents)
- Emotion-driven copy (transformation, care)
- Mobile-first implementation
- Minimum 4 CTAs per page
- Ultraviolet glow on hover (CTAs only)
- No arbitrary color values (use tokens)
- Lazy load all images

## 📱 MOBILE-SPECIFIC
- Sticky "Call Now" FAB (bottom-right)
- Touch-swipeable carousel (Swiper.js)
- Single-column layout
- Center-aligned text
- Larger tap targets

## 🚀 DEPLOYMENT
- Host: Vercel
- Domain: Ready to configure
- Analytics: Google Analytics ready to add
- SEO: Meta tags to be added

## 📝 CONTENT STATUS
- ✅ 10 testimonials (verified, real)
- ✅ Service list (comprehensive)
- ✅ Contact info (phone + Instagram)
- ⏳ Images (awaiting: hero + before/afters)
- ⏳ FAQ answers (optional, can use placeholder)
- ⏳ Why Choose Triny copy (can write during build)

## 🎬 CAROUSEL CONFIG (Swiper.js)
- **Library:** Swiper
- **Type:** Testimonials (10 slides) + Mobile Gallery
- **Auto-play:** Yes (testimonials), No (gallery)
- **Pagination:** Fraction style (e.g., "3/10")
- **Navigation:** Arrows (prev/next)
- **Touch:** Enabled on mobile

## ⚡ PERFORMANCE TARGETS
- Lighthouse Score: > 90
- Lazy load images: Yes
- No arbitrary CSS values: Enforced
- Mobile-first CSS: Required
- Smooth animations: 60fps

## 🔐 CRITICAL REMINDERS
1. ✅ Triny is the ONLY person mentioned (no Elena)
2. ✅ Consentidas = spoiling customers (brand philosophy)
3. ✅ Glow effect = hover only, not always visible
4. ✅ Lazy load all images from day 1
5. ✅ Phone link = `tel:787-964-1826`
6. ✅ No email form (phone-only)
7. ✅ Mobile FAB hidden on desktop
8. ✅ 5 colors maximum (locked)
9. ✅ 2 fonts maximum (serif + sans)
10. ✅ No gradients unless approved

## 📂 PROJECT STRUCTURE
```
/app
  /layout.tsx (fonts, metadata)
  /page.tsx (landing page)
  /globals.css (design tokens, animations)
/components
  /Hero.tsx
  /Services.tsx
  /Gallery.tsx
  /Testimonials.tsx
  /WhyChooseTriny.tsx
  /FAQ.tsx
  /Header.tsx
  /Footer.tsx
  /MobileCallFAB.tsx
  /ui (shadcn components)
/public
  /images (hero, before/afters)
```

## 🎯 SUCCESS CHECKLIST
- [ ] Design tokens applied globally
- [ ] All CTAs use `tel:787-964-1826`
- [ ] Instagram link functional
- [ ] Mobile FAB visible/hidden correctly
- [ ] Carousel auto-plays testimonials
- [ ] Images lazy load
- [ ] Animations smooth (60fps)
- [ ] Mobile responsive (640px+)
- [ ] Glow effects on hover
- [ ] Header sticky on scroll
- [ ] FAQ accordion functional
- [ ] Dark mode works (bonus)
- [ ] Vercel deployment successful

---

**Version:** 1.0  
**Last Updated:** 2/26/2026  
**Status:** Ready for Implementation (Awaiting Images)

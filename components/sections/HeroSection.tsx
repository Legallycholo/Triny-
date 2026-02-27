"use client"

import { Phone, MessageCircle } from "lucide-react"
import HeroCarousel from "./HeroCarousel"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-zinc-950 pt-20 lg:pt-0"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.05)_0%,_transparent_50%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-4 py-12 lg:flex-row lg:gap-12 lg:px-8">
        {/* Text Content - Mobile: first, Desktop: left */}
        <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          {/* Tagline */}
          <span className="mb-4 inline-block rounded-full border border-champagne/30 px-4 py-1.5 font-mono text-xs tracking-[0.2em] text-champagne uppercase">
            21+ Years of Excellence
          </span>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-cream text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            The World of{" "}
            <span className="text-champagne">Color</span>{" "}
            <br className="hidden lg:block" />
            in Stone Mountain.
          </h1>

          {/* Sub-headline */}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/70 text-pretty sm:text-lg">
            {"Triny: Professional Artistry, Full-Service Haircare, and Clinical Scalp Restoration. Where every client is "}
            <span className="italic text-champagne/90">consentida</span>
            {" \u2014 spoiled with care."}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            {/* Primary CTA */}
            <a
              href="tel:787-964-1826"
              className="btn-glow flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold tracking-wide"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: Secure Your Consultation</span>
            </a>

            {/* Secondary CTA - Text / DM */}
            <a
              href="sms:787-964-1826"
              className="flex items-center gap-2 rounded-full border border-cream/20 px-6 py-4 text-sm font-medium text-cream/80 transition-all duration-300 hover:border-champagne/50 hover:text-champagne"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Text Us</span>
            </a>
          </div>

          {/* Trust indicator */}
          <p className="mt-6 font-mono text-xs tracking-wide text-cream/40">
            Licensed Professional &middot; Stone Mountain, GA
          </p>
        </div>

        {/* Portrait Carousel - Mobile: second, Desktop: right */}
        <div className="w-full max-w-md lg:w-1/2 lg:max-w-lg">
          <HeroCarousel />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-cream/30 uppercase">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-champagne/40 to-transparent" />
      </div>
    </section>
  )
}

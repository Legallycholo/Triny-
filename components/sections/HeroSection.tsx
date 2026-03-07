"use client"

import { Phone, MessageCircle } from "lucide-react"
import { useCTA } from "@/components/providers/cta-provider"
import HeroCarousel from "./HeroCarousel"

interface HeroSectionProps {
  cityName?: string;
  isCityPage?: boolean;
}

export default function HeroSection({ cityName = "Stone Mountain", isCityPage = false }: HeroSectionProps) {
  const { openCTA } = useCTA()
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 lg:pt-0"
    >

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-4 py-12 lg:flex-row lg:gap-12 lg:px-8">
        {/* Text Content - Mobile: first, Desktop: left */}
        <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          {/* Tagline */}
          <span className="mb-4 inline-block rounded-full border px-4 py-1.5 font-mono text-xs tracking-[0.2em] uppercase" style={{ borderColor: "rgba(212, 175, 55, 0.3)", color: "rgb(212, 175, 55)" }}>
            The World Of Color
          </span>

          {/* Main Headline */}
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl" style={{ color: "rgb(245, 245, 240)" }}>
            Beauty{" "}
            <span style={{ color: "rgb(212, 175, 55)" }}>Salon</span>{" "}
            <br className="hidden lg:block" />
            in {cityName}.
          </h1>

          {/* Sub-headline */}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-pretty sm:text-lg" style={{ color: "var(--text-secondary)" }}>
            {isCityPage ? (
              <>
                Beauty salon serving <span className="text-champagne font-medium">{cityName}</span>, GA and surrounding areas. Haircut, Blowout, Keratin treatment, and Dominican blowout. Where every client is <span className="italic" style={{ color: "rgb(212, 175, 55)" }}>consentida</span> — spoiled with care.
                <br />
                <span className="mt-2 block text-sm opacity-80">
                  Conveniently located at 5226 Stone Mountain Hwy Suite D, Stone Mountain GA 30087 — serving {cityName} and surrounding communities.
                </span>
              </>
            ) : (
              <>
                {"Hair salon. Hairdresser "}
                <span className="kw-gold">Haircut</span>
                {", "}
                <span className="kw-violet">Blayage</span>
                {", and "}
                <span className="kw-gold">Keratin treatment</span>
                {". Where every client is "}
                <span className="kw-violet">consentida</span>
                {" \u2014 spoiled with care."}
              </>
            )}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            {/* Primary CTA */}
            <button
              onClick={openCTA}
              className="btn-glow celestial-glow flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold tracking-wide"
            >
              <Phone className="h-5 w-5" />
              <span>Book Your Consultation<br className="hidden sm:block" />Call Today</span>
            </button>

            {/* Secondary CTA - Open Dialog */}
            <button
              onClick={openCTA}
              className="flex items-center gap-2 rounded-full border px-6 py-4 text-sm font-medium transition-all duration-300"
              style={{ borderColor: "rgba(245, 245, 240, 0.2)", color: "rgba(245, 245, 240, 0.8)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.5)";
                e.currentTarget.style.color = "rgb(212, 175, 55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245, 245, 240, 0.2)";
                e.currentTarget.style.color = "rgba(245, 245, 240, 0.8)";
              }}
            >
              <MessageCircle className="h-4 w-4" />
              <span>Text Or DM Us</span>
            </button>
          </div>

          {/* Trust indicator */}
          <p className="mt-6 font-mono text-xs tracking-wide" style={{ color: "var(--text-tertiary)" }}>
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
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-tertiary)" }}>Scroll</span>
        <div className="h-8 w-px" style={{ backgroundImage: "linear-gradient(to bottom, rgba(212, 175, 55, 0.4), transparent)" }} />
      </div>
    </section>
  )
}

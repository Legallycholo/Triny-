"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react"
import { useCTA } from "@/components/providers/cta-provider"
import ScrollAnimate from "@/components/ui/scroll-animate"

export default function Footer() {
  const { openCTA } = useCTA()
  return (
    <footer className="relative">
      {/* Final CTA Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 py-20 lg:py-28">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(124,58,237,0.08)_0%,_transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <ScrollAnimate>
            <h2 className="font-serif text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl" style={{ color: "rgb(245, 245, 240)" }}>
              Transform Your{" "}
              <span style={{ color: "rgb(212, 175, 55)" }}>Image</span>{" "}
              Today.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {"Your journey to healthier, more beautiful hair starts with a single call. Let Triny show you why every client leaves feeling "}
              <span className="italic" style={{ color: "rgba(212, 175, 55, 0.8)" }}>consentida</span>.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={openCTA}
                className="btn-glow flex items-center gap-2.5 rounded-full px-10 py-4 text-lg font-semibold tracking-wide"
              >
                <Phone className="h-5 w-5" />
                <span>Book Your Consultation<br className="hidden sm:block" />Call Today</span>
              </button>
            </div>

            {/* Alternative Contact */}
            <div className="mt-6 flex items-center justify-center gap-6">
              <button
                onClick={openCTA}
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(212, 175, 55)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <MessageCircle className="h-4 w-4" />
                <span>Text Or DM Us</span>
              </button>
              <span style={{ color: "var(--text-tertiary)" }}>|</span>
              <button
                onClick={openCTA}
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(212, 175, 55)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <Instagram className="h-4 w-4" />
                <span>DM or Call</span>
              </button>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Footer Info */}
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/triny-logo.png"
              alt="Consentida's Dominican Hair Salon by Triny"
              width={40}
              height={40}
              className="rounded-full"
              loading="lazy"
            />
            <div>
              <p className="font-serif text-sm font-semibold" style={{ color: "rgb(245, 245, 240)" }}>
                {"Consentida's Dominican Hair Salon"}
              </p>
              <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>by Triny</p>
            </div>
          </div>

          {/* Address & Contact */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
              <MapPin className="h-3 w-3" />
              <span>5226 Stone Mountain Hwy Suite D, Stone Mountain, GA 30087</span>
            </div>
            <a href="tel:787-964-1826" className="font-mono text-xs tracking-wide font-semibold transition-colors" style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(212, 175, 55)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              Licensed Professional &middot; 787-964-1826
            </a>
          </div>
        </div>

        {/* Services / SEO category links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
          <Link href="/beauty-salon" className="text-xs transition-colors hover:opacity-80" style={{ color: "var(--text-muted)" }}>
            Beauty Salon
          </Link>
          <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>·</span>
          <Link href="/hair-salon" className="text-xs transition-colors hover:opacity-80" style={{ color: "var(--text-muted)" }}>
            Hair Salon
          </Link>
          <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>·</span>
          <Link href="/hairdresser" className="text-xs transition-colors hover:opacity-80" style={{ color: "var(--text-muted)" }}>
            Hairdresser
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-6 text-center" style={{ borderColor: "#27272A" }}>
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            {`\u00A9 ${new Date().getFullYear()} Consentida's Dominican Hair Salon by Triny. All rights reserved.`}
          </p>
          <p className="mt-2 text-xs" style={{ color: "var(--text-tertiary)" }}>
            Website local SEO by{" "}
            <a
              href="https://www.tanymarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-80"
              style={{ color: "var(--text-muted)" }}
            >
              TanyMarketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

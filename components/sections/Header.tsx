"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Menu, X, Instagram } from "lucide-react"
import { useCTA } from "@/components/providers/cta-provider"

const NAV_LINKS = [
  { label: "Beauty Salon", href: "/beauty-salon" },
  { label: "Hair Salon", href: "/hair-salon" },
  { label: "Hairdresser", href: "/hairdresser" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openCTA } = useCTA()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-md border-b" style={{ borderColor: "rgba(212, 175, 55, 0.2)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/triny-logo.png"
            alt="Consentida's Dominican Hair Salon by Triny"
            width={52}
            height={52}
            className="rounded-full"
            priority
          />
          <div className="hidden sm:block">
            <p className="font-serif text-sm font-semibold tracking-wide" style={{ color: "rgb(245, 245, 240)" }}>
              {"Consentida's"}
            </p>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgb(212, 175, 55)" }}>
              Hair Salon by Triny
            </p>
          </div>
        </a>

        {/* Desktop Nav: main keywords + on-page links */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(212, 175, 55)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://www.instagram.com/triny_dominicansalon/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(212, 175, 55)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            aria-label="Visit our Instagram"
          >
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </a>
          <button
            onClick={openCTA}
            className="btn-glow celestial-glow flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            <Phone className="h-4 w-4" />
            <span>787-964-1826</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-cream lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-background/40 backdrop-blur-md lg:hidden" style={{ borderColor: "rgba(212, 175, 55, 0.1)" }}>
          <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b py-3 text-sm font-medium tracking-wide transition-colors"
                style={{ borderColor: "#27272A", color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(212, 175, 55)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openCTA()
                }}
                className="btn-glow celestial-glow flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </button>
              <a
                href="https://www.instagram.com/triny_dominicansalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full border p-3 transition-colors"
                style={{ borderColor: "rgba(212, 175, 55, 0.3)", color: "rgb(245, 245, 240)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(212, 175, 55)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(245, 245, 240)")}
                aria-label="Visit our Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

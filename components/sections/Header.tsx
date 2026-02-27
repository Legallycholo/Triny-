"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Menu, X, Instagram } from "lucide-react"

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-champagne/20">
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
            <p className="font-serif text-sm font-semibold tracking-wide text-cream">
              {"Consentida's"}
            </p>
            <p className="text-xs tracking-widest text-champagne uppercase">
              Hair Salon by Triny
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cream/80 transition-colors duration-200 hover:text-champagne"
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
            className="flex items-center gap-1.5 text-sm text-cream/70 transition-colors hover:text-champagne"
            aria-label="Visit our Instagram"
          >
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="tel:787-964-1826"
            className="btn-glow flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            <Phone className="h-4 w-4" />
            <span>787-964-1826</span>
          </a>
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
        <div className="border-t border-champagne/10 bg-zinc-950/98 lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-zinc-800 py-3 text-sm font-medium tracking-wide text-cream/80 transition-colors hover:text-champagne"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <a
                href="tel:787-964-1826"
                className="btn-glow flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
              <a
                href="https://www.instagram.com/triny_dominicansalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full border border-champagne/30 p-3 text-cream transition-colors hover:text-champagne"
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

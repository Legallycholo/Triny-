"use client"

import { useState } from "react"
import { Scissors, Palette, Sparkles, Hand, Eye, Gem, Phone, HelpCircle } from "lucide-react"
import { useCTA } from "@/components/providers/cta-provider"
import ScrollAnimate from "@/components/ui/scroll-animate"

const SERVICE_CATEGORIES = [
  {
    icon: Scissors,
    title: "Hair Design & Structural Maintenance",
    services: [
      "The Works (Shampoo, Haircut & Blow-dry Style)",
      "Standard Haircut",
      "Shampoo & Scalp Massage",
      "Men's Haircut",
      "Senior Haircut",
      "Big Chop",
      "Wig Install",
    ],
  },
  {
    icon: Sparkles,
    title: "Thermal & Protective Styling",
    services: [
      "Dominican Blowout / Blow Dry Style",
      "Flat Iron Finish",
      "Curls (Beach Waves or Tight)",
      "Hair Tinsel",
      "Hair Braiding (Men, Women & Children)",
      "Kids Braids",
      "Locs Hair Styling",
      "Loc Retwist",
    ],
  },
  {
    icon: Palette,
    title: "Chemical & Color Treatments",
    services: [
      "Custom Color (Consultation Required)",
      "Root Color (Including INOA Ammonia-Free)",
      "Toner & Brassiness Neutralization",
      "Permanent Hair Straightening",
      "Keratin Treatments",
    ],
  },
  {
    icon: Hand,
    title: "Scalp & Hair Therapy",
    services: [
      "Deep Conditioning (Imported Lipid Products)",
      "Tea Tree Special (Scalp Treatment & Massage)",
      "General Hair Treatments (Damage Repair)",
    ],
  },
  {
    icon: Eye,
    title: "Professional Esthetics",
    services: [
      "Threading",
      "Eyebrow Shaping & Tinting",
      "Brow Lamination",
      "Lash Lift",
      "Eyelash Extensions",
      "Makeup Artist Services (Bridal, Events & Daily)",
    ],
  },
  {
    icon: Gem,
    title: "Nail Technology",
    services: [
      "Manicures & Pedicures",
      "Gel Nails & Gel Extensions",
      "Acrylic Nails",
      "Dip Powder Nails",
      "Advanced Nail Art (Cateye, Foil & Freestyle)",
      "Callus Remover",
    ],
  },
]

export default function ServicesSection() {
  const [pricingTooltip, setPricingTooltip] = useState(false)

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimate className="text-center">
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "rgb(212, 175, 55)" }}>
            Full-Service Salon
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance sm:text-4xl lg:text-5xl" style={{ color: "rgb(245, 245, 240)" }}>
            The Investment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {"From precision cuts to clinical scalp restoration, every service is delivered with 21+ years of mastery. Because you deserve to be "}
            <span className="italic" style={{ color: "rgb(201, 169, 97)" }}>consentida</span>.
          </p>
        </ScrollAnimate>

        {/* Pricing Note */}
        <ScrollAnimate className="mt-6 flex items-center justify-center gap-2" delay={0.1}>
          <button
            onClick={() => setPricingTooltip(!pricingTooltip)}
            className="flex items-center gap-1.5 text-sm transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(212, 175, 55)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            aria-expanded={pricingTooltip}
          >
            <HelpCircle className="h-4 w-4" />
            <span>Why are prices determined by consultation?</span>
          </button>
        </ScrollAnimate>
        {pricingTooltip && (
          <div className="mx-auto mt-3 max-w-md rounded-lg border bg-zinc-950/60 backdrop-blur-md px-5 py-4 text-center text-sm leading-relaxed" style={{ borderColor: "rgba(212, 175, 55, 0.2)", color: "var(--text-muted)" }}>
            We must know the length of your hair and current health for fair pricing for all of our customers. Every head of hair is unique.
            <a
              href="tel:787-964-1826"
              className="mt-2 flex items-center justify-center gap-1.5 font-semibold text-champagne transition-colors hover:text-champagne-light"
            >
              <Phone className="h-3.5 w-3.5" />
              Call for your personalized quote
            </a>
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((category, index) => {
            const Icon = category.icon
            return (
              <ScrollAnimate key={category.title} delay={index * 0.1}>
                <div className="group h-full rounded-xl border bg-zinc-950/40 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: "rgba(245, 245, 240, 0.15)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.5)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(245, 245, 240, 0.15)")}
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-champagne">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold leading-snug" style={{ color: "rgb(245, 245, 240)" }}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Service List */}
                  <ul className="flex flex-col gap-2">
                    {category.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimate>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollAnimate className="mt-14 text-center" delay={0.2}>
          <p className="mb-4 text-sm" style={{ color: "var(--text-muted)" }}>
            Final investment determined during your 1-on-1 artistry consultation.
          </p>
          <a
            href="tel:787-964-1826"
            className="btn-glow celestial-glow inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold tracking-wide"
          >
            <Phone className="h-5 w-5" />
            <span>Book Your Consultation</span>
          </a>
        </ScrollAnimate>
      </div>
    </section>
  )
}

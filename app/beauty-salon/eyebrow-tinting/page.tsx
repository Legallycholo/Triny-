import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ServiceCTAButton } from "@/components/sections/ServiceCTAButton"

export const metadata: Metadata = {
  title: "Eyebrow Tinting in Stone Mountain GA | Consentida's by Triny",
  description:
    "Expert Eyebrow Tinting in Stone Mountain, GA near you. Consentida's Dominican Salon By Triny — 21+ years of experience. Call 787-964-1826 to book.",
  keywords: ["Eyebrow Tinting Stone Mountain GA", "Brow Tinting near me", "Eyebrow Color Lithonia", "Brow Dye Georgia"],
  alternates: { canonical: "https://consentidassalon.com/beauty-salon/eyebrow-tinting" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://consentidassalon.com/" },
        { "@type": "ListItem", position: 2, name: "Beauty Salon", item: "https://consentidassalon.com/beauty-salon" },
        { "@type": "ListItem", position: 3, name: "Eyebrow Tinting", item: "https://consentidassalon.com/beauty-salon/eyebrow-tinting" },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Consentida's Dominican Salon By Triny",
      url: "https://consentidassalon.com/",
      telephone: "+17879641826",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5226 Stone Mountain Hwy Suite D",
        addressLocality: "Stone Mountain",
        addressRegion: "GA",
        postalCode: "30087",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 33.8118, longitude: -84.0722 },
      priceRange: "$$",
    },
  ],
}

const cardBg = "rgba(15, 12, 28, 0.6)"
const cardBorder = "rgba(212, 175, 55, 0.2)"
const textPrimary = "rgb(245, 245, 240)"
const textMuted = "rgba(245, 245, 240, 0.88)"
const ctaBg = "rgba(212, 175, 55, 0.1)"

export default function EyebrowTintingPage() {
  return (
    <div data-seo-page className="min-h-screen pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back button + breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
          <Link
            href="/beauty-salon"
            className="inline-flex items-center gap-2 self-start rounded-full border px-4 py-2.5 text-sm font-medium backdrop-blur-md transition-all duration-200 hover:scale-[1.02]"
            style={{ background: cardBg, borderColor: cardBorder, color: textPrimary }}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <span>Back to Beauty Salon</span>
          </Link>
          <nav aria-label="Breadcrumb" className="text-sm" style={{ color: textMuted }}>
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:underline" style={{ color: textMuted }}>Home</Link></li>
              <li>/</li>
              <li><Link href="/beauty-salon" className="hover:underline" style={{ color: textMuted }}>Beauty Salon</Link></li>
              <li>/</li>
              <li className="font-medium" style={{ color: textPrimary }}>Eyebrow Tinting</li>
            </ol>
          </nav>
        </div>

        {/* Intro section */}
        <section
          className="rounded-2xl border p-6 sm:p-8 mb-8 backdrop-blur-md"
          style={{ background: cardBg, borderColor: cardBorder }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: textPrimary }}>
            Eyebrow Tinting in Stone Mountain, GA
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: textMuted }}>
            Looking for Eyebrow Tinting near you in Stone Mountain, GA? Consentida&apos;s Dominican
            Salon By Triny delivers expert Eyebrow Tinting with over 21 years of professional
            experience. Every client leaves feeling consentida — spoiled with care.
          </p>
        </section>

        {/* What to Expect */}
        <section
          className="rounded-2xl border p-6 sm:p-8 mb-8 backdrop-blur-md"
          style={{ background: cardBg, borderColor: cardBorder }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: textPrimary }}>
            What to Expect
          </h2>
          <p className="leading-relaxed" style={{ color: textMuted }}>
            Eyebrow tinting adds color to your brows, making them look fuller and more defined. 
            It&apos;s perfect if your brows are lighter than your hair or if you want a bolder look 
            without daily makeup. Triny chooses a custom shade to match your skin tone and hair color. 
            The tint lasts 2–4 weeks and takes just minutes.
          </p>
        </section>

        {/* Why Choose Us */}
        <section
          className="rounded-2xl border p-6 sm:p-8 mb-8 backdrop-blur-md"
          style={{ background: cardBg, borderColor: cardBorder }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: textPrimary }}>
            Why Stone Mountain Clients Choose Consentida&apos;s
          </h2>
          <ul className="space-y-3">
            {[
              "21+ years of licensed professional experience",
              "Personalized consultation before every service",
              "Serving Stone Mountain, Lithonia, Clarkston & Tucker, GA",
              "Consentidas Guarantee — complimentary refinement within 14 days",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3" style={{ color: textMuted }}>
                <span className="h-2 w-2 rounded-full mt-2 flex-shrink-0" style={{ background: "rgb(212, 175, 55)" }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Related Services */}
        <section
          className="rounded-2xl border p-5 sm:p-6 mb-8 backdrop-blur-md"
          style={{ background: cardBg, borderColor: cardBorder }}
        >
          <h2 className="text-lg font-semibold mb-2" style={{ color: textPrimary }}>
            Explore More Beauty Salon Services
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/beauty-salon/eyebrow-threading" className="text-sm font-medium hover:underline" style={{ color: "rgb(212, 175, 55)" }}>
              Eyebrow Threading
            </Link>
            <span style={{ color: textMuted }}>/</span>
            <Link href="/beauty-salon/eyelash-extensions" className="text-sm font-medium hover:underline" style={{ color: "rgb(212, 175, 55)" }}>
              Eyelash Extensions
            </Link>
            <span style={{ color: textMuted }}>/</span>
            <Link href="/beauty-salon/lash-lift" className="text-sm font-medium hover:underline" style={{ color: "rgb(212, 175, 55)" }}>
              Lash Lift
            </Link>
          </div>
        </section>

        {/* CTA Block */}
        <section
          className="rounded-2xl border-2 p-8 sm:p-10 text-center backdrop-blur-md"
          style={{
            background: ctaBg,
            borderColor: "rgba(212, 175, 55, 0.4)",
            boxShadow: "0 0 40px rgba(212, 175, 55, 0.08)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2" style={{ color: textPrimary }}>
            Book Your Eyebrow Tinting Appointment
          </h2>
          <p className="mb-6 max-w-md mx-auto" style={{ color: textMuted }}>
            Call or text to schedule your consultation. Walk-ins welcome when available.
          </p>
          <ServiceCTAButton />
          <p className="text-sm mt-4" style={{ color: textMuted }}>
            5226 Stone Mountain Hwy Suite D, Stone Mountain, GA 30087
          </p>
        </section>
      </main>
    </div>
  )
}

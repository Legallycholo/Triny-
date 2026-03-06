import type { Metadata } from "next"
import Link from "next/link"
import { Phone } from "lucide-react"
import {
  ServicePageContainer,
  ServiceSection,
  ServiceHeading,
  ServiceSubheading,
  ServiceText,
  ServiceList,
  CTAButton,
} from "@/components/sections/ServicePageContainer"

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

export default function EyebrowTintingPage() {
  return (
    <div data-seo-page className="min-h-screen pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="px-6 py-3 text-sm text-gray-500">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li>/</li>
          <li><Link href="/beauty-salon" className="hover:underline">Beauty Salon</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium dark:text-gray-100">Eyebrow Tinting</li>
        </ol>
      </nav>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-12">
        <ServicePageContainer variant="default" className="sm:max-w-full">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white text-balance">Eyebrow Tinting in Stone Mountain, GA</h1>
            <ServiceText className="text-lg">
              Looking for Eyebrow Tinting near you in Stone Mountain, GA? Consentida&apos;s Dominican
              Salon By Triny delivers expert Eyebrow Tinting with over 21 years of professional
              experience. Every client leaves feeling consentida — spoiled with care.
            </ServiceText>
          </div>
        </ServicePageContainer>

        <ServicePageContainer variant="default">
          <ServiceSection>
            <ServiceSubheading>What to Expect</ServiceSubheading>
            <ServiceText>
              Eyebrow tinting adds color to your brows, making them look fuller and more defined. It's perfect if your brows are lighter than your hair or if you want a bolder look without daily makeup. Triny chooses a custom shade to match your skin tone and hair color. The tint lasts 2–4 weeks and takes just minutes.
            </ServiceText>
          </ServiceSection>
        </ServicePageContainer>

        <ServicePageContainer variant="default">
          <ServiceSection>
            <ServiceSubheading>Why Stone Mountain Clients Choose Consentida&apos;s</ServiceSubheading>
            <ServiceList items={[
              "21+ years of licensed professional experience",
              "Personalized consultation before every service",
              "Serving Stone Mountain, Lithonia, Clarkston & Tucker, GA",
              "Consentidas Guarantee — complimentary refinement within 14 days",
            ]} />
          </ServiceSection>
        </ServicePageContainer>

        <ServicePageContainer variant="related">
          <ServiceSection>
            <ServiceSubheading>Explore More Beauty Salon Services</ServiceSubheading>
            <div className="flex flex-wrap gap-3">
              <Link href="/beauty-salon/eyebrow-threading" className="text-amber-400 hover:text-amber-300 transition">Eyebrow Threading</Link>
              <span className="text-amber-400">/</span>
              <Link href="/beauty-salon/eyelash-extensions" className="text-amber-400 hover:text-amber-300 transition">Eyelash Extensions</Link>
              <span className="text-amber-400">/</span>
              <Link href="/beauty-salon/lash-lift" className="text-amber-400 hover:text-amber-300 transition">Lash Lift</Link>
            </div>
          </ServiceSection>
        </ServicePageContainer>

        <ServicePageContainer variant="cta">
          <ServiceSubheading className="mb-6">Book Your Eyebrow Tinting in Stone Mountain</ServiceSubheading>
          <ServiceText className="mb-6">
            Call or text to schedule your consultation. Walk-ins welcome when available.
          </ServiceText>
          <TintingCTAButton />
          <p className="text-sm text-gray-400 mt-6">5226 Stone Mountain Hwy Suite D, Stone Mountain, GA 30087</p>
        </ServicePageContainer>
      </main>
    </div>
  )
}

"use client"
import { useCTA } from "@/components/providers/cta-provider"

function TintingCTAButton() {
  const { openCTA } = useCTA()
  return (
    <button
      onClick={openCTA}
      className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:from-amber-300 hover:to-amber-400 hover:shadow-lg hover:shadow-amber-500/50 active:scale-95"
    >
      <Phone className="h-5 w-5" />
      <span>Book Your Consultation<br className="hidden sm:block" />Call Today</span>
    </button>
  )
}

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
  title: "Hair Colouring in Stone Mountain GA | Consentida's by Triny",
  description:
    "Expert Hair Colouring in Stone Mountain, GA near you. Consentida's Dominican Salon By Triny — 21+ years of experience. Call 787-964-1826 to book.",
  keywords: ["Hair Colouring Stone Mountain GA", "Hair Color near me", "Hair Dye Lithonia", "Dominican Hair Color Georgia"],
  alternates: { canonical: "https://consentidassalon.com/hair-salon/hair-colouring" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://consentidassalon.com/" },
        { "@type": "ListItem", position: 2, name: "Hair Salon", item: "https://consentidassalon.com/hair-salon" },
        { "@type": "ListItem", position: 3, name: "Hair Colouring", item: "https://consentidassalon.com/hair-salon/hair-colouring" },
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

export default function HairColouringPage() {
  return (
    <div data-seo-page className="min-h-screen pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="px-6 py-3 text-sm text-gray-500">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li>/</li>
          <li><Link href="/hair-salon" className="hover:underline">Hair Salon</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium dark:text-gray-100">Hair Colouring</li>
        </ol>
      </nav>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-12">
        <ServicePageContainer variant="default" className="sm:max-w-full">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white text-balance">Hair Colouring in Stone Mountain, GA</h1>
            <ServiceText className="text-lg">
              Looking for Hair Colouring near you in Stone Mountain, GA? Consentida&apos;s Dominican
              Salon By Triny delivers expert Hair Colouring with over 21 years of professional
              experience. Every client leaves feeling consentida — spoiled with care.
            </ServiceText>
          </div>
        </ServicePageContainer>

        <ServicePageContainer variant="default">
          <ServiceSection>
            <ServiceSubheading>What to Expect</ServiceSubheading>
            <ServiceText>
              Whether you want full colour, root touch-up, or a subtle change, Triny starts with a consultation to match the perfect shade to your skin tone and goals. We use quality colour and care for your hair throughout the process. From rich brunettes to vibrant reds and natural-looking coverage, Stone Mountain clients trust us for colour that looks great and stays healthy.
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
            <ServiceSubheading>Explore More Hair Salon Services</ServiceSubheading>
            <div className="flex flex-wrap gap-3">
              <Link href="/hair-salon/balayage" className="text-amber-400 hover:text-amber-300 transition">Balayage</Link>
              <span className="text-amber-400">/</span>
              <Link href="/hair-salon/highlights" className="text-amber-400 hover:text-amber-300 transition">Highlights</Link>
              <span className="text-amber-400">/</span>
              <Link href="/hair-salon/keratin-treatment" className="text-amber-400 hover:text-amber-300 transition">Keratin Treatment</Link>
            </div>
          </ServiceSection>
        </ServicePageContainer>

        <ServicePageContainer variant="cta">
          <ServiceSubheading className="mb-6">Book Your Hair Colouring in Stone Mountain</ServiceSubheading>
          <ServiceText className="mb-6">
            Call or text to schedule your consultation. Walk-ins welcome when available.
          </ServiceText>
          <HairColouringCTAButton />
          <p className="text-sm text-gray-400 mt-6">5226 Stone Mountain Hwy Suite D, Stone Mountain, GA 30087</p>
        </ServicePageContainer>
      </main>
    </div>
  )
}

"use client"
import { useCTA } from "@/components/providers/cta-provider"

function HairColouringCTAButton() {
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

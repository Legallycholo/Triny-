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
  title: "Women's Haircut in Stone Mountain GA | Consentida's by Triny",
  description:
    "Expert Women's Haircut in Stone Mountain, GA near you. Consentida's Dominican Salon By Triny — 21+ years of experience. Call 787-964-1826 to book.",
  keywords: ["Women's Haircut Stone Mountain GA", "Haircut near me", "Ladies Haircut Lithonia", "Hair Trim Georgia"],
  alternates: { canonical: "https://consentidassalon.com/hairdresser/womens-haircut" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://consentidassalon.com/" },
        { "@type": "ListItem", position: 2, name: "Hairdresser", item: "https://consentidassalon.com/hairdresser" },
        { "@type": "ListItem", position: 3, name: "Women's Haircut", item: "https://consentidassalon.com/hairdresser/womens-haircut" },
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

export default function WomensHaircutPage() {
  return (
    <div data-seo-page className="min-h-screen pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="px-6 py-3 text-sm text-gray-500">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li>/</li>
          <li><Link href="/hairdresser" className="hover:underline">Hairdresser</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium dark:text-gray-100">Women&apos;s Haircut</li>
        </ol>
      </nav>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-12">
        <ServicePageContainer variant="default" className="sm:max-w-full">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white text-balance">Women&apos;s Haircut in Stone Mountain, GA</h1>
            <ServiceText className="text-lg">
              Looking for Women&apos;s Haircut near you in Stone Mountain, GA? Consentida&apos;s Dominican
              Salon By Triny delivers expert Women&apos;s Haircut with over 21 years of professional
              experience. Every client leaves feeling consentida — spoiled with care.
            </ServiceText>
          </div>
        </ServicePageContainer>

        <ServicePageContainer variant="default">
          <ServiceSection>
            <ServiceSubheading>What to Expect</ServiceSubheading>
            <ServiceText>
              Triny starts with a quick consultation to understand your style, face shape, and how much you want to change. Then she shapes your hair with precision — whether you want a trim, layers, or a completely new look. You&apos;ll leave with a cut that suits you and simple styling tips so you can recreate the look at home. Stone Mountain clients love the personal attention and consistent results.
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
            <ServiceSubheading>Explore More Hairdresser Services</ServiceSubheading>
            <div className="flex flex-wrap gap-3">
              <Link href="/hairdresser/mens-haircut" className="text-amber-400 hover:text-amber-300 transition">Men&apos;s Haircut</Link>
              <span className="text-amber-400">/</span>
              <Link href="/hairdresser/childrens-haircut" className="text-amber-400 hover:text-amber-300 transition">Children&apos;s Haircut</Link>
              <span className="text-amber-400">/</span>
              <Link href="/hairdresser/blow-dry" className="text-amber-400 hover:text-amber-300 transition">Blow Dry</Link>
            </div>
          </ServiceSection>
        </ServicePageContainer>

        <ServicePageContainer variant="cta">
          <ServiceSubheading className="mb-6">Book Your Women&apos;s Haircut in Stone Mountain</ServiceSubheading>
          <ServiceText className="mb-6">
            Call or text to schedule your consultation. Walk-ins welcome when available.
          </ServiceText>
          <WomensCTAButton />
          <p className="text-sm text-gray-400 mt-6">5226 Stone Mountain Hwy Suite D, Stone Mountain, GA 30087</p>
        </ServicePageContainer>
      </main>
    </div>
  )
}

"use client"
import { useCTA } from "@/components/providers/cta-provider"

function WomensCTAButton() {
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

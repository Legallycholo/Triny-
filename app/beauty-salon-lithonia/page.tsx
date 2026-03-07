import type { Metadata } from "next"
import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import GuaranteeBanner from "@/components/sections/GuaranteeBanner"
import Footer from "@/components/sections/Footer"
import MobileFAB from "@/components/sections/MobileFAB"

export const metadata: Metadata = {
  title: "BEST Dominican Beauty Salon in Lithonia GA | Blowouts, Silk Press & Hair Coloring Near Me",
  description: "Consentida's Dominican Beauty Salon by Triny: Premium beauty salon serving Lithonia GA. 21+ years of expertise in hair coloring, Dominican blowouts, silk press, keratin treatments & scalp restoration. Call 787-964-1826.",
  alternates: {
    canonical: "https://consentidassalon.com/beauty-salon-lithonia",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Consentida's Dominican Beauty Salon by Triny",
  "alternateName": "BEST Dominican Beauty Salon in Lithonia GA",
  "description": "Premium Dominican beauty salon serving Lithonia GA with 21+ years of expertise in hair coloring, blowouts, silk press, keratin treatments, and scalp restoration.",
  "telephone": "787-964-1826",
  "url": "https://consentidassalon.com/beauty-salon-lithonia",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5226 Stone Mountain Hwy Suite D",
    "addressLocality": "Stone Mountain",
    "addressRegion": "GA",
    "postalCode": "30087",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "City", "name": "Lithonia", "containedInPlace": {"@type": "State", "name": "Georgia"}},
    {"@type": "City", "name": "Stone Mountain", "containedInPlace": {"@type": "State", "name": "Georgia"}}
  ]
}

export default function LithoniaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Header />
        <HeroSection cityName="Lithonia" isCityPage={true} />
        <ServicesSection />
        <TestimonialsSection />
        <GuaranteeBanner />
        <Footer />
        <MobileFAB />
      </main>
    </>
  )
}

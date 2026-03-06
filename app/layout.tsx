import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import GalaxyBackground from '@/components/ui/galaxy-background'
import { CTAProvider } from '@/components/providers/cta-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-syne" })

export const metadata: Metadata = {
  title: "BEST Dominican Beauty Salon in Stone Mountain GA | Blowouts, Silk Press & Hair Coloring Near Me",
  description:
    "Consentida's Dominican Hair Salon by Triny: Premium hair salon at 5226 Stone Mountain Hwy, Stone Mountain GA 30087. 21+ years of expertise in hair coloring, Dominican blowouts, silk press, keratin treatments, scalp restoration & hair styling. Call 787-964-1826.",
  keywords: [
    "Dominican Salon Stone Mountain",
    "Hair Salon Stone Mountain GA",
    "Beauty Salon near me",
    "Silk Press Stone Mountain",
    "Dominican Blowout Georgia",
    "Hair Coloring Lithonia",
    "Keratin Treatment Tucker GA",
    "Balayage Clarkston",
    "Eyebrow Threading Stone Mountain",
    "Best Hairdresser near me",
  ],
  openGraph: {
    title: "BEST Dominican Beauty Salon in Stone Mountain GA | Consentida's by Triny",
    description: "The World of Color. Premium Dominican hair salon with 21+ years of expertise. Hair coloring, blowouts, silk press & scalp restoration in Stone Mountain, GA.",
    type: "website",
    locale: "en_US",
    url: "https://consentidassalon.com",
    images: [
      {
        url: "https://consentidassalon.com/images/triny-logo.png",
        width: 800,
        height: 800,
        alt: "Consentida's Dominican Hair Salon by Triny Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://consentidassalon.com",
  },
  icons: {
    icon: "/images/triny-logo.png",
    apple: "/images/triny-logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": "https://consentidassalon.com",
    name: "Consentida's Dominican Hair Salon by Triny",
    alternateName: "BEST Dominican Beauty Salon in Stone Mountain GA",
    image: "https://consentidassalon.com/images/triny-logo.png",
    description: "Premium Dominican hair salon with 21+ years of expertise in hair coloring, blowouts, silk press, keratin treatments, and scalp restoration.",
    telephone: "787-964-1826",
    email: "tomyglarydary@yahoo.com",
    url: "https://consentidassalon.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5226 Stone Mountain Hwy Suite D",
      addressLocality: "Stone Mountain",
      addressRegion: "GA",
      postalCode: "30087",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.8118",
      longitude: "-84.0722",
    },
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Stone Mountain", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Lithonia", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Clarkston", containedInPlace: { "@type": "State", name: "Georgia" } },
      { "@type": "City", name: "Tucker", containedInPlace: { "@type": "State", name: "Georgia" } },
    ],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
    ],
    sameAs: [
      "https://www.instagram.com/triny_dominicansalon/",
      "https://www.google.com/search?q=Consentida%27s+Dominican+Salon+By+Triny",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "50",
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`font-sans antialiased ${syne.variable}`}>
        <GalaxyBackground />
        <CTAProvider>
          <div style={{ position: "relative", zIndex: 10 }}>
            {children}
          </div>
        </CTAProvider>
        <Analytics />
      </body>
    </html>
  )
}

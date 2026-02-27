import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import GalaxyBackground from '@/components/ui/galaxy-background'
import { CTAProvider } from '@/components/providers/cta-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "BEST Dominican Beauty Salon in Stone Mountain GA | Blowouts, Silk Press & Hair Coloring Near Me",
  description:
    "Consentida's Dominican Hair Salon by Triny: Premium hair salon at 5226 Stone Mountain Hwy, Stone Mountain GA 30087. 21+ years of expertise in hair coloring, Dominican blowouts, silk press, keratin treatments, scalp restoration & editorial hair styling. Call 787-964-1826.",
  keywords: [
    "Beauty salon",
  ],
  openGraph: {
    title: "BEST Dominican Beauty Salon in Stone Mountain GA | Consentida's by Triny",
    description: "The World of Color. Premium Dominican hair salon with 21+ years of expertise. Hair coloring, blowouts, silk press & scalp restoration in Stone Mountain.",
    type: "website",
    locale: "en_US",
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
    "@type": "LocalBusiness",
    "@id": "https://consentidassalon.com",
    name: "Consentida's Dominican Hair Salon by Triny",
    alternateName: "BEST Dominican Beauty Salon in Stone Mountain GA",
    image: "https://consentidassalon.com/images/triny-logo.png",
    description: "Premium Dominican hair salon with 21+ years of expertise in hair coloring, blowouts, silk press, keratin treatments, and scalp restoration.",
    telephone: "787-964-1826",
    email: "info@consentidassalon.com",
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
    areaServed: {
      "@type": "City",
      name: "Stone Mountain, GA",
    },
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
      <body className="font-sans antialiased">
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

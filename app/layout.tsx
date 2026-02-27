import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "BEST Dominican Beauty Salon in Stone Mountain GA. Blowouts, Silk Press & Hair Coloring Near Me",
  description:
    "Premium Dominican hair salon in Stone Mountain, GA. 21+ years of editorial excellence. Hair color, blowouts, keratin treatments, scalp restoration & more. Call now: 787-964-1826",
  keywords: [
    "Beauty Salon",
  ],
  openGraph: {
    title: "BEST Dominican Beauty Salon in Stone Mountain GA. Blowouts, Silk Press & Hair Coloring Near Me",
    description: "The World of Color in Stone Mountain. 21+ years of editorial excellence.",
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
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

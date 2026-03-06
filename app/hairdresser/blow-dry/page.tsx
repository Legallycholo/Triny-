import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blow Dry in Stone Mountain GA | Consentida's by Triny",
  description:
    "Expert Blow Dry in Stone Mountain, GA near you. Consentida's Dominican Salon By Triny — 21+ years of experience. Call 787-964-1826 to book.",
  keywords: ["Blow Dry Stone Mountain GA", "Dominican Blowout near me", "Blowout Lithonia", "Silk Press Georgia"],
  alternates: { canonical: "https://consentidassalon.com/hairdresser/blow-dry" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://consentidassalon.com/" },
        { "@type": "ListItem", position: 2, name: "Hairdresser", item: "https://consentidassalon.com/hairdresser" },
        { "@type": "ListItem", position: 3, name: "Blow Dry", item: "https://consentidassalon.com/hairdresser/blow-dry" },
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

export default function BlowDryPage() {
  return (
    <div data-seo-page className="min-h-screen pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="px-6 py-3 text-sm text-gray-500">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li>/</li>
          <li><Link href="/hairdresser" className="hover:underline">Hairdresser</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium dark:text-gray-100">Blow Dry</li>
        </ol>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Blow Dry in Stone Mountain, GA</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Looking for Blow Dry near you in Stone Mountain, GA? Consentida&apos;s Dominican
          Salon By Triny delivers expert Blow Dry with over 21 years of professional
          experience. Every client leaves feeling consentida — spoiled with care.
        </p>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Expect</h2>
          <p className="text-gray-700 dark:text-gray-300">
            After your cut or colour — or as a standalone service — we blow-dry your hair for a smooth, voluminous, or sleek finish. Triny uses round brushes and technique to add body and shine, so you leave ready for the day or a special occasion. Stone Mountain clients book blow dries for events, weekly styling, or just to look polished without the effort at home.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Stone Mountain Clients Choose Consentida&apos;s</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>21+ years of licensed professional experience</li>
            <li>Personalized consultation before every service</li>
            <li>Serving Stone Mountain, Lithonia, Clarkston & Tucker, GA</li>
            <li>Consentidas Guarantee — complimentary refinement within 14 days</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Explore More Hairdresser Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/hairdresser/womens-haircut" className="text-gray-700 dark:text-gray-300 hover:underline">Women&apos;s Haircut</Link>
            <Link href="/hairdresser/mens-haircut" className="text-gray-700 dark:text-gray-300 hover:underline">Men&apos;s Haircut</Link>
            <Link href="/hairdresser/childrens-haircut" className="text-gray-700 dark:text-gray-300 hover:underline">Children&apos;s Haircut</Link>
          </div>
        </section>
        <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Book Your Blow Dry in Stone Mountain</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Call or text to schedule your consultation. Walk-ins welcome when available.</p>
          <a href="tel:787-964-1826" className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200">Call 787-964-1826</a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">5226 Stone Mountain Hwy Suite D, Stone Mountain, GA 30087</p>
        </section>
      </main>
    </div>
  )
}

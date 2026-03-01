import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Men's Haircut in Stone Mountain GA | Consentida's by Triny",
  description:
    "Expert Men's Haircut in Stone Mountain, GA near you. Consentida's Dominican Salon By Triny — 21+ years of experience. Call 787-964-1826 to book.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://v0-triny.vercel.app/" },
        { "@type": "ListItem", position: 2, name: "Hairdresser", item: "https://v0-triny.vercel.app/hairdresser" },
        { "@type": "ListItem", position: 3, name: "Men's Haircut", item: "https://v0-triny.vercel.app/hairdresser/mens-haircut" },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Consentida's Dominican Salon By Triny",
      url: "https://v0-triny.vercel.app/",
      telephone: "+17879641826",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5226 Stone Mountain Hwy Suite D",
        addressLocality: "Stone Mountain",
        addressRegion: "GA",
        postalCode: "30087",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 33.8073, longitude: -84.1701 },
      priceRange: "$$",
    },
  ],
}

export default function MensHaircutPage() {
  return (
    <div data-seo-page className="min-h-screen pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="px-6 py-3 text-sm text-gray-500">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li>/</li>
          <li><Link href="/hairdresser" className="hover:underline">Hairdresser</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium dark:text-gray-100">Men&apos;s Haircut</li>
        </ol>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Men&apos;s Haircut in Stone Mountain, GA</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Looking for Men&apos;s Haircut near you in Stone Mountain, GA? Consentida&apos;s Dominican
          Salon By Triny delivers expert Men&apos;s Haircut with over 21 years of professional
          experience. Every client leaves feeling consentida — spoiled with care.
        </p>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Expect</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Whether you want a clean fade, a classic scissor cut, or something in between, Triny gets it done with sharp lines and attention to detail. We use clippers and scissors as needed and keep the experience efficient so you&apos;re in and out looking sharp. Stone Mountain guys rely on us for consistent, professional men&apos;s cuts every time.
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
            <Link href="/hairdresser/childrens-haircut" className="text-gray-700 dark:text-gray-300 hover:underline">Children&apos;s Haircut</Link>
            <Link href="/hairdresser/blow-dry" className="text-gray-700 dark:text-gray-300 hover:underline">Blow Dry</Link>
          </div>
        </section>
        <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Book Your Men&apos;s Haircut in Stone Mountain</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Call or text to schedule your consultation. Walk-ins welcome when available.</p>
          <a href="tel:787-964-1826" className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200">Call 787-964-1826</a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">5226 Stone Mountain Hwy Suite D, Stone Mountain, GA 30087</p>
        </section>
      </main>
    </div>
  )
}

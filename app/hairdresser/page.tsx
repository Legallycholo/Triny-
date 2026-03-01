import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Hairdresser in Stone Mountain GA | Consentida's by Triny",
  description:
    "Looking for Hairdresser in Stone Mountain, GA? Consentida's Dominican Salon By Triny offers expert Hairdresser services near you. Call 787-964-1826.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://v0-triny.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hairdresser",
      item: "https://v0-triny.vercel.app/hairdresser",
    },
  ],
}

const cardBg = "rgba(15, 12, 28, 0.6)"
const cardBorder = "rgba(212, 175, 55, 0.2)"
const textPrimary = "rgb(245, 245, 240)"
const textMuted = "rgba(245, 245, 240, 0.88)"
const ctaBg = "rgba(212, 175, 55, 0.1)"

export default function HairdresserPage() {
  return (
    <div data-seo-page className="min-h-screen pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 self-start rounded-full border px-4 py-2.5 text-sm font-medium backdrop-blur-md transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: cardBg,
              borderColor: cardBorder,
              color: textPrimary,
            }}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <span>Back to Home</span>
          </Link>
          <nav aria-label="Breadcrumb" className="text-sm" style={{ color: textMuted }}>
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:underline" style={{ color: textMuted }}>Home</Link></li>
              <li>/</li>
              <li className="font-medium" style={{ color: textPrimary }}>Hairdresser</li>
            </ol>
          </nav>
        </div>

        <section
          className="rounded-2xl border p-6 sm:p-8 mb-8 backdrop-blur-md"
          style={{ background: cardBg, borderColor: cardBorder }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: textPrimary }}>
            Hairdresser in Stone Mountain, GA
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: textMuted }}>
            Consentida&apos;s Dominican Salon By Triny is Stone Mountain&apos;s trusted destination
            for professional Hairdresser services. With 21+ years of experience, Triny delivers
            exceptional results for every client — because you deserve to be consentida.
          </p>
        </section>

        <section
          className="rounded-2xl border p-6 sm:p-8 mb-8 backdrop-blur-md"
          style={{ background: cardBg, borderColor: cardBorder }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: textPrimary }}>
            Our Hairdresser Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/hairdresser/womens-haircut", label: "Women's Haircut" },
              { href: "/hairdresser/mens-haircut", label: "Men's Haircut" },
              { href: "/hairdresser/childrens-haircut", label: "Children's Haircut" },
              { href: "/hairdresser/blow-dry", label: "Blow Dry" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl border p-4 font-medium transition-all duration-200 hover:scale-[1.01]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: cardBorder,
                  color: textPrimary,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section
          className="rounded-2xl border p-5 sm:p-6 mb-8 backdrop-blur-md"
          style={{ background: cardBg, borderColor: cardBorder }}
        >
          <h2 className="text-lg font-semibold mb-2" style={{ color: textPrimary }}>More Services</h2>
          <p className="text-sm mb-3" style={{ color: textMuted }}>Also see:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/beauty-salon" className="text-sm font-medium hover:underline" style={{ color: "rgb(212, 175, 55)" }}>Beauty Salon</Link>
            <span style={{ color: textMuted }}>·</span>
            <Link href="/hair-salon" className="text-sm font-medium hover:underline" style={{ color: "rgb(212, 175, 55)" }}>Hair Salon</Link>
          </div>
        </section>

        <section
          className="rounded-2xl border-2 p-8 sm:p-10 text-center backdrop-blur-md"
          style={{
            background: ctaBg,
            borderColor: "rgba(212, 175, 55, 0.4)",
            boxShadow: "0 0 40px rgba(212, 175, 55, 0.08)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2" style={{ color: textPrimary }}>
            Book Your Hairdresser Appointment
          </h2>
          <p className="mb-6 max-w-md mx-auto" style={{ color: textMuted }}>
            Serving Stone Mountain, GA and surrounding areas including Lithonia, Clarkston, and Tucker.
          </p>
          <a
            href="tel:787-964-1826"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-black transition-all duration-200 hover:scale-105"
            style={{ background: "rgb(212, 175, 55)", color: "#09090B" }}
          >
            Call 787-964-1826
          </a>
          <p className="text-sm mt-4" style={{ color: textMuted }}>
            5226 Stone Mountain Hwy Suite D, Stone Mountain, GA 30087
          </p>
        </section>
      </main>
    </div>
  )
}

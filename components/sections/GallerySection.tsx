"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import ScrollAnimate from "@/components/ui/scroll-animate"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const TRANSFORMATIONS = [
  {
    before: "/images/transformation-before-1.jpg",
    after: "/images/transformation-after-1.jpg",
    beforeAlt: "Client hair before treatment - damaged and thinning texture",
    afterAlt: "Client hair after treatment by Triny - healthy platinum bob with clean geometry",
    label: "The Correction",
    description: "From damaged texture to a refined, healthy platinum bob.",
  },
  {
    before: "/images/transformation-before-2.jpg",
    after: "/images/transformation-after-2.jpg",
    beforeAlt: "Client hair before treatment - uneven color with visible damage",
    afterAlt: "Client hair after treatment by Triny - polished layered blonde with professional styling",
    label: "The Precision",
    description: "Color correction and professional layering for a flawless finish.",
  },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-zinc-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimate className="text-center">
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "rgb(212, 175, 55)" }}>
            Real Results
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance sm:text-4xl lg:text-5xl" style={{ color: "rgb(245, 245, 240)" }}>
            The Mastery Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Every transformation tells a story of trust, technique, and artistry. Swipe to witness the difference.
          </p>
        </ScrollAnimate>

        {/* Carousel */}
        <ScrollAnimate className="relative mt-12" delay={0.15}>
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              type: "fraction",
              el: ".gallery-pagination",
            }}
            navigation={{
              prevEl: ".gallery-prev",
              nextEl: ".gallery-next",
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop
            speed={600}
            className="w-full"
          >
            {TRANSFORMATIONS.map((item) => (
              <SwiperSlide key={item.label}>
                <div className="flex flex-col gap-6">
                  {/* Label */}
                  <div className="text-center">
                    <h3 className="font-serif text-2xl font-semibold" style={{ color: "rgb(212, 175, 55)" }}>
                      {item.label}
                    </h3>
                    <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>{item.description}</p>
                  </div>

                  {/* Before / After Images */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-6">
                    {/* Before */}
                    <div className="relative overflow-hidden rounded-xl">
                      <div className="aspect-square relative">
                        <Image
                          src={item.before}
                          alt={item.beforeAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 40vw"
                          loading="lazy"
                        />
                        {/* Before label */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/80 to-transparent px-3 py-3">
                          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                            Before
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* After */}
                    <div className="relative overflow-hidden rounded-xl ring-1" style={{ ringColor: "rgba(212, 175, 55, 0.3)" }}>
                      <div className="aspect-square relative">
                        <Image
                          src={item.after}
                          alt={item.afterAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 40vw"
                          loading="lazy"
                        />
                        {/* After label */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/80 to-transparent px-3 py-3">
                          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "rgb(212, 175, 55)" }}>
                            After
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation + Pagination */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              className="gallery-prev flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
              style={{ borderColor: "rgba(245, 245, 240, 0.25)", color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgb(212, 175, 55)";
                e.currentTarget.style.color = "rgb(212, 175, 55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245, 245, 240, 0.25)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
              aria-label="Previous transformation"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="gallery-pagination font-mono text-sm tracking-widest" style={{ color: "var(--text-tertiary)" }} />
            <button
              className="gallery-next flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
              style={{ borderColor: "rgba(245, 245, 240, 0.25)", color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgb(212, 175, 55)";
                e.currentTarget.style.color = "rgb(212, 175, 55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245, 245, 240, 0.25)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
              aria-label="Next transformation"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  )
}

"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import Image from "next/image"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

const PORTFOLIO_IMAGES = [
  {
    src: "/images/hero-portrait-4.jpg",
    alt: "Edgy undercut style with blonde curled top by Triny - profile view showing luxury presentation",
  },
  {
    src: "/images/hero-portrait-1.jpg",
    alt: "Platinum blonde wavy pixie cut by Triny - elegant textured short-hair styling",
  },
  {
    src: "/images/hero-portrait-2.jpg",
    alt: "Mauve purple modern short bob by Triny - bold color transformation",
  },
  {
    src: "/images/hero-portrait-3.jpg",
    alt: "Blonde curly pixie cut by Triny - casual lifestyle styling with product portfolio",
  },
]

export default function HeroCarousel() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{
          type: "fraction",
          el: ".hero-pagination",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        speed={800}
        className="aspect-[3/4] w-full sm:aspect-[4/5] lg:aspect-[3/4]"
      >
        {PORTFOLIO_IMAGES.map((image, index) => (
          <SwiperSlide key={image.src}>
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fraction pagination */}
      <div className="hero-pagination absolute bottom-4 left-0 right-0 z-10 text-center font-mono text-xs tracking-widest" style={{ color: "rgba(245, 245, 240, 0.7)" }} />
    </div>
  )
}

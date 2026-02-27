"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { Star, StarHalf, ExternalLink } from "lucide-react"
import ScrollAnimate from "@/components/ui/scroll-animate"

import "swiper/css"
import "swiper/css/pagination"

const REVIEWS = [
  {
    name: "Anonymous Client",
    rating: 5,
    text: "I came in because I had hair depression. My hair was literally matted to my head, 4C hair dry and crunchy and matted. In just a little while, she detangled it carefully, pressed it and brought it (and me) back to life. I have been living in Atlanta for 4 years, and I kid you not, I have never ever walked away from a press with so much bounce, body, and movement. It was perfect.",
  },
  {
    name: "Christina Hall",
    rating: 5,
    text: "I've been to this hair salon three times now and the owner is truly so sweet. She's really friendly and you can tell by how she interacts with her family and even with customers she doesn't know. She deserves all the good things. I brought my mom here once. My mom had multiple strokes and the owner not only did her hair but also helped me with her and even told my mom she looks great to boost her mood.",
  },
  {
    name: "D Bray",
    rating: 5,
    text: "Triny is great. I found her by accident one morning at 3:00 am. Her reviews were great. I showed up at her shop 2 hrs before opening. When she found out I was outside her shop, she came right away. That speaks volumes about her. She cares about your hair and will not do anything that she believes will cause damage. She is always upbeat and positive.",
  },
  {
    name: "DeShawn Brown",
    rating: 5,
    text: "When I walked in the door, she saw the frustration on my face. I had a bad haircut from a previous hair dresser and I didn't know what to do with my hair. She did an AMAZING job. I got so many compliments. And it lasted a while because I followed her instructions. The way she restored my self-confidence is indescribable.",
  },
  {
    name: "Tianna Paniagua",
    rating: 4.5,
    text: "I am usually very particular when it comes to my hair, but I can honestly say that Triny did not disappoint! From start to finish, she exceeded my expectations. She listened to what I wanted, made thoughtful suggestions for routine hair care/products, and delivered a result that was even better than I envisioned.",
  },
  {
    name: "Seasons Greene",
    rating: 5,
    text: "Triny is one of a kind! She's very caring about her work and ensures I'm satisfied before I leave. She has even instructed me to \"sit\" for a re-press even when I didn't stop by for that reason! From the hugs that she greets me with, to the coffee, I always have a great experience.",
  },
  {
    name: "Arlene",
    rating: 4.5,
    text: "My husband saw this place and told me about the new hair salon. I took a chance and went there. She was so pleasant and told me she would be there shortly. I didn't have an appointment but she still took me in between two appointments. She was very gentle to my hair. She told my issues and how to solve them. I received many compliments on my hair.",
  },
  {
    name: "Denise G",
    rating: 5,
    text: "My sister and I came in for blow out/styles while I'm home for the holidays! I loved the atmosphere and the time and care that was shown to both my sister and I! As a hairstylist myself it was so nice coming into a clean and professional environment to relax and be pampered in!",
  },
  {
    name: "Kisha Hightower",
    rating: 4.5,
    text: "I need my hair done & Triny did my Sew-In on a Sunday in the bad Atlanta weather. At first I wasn't happy & impatient but she never stopped trying to make sure my hair was perfect. I received a lot of compliments the next day at work. She takes her time with perfection. I recommend!",
  },
  {
    name: "Sonja Moss",
    rating: 5,
    text: "Triny is very professional but also fun and funny. I felt like I was chilling with a friend. She's easy to talk to. I had soft locs for a couple of months. When I took them out, my hair was very dry and in need of HELP. Idk what she did, but my hair felt soft and beautiful! Yours can, too!",
  },
]

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 !== 0

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`star-${i}`}
          className="h-4 w-4 fill-champagne text-champagne"
        />
      ))}
      {hasHalf && (
        <StarHalf className="h-4 w-4 fill-champagne text-champagne" />
      )}
    </div>
  )
}

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Consentida%27s+Dominican+Salon+By+Triny%2C+Stone+Mountain+Highway%2C+Stone+Mountain%2C+GA"

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-off-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimate className="text-center">
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "rgb(212, 175, 55)" }}>
            Verified Google Reviews
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-zinc-950 text-balance sm:text-4xl lg:text-5xl">
            Client Experiences
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed" style={{ color: "rgb(82, 82, 91)" }}>
            {"Real words from real clients. Every review is verified on Google."}
          </p>
        </ScrollAnimate>

        {/* Reviews Carousel */}
        <ScrollAnimate className="mt-12" delay={0.15}>
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{
              type: "fraction",
              el: ".reviews-pagination",
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            speed={600}
            className="w-full"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.name}>
                <div className="flex h-full flex-col justify-between rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md"
                  style={{ borderColor: "rgb(229, 229, 229)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgb(229, 229, 229)")}
                >
                  {/* Stars + Quote */}
                  <div>
                    <StarRating rating={review.rating} />
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600 line-clamp-6">
                      {`"${review.text}"`}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-5 flex items-center gap-3 border-t border-light-gray pt-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-950 font-serif text-sm font-semibold text-champagne">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-900">
                        {review.name}
                      </p>
                      <p className="text-xs text-zinc-400">Verified Client</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="reviews-pagination mt-8 text-center font-mono text-sm tracking-widest" style={{ color: "rgb(161, 161, 170)" }} />
        </ScrollAnimate>

        {/* See More Reviews Link */}
        <ScrollAnimate className="mt-8 text-center" delay={0.2}>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "rgb(113, 113, 122)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(212, 175, 55)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(113, 113, 122)")}
          >
            <span>See All Reviews on Google</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </ScrollAnimate>
      </div>
    </section>
  )
}

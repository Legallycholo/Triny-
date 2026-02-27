"use client"

import { ShieldCheck } from "lucide-react"
import ScrollAnimate from "@/components/ui/scroll-animate"

export default function GuaranteeBanner() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-16 lg:py-20">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <ScrollAnimate>
          <ShieldCheck className="mx-auto h-10 w-10" style={{ color: "rgb(212, 175, 55)" }} />
          <h2 className="mt-5 font-serif text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl" style={{ color: "rgb(245, 245, 240)" }}>
            <span className="italic" style={{ color: "rgb(212, 175, 55)" }}>Consentidas:</span>{" "}
            Mastery or Correction.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed" style={{ color: "rgba(245, 245, 240, 0.65)" }}>
            If your results do not align with our established vision, I provide a complimentary refinement within 14 days. Your hair is my reputation.
          </p>
          <div className="mt-6 inline-block rounded-full border px-5 py-2" style={{ borderColor: "rgba(212, 175, 55, 0.2)" }}>
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "rgba(212, 175, 55, 0.8)" }}>
              The Triny Promise
            </span>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  )
}

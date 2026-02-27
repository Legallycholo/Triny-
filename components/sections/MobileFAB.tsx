"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"

export default function MobileFAB() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling past the hero section
      setVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <a
        href="tel:787-964-1826"
        className="fab-pulse flex h-14 w-14 items-center justify-center rounded-full bg-zinc-950 border-2 shadow-2xl transition-transform active:scale-95"
        style={{ borderColor: "rgb(212, 175, 55)", color: "rgb(212, 175, 55)" }}
        aria-label="Call Consentida's Dominican Hair Salon"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}

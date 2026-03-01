"use client"

import { Phone, MessageCircle, Instagram, X } from "lucide-react"

interface CTADialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function CTADialog({ isOpen, onClose }: CTADialogProps) {
  if (!isOpen) return null

  const contactOptions = [
    {
      id: "call",
      label: "Call Now",
      description: "Speak directly with Triny · 787-964-1826",
      icon: Phone,
      href: "tel:787-964-1826",
      isExternal: false,
      accentColor: "rgb(212, 175, 55)",
      hoverBg: "rgba(212, 175, 55, 0.12)",
    },
    {
      id: "text",
      label: "Send a Text",
      description: "Quick message via SMS · 787-964-1826",
      icon: MessageCircle,
      href: "sms:787-964-1826",
      isExternal: false,
      accentColor: "rgb(167, 139, 250)",
      hoverBg: "rgba(167, 139, 250, 0.12)",
    },
    {
      id: "instagram",
      label: "DM on Instagram",
      description: "Direct message @triny_dominicansalon",
      icon: Instagram,
      href: "https://www.instagram.com/triny_dominicansalon/",
      isExternal: true,
      accentColor: "rgb(196, 167, 253)",
      hoverBg: "rgba(196, 167, 253, 0.12)",
    },
  ]

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      {/* Sheet / Dialog */}
      <div
        className="relative w-full max-w-md rounded-t-3xl sm:rounded-2xl p-8 shadow-2xl"
        style={{
          background: "linear-gradient(145deg, rgba(15,15,20,0.98) 0%, rgba(20,10,35,0.98) 100%)",
          border: "1px solid rgba(212,175,55,0.18)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top bar (mobile sheet handle) */}
        <div className="mx-auto mb-6 h-1 w-10 rounded-full sm:hidden" style={{ backgroundColor: "rgba(212,175,55,0.35)" }} />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
          style={{ color: "var(--text-muted)", backgroundColor: "rgba(255,255,255,0.05)" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "rgb(212,175,55)"; e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.12)" }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)" }}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "rgb(212,175,55)" }}>
            Get in Touch
          </p>
          <h2 className="font-serif text-2xl font-bold" style={{ color: "rgb(245,245,240)" }}>
            How would you like to connect?
          </h2>
          <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
            Choose the option that works best for you.
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {contactOptions.map((opt) => {
            const Icon = opt.icon
            const linkProps = opt.isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {}
            return (
              <a
                key={opt.id}
                href={opt.href}
                {...linkProps}
                onClick={onClose}
                className="group flex items-center gap-4 rounded-2xl border-2 p-4 transition-all duration-200"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(212,175,55,0.15)",
                  color: "rgb(245,245,240)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = opt.hoverBg
                  e.currentTarget.style.borderColor = opt.accentColor
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow = `0 8px 24px ${opt.hoverBg}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.15)"
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                {/* Icon circle */}
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${opt.hoverBg}`, border: `1.5px solid ${opt.accentColor}` }}
                >
                  <Icon className="h-5 w-5" style={{ color: opt.accentColor }} />
                </div>
                <div>
                  <p className="font-semibold text-sm leading-tight">{opt.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{opt.description}</p>
                </div>
              </a>
            )
          })}
        </div>

        {/* Business card */}
        <div
          className="mt-5 rounded-xl px-4 py-3 text-center text-xs"
          style={{ backgroundColor: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.12)" }}
        >
          <p className="font-serif font-semibold" style={{ color: "rgb(212,175,55)" }}>
            {"Consentida's Dominican Hair Salon"}
          </p>
          <p className="mt-0.5" style={{ color: "var(--text-muted)" }}>
            5226 Stone Mountain Hwy Suite D · Stone Mountain, GA 30087
          </p>
        </div>
      </div>
    </div>
  )
}

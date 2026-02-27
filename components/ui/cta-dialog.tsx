"use client"

import { useState } from "react"
import { Phone, MessageCircle, Instagram, X } from "lucide-react"

interface CTADialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function CTADialog({ isOpen, onClose }: CTADialogProps) {
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  if (!isOpen) return null

  const contactOptions = [
    {
      id: "call",
      label: "Call Now",
      description: "Speak directly with Triny",
      icon: Phone,
      action: () => {
        window.location.href = "tel:787-964-1826"
        onClose()
      },
      color: "rgb(212, 175, 55)",
    },
    {
      id: "text",
      label: "Text Us",
      description: "Quick message via SMS",
      icon: MessageCircle,
      action: () => {
        window.location.href = "sms:787-964-1826"
        onClose()
      },
      color: "rgb(167, 139, 250)",
    },
    {
      id: "instagram",
      label: "DM on Instagram",
      description: "Direct message @triny_dominicansalon",
      icon: Instagram,
      action: () => {
        window.open("https://www.instagram.com/triny_dominicansalon/", "_blank")
        onClose()
      },
      color: "rgb(168, 85, 247)",
    },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      {/* Dialog */}
      <div
        className="relative w-full max-w-md rounded-2xl border p-8 shadow-2xl"
        style={{
          backgroundColor: "rgb(9, 9, 11)",
          borderColor: "rgba(212, 175, 55, 0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full transition-colors"
          style={{
            color: "rgba(245, 245, 240, 0.5)",
            backgroundColor: "rgba(212, 175, 55, 0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "rgb(212, 175, 55)"
            e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.2)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(245, 245, 240, 0.5)"
            e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.1)"
          }}
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2
            className="font-serif text-2xl font-bold text-balance"
            style={{ color: "rgb(245, 245, 240)" }}
          >
            Get in Touch
          </h2>
          <p
            className="mt-2 text-sm"
            style={{ color: "rgba(245, 245, 240, 0.6)" }}
          >
            Choose your preferred way to connect with Triny
          </p>
        </div>

        {/* Contact Options */}
        <div className="space-y-3">
          {contactOptions.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.id}
                onClick={option.action}
                className="w-full rounded-xl border-2 p-4 text-left transition-all duration-200 hover:shadow-lg"
                style={{
                  backgroundColor: "rgba(212, 175, 55, 0.05)",
                  borderColor: "rgba(212, 175, 55, 0.2)",
                  color: "rgb(245, 245, 240)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `rgba(212, 175, 55, 0.15)`
                  e.currentTarget.style.borderColor = `${option.color}`
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `rgba(212, 175, 55, 0.05)`
                  e.currentTarget.style.borderColor = `rgba(212, 175, 55, 0.2)`
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <div className="flex items-start gap-3">
                  <Icon
                    className="h-6 w-6 mt-0.5 flex-shrink-0"
                    style={{ color: option.color }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{option.label}</h3>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "rgba(245, 245, 240, 0.6)" }}
                    >
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Business Info */}
        <div
          className="mt-6 rounded-lg border p-4 text-center text-xs"
          style={{
            backgroundColor: "rgba(212, 175, 55, 0.05)",
            borderColor: "rgba(212, 175, 55, 0.15)",
            color: "rgba(245, 245, 240, 0.6)",
          }}
        >
          <p className="font-semibold" style={{ color: "rgb(212, 175, 55)" }}>
            Consentida's Dominican Hair Salon
          </p>
          <p className="mt-1">5226 Stone Mountain Hwy Suite D</p>
          <p>Stone Mountain, GA 30087</p>
        </div>
      </div>
    </div>
  )
}

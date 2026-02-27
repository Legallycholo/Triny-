"use client"

import { createContext, useContext, useState } from "react"
import CTADialog from "@/components/ui/cta-dialog"

interface CTAContextType {
  openCTA: () => void
  closeCTA: () => void
}

const CTAContext = createContext<CTAContextType | undefined>(undefined)

export function CTAProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openCTA = () => setIsOpen(true)
  const closeCTA = () => setIsOpen(false)

  return (
    <CTAContext.Provider value={{ openCTA, closeCTA }}>
      {children}
      <CTADialog isOpen={isOpen} onClose={closeCTA} />
    </CTAContext.Provider>
  )
}

export function useCTA() {
  const context = useContext(CTAContext)
  if (!context) {
    throw new Error("useCTA must be used within CTAProvider")
  }
  return context
}

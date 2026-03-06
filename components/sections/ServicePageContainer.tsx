import React from "react"

interface ServicePageContainerProps {
  children: React.ReactNode
  variant?: "default" | "cta" | "related"
  className?: string
}

export function ServicePageContainer({
  children,
  variant = "default",
  className = "",
}: ServicePageContainerProps) {
  const baseStyles =
    "service-container rounded-lg border backdrop-blur-sm transition-all duration-300"
  const variantStyles = {
    default: "border-amber-500/40 bg-zinc-950/70 p-6 sm:p-8 md:p-10",
    cta: "border-amber-500/50 bg-gradient-to-br from-zinc-950/80 to-zinc-900/60 p-8 sm:p-12 text-center",
    related:
      "border-amber-500/30 bg-zinc-950/50 p-6 sm:p-8 space-y-4 sm:space-y-6",
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  )
}

export function ServiceSection({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`mb-8 sm:mb-12 md:mb-16 ${className}`}>{children}</div>
}

export function ServiceHeading({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={`mb-4 text-3xl sm:text-4xl font-bold text-white text-balance ${className}`}
    >
      {children}
    </h2>
  )
}

export function ServiceSubheading({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h3
      className={`mb-3 text-2xl sm:text-3xl font-semibold text-white text-balance ${className}`}
    >
      {children}
    </h3>
  )
}

export function ServiceText({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={`text-base sm:text-lg leading-relaxed text-gray-300 ${className}`}>
      {children}
    </p>
  )
}

export function ServiceList({
  items,
  className = "",
}: {
  items: string[]
  className?: string
}) {
  return (
    <ul className={`space-y-3 sm:space-y-4 ml-4 sm:ml-6 ${className}`}>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="h-2 w-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
          <span className="text-base sm:text-lg text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function CTAButton({
  onClick,
  children,
  className = "",
}: {
  onClick: () => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:from-amber-300 hover:to-amber-400 hover:shadow-lg hover:shadow-amber-500/50 active:scale-95 ${className}`}
    >
      {children}
    </button>
  )
}

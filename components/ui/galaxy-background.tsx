"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  radius: number
  color: string
  opacity: number
  twinkleSpeed: number
  currentOpacity: number
}

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star colors: gold, purple, white
    const colors = [
      "rgba(212, 175, 55, ",     // Gold
      "rgba(124, 58, 237, ",     // Purple
      "rgba(245, 245, 240, ",    // White
      "rgba(229, 197, 71, ",     // Light Gold
      "rgba(167, 139, 250, ",    // Light Purple
    ]

    // Generate stars
    const starCount = 200
    const stars: Star[] = []

    for (let i = 0; i < starCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random(),
        radius: Math.random() * 2.5,
        color: color,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        currentOpacity: Math.random() * 0.5 + 0.5,
      })
    }

    let scrollY = 0
    let animationFrameId: number

    const handleScroll = () => {
      scrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)

    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = "rgba(9, 9, 11, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw stars
      stars.forEach((star) => {
        // Parallax effect based on scroll
        const parallaxY = star.y - scrollY * (1 - star.z) * 0.5

        // Wrap around screen
        let displayY = parallaxY % canvas.height
        if (displayY < 0) displayY += canvas.height

        // Twinkling effect
        star.currentOpacity += (Math.random() - 0.5) * star.twinkleSpeed
        star.currentOpacity = Math.max(
          star.opacity * 0.3,
          Math.min(star.opacity, star.currentOpacity)
        )

        // Draw star with glow
        const gradient = ctx.createRadialGradient(
          star.x,
          displayY,
          0,
          star.x,
          displayY,
          star.radius * 3
        )

        gradient.addColorStop(0, star.color + star.currentOpacity + ")")
        gradient.addColorStop(0.7, star.color + star.currentOpacity * 0.5 + ")")
        gradient.addColorStop(1, star.color + "0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(star.x, displayY, star.radius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw core
        ctx.fillStyle = star.color + star.currentOpacity + ")"
        ctx.beginPath()
        ctx.arc(star.x, displayY, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

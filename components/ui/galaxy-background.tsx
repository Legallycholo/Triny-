"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  radius: number
  color: [number, number, number]
  opacity: number
  twinkleSpeed: number
  twinkleDir: number
  parallaxFactor: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
  angle: number
  active: boolean
  trail: number
}

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Brand color palette: gold, purple, white in RGB tuples
    const palette: [number, number, number][] = [
      [212, 175, 55],   // Champagne gold
      [229, 197, 71],   // Light gold
      [201, 160, 40],   // Deep gold
      [124, 58, 237],   // Violet
      [167, 139, 250],  // Lavender
      [196, 167, 253],  // Soft purple
      [245, 245, 240],  // Cream white
      [255, 255, 255],  // Pure white
    ]

    // Generate dense starfield
    const STAR_COUNT = 320
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => {
      const color = palette[Math.floor(Math.random() * palette.length)]
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.2,
        color,
        opacity: Math.random() * 0.6 + 0.4,
        twinkleSpeed: Math.random() * 0.012 + 0.004,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        parallaxFactor: Math.random() * 0.4 + 0.05,
      }
    })

    // A few large bright hero stars
    const heroStars: Star[] = Array.from({ length: 18 }, () => {
      const color = palette[Math.floor(Math.random() * 3)] // mostly gold tones
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        color,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.008 + 0.003,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        parallaxFactor: Math.random() * 0.2 + 0.05,
      }
    })

    // Shooting stars
    const shootingStars: ShootingStar[] = Array.from({ length: 4 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.5,
      length: Math.random() * 120 + 60,
      speed: Math.random() * 6 + 4,
      opacity: 0,
      angle: (Math.PI / 4) + (Math.random() * 0.3 - 0.15),
      active: false,
      trail: Math.random() * 80 + 40,
    }))

    let scrollY = 0
    const handleScroll = () => { scrollY = window.scrollY }
    window.addEventListener("scroll", handleScroll, { passive: true })

    let frame = 0
    let animId: number

    // Launch a random shooting star occasionally
    const maybeSpawnShooter = () => {
      const idle = shootingStars.find(s => !s.active)
      if (idle && Math.random() < 0.004) {
        idle.x = Math.random() * canvas.width * 0.7
        idle.y = Math.random() * canvas.height * 0.4
        idle.opacity = 1
        idle.active = true
      }
    }

    const drawNebula = () => {
      // Subtle nebula clouds in the background
      const nebulaData = [
        { x: canvas.width * 0.15, y: canvas.height * 0.25, r: canvas.width * 0.22, c: "124,58,237" },
        { x: canvas.width * 0.8, y: canvas.height * 0.6,  r: canvas.width * 0.18, c: "212,175,55" },
        { x: canvas.width * 0.5, y: canvas.height * 0.85, r: canvas.width * 0.2,  c: "167,139,250" },
      ]
      nebulaData.forEach(n => {
        const g = ctx.createRadialGradient(n.x, n.y - scrollY * 0.05, 0, n.x, n.y - scrollY * 0.05, n.r)
        g.addColorStop(0, `rgba(${n.c}, 0.06)`)
        g.addColorStop(0.5, `rgba(${n.c}, 0.025)`)
        g.addColorStop(1, `rgba(${n.c}, 0)`)
        ctx.fillStyle = g
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })
    }

    const draw = () => {
      frame++

      // Deep space background — solid fill each frame for crisp look
      ctx.fillStyle = "#09090B"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Nebula glow
      drawNebula()

      // Draw regular stars
      ;[...stars, ...heroStars].forEach(star => {
        const parallaxOffset = scrollY * star.parallaxFactor
        const sy = ((star.y - parallaxOffset) % canvas.height + canvas.height) % canvas.height

        // Twinkle
        star.opacity += star.twinkleSpeed * star.twinkleDir
        if (star.opacity >= 1) { star.opacity = 1; star.twinkleDir = -1 }
        if (star.opacity <= 0.1) { star.opacity = 0.1; star.twinkleDir = 1 }

        const [r, g, b] = star.color

        // Glow halo
        const glowR = star.radius * 4
        const glow = ctx.createRadialGradient(star.x, sy, 0, star.x, sy, glowR)
        glow.addColorStop(0, `rgba(${r},${g},${b},${star.opacity * 0.5})`)
        glow.addColorStop(1, `rgba(${r},${g},${b},0)`)
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(star.x, sy, glowR, 0, Math.PI * 2)
        ctx.fill()

        // Core
        ctx.fillStyle = `rgba(${r},${g},${b},${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, sy, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Shooting stars
      maybeSpawnShooter()
      shootingStars.forEach(s => {
        if (!s.active) return
        const dx = Math.cos(s.angle) * s.speed
        const dy = Math.sin(s.angle) * s.speed
        s.x += dx
        s.y += dy
        s.opacity -= 0.018

        if (s.opacity <= 0 || s.x > canvas.width || s.y > canvas.height) {
          s.active = false
          s.opacity = 0
          return
        }

        const tailX = s.x - Math.cos(s.angle) * s.trail
        const tailY = s.y - Math.sin(s.angle) * s.trail
        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y)
        grad.addColorStop(0, `rgba(245,245,240,0)`)
        grad.addColorStop(0.5, `rgba(212,175,55,${s.opacity * 0.4})`)
        grad.addColorStop(1, `rgba(245,245,240,${s.opacity})`)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(s.x, s.y)
        ctx.stroke()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

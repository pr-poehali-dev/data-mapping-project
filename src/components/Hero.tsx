import { useEffect, useRef, useState, useCallback } from "react"
import { ArrowDown } from "lucide-react"

const RENDER_IMAGE = "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/b0331e34-ee8c-42af-8dba-3adba449a110.jpg"
const REAL_IMAGE = "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/372fac56-a6e4-43bf-81a9-beb484fa9cf0.jpg"

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [animationComplete, setAnimationComplete] = useState(false)
  const accumulatedScrollRef = useRef(0)
  const lastTouchY = useRef<number>(0)

  const [position, setPosition] = useState(50)
  const [viewportWidth, setViewportWidth] = useState(0)
  const draggingRef = useRef(false)

  const applyTransform = (newProgress: number) => {
    if (contentRef.current) {
      const baseOffset = window.innerWidth >= 768 ? -80 : -64
      const translateY = baseOffset + newProgress * 200
      const rotationX = newProgress * 45
      const scale = 1 - newProgress * 0.3
      contentRef.current.style.transform = `translateY(${translateY}px) rotateX(${rotationX}deg) scale(${scale})`
    }
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const atTopOfPage = window.scrollY === 0
      if (draggingRef.current) return

      if (atTopOfPage && !animationComplete) {
        e.preventDefault()
        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + e.deltaY))
        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        if (newProgress >= 1) setAnimationComplete(true)
        applyTransform(newProgress)
      } else if (atTopOfPage && animationComplete && e.deltaY < 0) {
        e.preventDefault()
        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + e.deltaY))
        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        if (newProgress < 1) setAnimationComplete(false)
        applyTransform(newProgress)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      lastTouchY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (draggingRef.current) return
      const atTopOfPage = window.scrollY === 0
      const currentTouchY = e.touches[0].clientY
      const deltaY = lastTouchY.current - currentTouchY

      if (atTopOfPage && !animationComplete) {
        e.preventDefault()
        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + deltaY * 3))
        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        if (newProgress >= 1) setAnimationComplete(true)
        applyTransform(newProgress)
      } else if (atTopOfPage && animationComplete && deltaY < 0) {
        e.preventDefault()
        accumulatedScrollRef.current = Math.max(0, Math.min(700, accumulatedScrollRef.current + deltaY * 3))
        const newProgress = Math.max(0, Math.min(1, accumulatedScrollRef.current / 700))
        if (newProgress < 1) setAnimationComplete(false)
        applyTransform(newProgress)
      }
      lastTouchY.current = currentTouchY
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [animationComplete])

  const updateFromClientX = useCallback((clientX: number) => {
    const el = heroRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, pct)))
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (draggingRef.current) updateFromClientX(e.clientX)
    }
    const onTouchMove = (e: TouchEvent) => {
      if (draggingRef.current && e.touches[0]) {
        e.preventDefault()
        updateFromClientX(e.touches[0].clientX)
      }
    }
    const stop = () => {
      draggingRef.current = false
    }
    const onResize = () => {
      if (heroRef.current) setViewportWidth(heroRef.current.offsetWidth)
    }
    onResize()
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", stop)
    window.addEventListener("touchmove", onTouchMove, { passive: false })
    window.addEventListener("touchend", stop)
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", stop)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", stop)
      window.removeEventListener("resize", onResize)
    }
  }, [updateFromClientX])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden select-none">
      {/* Before/After slider background */}
      <div className="absolute inset-0 z-0">
        <img
          src={REAL_IMAGE}
          alt="Реализация интерьера"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          draggable={false}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${position}%` }}>
          <img
            src={RENDER_IMAGE}
            alt="Проект — визуализация"
            className="absolute inset-0 h-full object-cover object-center max-w-none"
            style={{ width: viewportWidth || "100vw" }}
            draggable={false}
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Labels */}
      <span className="absolute bottom-24 left-6 md:left-12 z-20 bg-black/50 text-white text-[10px] md:text-xs tracking-widest uppercase px-3 py-1.5 pointer-events-none">
        Проект
      </span>
      <span className="absolute bottom-24 right-6 md:right-12 z-20 bg-black/50 text-white text-[10px] md:text-xs tracking-widest uppercase px-3 py-1.5 pointer-events-none">
        Реализация
      </span>

      {/* Drag handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-20 cursor-ew-resize"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        onMouseDown={(e) => {
          e.preventDefault()
          draggingRef.current = true
          updateFromClientX(e.clientX)
        }}
        onTouchStart={(e) => {
          draggingRef.current = true
          if (e.touches[0]) updateFromClientX(e.touches[0].clientX)
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
            <path d="M9 7L5 12l4 5M15 7l4 5-4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <div
        ref={contentRef}
        className="container mx-auto px-6 md:px-12 relative z-10 pointer-events-none -translate-y-16 md:-translate-y-20"
        style={{
          willChange: "transform",
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-center text-white/80 mb-8">Архитектурное бюро</p>

          <h1 ref={titleRef} className="text-center text-white mb-0 flex flex-col items-center drop-shadow-lg">
            <span className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-[0.12em] uppercase leading-none">
              ДОМ ПРОЕКТОВ
            </span>
            <span className="text-lg sm:text-2xl lg:text-3xl font-light tracking-[0.5em] uppercase text-white/90 mt-5">
              под ключ
            </span>
          </h1>

          <p className="text-white/80 text-sm md:text-base mt-8 text-center max-w-md">
            Потяните бегунок — сравните наш проект с готовой реализацией
          </p>

          <a
            href="#contact"
            className="pointer-events-auto mt-8 inline-flex items-center gap-3 bg-white text-foreground px-8 py-4 text-sm tracking-wide hover:bg-white/90 transition-colors duration-300"
          >
            Оставить заявку
          </a>
        </div>
      </div>

      {animationComplete && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-30 pointer-events-none">
          <ArrowDown className="w-5 h-5 text-white/70" />
        </div>
      )}
    </section>
  )
}
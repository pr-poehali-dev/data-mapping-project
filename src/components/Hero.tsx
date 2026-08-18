import { useEffect, useRef, useState, useCallback } from "react"

const RENDER_IMAGE = "/hero-before.webp"
const REAL_IMAGE = "/hero-after.webp"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const [position, setPosition] = useState(50)
  const [viewportWidth, setViewportWidth] = useState(0)
  const draggingRef = useRef(false)
  const compareRef = useRef<HTMLDivElement>(null)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = compareRef.current || heroRef.current
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
      const el = compareRef.current || heroRef.current
      if (el) setViewportWidth(el.offsetWidth)
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
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-110 blur-lg md:scale-100 md:blur-0"
          draggable={false}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" style={{ width: `${position}%` }}>
          <img
            src={RENDER_IMAGE}
            alt="Проект — визуализация"
            className="absolute inset-0 h-full object-cover object-center max-w-none"
            style={{ width: viewportWidth || "100vw" }}
            draggable={false}
          />
        </div>
        <div className="absolute inset-0 bg-black/45 md:bg-black/45" />
      </div>

      {/* Labels */}
      <span className="hidden md:block absolute bottom-10 left-12 z-20 rounded-full bg-black/60 text-white text-xs tracking-widest uppercase px-4 py-1.5 pointer-events-none">
        Проект
      </span>
      <span className="hidden md:block absolute bottom-10 right-12 z-20 rounded-full bg-black/60 text-white text-xs tracking-widest uppercase px-4 py-1.5 pointer-events-none">
        Реализация
      </span>

      {/* Drag handle */}
      <div
        className="hidden md:block absolute top-0 bottom-0 w-0.5 bg-white/80 z-20 cursor-ew-resize"
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
      <div className="container mx-auto px-4 md:px-12 pt-20 pb-10 md:pt-20 md:pb-0 relative z-10 pointer-events-none">
        <div className="flex flex-col items-center">
          <p className="text-[10px] sm:text-xs tracking-[0.45em] uppercase text-center text-white/70 mb-4 md:mb-6">
            Архитектурное бюро
          </p>

          <h1 ref={titleRef} className="text-center text-white mb-0 flex flex-col items-center drop-shadow-lg uppercase">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-[0.16em] leading-[1.3]">
              Интерьер, который
            </span>
            <span className="mt-2 md:mt-4 text-2xl sm:text-4xl lg:text-5xl font-light tracking-[0.16em] leading-[1.3] text-orange-200">
              совпадает с проектом
            </span>
          </h1>

          <p className="text-white/75 text-sm md:text-base mt-4 md:mt-7 text-center max-w-md">
            Потяните бегунок — сравните нашу визуализацию с готовой реализацией
          </p>

          {/* Mobile compare card */}
          <div
            ref={compareRef}
            className="md:hidden pointer-events-auto relative mt-5 w-screen -mx-4 aspect-[3/4] max-h-[52vh] overflow-hidden shadow-2xl touch-none"
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
            <img
              src={REAL_IMAGE}
              alt="Реализация интерьера"
              className="absolute inset-0 w-full h-full object-cover bg-black"
              draggable={false}
            />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
              <img
                src={RENDER_IMAGE}
                alt="Проект — визуализация"
                className="absolute inset-0 h-full object-cover bg-black max-w-none"
                style={{ width: viewportWidth || "100%" }}
                draggable={false}
              />
            </div>
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white/90"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
                  <path d="M9 7L5 12l4 5M15 7l4 5-4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 text-white text-[10px] tracking-widest uppercase px-3 py-1">
              Проект
            </span>
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 text-white text-[10px] tracking-widest uppercase px-3 py-1">
              Реализация
            </span>
          </div>

          <a
            href="#contact"
            className="pointer-events-auto mt-6 md:mt-8 inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-3.5 text-sm tracking-wide hover:bg-orange-200 transition-colors duration-300"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  )
}
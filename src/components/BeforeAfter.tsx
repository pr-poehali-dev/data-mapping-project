import { useRef, useState, useCallback, useEffect } from "react"
import { HighlightedText } from "./HighlightedText"

const RENDER_IMAGE = "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/files/4383f8c1-cac8-4ab3-b54e-672c9a3f95e4.jpg"
const REAL_IMAGE = "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/files/d843dfad-a0a7-40b2-a8c5-964359f05dcf.jpg"

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [width, setWidth] = useState(0)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
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
      if (draggingRef.current && e.touches[0]) updateFromClientX(e.touches[0].clientX)
    }
    const stop = () => {
      draggingRef.current = false
    }
    const onResize = () => {
      if (containerRef.current) setWidth(containerRef.current.offsetWidth)
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
    <section id="compare" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Проект и реализация</p>
          <h2 className="text-4xl sm:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance">
            Ровно так, как <HighlightedText>задумано</HighlightedText>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Потяните бегунок и сравните нашу визуализацию с готовым результатом. Мы реализуем проект точно по концепции — без сюрпризов.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden select-none rounded-sm"
          onMouseDown={(e) => {
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
            alt="Реализация проекта"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
          <span className="absolute bottom-4 right-4 z-10 bg-black/60 text-white text-xs tracking-widest uppercase px-3 py-1.5">
            Реализация
          </span>

          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${position}%` }}
          >
            <img
              src={RENDER_IMAGE}
              alt="Проект — визуализация"
              className="absolute inset-0 h-full object-cover max-w-none"
              style={{ width: width || "100%" }}
              draggable={false}
            />
            <span className="absolute bottom-4 left-4 z-10 bg-black/60 text-white text-xs tracking-widest uppercase px-3 py-1.5">
              Проект
            </span>
          </div>

          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
                <path d="M9 7L5 12l4 5M15 7l4 5-4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
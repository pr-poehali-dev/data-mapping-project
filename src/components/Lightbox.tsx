import { useEffect, useCallback, useRef } from "react"
import Icon from "./ui/icon"

interface LightboxProps {
  images: string[]
  index: number | null
  onClose: () => void
  onIndexChange: (i: number) => void
}

export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const touchStartX = useRef<number | null>(null)

  const prev = useCallback(() => {
    if (index === null) return
    onIndexChange((index - 1 + images.length) % images.length)
  }, [index, images.length, onIndexChange])

  const next = useCallback(() => {
    if (index === null) return
    onIndexChange((index + 1) % images.length)
  }, [index, images.length, onIndexChange])

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.stopPropagation()
      }
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    document.addEventListener("keydown", onKey, true)
    return () => document.removeEventListener("keydown", onKey, true)
  }, [index, onClose, prev, next])

  if (index === null || !images[index]) return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center animate-in fade-in"
      onClick={onClose}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const dx = e.changedTouches[0].clientX - touchStartX.current
        if (dx > 50) prev()
        else if (dx < -50) next()
        touchStartX.current = null
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white p-2 z-10"
        aria-label="Закрыть"
      >
        <Icon name="X" size={28} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 md:left-6 text-white/70 hover:text-white p-2 md:p-3 z-10"
            aria-label="Предыдущее"
          >
            <Icon name="ChevronLeft" size={36} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 md:right-6 text-white/70 hover:text-white p-2 md:p-3 z-10"
            aria-label="Следующее"
          >
            <Icon name="ChevronRight" size={36} />
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-w-[92vw] max-h-[88vh] object-contain select-none"
      />

      {images.length > 1 && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-wide">
          {index + 1} / {images.length}
        </span>
      )}
    </div>
  )
}

export default Lightbox
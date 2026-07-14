import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Lightbox } from "../components/Lightbox"
import Icon from "../components/ui/icon"
import { portfolioProjects } from "../data/portfolio"

export default function Project() {
  const { id } = useParams()
  const project = portfolioProjects.find((p) => String(p.id) === id)

  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setCurrent(0)
  }, [id])

  if (!project) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-40 pb-32 md:pt-52">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h1 className="text-3xl md:text-4xl font-medium mb-6">Проект не найден</h1>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Icon name="ArrowLeft" size={16} />К портфолио
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image]
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <Icon name="ArrowLeft" size={16} />
            Все проекты
          </Link>

          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">{project.category}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight mb-6 text-balance">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {project.location} · {project.area} · {project.year}
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div
            className="relative aspect-[16/10] overflow-hidden bg-muted cursor-zoom-in group"
            onClick={() => setLightbox(current)}
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return
              const dx = e.changedTouches[0].clientX - touchStartX.current
              if (dx > 50) prev()
              else if (dx < -50) next()
              touchStartX.current = null
            }}
          >
            <img src={images[current]} alt={project.title} className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
            <span className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur rounded-full p-2.5">
              <Icon name="Expand" size={18} />
            </span>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prev()
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/85 backdrop-blur hover:bg-background rounded-full p-2.5 transition-colors"
                  aria-label="Предыдущее фото"
                >
                  <Icon name="ChevronLeft" size={22} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    next()
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/85 backdrop-blur hover:bg-background rounded-full p-2.5 transition-colors"
                  aria-label="Следующее фото"
                >
                  <Icon name="ChevronRight" size={22} />
                </button>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/85 backdrop-blur px-3 py-1 text-xs tracking-wide rounded-full">
                  {current + 1} / {images.length}
                </span>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3 mt-3 md:mt-4">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`aspect-[4/3] overflow-hidden transition-all ${
                    i === current ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Фото ${i + 1}`}
                >
                  <img src={src} alt={`${project.title} — фото ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-5">О проекте</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>

              <p className="text-muted-foreground text-xs uppercase tracking-wide mt-10 mb-3">Состав работ</p>
              <div className="flex flex-wrap gap-2">
                {project.scope.map((s) => (
                  <span key={s} className="border border-border px-3 py-1.5 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12 space-y-6 h-fit">
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Локация</p>
                <p className="font-medium text-lg">{project.location}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Площадь</p>
                <p className="font-medium text-lg">{project.area}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Сроки</p>
                <p className="font-medium text-lg">{project.duration}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Год</p>
                <p className="font-medium text-lg">{project.year}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Lightbox images={images} index={lightbox} onClose={() => setLightbox(null)} onIndexChange={setLightbox} />
    </main>
  )
}

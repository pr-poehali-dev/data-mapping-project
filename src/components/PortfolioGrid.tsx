import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog"
import { Lightbox } from "./Lightbox"
import Icon from "./ui/icon"
import { PortfolioProject } from "../data/portfolio"

export function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  const [active, setActive] = useState<PortfolioProject | null>(null)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const images = active
    ? active.gallery && active.gallery.length > 0
      ? active.gallery
      : [active.image]
    : []

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            onClick={() => setActive(project)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              <span className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 text-xs tracking-wide">
                {project.category}
              </span>
              <span className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-background/90 backdrop-blur px-3 py-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Подробнее
                <Icon name="ArrowUpRight" size={13} />
              </span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium mb-1 group-hover:underline underline-offset-4">{project.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {project.location} · {project.area}
                </p>
              </div>
              <span className="text-muted-foreground/60 text-sm">{project.year}</span>
            </div>
          </article>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden gap-0 max-h-[90vh] overflow-y-auto">
          {active && (
            <>
              <div
                className="relative aspect-[16/9] overflow-hidden cursor-zoom-in group/main"
                onClick={() => setLightbox(images.indexOf(active.image) >= 0 ? images.indexOf(active.image) : 0)}
              >
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover/main:bg-foreground/20 transition-colors">
                  <span className="opacity-0 group-hover/main:opacity-100 transition-opacity bg-background/90 backdrop-blur rounded-full p-2.5">
                    <Icon name="Expand" size={18} />
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-3">{active.category}</p>
                <DialogTitle className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
                  {active.title}
                </DialogTitle>
                <p className="text-muted-foreground leading-relaxed mb-8">{active.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 border-y border-border py-6">
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Локация</p>
                    <p className="font-medium">{active.location}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Площадь</p>
                    <p className="font-medium">{active.area}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Сроки</p>
                    <p className="font-medium">{active.duration}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Год</p>
                    <p className="font-medium">{active.year}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-3">Состав работ</p>
                <div className="flex flex-wrap gap-2">
                  {active.scope.map((s) => (
                    <span key={s} className="border border-border px-3 py-1.5 text-sm">
                      {s}
                    </span>
                  ))}
                </div>

                {active.gallery && active.gallery.length > 1 && (
                  <>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide mt-8 mb-3">Галерея</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {active.gallery.map((src, i) => (
                        <div
                          key={i}
                          className="aspect-[4/3] overflow-hidden cursor-zoom-in"
                          onClick={() => setLightbox(images.indexOf(src) >= 0 ? images.indexOf(src) : i)}
                        >
                          <img
                            src={src}
                            alt={`${active.title} — фото ${i + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Lightbox
        images={images}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={setLightbox}
      />
    </>
  )
}
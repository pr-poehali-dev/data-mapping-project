import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { portfolioProjects, PortfolioType } from "../data/portfolio"

const DIRECTIONS: { type: PortfolioType; label: string }[] = [
  { type: "architecture", label: "Архитектура" },
  { type: "interior", label: "Интерьеры" },
  { type: "landscape", label: "Ландшафт" },
]

export function PortfolioTeaser() {
  const featured = DIRECTIONS.map((dir) => ({
    dir,
    project: portfolioProjects.find((p) => p.type === dir.type),
  })).filter((i) => Boolean(i.project))

  return (
    <section id="portfolio" className="py-24 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Портфолио</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
              По проекту из каждого направления
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md">
              Архитектура, интерьеры и ландшафт — три направления в одном бюро.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 self-start rounded-full border border-foreground/30 px-6 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors duration-300 group"
          >
            Всё портфолио
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {featured.map(({ dir, project }) => (
            <Link
              key={dir.type}
              to={`/portfolio/${project!.id}`}
              className="group relative overflow-hidden aspect-[3/4] rounded-lg"
            >
              <img loading="lazy"
                src={project!.image}
                alt={project!.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45" />

              <span className="absolute top-5 left-5 rounded-full bg-black/60 backdrop-blur px-4 py-1.5 text-[11px] tracking-[0.2em] uppercase text-white">
                {dir.label}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-white text-xl md:text-2xl font-medium leading-snug mb-1.5">
                  {project!.title}
                </h3>
                <p className="text-white/70 text-sm mb-5">
                  {project!.location} · {project!.area}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-white border-b border-white/40 pb-1 transition-colors group-hover:border-orange-200 group-hover:text-orange-200">
                  Смотреть проект
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
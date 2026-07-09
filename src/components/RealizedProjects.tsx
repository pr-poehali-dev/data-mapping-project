import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { PortfolioGrid } from "./PortfolioGrid"
import { portfolioProjects, portfolioFilters, PortfolioType } from "../data/portfolio"

export function RealizedProjects() {
  const directions = portfolioFilters.filter((f) => f.id !== "all") as {
    id: PortfolioType
    label: string
  }[]

  return (
    <section id="portfolio" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Портфолио</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Реализованные проекты</h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Все проекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="space-y-20">
          {directions.map((dir) => {
            const items = portfolioProjects.filter((p) => p.type === dir.id).slice(0, 3)
            return (
              <div key={dir.id}>
                <div className="flex items-center justify-between gap-4 mb-8">
                  <h3 className="text-2xl font-medium">{dir.label}</h3>
                  <Link
                    to={`/portfolio?type=${dir.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                  >
                    Смотреть все →
                  </Link>
                </div>
                <PortfolioGrid projects={items} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

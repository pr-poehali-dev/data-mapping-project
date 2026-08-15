import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { PortfolioGrid } from "./PortfolioGrid"
import { portfolioProjects, PortfolioType } from "../data/portfolio"

const DIRECTIONS: PortfolioType[] = ["architecture", "interior", "landscape"]

export function PortfolioTeaser() {
  const featured = DIRECTIONS.map((type) => portfolioProjects.find((p) => p.type === type)).filter(
    (p): p is (typeof portfolioProjects)[number] => Boolean(p),
  )

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

        <PortfolioGrid projects={featured} />
      </div>
    </section>
  )
}
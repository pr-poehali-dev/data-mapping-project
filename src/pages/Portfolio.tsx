import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PortfolioGrid } from "../components/PortfolioGrid"
import { HighlightedText } from "../components/HighlightedText"
import { portfolioFilters, portfolioProjects, PortfolioType } from "../data/portfolio"

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initial = (searchParams.get("type") as PortfolioType | "all") || "all"
  const [activeFilter, setActiveFilter] = useState<PortfolioType | "all">(initial)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const setFilter = (id: PortfolioType | "all") => {
    setActiveFilter(id)
    if (id === "all") setSearchParams({})
    else setSearchParams({ type: id })
  }

  const filtered = portfolioProjects.filter((p) => activeFilter === "all" || p.type === activeFilter)

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Портфолио</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight mb-8 text-balance">
            Реализованные <HighlightedText>проекты</HighlightedText>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Работы по трём направлениям — архитектура, интерьеры и ландшафт. Нажмите на проект, чтобы узнать детали.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-3 mb-12">
            {portfolioFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setFilter(filter.id)}
                className={`px-5 py-2.5 text-sm tracking-wide transition-all duration-300 border ${
                  activeFilter === filter.id
                    ? "bg-foreground text-primary-foreground border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <PortfolioGrid projects={filtered} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

type ProjectType = "architecture" | "interior" | "landscape"

const filters: { id: ProjectType | "all"; label: string }[] = [
  { id: "all", label: "Все проекты" },
  { id: "architecture", label: "Архитектура" },
  { id: "interior", label: "Интерьеры" },
  { id: "landscape", label: "Ландшафт" },
]

const projects: {
  id: number
  title: string
  category: string
  type: ProjectType
  location: string
  year: string
  image: string
}[] = [
  {
    id: 1,
    title: "Резиденция в сосновом лесу",
    category: "Архитектура дома",
    type: "architecture",
    location: "Подмосковье",
    year: "2024",
    image: "/images/hously-1.png",
  },
  {
    id: 2,
    title: "Интерьер загородного дома",
    category: "Дизайн интерьера",
    type: "interior",
    location: "Рублёвское шоссе",
    year: "2024",
    image: "/images/hously-2.png",
  },
  {
    id: 3,
    title: "Вилла у моря",
    category: "Архитектура дома",
    type: "architecture",
    location: "Сочи",
    year: "2023",
    image: "/images/hously-3.png",
  },
  {
    id: 4,
    title: "Сад и терраса",
    category: "Ландшафтный дизайн",
    type: "landscape",
    location: "Новая Рига",
    year: "2023",
    image: "/images/hously-4.png",
  },
  {
    id: 5,
    title: "Интерьер кухни-гостиной",
    category: "Дизайн интерьера",
    type: "interior",
    location: "Барвиха",
    year: "2024",
    image: "/images/desk.png",
  },
  {
    id: 6,
    title: "Ландшафт загородной усадьбы",
    category: "Ландшафтный дизайн",
    type: "landscape",
    location: "Истра",
    year: "2023",
    image: "/images/exterior.png",
  },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const filteredProjects = projects.filter((p) => activeFilter === "all" || p.type === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(filteredProjects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [filteredProjects])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Избранные работы</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши проекты</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все проекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
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

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

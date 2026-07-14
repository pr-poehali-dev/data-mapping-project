import { Link } from "react-router-dom"
import Icon from "./ui/icon"
import { PortfolioProject } from "../data/portfolio"

export function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project) => (
        <Link key={project.id} to={`/portfolio/${project.id}`} className="group cursor-pointer">
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
            {project.gallery && project.gallery.length > 1 && (
              <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-background/90 backdrop-blur px-2.5 py-1 text-xs tracking-wide">
                <Icon name="Images" size={13} />
                {project.gallery.length}
              </span>
            )}
            <span className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-background/90 backdrop-blur px-3 py-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Смотреть проект
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
        </Link>
      ))}
    </div>
  )
}

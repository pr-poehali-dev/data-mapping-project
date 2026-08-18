import { pricingSections } from "@/data/pricing"
import { portfolioProjects } from "@/data/portfolio"
import Icon from "./ui/icon"

export function SectionPricing({ id }: { id: "architecture" | "landscape" }) {
  const section = pricingSections.find((s) => s.id === id)
  if (!section) return null

  const cover = portfolioProjects.find((p) => p.type === id)?.image

  return (
    <div>
      <div className="max-w-3xl mb-12">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">{section.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">{section.heading}</h2>
        <p className="text-muted-foreground leading-relaxed">{section.intro}</p>
      </div>

      <div className="border border-border bg-background max-w-3xl">
        <div className="relative aspect-[16/7] overflow-hidden">
          {cover && <img src={cover} alt={section.title} className="absolute inset-0 w-full h-full object-cover" />}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="relative h-full p-8 flex flex-col justify-end text-background">
            <Icon name={section.icon} size={28} className="mb-3" fallback="Home" />
            <h3 className="text-xl font-medium mb-1">{section.title}</h3>
            <p className="text-sm text-background/80">
              от {section.pricePerM2.toLocaleString("ru-RU")} ₽/м²
            </p>
          </div>
        </div>
        <div className="p-8 flex flex-col gap-4">
          {section.items.map((item) => (
            <div
              key={item.name}
              className="flex justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <span className="text-sm md:text-base text-muted-foreground leading-snug flex-1">{item.name}</span>
              <span className="text-sm md:text-base font-medium whitespace-nowrap">{item.price}</span>
            </div>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 border border-foreground px-6 py-3.5 text-sm tracking-wide transition-colors duration-300 hover:bg-foreground hover:text-background group"
          >
            Оставить заявку
            <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mt-6 max-w-3xl">{section.note}</p>
    </div>
  )
}

export default SectionPricing
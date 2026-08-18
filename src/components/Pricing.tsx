import { useState } from "react"
import { HighlightedText } from "./HighlightedText"
import { InteriorPricing } from "./InteriorPricing"
import { pricingSections } from "@/data/pricing"
import { portfolioProjects } from "@/data/portfolio"
import Icon from "./ui/icon"

const sectionCovers: Record<string, string | undefined> = {
  architecture: portfolioProjects.find((p) => p.type === "architecture")?.image,
  landscape: portfolioProjects.find((p) => p.type === "landscape")?.image,
}

const serviceOptions = [
  { id: "architecture", label: "Архитектура дома", pricePerUnit: 1000, unit: "area" as const },
  { id: "interior", label: "Дизайн интерьера", pricePerUnit: 5000, unit: "area" as const },
  { id: "landscape", label: "Ландшафтный дизайн", pricePerUnit: 30000, unit: "plot" as const },
]

export function Pricing() {
  const [area, setArea] = useState(150)
  const [plot, setPlot] = useState(10)
  const [selectedServices, setSelectedServices] = useState<string[]>(["architecture"])

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const servicePrice = (s: (typeof serviceOptions)[number]) =>
    s.unit === "plot" ? s.pricePerUnit * plot : s.pricePerUnit * area

  const totalPrice = serviceOptions
    .filter((s) => selectedServices.includes(s.id))
    .reduce((sum, s) => sum + servicePrice(s), 0)

  const landscapeSelected = selectedServices.includes("landscape")

  const formatPrice = (price: number) =>
    price.toLocaleString("ru-RU") + " ₽"

  return (
    <section id="pricing" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Стоимость</p>
          <h2 className="text-4xl sm:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Прайс</HighlightedText> и
            <br />
            калькулятор
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Прозрачные цены без скрытых платежей. Рассчитайте ориентировочную стоимость вашего проекта прямо здесь.
          </p>
        </div>

        {/* Interior design tiers */}
        <div className="mb-24">
          <InteriorPricing />
        </div>

        {/* Other directions */}
        <div className="max-w-3xl mb-12">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Другие направления</p>
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight">Архитектура и ландшафт</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {pricingSections.map((section) => (
            <div key={section.id} className="border border-border flex flex-col">
              <div className="relative aspect-[16/7] overflow-hidden">
                {sectionCovers[section.id] && (
                  <img
                    src={sectionCovers[section.id]}
                    alt={section.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                <div className="relative h-full p-8 flex flex-col justify-end text-background">
                  <Icon name={section.icon} size={28} className="mb-3" fallback="Home" />
                  <h3 className="text-xl font-medium mb-1">{section.title}</h3>
                  <p className="text-sm text-background/80">от {formatPrice(section.pricePerM2)}/{section.unit}</p>
                </div>
              </div>
              <div className="p-8 flex flex-col gap-4 flex-1">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-muted-foreground leading-snug flex-1">{item.name}</span>
                    <span className="text-sm font-medium whitespace-nowrap">{item.price}</span>
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
          ))}
        </div>

        {/* Calculator */}
        <div className="bg-card text-foreground p-6 sm:p-10 md:p-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-foreground/60 text-sm tracking-[0.3em] uppercase mb-4">Калькулятор</p>
            <h3 className="text-3xl md:text-4xl font-medium mb-12 tracking-tight">Рассчитайте стоимость проекта</h3>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: controls */}
              <div className="space-y-10">
                {/* Area slider */}
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <label className="text-sm tracking-wide text-foreground/70">Площадь</label>
                    <span className="text-2xl font-medium">{area} м²</span>
                  </div>
                  <input
                    type="range"
                    min={30}
                    max={1000}
                    step={10}
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full accent-orange-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-foreground/40 mt-2">
                    <span>30 м²</span>
                    <span>1 000 м²</span>
                  </div>
                </div>

                {landscapeSelected && (
                  <div>
                    <div className="flex justify-between items-baseline mb-4">
                      <label className="text-sm tracking-wide text-foreground/70">Площадь участка</label>
                      <span className="text-2xl font-medium">{plot} сот.</span>
                    </div>
                    <input
                      type="range"
                      min={4}
                      max={100}
                      step={1}
                      value={plot}
                      onChange={(e) => setPlot(Number(e.target.value))}
                      className="w-full accent-orange-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-foreground/40 mt-2">
                      <span>4 сот.</span>
                      <span>100 сот.</span>
                    </div>
                  </div>
                )}

                {/* Service toggles */}
                <div>
                  <p className="text-sm tracking-wide text-foreground/70 mb-4">Услуги</p>
                  <div className="flex flex-col gap-3">
                    {serviceOptions.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => toggleService(s.id)}
                        className={`flex items-center justify-between gap-3 px-5 py-4 border transition-all duration-200 text-left ${
                          selectedServices.includes(s.id)
                            ? "border-orange-400 bg-orange-400/10"
                            : "border-foreground/20 hover:border-foreground/40"
                        }`}
                      >
                        <span className="text-sm">{s.label}</span>
                        <span className="text-xs text-foreground/50 whitespace-nowrap">
                          {formatPrice(servicePrice(s))}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: result */}
              <div className="flex flex-col justify-between md:border-l border-foreground/10 md:pl-12 pt-10 border-t md:border-t-0 md:pt-0">
                <div>
                  <p className="text-sm text-foreground/60 mb-2">Итоговая стоимость</p>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-2 break-words">
                    {selectedServices.length === 0 ? (
                      <span className="text-foreground/30 text-2xl sm:text-3xl">Выберите услуги</span>
                    ) : (
                      formatPrice(totalPrice)
                    )}
                  </div>
                  {selectedServices.length > 0 && (
                    <p className="text-foreground/40 text-sm">
                      ориентировочно · {area} м²{landscapeSelected ? ` · участок ${plot} сот.` : ""}
                    </p>
                  )}
                </div>

                <div className="mt-10 space-y-4">
                  <p className="text-foreground/50 text-sm leading-relaxed">
                    Точная стоимость зависит от сложности проекта. Свяжитесь с нами — проведём бесплатную консультацию.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-sm tracking-wide hover:bg-foreground/90 transition-colors duration-300 group"
                  >
                    Получить точный расчёт
                    <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
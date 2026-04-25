import { useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "./ui/icon"

const pricingSections = [
  {
    id: "architecture",
    title: "Архитектура частных домов",
    icon: "Home",
    color: "bg-stone-100",
    pricePerM2: 800,
    items: [
      { name: "Эскизный проект (концепция, планировки, фасады)", price: "от 800 ₽/м²" },
      { name: "Рабочая документация (полный комплект чертежей)", price: "от 600 ₽/м²" },
      { name: "Авторский надзор за строительством", price: "от 15 000 ₽/выезд" },
      { name: "Визуализация 3D (до 5 видов)", price: "от 30 000 ₽" },
    ],
  },
  {
    id: "interior",
    title: "Дизайн интерьеров",
    icon: "Armchair",
    color: "bg-amber-50",
    pricePerM2: 1500,
    items: [
      { name: "Концепция интерьера (стиль, колористика, зонирование)", price: "от 500 ₽/м²" },
      { name: "Полный дизайн-проект (чертежи + спецификации)", price: "от 1 500 ₽/м²" },
      { name: "Подбор мебели, материалов и декора", price: "от 300 ₽/м²" },
      { name: "Авторский надзор за отделкой", price: "от 10 000 ₽/выезд" },
    ],
  },
  {
    id: "landscape",
    title: "Ландшафтный дизайн",
    icon: "Trees",
    color: "bg-green-50",
    pricePerM2: 300,
    items: [
      { name: "Концепция участка (зонирование, стиль)", price: "от 150 ₽/м²" },
      { name: "Полный ландшафтный проект", price: "от 300 ₽/м²" },
      { name: "Дендроплан и ассортиментная ведомость растений", price: "от 100 ₽/м²" },
      { name: "Авторский надзор за посадками", price: "от 8 000 ₽/выезд" },
    ],
  },
]

const serviceOptions = [
  { id: "architecture", label: "Архитектура дома", pricePerM2: 800 },
  { id: "interior", label: "Дизайн интерьера", pricePerM2: 1500 },
  { id: "landscape", label: "Ландшафтный дизайн", pricePerM2: 300 },
]

export function Pricing() {
  const [area, setArea] = useState(150)
  const [selectedServices, setSelectedServices] = useState<string[]>(["architecture"])

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const totalPrice = serviceOptions
    .filter((s) => selectedServices.includes(s.id))
    .reduce((sum, s) => sum + s.pricePerM2 * area, 0)

  const formatPrice = (price: number) =>
    price.toLocaleString("ru-RU") + " ₽"

  return (
    <section id="pricing" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Стоимость</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Прайс</HighlightedText> и
            <br />
            калькулятор
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Прозрачные цены без скрытых платежей. Рассчитайте ориентировочную стоимость вашего проекта прямо здесь.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {pricingSections.map((section) => (
            <div key={section.id} className="border border-border flex flex-col">
              <div className={`${section.color} p-8`}>
                <Icon name={section.icon as "Home" | "Armchair" | "Trees"} size={32} className="mb-4 text-foreground" />
                <h3 className="text-xl font-medium mb-1">{section.title}</h3>
                <p className="text-muted-foreground text-sm">от {formatPrice(section.pricePerM2)}/м²</p>
              </div>
              <div className="p-8 flex flex-col gap-4 flex-1">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-muted-foreground leading-snug flex-1">{item.name}</span>
                    <span className="text-sm font-medium whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Calculator */}
        <div className="bg-foreground text-primary-foreground p-10 md:p-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-4">Калькулятор</p>
            <h3 className="text-3xl md:text-4xl font-medium mb-12 tracking-tight">Рассчитайте стоимость проекта</h3>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: controls */}
              <div className="space-y-10">
                {/* Area slider */}
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <label className="text-sm tracking-wide text-primary-foreground/70">Площадь</label>
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
                  <div className="flex justify-between text-xs text-primary-foreground/40 mt-2">
                    <span>30 м²</span>
                    <span>1 000 м²</span>
                  </div>
                </div>

                {/* Service toggles */}
                <div>
                  <p className="text-sm tracking-wide text-primary-foreground/70 mb-4">Услуги</p>
                  <div className="flex flex-col gap-3">
                    {serviceOptions.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => toggleService(s.id)}
                        className={`flex items-center justify-between px-5 py-4 border transition-all duration-200 text-left ${
                          selectedServices.includes(s.id)
                            ? "border-orange-400 bg-orange-400/10"
                            : "border-primary-foreground/20 hover:border-primary-foreground/40"
                        }`}
                      >
                        <span className="text-sm">{s.label}</span>
                        <span className="text-xs text-primary-foreground/50">
                          {formatPrice(s.pricePerM2 * area)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: result */}
              <div className="flex flex-col justify-between border-l border-primary-foreground/10 pl-12">
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-2">Итоговая стоимость</p>
                  <div className="text-5xl md:text-6xl font-medium tracking-tight mb-2">
                    {selectedServices.length === 0 ? (
                      <span className="text-primary-foreground/30 text-3xl">Выберите услуги</span>
                    ) : (
                      formatPrice(totalPrice)
                    )}
                  </div>
                  {selectedServices.length > 0 && (
                    <p className="text-primary-foreground/40 text-sm">
                      ориентировочно · {area} м²
                    </p>
                  )}
                </div>

                <div className="mt-10 space-y-4">
                  <p className="text-primary-foreground/50 text-sm leading-relaxed">
                    Точная стоимость зависит от сложности проекта. Свяжитесь с нами — проведём бесплатную консультацию.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 bg-primary-foreground text-foreground px-7 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group"
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

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

const interiorTiers = [
  {
    id: "standard",
    tag: "Вариант 1",
    title: "Полный дизайн-проект «Стандарт»",
    subtitle:
      "Идеальный выбор для тех, кто хочет получить готовое, продуманное до мелочей решение и передать его строителям без лишних вопросов.",
    price: "4 990 ₽",
    priceUnit: "/ м²",
    image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/d7e6e2bb-e104-4466-82ca-7c2b03bef75e.jpg",
    features: [
      "Полноценный альбом проекта в удобном формате",
      "Планировочные решения: несколько вариантов расстановки мебели",
      "Фотореалистичная 3D-визуализация всех ключевых помещений",
      "Полный комплект рабочих чертежей для строителей",
      "Ведомость отделочных материалов и мебели для точного расчёта сметы",
    ],
    forWhom: "Для тех, кто ценит своё время и хочет гарантий, что результат на 100% совпадёт с картинкой.",
    duration: "от 3–5 мес.",
    featured: true,
  },
  {
    id: "optima",
    tag: "Вариант 2",
    title: "Технический проект «Оптима»",
    subtitle: "Фундамент грамотного ремонта. Максимум пользы при разумном бюджете. Без 3D-визуализации, но с полной технической ясностью.",
    price: "2 500 ₽",
    priceUnit: "/ м²",
    image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/b0379a8c-67a2-4ca2-968c-31d316cb2fc6.jpg",
    features: [
      "Итоговое планировочное решение с расстановкой мебели и эргономикой",
      "План освещения и выключателей со сценариями включения",
      "План розеток и выводов инженерных сетей",
      "Экспликация помещений (точные площади комнат)",
      "Спецификация черновых и чистовых материалов",
      "Рекомендации по отделке (референсы, подбор аналогов)",
    ],
    forWhom: "Для тех, кто имеет своё видение стиля, хочет сэкономить на этапе проектирования, но нуждается в грамотной технической базе.",
    duration: "от 1–2 мес.",
    featured: false,
  },
  {
    id: "sprint",
    tag: "Вариант 3",
    title: "Интерактивный проект «Спринт»",
    subtitle: "Инновационный подход к дизайну. Мы сокращаем бюрократические этапы, чтобы вы могли начать ремонт максимально быстро.",
    price: "1 900 ₽",
    priceUnit: "/ м² в месяц",
    image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/72a2f549-5456-4c8c-a45b-fc74f062c37b.jpg",
    features: [
      "Ускоренный процесс: самая важная информация для старта работ без ожидания",
      "Прозрачная оплата по подписке: аванс в начале и платёж в конце месяца",
      "Полная свобода: пауза в любом месяце или остановка проекта в любой момент",
    ],
    forWhom: "Для динамичных людей, которым нужен быстрый старт, или для тех, кто делает ремонт поэтапно.",
    duration: "оплата по подписке",
    featured: false,
  },
]

const supervisionOptions = [
  {
    id: "offline",
    title: "Офлайн авторский надзор",
    subtitle: "Максимальный контроль",
    price: "50 000 ₽",
    priceUnit: "/ месяц",
    features: [
      "Регулярные выезды на объект (4–6 раз в месяц)",
      "Входной контроль соответствия работ проекту",
      "Оперативная корректировка документации на месте",
      "Контроль образцов материалов, мебели и света",
      "Коммуникация с прорабом без вашего участия",
      "Прозрачная отчётность: фото- и видеоотчёт после каждого выезда",
      "Помощь в приёмке скрытых и ключевых этапов работ",
    ],
    note: "Идеально для тех, кто ценит своё время и хочет быть уверенным, что строители не отходят от проекта ни на шаг.",
  },
  {
    id: "online",
    title: "Онлайн авторский надзор",
    subtitle: "Эффективная дистанционная поддержка",
    price: "25 000 ₽",
    priceUnit: "/ месяц",
    features: [
      "Постоянная связь: оперативные консультации в мессенджерах",
      "Удалённый контроль по фото- и видеоотчётам с объекта",
      "Дистанционная корректировка проекта по обратной связи",
      "Координация поставок материалов, мебели и декора",
      "Организация онлайн-связи с подрядчиками и поставщиками",
      "Экспертная оценка и подбор материалов-аналогов",
    ],
    note: "Оптимальный формат для заказчиков, которые сами часто бывают на объекте, но хотят «подушку безопасности» в виде мнения дизайнера.",
  },
]

const serviceOptions = [
  { id: "architecture", label: "Архитектура дома", pricePerM2: 800 },
  { id: "interior", label: "Дизайн интерьера", pricePerM2: 5000 },
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

        {/* Interior design tiers */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Дизайн интерьеров</p>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Создаём пространство, в котором хочется жить</h3>
            <p className="text-muted-foreground leading-relaxed">
              Три гибких формата сотрудничества: от полного погружения в проект до динамичного интерактивного сопровождения. Выберите тот, который подходит именно вам.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {interiorTiers.map((tier) => (
              <div
                key={tier.id}
                className={`border flex flex-col ${
                  tier.featured ? "border-foreground" : "border-border"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={tier.image} alt={tier.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 text-xs tracking-wide">
                    {tier.tag}
                  </span>
                  {tier.featured && (
                    <span className="absolute top-4 right-4 bg-foreground text-primary-foreground px-3 py-1 text-xs tracking-wide">
                      Популярный
                    </span>
                  )}
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h4 className="text-xl font-medium mb-3 leading-snug">{tier.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{tier.subtitle}</p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-medium">{tier.price}</span>
                    <span className="text-muted-foreground text-sm">{tier.priceUnit}</span>
                  </div>

                  <div className="flex flex-col gap-3 mb-6">
                    {tier.features.map((f) => (
                      <div key={f} className="flex gap-2.5">
                        <Icon name="Check" size={16} className="text-foreground shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-border space-y-3">
                    <p className="text-sm leading-snug">
                      <span className="font-medium">Для кого: </span>
                      <span className="text-muted-foreground">{tier.forWhom}</span>
                    </p>
                    <p className="text-sm flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={15} />
                      Сроки: {tier.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supervision add-ons */}
          <div className="mt-14">
            <div className="max-w-3xl mb-8">
              <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Дополнительные услуги</p>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">Авторский надзор</h3>
              <p className="text-muted-foreground leading-relaxed">
                Любой из трёх типов проекта можно в любой момент дополнить сопровождением. Наличие авторского надзора экономит до 15% бюджета ремонта за счёт предотвращения ошибок и переделок.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {supervisionOptions.map((opt) => (
                <div key={opt.id} className="border border-border p-7 flex flex-col">
                  <p className="text-muted-foreground text-sm mb-1">{opt.subtitle}</p>
                  <h4 className="text-xl font-medium mb-4">{opt.title}</h4>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-medium">{opt.price}</span>
                    <span className="text-muted-foreground text-sm">{opt.priceUnit}</span>
                  </div>
                  <div className="flex flex-col gap-3 mb-6">
                    {opt.features.map((f) => (
                      <div key={f} className="flex gap-2.5">
                        <Icon name="Check" size={16} className="text-foreground shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-auto pt-6 border-t border-border">
                    {opt.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other directions */}
        <div className="max-w-3xl mb-12">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Другие направления</p>
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight">Архитектура и ландшафт</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {pricingSections.map((section) => (
            <div key={section.id} className="border border-border flex flex-col">
              <div className={`${section.color} p-8`}>
                <Icon name={section.icon as "Home" | "Trees"} size={32} className="mb-4 text-foreground" />
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

import { useEffect, useRef, useState } from "react"
import { Home, Building, Armchair, Trees } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Архитектура частных домов",
    description: "Проектируем частные дома под ключ: от эскизной концепции и рабочей документации до авторского надзора за строительством.",
    icon: Home,
  },
  {
    title: "Дизайн интерьеров",
    description:
      "Создаём интерьеры, которые отражают ваш характер. Разрабатываем дизайн-проект с подбором материалов, мебели и авторским надзором.",
    icon: Armchair,
  },
  {
    title: "Ландшафтный дизайн",
    description:
      "Проектируем сады, террасы и участки: зонирование, растения, дорожки, освещение и малые архитектурные формы в едином стиле.",
    icon: Trees,
  },
  {
    title: "Проект под ключ",
    description:
      "Берём на себя все этапы — от идеи до сдачи. Архитектура, интерьер и ландшафт в едином ансамбле без лишних согласований с вашей стороны.",
    icon: Building,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Услуги</HighlightedText>, которые
            <br />
            меняют жизнь
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Мы занимаемся тремя направлениями — и объединяем их в один целостный проект, если вам нужно всё сразу.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
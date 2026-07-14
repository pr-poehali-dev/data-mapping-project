import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Всё под ключ",
    description:
      "От первого эскиза до сдачи объекта — мы ведём проект целиком. Вы не тратите время на координацию: один подрядчик, один результат.",
  },
  {
    title: "Функция и красота",
    description:
      "Красивый дом — это не только визуал. Мы проектируем пространства, где удобно жить: правильный свет, логичные планировки, долговечные материалы.",
  },
  {
    title: "Персональный подход",
    description:
      "Каждый проект — уникален. Мы вникаем в ваш образ жизни, ваши привычки и пожелания, прежде чем начать проектирование.",
  },
  {
    title: "Прозрачность процесса",
    description: "Фиксированные сроки, чёткое техническое задание и регулярная отчётность. Вы всегда знаете, на каком этапе находится ваш проект.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
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
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наша философия</p>
            <h2 className="text-4xl sm:text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Проекты с
              <br />
              <HighlightedText>душой</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/236ac188-0220-4c55-907a-9a552627254e.jpg"
                alt="Архитектор с проектами"
                className="opacity-90 relative z-10 w-auto"
              />
            </div>
          </div>

          {/* Right column - Description and Philosophy items */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Архитектурное бюро «ДОМ ПРОЕКТОВ» — это команда, которая создаёт дома, интерьеры и сады, в которых хочется жить. Мы работаем под ключ: от концепции до финальной отделки.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
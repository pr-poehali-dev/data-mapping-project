import { useState } from "react"
import { Plus, ArrowRight } from "lucide-react"

const faqs: { question: string; answer: string; cta?: boolean }[] = [
  {
    question: "Будет ли дополнительная скидка, если заказать два проекта по разным направлениям?",
    answer:
      "Да. Мы индивидуально идём навстречу и всегда готовы договориться о дополнительной скидке за объём работ.",
  },
  {
    question: "Сколько стоит разработка проекта?",
    answer:
      "Стоимость зависит от площади, сложности и набора услуг. Архитектурный проект частного дома — от 1 000 ₽/м², дизайн интерьера — от 3 500 ₽/м², ландшафтный дизайн — от 15 000 ₽/сотка. Точную стоимость назовём после первичной консультации.",
  },
  {
    question: "Сколько времени занимает проектирование?",
    answer:
      "Эскизная концепция — 2–4 недели. Полный проект дома — 2–4 месяца. Дизайн интерьера — 1–3 месяца. Сроки зависят от площади и сложности. Фиксируем их в договоре и соблюдаем.",
  },
  {
    question: "Можно ли заказать только один вид услуг?",
    answer:
      "Да, мы работаем как с комплексными проектами, так и с отдельными направлениями. Можно заказать только ландшафтный дизайн или только интерьер — без архитектуры. Мы гибко подстраиваемся под ваш запрос.",
  },
  {
    question: "В каких регионах вы работаете?",
    answer:
      "Основная география — Екатеринбург и Свердловская область. Также реализуем проекты в других регионах России и за рубежом. Выезд на объект, авторский надзор и коммуникация — всё организуем удалённо или с командировками.",
  },
  {
    question: "Как заказать проект?",
    answer:
      "Напишите нам или позвоните — проведём бесплатную консультацию или назначим встречу в офисе либо на объекте, чтобы обсудить задачу. После этого подготовим предложение.",
    cta: true,
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-4xl sm:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-3 sm:gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-0 sm:pr-12">{faq.answer}</p>
                {faq.cta && (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-wide hover:bg-foreground/90 transition-colors duration-300 group mb-8"
                  >
                    Оставить заявку
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
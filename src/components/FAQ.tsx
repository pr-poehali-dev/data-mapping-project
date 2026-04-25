import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Что входит в проект «под ключ»?",
    answer:
      "Полный цикл: архитектурная концепция, рабочая документация, дизайн интерьера, ландшафтный проект и авторский надзор на всех этапах строительства и отделки. Вы общаетесь с одной командой — мы берём на себя всё остальное.",
  },
  {
    question: "Сколько стоит разработка проекта?",
    answer:
      "Стоимость зависит от площади, сложности и набора услуг. Архитектурный проект частного дома — от 800 ₽/м², дизайн интерьера — от 1 500 ₽/м², ландшафтный дизайн — от 300 ₽/м². Точную стоимость назовём после первичной консультации.",
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
      "Основная география — Москва и Подмосковье. Также реализуем проекты в других регионах России и за рубежом. Выезд на объект, авторский надзор и коммуникация — всё организуем удалённо или с командировками.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Напишите или позвоните нам — проведём бесплатную консультацию, обсудим задачу, участок и бюджет. После этого подготовим техническое задание и коммерческое предложение.",
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
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
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
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
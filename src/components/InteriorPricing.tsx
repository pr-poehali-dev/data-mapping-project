import Icon from "./ui/icon"

const interiorTiers = [
  {
    id: "standard",
    tag: "Вариант 1",
    title: "Полный дизайн-проект «Стандарт»",
    subtitle:
      "Идеальный выбор для тех, кто хочет получить готовое, продуманное до мелочей решение и передать его строителям без лишних вопросов.",
    price: "5 990 ₽",
    priceUnit: "/ м²",
    features: [
      "Полноценный альбом проекта в удобном формате",
      "Планировочные решения: несколько вариантов расстановки мебели",
      "Фотореалистичная 3D-визуализация всех ключевых помещений",
      "Полный комплект рабочих чертежей для строителей",
      "Ведомость отделочных материалов и мебели для точного расчёта сметы",
      "Смета на материалы с актуальными ценами поставщиков",
      "Расчёт стоимости строительных работ нашей бригадой",
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
    price: "1 600 ₽",
    priceUnit: "/ м² в месяц",
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

export function InteriorPricing() {
  return (
    <div>
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
            className={`border bg-background flex flex-col ${tier.featured ? "border-foreground" : "border-border"}`}
          >
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs tracking-wide text-muted-foreground border border-border px-2.5 py-1">
                  {tier.tag}
                </span>
                {tier.featured && (
                  <span className="text-xs tracking-wide bg-foreground text-background px-2.5 py-1">Популярный</span>
                )}
              </div>
              <h4 className="text-xl font-medium mb-3 leading-snug hyphens-auto" lang="ru">{tier.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 hyphens-auto" lang="ru">{tier.subtitle}</p>

              <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1 mb-6">
                <span className="text-3xl font-medium">{tier.price}<span className="align-super text-base">*</span></span>
                <span className="text-muted-foreground text-sm">{tier.priceUnit}</span>
              </div>

              <div className="flex flex-col gap-3 mb-6">
                {tier.features.map((f) => (
                  <div key={f} className="flex gap-2.5">
                    <Icon name="Check" size={16} className="text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-snug hyphens-auto" lang="ru">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-border space-y-3">
                <p className="text-sm leading-snug hyphens-auto" lang="ru">
                  <span className="font-medium">Для кого: </span>
                  <span className="text-muted-foreground">{tier.forWhom}</span>
                </p>
                <p className="text-sm flex items-center gap-2 text-muted-foreground">
                  <Icon name="Clock" size={15} />
                  Сроки: {tier.duration}
                </p>
                <a
                  href="#contact"
                  className={`mt-2 inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm tracking-wide transition-colors duration-300 group ${
                    tier.featured
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "border border-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  Оставить заявку
                  <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mt-6 max-w-3xl">
        <span className="align-super text-xs">*</span> Указана базовая стоимость за м². К итоговой цене применяется понижающий коэффициент — чем больше площадь проекта, тем ниже стоимость за квадратный метр.
      </p>

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
            <div key={opt.id} className="border border-border bg-background p-7 flex flex-col">
              <p className="text-muted-foreground text-sm mb-1">{opt.subtitle}</p>
              <h4 className="text-xl font-medium mb-4 hyphens-auto" lang="ru">{opt.title}</h4>
              <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1 mb-6">
                <span className="text-3xl font-medium">{opt.price}</span>
                <span className="text-muted-foreground text-sm">{opt.priceUnit}</span>
              </div>
              <div className="flex flex-col gap-3 mb-6">
                {opt.features.map((f) => (
                  <div key={f} className="flex gap-2.5">
                    <Icon name="Check" size={16} className="text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-snug hyphens-auto" lang="ru">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-auto pt-6 border-t border-border hyphens-auto" lang="ru">
                {opt.note}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-foreground px-6 py-3.5 text-sm tracking-wide transition-colors duration-300 hover:bg-foreground hover:text-background group"
              >
                Оставить заявку
                <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InteriorPricing
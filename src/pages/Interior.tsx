import { DirectionPage, DirectionData } from "../components/DirectionPage"

const data: DirectionData = {
  eyebrow: "Направление",
  title: "Дизайн",
  highlight: "интерьеров",
  intro:
    "Создаём интерьеры, которые отражают ваш характер и делают жизнь удобнее. Разрабатываем полный дизайн-проект — от концепции до подбора мебели и авторского надзора за отделкой.",
  heroImage: "/images/hously-2.png",
  benefits: [
    { icon: "Armchair", title: "Стиль под вас", description: "Интерьер, который отражает ваш вкус и подходит именно под ваш образ жизни." },
    { icon: "Ruler", title: "Продуманная эргономика", description: "Правильные планировки, освещение и хранение — красиво и удобно каждый день." },
    { icon: "Palette", title: "Подбор материалов", description: "Подбираем отделку, мебель и декор с учётом бюджета и сроков." },
  ],
  process: [
    { step: "01", title: "Замер и бриф", description: "Обмерочный план и обсуждение ваших пожеланий." },
    { step: "02", title: "Концепция", description: "Стиль, колористика, планировочные решения." },
    { step: "03", title: "Дизайн-проект", description: "Чертежи, спецификации, визуализации." },
    { step: "04", title: "Авторский надзор", description: "Сопровождаем ремонт до финальной отделки." },
  ],
  services: [
    { name: "Концепция интерьера (стиль, колористика, зонирование)", price: "от 500 ₽/м²" },
    { name: "Полный дизайн-проект (чертежи + спецификации)", price: "от 5 000 ₽/м²" },
    { name: "Подбор мебели, материалов и декора", price: "от 300 ₽/м²" },
    { name: "Авторский надзор за отделкой", price: "от 10 000 ₽/выезд" },
  ],
  works: [
    { title: "Интерьер загородного дома", location: "Рублёвское шоссе", year: "2024", image: "/images/hously-2.png" },
    { title: "Интерьер кухни-гостиной", location: "Барвиха", year: "2024", image: "/images/desk.png" },
    { title: "Спальня в минималистичном стиле", location: "Москва", year: "2023", image: "/images/hously-3.png" },
    { title: "Интерьер квартиры-студии", location: "Санкт-Петербург", year: "2023", image: "/images/hously-1.png" },
  ],
}

export default function Interior() {
  return <DirectionPage data={data} />
}

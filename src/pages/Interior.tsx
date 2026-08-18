import { DirectionPage, DirectionData } from "../components/DirectionPage"

const data: DirectionData = {
  portfolioType: "interior",
  eyebrow: "Направление",
  title: "Дизайн",
  highlight: "интерьеров",
  intro:
    "Создаём интерьеры, которые отражают ваш характер и делают жизнь удобнее. Разрабатываем полный дизайн-проект — от концепции до подбора мебели и авторского надзора за отделкой.",
  heroImage: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/2fa71917-c06a-4a5e-84e4-dea3b7d96a01.jpg",
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
    { title: "Кухня-гостиная, «Ленина 8»", location: "Екатеринбург", year: "2024", image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/e50441aa-3632-4e2f-a308-8c6396c8260f.jpg" },
    { title: "Детская, «Ленина 8»", location: "Екатеринбург", year: "2024", image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/951f1807-2e9c-4088-9e43-cccbe74f5787.jpg" },
    { title: "Комната подростка, «Ленина 8»", location: "Екатеринбург", year: "2024", image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/2bee2df8-cfab-43c4-9f53-0828ff6d31fb.jpg" },
    { title: "Санузел, «Ленина 8»", location: "Екатеринбург", year: "2024", image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/3d6b77e3-52b5-4079-ac28-a9e0cdecc8d5.jpg" },
  ],
}

export default function Interior() {
  return <DirectionPage data={data} />
}
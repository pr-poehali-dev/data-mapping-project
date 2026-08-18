import { DirectionPage, DirectionData } from "../components/DirectionPage"

const data: DirectionData = {
  portfolioType: "landscape",
  eyebrow: "Направление",
  title: "Ландшафтный",
  highlight: "дизайн",
  intro:
    "Проектируем сады, террасы и участки, где приятно проводить время. Зонирование, растения, дорожки, освещение и малые архитектурные формы — в едином стиле с вашим домом.",
  heroImage: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/6f7b6335-0da3-4e2c-984b-611d883688cd.jpg",
  benefits: [
    { icon: "Trees", title: "Живой сад круглый год", description: "Подбираем растения так, чтобы участок радовал в любой сезон." },
    { icon: "Map", title: "Продуманное зонирование", description: "Зоны отдыха, дорожки, водоёмы и площадки в гармоничной композиции." },
    { icon: "Sun", title: "Свет и атмосфера", description: "Проектируем ландшафтное освещение, создающее уют вечером." },
  ],
  process: [
    { step: "01", title: "Анализ участка", description: "Изучаем рельеф, почву, инсоляцию и ваши пожелания." },
    { step: "02", title: "Концепция", description: "Стиль сада и функциональное зонирование." },
    { step: "03", title: "Ландшафтный проект", description: "Дендроплан, дорожки, освещение, полив." },
    { step: "04", title: "Авторский надзор", description: "Сопровождаем посадки и благоустройство." },
  ],
  services: [
    { name: "Эскизный проект (3D-зонирование, разбивочный план, план посадок, реалистичная визуализация, ведомости и спецификации)", price: "от 150 ₽/м²" },
    { name: "Полный ландшафтный проект", price: "от 300 ₽/м²" },
    { name: "Дендроплан и ассортиментная ведомость растений", price: "от 100 ₽/м²" },
    { name: "Авторский надзор", price: "от 15 000 ₽/выезд" },
  ],
  works: [
    { title: "Зона барбекю, КП «Заповедник»", location: "Екатеринбург", year: "2024", image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/fd9ca075-372b-428b-b2fa-9515bf77a9dc.png" },
    { title: "Лаунж-терраса, КП «Заповедник»", location: "Екатеринбург", year: "2024", image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/563124be-3054-4b90-b011-9cc25775b01c.png" },
    { title: "Многоуровневый участок, КП «Заповедник»", location: "Екатеринбург", year: "2024", image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/2ece1b63-cb43-401a-98d1-b5b4029583e5.png" },
    { title: "Входная группа, КП «Заповедник»", location: "Екатеринбург", year: "2024", image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/9925ef2e-e569-4268-b36d-dd7c25932a97.jpg" },
  ],
}

export default function Landscape() {
  return <DirectionPage data={data} />
}
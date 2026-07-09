import { DirectionPage, DirectionData } from "../components/DirectionPage"

const data: DirectionData = {
  eyebrow: "Направление",
  title: "Ландшафтный",
  highlight: "дизайн",
  intro:
    "Проектируем сады, террасы и участки, где приятно проводить время. Зонирование, растения, дорожки, освещение и малые архитектурные формы — в едином стиле с вашим домом.",
  heroImage: "/images/hously-4.png",
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
    { name: "Концепция участка (зонирование, стиль)", price: "от 150 ₽/м²" },
    { name: "Полный ландшафтный проект", price: "от 300 ₽/м²" },
    { name: "Дендроплан и ассортиментная ведомость растений", price: "от 100 ₽/м²" },
    { name: "Авторский надзор за посадками", price: "от 8 000 ₽/выезд" },
  ],
  works: [
    { title: "Сад и терраса", location: "Новая Рига", year: "2023", image: "/images/hously-4.png" },
    { title: "Ландшафт загородной усадьбы", location: "Истра", year: "2023", image: "/images/exterior.png" },
    { title: "Сад в природном стиле", location: "Подмосковье", year: "2024", image: "/images/hously-2.png" },
    { title: "Терраса с зоной барбекю", location: "Сочи", year: "2024", image: "/images/desk.png" },
  ],
}

export default function Landscape() {
  return <DirectionPage data={data} />
}

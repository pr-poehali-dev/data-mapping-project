import { DirectionPage, DirectionData } from "../components/DirectionPage"

const data: DirectionData = {
  portfolioType: "architecture",
  eyebrow: "Направление",
  title: "Архитектура",
  highlight: "частных домов",
  intro:
    "Проектируем частные дома под ключ — от эскизной концепции до рабочей документации и авторского надзора за строительством. Создаём дома, в которых удобно и красиво жить.",
  heroImage: "/images/hously-1.png",
  benefits: [
    { icon: "Home", title: "Индивидуальный проект", description: "Дом проектируется под ваш участок, образ жизни и бюджет — без типовых решений." },
    { icon: "FileText", title: "Полная документация", description: "Готовый комплект чертежей для получения разрешений и строительства без ошибок." },
    { icon: "HardHat", title: "Авторский надзор", description: "Контролируем стройку, чтобы результат точно соответствовал проекту." },
  ],
  process: [
    { step: "01", title: "Бриф и участок", description: "Изучаем ваши пожелания, участок и бюджет." },
    { step: "02", title: "Эскизный проект", description: "Планировки, фасады, объёмная концепция дома." },
    { step: "03", title: "Рабочая документация", description: "Полный комплект чертежей для строительства." },
    { step: "04", title: "Авторский надзор", description: "Сопровождаем стройку до сдачи объекта." },
  ],
  services: [
    { name: "Эскизный проект (концепция, планировки, фасады)", price: "от 800 ₽/м²" },
    { name: "Рабочая документация (полный комплект чертежей)", price: "от 600 ₽/м²" },
    { name: "Авторский надзор за строительством", price: "от 15 000 ₽/выезд" },
    { name: "Визуализация 3D (до 5 видов)", price: "от 30 000 ₽" },
  ],
  works: [
    { title: "Резиденция в сосновом лесу", location: "Подмосковье", year: "2024", image: "/images/hously-1.png" },
    { title: "Вилла у моря", location: "Сочи", year: "2023", image: "/images/hously-3.png" },
    { title: "Дом с панорамным остеклением", location: "Новая Рига", year: "2024", image: "/images/exterior.png" },
    { title: "Загородный дом в стиле барнхаус", location: "Истра", year: "2023", image: "/images/hously-4.png" },
  ],
}

export default function Architecture() {
  return <DirectionPage data={data} />
}
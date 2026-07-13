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
    {
      title: "Дом в КП «Палникс»",
      location: "Екатеринбург",
      year: "2024",
      image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/6c46d1b2-4ef9-4220-9f2a-f2b8769f7675.jpg",
      gallery: [
        "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/6c46d1b2-4ef9-4220-9f2a-f2b8769f7675.jpg",
        "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/7c0b7be0-2285-41d9-a5f7-32488bd4b18f.jpg",
        "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/fc91fb0a-e0de-4cde-b75c-bbe9b20ccfe5.jpg",
        "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/9d6e8190-a77e-464e-b427-1c254de213fb.jpg",
        "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/c9ebd55e-1911-40ad-841c-fff060a5687f.jpg",
        "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/c6efaeba-a2d5-4cec-a6df-44c8c15de605.jpg",
        "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/30c52a43-9446-4278-8b7c-f2f03082e8d6.jpg",
        "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/4458c4c4-461b-4765-8d8c-21253c17ef60.jpg",
      ],
    },
    { title: "Резиденция в сосновом лесу", location: "Подмосковье", year: "2024", image: "/images/hously-1.png" },
    { title: "Вилла у моря", location: "Сочи", year: "2023", image: "/images/hously-3.png" },
    { title: "Дом с панорамным остеклением", location: "Новая Рига", year: "2024", image: "/images/exterior.png" },
    { title: "Загородный дом в стиле барнхаус", location: "Истра", year: "2023", image: "/images/hously-4.png" },
  ],
}

export default function Architecture() {
  return <DirectionPage data={data} />
}
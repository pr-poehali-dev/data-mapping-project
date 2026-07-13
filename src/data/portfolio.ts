export type PortfolioType = "architecture" | "interior" | "landscape"

export interface PortfolioProject {
  id: number
  title: string
  type: PortfolioType
  category: string
  location: string
  year: string
  area: string
  duration: string
  image: string
  gallery?: string[]
  description: string
  scope: string[]
}

export const portfolioFilters: { id: PortfolioType | "all"; label: string }[] = [
  { id: "all", label: "Все проекты" },
  { id: "architecture", label: "Архитектура" },
  { id: "interior", label: "Интерьеры" },
  { id: "landscape", label: "Ландшафт" },
]

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 9,
    title: "Дом в КП «Палникс»",
    type: "architecture",
    category: "Архитектура дома",
    location: "Екатеринбург",
    year: "2024",
    area: "700 м²",
    duration: "20 месяцев",
    image: "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/6c46d1b2-4ef9-4220-9f2a-f2b8769f7675.jpg",
    gallery: [
      "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/6c46d1b2-4ef9-4220-9f2a-f2b8769f7675.jpg",
      "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/7c0b7be0-2285-41d9-a5f7-32488bd4b18f.jpg",
      "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/0009aff2-cfd4-4eb7-be10-7115a348536b.jpg",
      "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/24fe8df2-492f-4b0d-8361-9e8959cee421.jpg",
      "https://cdn.poehali.dev/projects/47a591b7-43be-4339-9ff8-476e1ece7feb/bucket/fc91fb0a-e0de-4cde-b75c-bbe9b20ccfe5.jpg",
    ],
    description:
      "Двухэтажный частный дом площадью 700 м² в коттеджном посёлке «Палникс» в Екатеринбурге. Современная архитектура с выразительной кровлей, сочетанием тёмного фасада, дерева и натурального камня. Просторный навес для авто, панорамное остекление и продуманная ландшафтная зона с патио и барбекю.",
    scope: ["Эскизный проект", "Рабочая документация", "3D-визуализация", "Ландшафт участка", "Авторский надзор"],
  },
  {
    id: 1,
    title: "Резиденция в сосновом лесу",
    type: "architecture",
    category: "Архитектура дома",
    location: "Подмосковье",
    year: "2024",
    area: "420 м²",
    duration: "14 месяцев",
    image: "/images/hously-1.png",
    description:
      "Частный дом в стиле современного минимализма, органично вписанный в сосновый лес. Панорамное остекление, монолитный каркас и натуральные материалы фасада создают ощущение единства с природой.",
    scope: ["Эскизный проект", "Рабочая документация", "3D-визуализация", "Авторский надзор"],
  },
  {
    id: 2,
    title: "Вилла у моря",
    type: "architecture",
    category: "Архитектура дома",
    location: "Сочи",
    year: "2023",
    area: "560 м²",
    duration: "18 месяцев",
    image: "/images/hously-3.png",
    description:
      "Двухуровневая вилла с видом на море. Открытые террасы, бассейн-инфинити и большие остеклённые пространства подчёркивают курортный характер дома.",
    scope: ["Концепция", "Рабочая документация", "Ландшафт участка", "Авторский надзор"],
  },
  {
    id: 3,
    title: "Дом с панорамным остеклением",
    type: "architecture",
    category: "Архитектура дома",
    location: "Новая Рига",
    year: "2024",
    area: "380 м²",
    duration: "12 месяцев",
    image: "/images/exterior.png",
    description:
      "Загородный дом в стиле барнхаус с двускатной кровлей и полностью остеклённой гостиной. Лаконичная архитектура и продуманная инсоляция.",
    scope: ["Эскизный проект", "Рабочая документация", "3D-визуализация"],
  },
  {
    id: 4,
    title: "Интерьер загородного дома",
    type: "interior",
    category: "Дизайн интерьера",
    location: "Рублёвское шоссе",
    year: "2024",
    area: "310 м²",
    duration: "8 месяцев",
    image: "/images/hously-2.png",
    description:
      "Тёплый минимализм с натуральным деревом, камнем и мягким текстилем. Продуманная эргономика, сценарное освещение и индивидуальная мебель на заказ.",
    scope: ["Концепция", "Дизайн-проект", "Подбор мебели", "Авторский надзор"],
  },
  {
    id: 5,
    title: "Интерьер кухни-гостиной",
    type: "interior",
    category: "Дизайн интерьера",
    location: "Барвиха",
    year: "2024",
    area: "72 м²",
    duration: "5 месяцев",
    image: "/images/desk.png",
    description:
      "Открытое пространство кухни-гостиной с островом, скрытым хранением и акцентом на натуральные фактуры. Единая цветовая палитра объединяет зоны.",
    scope: ["Концепция", "Дизайн-проект", "Подбор материалов"],
  },
  {
    id: 6,
    title: "Спальня в минималистичном стиле",
    type: "interior",
    category: "Дизайн интерьера",
    location: "Москва",
    year: "2023",
    area: "34 м²",
    duration: "3 месяца",
    image: "/images/hously-3.png",
    description:
      "Спокойный интерьер спальни в приглушённых тонах с мягкими формами, скрытой подсветкой и продуманными системами хранения.",
    scope: ["Дизайн-проект", "Подбор мебели и декора"],
  },
  {
    id: 7,
    title: "Сад и терраса",
    type: "landscape",
    category: "Ландшафтный дизайн",
    location: "Новая Рига",
    year: "2023",
    area: "1 200 м²",
    duration: "6 месяцев",
    image: "/images/hously-4.png",
    description:
      "Ландшафтный проект участка с зоной отдыха, деревянной террасой и миксбордерами. Растения подобраны так, чтобы сад был декоративным круглый год.",
    scope: ["Концепция участка", "Дендроплан", "Освещение", "Авторский надзор"],
  },
  {
    id: 8,
    title: "Ландшафт загородной усадьбы",
    type: "landscape",
    category: "Ландшафтный дизайн",
    location: "Истра",
    year: "2023",
    area: "2 400 м²",
    duration: "9 месяцев",
    image: "/images/exterior.png",
    description:
      "Благоустройство большой усадьбы: зонирование, водоём, дорожно-тропиночная сеть, зона барбекю и ландшафтное освещение в едином стиле с домом.",
    scope: ["Концепция", "Ландшафтный проект", "Дендроплан", "Авторский надзор"],
  },
]
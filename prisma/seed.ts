import { PrismaClient, Prisma } from "../generated/prisma";

const prisma = new PrismaClient();

const usersData: Prisma.UserCreateInput[] = [
  { login: "admin", password: "admin", isAdmin: true },
  { login: "developer", password: "developer", isAdmin: false },
];

const brandsData: Prisma.BrandCreateInput[] = [
  { name: "ACER" },
  { name: "MSI" },
  { name: "iRU" },
  { name: "GIGABYTE" },
];

const productsData: Prisma.ProductCreateInput[] = [
  {
    name: " MSI Titan 18 HX A14VIG-096RU",
    model: "MSI Titan 18",
    imageUrl: "http://localhost:4000/MSI1.png",
    price: 599,
    type: "notebook",
    year: 2024,
    top10: true,
    description:
      "Ноутбук MSI Titan 18 HX A14VIG-096RU диагональю 18 выполнен в черном корпусе из магниевого сплава с алюминиевой крышкой. Благодаря профессиональной вычислительной мощи и скоростным возможностям он подходит для творческой работы и игр.",
    brand: {
      connect: {
        id: 2,
      },
    },
  },
  {
    name: "MSI Titan 18 HX AI A2XWJG-076RU",
    model: "MSI Titan 18",
    imageUrl: "http://localhost:4000/MSI2.png",
    price: 528,
    type: "notebook",
    year: 2024,
    top10: true,
    description:
      "MSI Titan 18 HX AI A2XWJG-076RU - это мощный игровой ноутбук, предназначенный для тех, кто ценит высокую производительность и мощь. Он идеально подходит для игр, творческих задач и интенсивных вычислений.",
    brand: {
      connect: {
        id: 2,
      },
    },
  },
  {
    name: "Acer Helios 16S AI PHN16S-71-72PG",
    model: "Acer Helios",
    imageUrl: "http://localhost:4000/Acer1.png",
    price: 180,
    type: "notebook",
    year: 2024,
    top10: false,
    description:
      "Ноутбук Acer Predator Helios PHN16S-71-72PG подходит для геймеров, дизайнеров и профессионалов, которым важны высокая производительность и насыщенное изображение. Устройство работает на процессоре Intel Core Ultra 7 и оснащено видеокартой NVIDIA GeForce RTX 5070 для ноутбуков.",
    brand: {
      connect: {
        id: 1,
      },
    },
  },
  {
    name: "Acer Aspire Lite AL15-45P-R1UJ",
    model: "Acer Aspire Lite",
    imageUrl: "http://localhost:4000/Acer2.png",
    price: 720,
    type: "notebook",
    year: 2022,
    top10: true,
    description:
      "Ноутбук Acer Aspire Lite AL15–45P-R1UJ подходит для работы, учёбы и развлечений. Его 15.6-дюймовый IPS-дисплей с разрешением Full HD создаёт чёткое и яркое изображение, а восьмиядерный процессор AMD Ryzen 7 5825U справляется с многозадачностью и ресурсоёмкими приложениями. 16 ГБ оперативной памяти и SSD на 512 ГБ ускоряют работу и обеспечивают быстрый доступ к файлам.",
    brand: {
      connect: {
        id: 1,
      },
    },
  },
  {
    name: "Acer Swift Air 16 SFA16-61M-R721",
    model: "Acer Swift Air 16",
    imageUrl: "http://localhost:4000/Acer3.png",
    price: 970,
    type: "notebook",
    year: 2024,
    top10: true,
    description:
      "Ноутбук ACER SFA16–61M-R721 с 16 OLED-экраном создан для тех, кто ценит качество изображения и мобильность. Это устройство подходит для работы, учёбы и мультимедийных задач благодаря мощному процессору и большому объёму памяти.",
    brand: {
      connect: {
        id: 1,
      },
    },
  },
  {
    name: "iRU Planio 15ING, 15.6, IPS",
    model: "iRU Planio",
    imageUrl: "http://localhost:4000/Iru1.png",
    price: 106,
    type: "notebook",
    year: 2024,
    top10: true,
    description:
      "Ноутбук iRU Planio 15ING с экраном 15.6\" оснащён IPS-матрицей с разрешением Full HD 1920×1080, которая создаёт чёткое и яркое изображение для работы и мультимедиа. Модель под управлением двухъядерного процессора Intel Celeron N4500 с базовой частотой 1.1 ГГц и турбоускорением до 2.8 ГГц подходит для повседневных задач и офисных приложений.",
    brand: {
      connect: {
        id: 3,
      },
    },
  },
  {
    name: "iRU Tactio 15PHR, 15.6",
    model: "iRU Tactio",
    imageUrl: "http://localhost:4000/Iru2.png",
    price: 130,
    type: "notebook",
    year: 2023,
    top10: true,
    description:
      "Ноутбук iRU Tactio 15PHR с экраном 15.6\" сочетает производительность и мобильность. Подойдёт для учебы, работы и мультимедийных задач благодаря процессору и экрану. Компактный и стильный, он впишется в повседневный ритм.",
    brand: {
      connect: {
        id: 3,
      },
    },
  },
  {
    name: "Acer Nitro 16 AN16-41-R10H",
    model: "Acer Nitro 16",
    imageUrl: "http://localhost:4000/Acer4.png",
    price: 180,
    type: "notebook",
    year: 2024,
    top10: true,
    description:
      "Ноутбук Acer Nitro 16 AN16-41-R10H с дискретным графическим адаптером GeForce RTX 4070 подходит для игр и работы с графическими редакторами. Процессор AMD Ryzen 7 7840HS и 16 ГБ оперативной памяти обеспечивают стабильную производительность. Под хранение программ и файлов установлен SSD-накопитель объемом 1000 ГБ.",
    brand: {
      connect: {
        id: 2,
      },
    },
  },
  {
    name: "MSI Modern 15 AI C1MG-008RU",
    model: "MSI Modern 15",
    imageUrl: "http://localhost:4000/MSI3.png",
    price: 275,
    type: "notebook",
    year: 2023,
    top10: true,
    description:
      "Ноутбук MSI Modern 15H (C1MG-008RU) в черном корпусе создан на базе нейронного 14-ядерного процессора Intel Core Ultra 5 и оснащен 16 ГБ оперативной памяти. Благодаря такой конфигурации устройство работает без зависаний при использовании ресурсоемких приложений, работе одновременно с несколькими программами и во время игрового процесса.",
    brand: {
      connect: {
        id: 2,
      },
    },
  },
  {
    name: "GIGABYTE Gaming A18 GA83H",
    model: "GIGABYTE GAMING",
    imageUrl: "http://localhost:4000/GIGABYTE3.png",
    price: 160,
    type: "notebook",
    year: 2024,
    top10: true,
    description:
      "Gigabyte Gaming A18 GA83H — это мощный игровой ноутбук, созданный для тех, кто ценит производительность и стильный дизайн. Он отлично справляется с играми и позволяет наслаждаться плавной графикой и высокой скоростью работы. Устройство отличается надежностью и удобством использования, что делает его хорошим выбором как для геймеров, так и для тех, кто ищет универсальный ноутбук для работы и развлечений. Компактный корпус и продуманная система охлаждения обеспечивают комфорт даже при длительных игровых сессиях.",
    brand: {
      connect: {
        id: 4,
      },
    },
  },
  {
    name: "GIGABYTE GAMING A16 3VH",
    model: "GIGABYTE GAMING",
    imageUrl: "http://localhost:4000/GIGABYTE2.png",
    price: 119,
    type: "notebook",
    year: 2023,
    top10: false,
    description:
      "Ноутбук GIGABYTE GAMING A16 3VH выполнен в черном корпусе. Матовый экран с разрешением 1920х1200 обеспечит четкую картинку без бликов и зеркального эффекта. 8-ядерный процессор поддерживает 16 потоков, увеличивая производительность компьютера. 16 ГБ оперативной памяти могут быть увеличены до 64 ГБ, чтобы игры и ресурсоемкие программы не вызывали зависаний процессов. Ноутбук оснащен двумя видеокартами: встроенной и дискретной.",
    brand: {
      connect: {
        id: 4,
      },
    },
  },
  {
    name: "GIGABYTE AERO X16 1TH",
    model: "GIGABYTE AERO",
    imageUrl: "http://localhost:4000/GIGABYTE1.png",
    price: 118,
    type: "notebook",
    year: 2024,
    top10: true,
    description:
      "Ноутбук GIGABYTE AERO X16 1TH с нейронным процессором AMD Ryzen AI 7 350 и видеокартой NVIDIA GeForce RTX 5050 подходит для игр, 3D-моделирования, обработки фотографий и видеоконтента в требовательных приложениях. Портативный компьютер выполнен в пластиковом корпусе серого цвета весом 1.9 кг. На 16-дюймовом экране с матрицей IPS формата QHD передается четкая контрастная картинка. Цветовой охват 100% sRGB и сертификат Pantone Validated гарантируют насыщенные естественные оттенки. Клавиатура с многоцветной подсветкой RGB создает комфортные условия для управления в темноте и погружения в игровой процесс. Веб-камера 2 Мп с функцией распознавания лица Windows Hello обеспечивает четкую видеосвязь. Акустическая система с двумя динамиками мощностью по 2 Вт и технологией Dolby Atmos воспроизводит объемный чистый звук. Аккумулятор позволяет ноутбуку GIGABYTE AERO X16 1TH работать автономно до 12 часов и поддерживает функцию быстрой зарядки.",
    brand: {
      connect: {
        id: 4,
      },
    },
  },
];

export async function main() {
  for (const brand of brandsData) {
    await prisma.brand.create({ data: brand });
  }

  for (const product of productsData) {
    await prisma.product.create({ data: product });
  }

  for (const user of usersData) {
    await prisma.user.create({ data: user });
  }
}

main();

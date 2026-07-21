# Сервер next.js

## Инициализация

1. установка зависимостей - `npm i`
2. инициализация prisma - `npx prisma migrate dev --name init`
3. наполнение данными - `npx prisma migrate reset`
4. `npm run dev` для запуска сервера на `http://localhost:4000`

## API

### POST /api/auth/login

Для логина в body передается login, password

### POST /api/auth/signup

Для логина в body передается login, password

### DELETE /api/auth/signup

Логаут

### GET /api/auth/user

Информация по текущему пользователю

### GET /api/meta/product/[productId]

Метаданные по продукту

### GET /api/product/[productId]

Информация по продукту

### POST, DELETE api/product/[productId]/favorite

Добавить/удалить из избранного

### GET api/products

Список товаров

Параметры:

- page и limit для пагинации
- brand - фильтрация по имени бренда

### GET api/top-10

Топ 10 товаров

### GET api/brands

Топ 10 товаров

[Сертификат](https://learn.javascript.ru/courses/nextjs-20250606/iliazabolotnyi/ru/certificate.jpg)

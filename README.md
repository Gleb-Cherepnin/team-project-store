# KRIST — Online Store

## 🇷🇺 Русский

### О проекте

**KRIST** — учебный интернет-магазин одежды и аксессуаров. Проект разработан с использованием TypeScript, SCSS и Vite.

Приложение позволяет просматривать каталог товаров, искать и фильтровать товары, добавлять их в корзину, оформлять заказы и управлять профилем пользователя.

### Основные возможности

- Просмотр каталога товаров и категорий.
- Поиск товаров.
- Фильтрация и сортировка товаров.
- Просмотр подробной информации о товарах.
- Добавление товаров в корзину.
- Изменение количества и размера товаров.
- Расчёт общей стоимости корзины.
- Применение промокода и скидки.
- Регистрация и авторизация пользователей.
- Управление профилем пользователя.
- Работа с адресами и платёжными данными.
- Оформление заказа.
- Просмотр отзывов о товарах.
- Адаптивный интерфейс для разных размеров экранов.

### Используемые технологии

- TypeScript
- HTML5
- SCSS / CSS Modules
- Vite
- Vitest
- ESLint
- Prettier
- Husky
- lint-staged

### Установка и запуск

**1. Клонирование репозитория**

```bash
git clone <repository-url>
```

**2. Переход в папку проекта**

```bash
cd team-project-store
```

**3. Установка зависимостей**

```bash
npm install
```

**4. Запуск проекта**

```bash
npm run dev
```

После запуска приложение будет доступно по адресу, указанному в терминале.

### Сборка проекта

```bash
npm run build
```

### Тестирование

Для запуска тестов:

```bash
npm run test:run
```

### Unit-тесты

| Тест                                        | Описание / для чего                                                               |
| ------------------------------------------- | --------------------------------------------------------------------------------- |
| `cart.test.ts` — Объединение товаров        | Проверяет, что одинаковые товары с одинаковым размером объединяются в корзине.    |
| `cart.test.ts` — Разные товары и размеры    | Проверяет, что товары с разными размерами или характеристиками хранятся отдельно. |
| `cart.test.ts` — Проверка количества        | Проверяет корректность обработки количества товаров.                              |
| `cart.test.ts` — Удаление товара            | Проверяет удаление товара из корзины.                                             |
| `cart.test.ts` — Расчёт общей стоимости     | Проверяет правильность подсчёта стоимости всех товаров в корзине.                 |
| `cart.test.ts` — Применение скидки          | Проверяет применение промокода `SALE10` и расчёт скидки 10%.                      |
| `cart.test.ts` — Восстановление корзины     | Проверяет загрузку сохранённой корзины из LocalStorage.                           |
| `cart.test.ts` — Повреждённые данные        | Проверяет обработку некорректных данных в LocalStorage.                           |
| `catalog.test.ts` — Фильтрация товаров      | Проверяет фильтрацию товаров по выбранным параметрам.                             |
| `catalog.test.ts` — Поиск товаров           | Проверяет поиск товаров по названию и другим текстовым параметрам.                |
| `catalog.test.ts` — Фильтр категорий и цены | Проверяет отображение товаров выбранной категории и ценового диапазона.           |
| `catalog.test.ts` — Сортировка товаров      | Проверяет сортировку товаров и отсутствие изменений исходного массива.            |

**Результат последнего запуска тестов:**

- Test Files: 3 passed
- Tests: 13 passed

### Проверка форматирования и качества кода

Для проверки ESLint:

```bash
npm run lint
```

Для проверки форматирования Prettier:

```bash
npm run format:check
```

### Команда проекта

Проект разработан в команде из двух участников.

---

## 🇬🇧 English

### About the Project

**KRIST** is an educational online clothing and accessories store built using TypeScript, SCSS, and Vite.

The application allows users to browse products, search and filter the catalog, add products to the shopping cart, place orders, and manage their profiles.

### Main Features

- Browse products and categories.
- Search for products.
- Filter and sort products.
- View detailed product information.
- Add products to the shopping cart.
- Change product quantities and sizes.
- Calculate the total cart price.
- Apply promo codes and discounts.
- User registration and authentication.
- Manage user profiles.
- Manage addresses and payment details.
- Place orders.
- View product reviews.
- Responsive design for different screen sizes.

### Technologies

- TypeScript
- HTML5
- SCSS / CSS Modules
- Vite
- Vitest
- ESLint
- Prettier
- Husky
- lint-staged

### Installation and Setup

**1. Clone the repository**

```bash
git clone <repository-url>
```

**2. Navigate to the project directory**

```bash
cd team-project-store
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

After starting the server, open the local address displayed in the terminal.

### Build

To create a production build:

```bash
npm run build
```

### Testing

Run the tests using:

```bash
npm run test:run
```

### Unit Tests

| Test                                             | Description / Purpose                                                                   |
| ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `cart.test.ts` — Product merging                 | Checks that identical products with the same size are combined in the cart.             |
| `cart.test.ts` — Different products and sizes    | Checks that products with different sizes or characteristics are stored separately.     |
| `cart.test.ts` — Quantity validation             | Checks that product quantities are handled correctly.                                   |
| `cart.test.ts` — Product removal                 | Checks that products can be removed from the cart.                                      |
| `cart.test.ts` — Total price calculation         | Checks that the total cart price is calculated correctly.                               |
| `cart.test.ts` — Discount application            | Checks the `SALE10` promo code and the calculation of a 10% discount.                   |
| `cart.test.ts` — Cart restoration                | Checks that saved cart data is restored from LocalStorage.                              |
| `cart.test.ts` — Invalid data handling           | Checks how invalid LocalStorage data is handled.                                        |
| `catalog.test.ts` — Product filtering            | Checks product filtering based on selected parameters.                                  |
| `catalog.test.ts` — Product search               | Checks product search by name and other text parameters.                                |
| `catalog.test.ts` — Category and price filtering | Checks that only products matching the selected category and price range are displayed. |
| `catalog.test.ts` — Product sorting              | Checks product sorting and ensures the original array remains unchanged.                |

**Latest test results:**

- Test Files: 2 passed
- Tests: 12 passed

### Code Quality and Formatting

Run ESLint:

```bash
npm run lint
```

Check code formatting with Prettier:

```bash
npm run format:check
```

### Team

The project was developed by a team of two contributors.

# Team Project Store

[Русский](#русский) | [English](#english)

---

## Русский

Небольшой интернет-магазин, созданный в рамках командного проекта.

### Возможности

- Страница входа с проверкой email и пароля
- Страница регистрации: имя, фамилия, email, пароль и чекбокс с условиями
- Восстановление пароля на одной странице:
  1. ввод email, указанного при регистрации
  2. ввод 5-значного кода (только цифры, фокус переходит сам, можно вставить код целиком, пустые квадратики краснеют при нажатии на Verify)
  3. модальное окно об успешной смене пароля с кнопкой возврата на страницу входа (закрывается по `Esc` или по клику на размытый фон)

### Технологии

- TypeScript
- Vite
- Vanilla DOM (без фреймворков)
- CSS с общими переменными (`src/styles/variables.css`)
- Vitest для unit-тестов
- ESLint и Prettier для качества кода

### Требования

- [Node.js](https://nodejs.org/) версии 20 или новее
- npm (устанавливается вместе с Node.js)

### Запуск проекта

1. Клонируйте репозиторий:

   ```bash
   git clone <repository-url>
   cd team-project-store
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Запустите сервер разработки:

   ```bash
   npm run dev
   ```

4. Откройте адрес в браузере Chrome, который появится в терминале (по умолчанию `http://localhost:5173`).

### Скрипты

| Команда                | Описание                                     |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Запуск сервера разработки                    |
| `npm run build`        | Проверка типов и сборка проекта              |
| `npm run preview`      | Локальный просмотр собранной версии          |
| `npm run lint`         | Проверка кода линтером ESLint                |
| `npm run format`       | Форматирование всех файлов через Prettier    |
| `npm run format:check` | Проверка форматирования без изменения файлов |
| `npm test`             | Запуск unit-тестов в режиме наблюдения       |
| `npm run test:run`     | Однократный запуск unit-тестов               |

### Структура проекта

```text
src/
├── components/   # Переиспользуемые компоненты (Input, Button)
├── pages/        # Страницы (AuthPage, ForgotPassword)
├── styles/       # Глобальные стили и CSS-переменные
├── types/        # Общие типы TypeScript
├── utils/        # Вспомогательные функции
└── services/     # Работа с данными и API
public/
└── images/auth/  # Изображения для страниц авторизации
```

---

## English

A small online store built as a team project.

### Features

- Login page with email and password validation
- Registration page with first name, last name, email, password and terms checkbox
- Forgot Password flow on a single page:
  1. enter the registered email address
  2. enter a 5-digit OTP code (digits only, focus moves automatically, pasting a full code is supported, empty boxes turn red on Verify)
  3. success modal with a button back to the login page (closes on `Esc` or a click on the blurred background)

### Tech stack

- TypeScript
- Vite
- Vanilla DOM (no framework)
- CSS with shared variables (`src/styles/variables.css`)
- Vitest for unit tests
- ESLint and Prettier for code quality

### Requirements

- [Node.js](https://nodejs.org/) 20 or newer
- npm (comes with Node.js)

### Getting started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd team-project-store
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the address shown in the terminal in the Chrome browser (by default `http://localhost:5173`).

### Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the development server             |
| `npm run build`        | Type-check and create a production build |
| `npm run preview`      | Preview the production build locally     |
| `npm run lint`         | Check the code with ESLint               |
| `npm run format`       | Format all files with Prettier           |
| `npm run format:check` | Check formatting without changing files  |
| `npm test`             | Run unit tests in watch mode             |
| `npm run test:run`     | Run unit tests once                      |

### Project structure

```text
src/
├── components/   # Reusable UI components (Input, Button)
├── pages/        # Pages (AuthPage, ForgotPassword)
├── styles/       # Global styles and CSS variables
├── types/        # Shared TypeScript types
├── utils/        # Helper functions
└── services/     # Data and API access
public/
└── images/auth/  # Images for the authentication pages
```

# ✅ TaskPro

**TaskPro** is a task management web application in the style of Trello:
boards, columns and task cards with priorities and deadlines. Built as a team
project at the GoIT school.

🔗 **Live demo:** https://react-task-pro.vercel.app
📦 **Original repository:** https://github.com/VPresich/react-task-pro

---

## Features

- **Welcome page** with a short presentation of the app
- **Registration and login** (with form validation), private routes
- **Boards** — create, edit and delete boards with an icon and a background
- **Columns and cards** — add, edit, delete and move cards between columns
- **Card priority and deadline** with a calendar, filters by priority
- **Themes** — light, dark and violet
- **User profile** — edit name, email, password and avatar
- **Need help?** — support form sent to the server
- Toast notifications, loaders, modal windows (close on Esc and backdrop)
- Adaptive layout for mobile, tablet and desktop

## Technologies

|         |                                                                      |
| ------- | -------------------------------------------------------------------- |
| Core    | React 18, Vite, JavaScript (ES6+)                                    |
| State   | Redux Toolkit, redux-persist, reselect                               |
| Routing | React Router 6                                                       |
| Forms   | Formik, Yup                                                          |
| UI      | CSS Modules, MUI, react-icons, react-hot-toast, react-loader-spinner |
| API     | Axios, REST API (Node.js backend), JWT auth                          |
| Deploy  | Vercel                                                               |

## How to run locally

```bash
git clone https://github.com/Masenko2604/react-task-pro.git
cd react-task-pro
npm install
npm run dev
```

## Team

The project was made by a team of developers with Git Flow: each feature in its
own branch, merged into `main` through pull requests with code review.

| Developer       | GitHub                                           | Contribution                |
| --------------- | ------------------------------------------------ | --------------------------- |
| Tatiana Masenko | [@Masenko2604](https://github.com/Masenko2604)   | Welcome page, pop-up styles |
|                 | [@VPresich](https://github.com/VPresich)         |                             |
|                 | [@kovalsofiia1](https://github.com/kovalsofiia1) |                             |
|                 | [@genbaku](https://github.com/genbaku)           |                             |
|                 | [@Mahavr](https://github.com/Mahavr)             |                             |
|                 | [@Irinaaissa](https://github.com/Irinaaissa)     |                             |
|                 | [@anestxs](https://github.com/anestxs)           |                             |

### My part — Welcome page

I developed the **Welcome page** — the first screen of the application
(`src/pages/WelcomePage`):

- layout of the start screen with the illustration, logo, short description
  and Registration / Log in buttons
- responsive styles for mobile, tablet and desktop, retina images
- styles that follow the app themes

I also made the styles for the pop-up window (later replaced by toast
notifications) and small fixes in the login and registration forms.

---

## Описание (RU)

**TaskPro** — приложение для управления задачами в стиле Trello: доски,
колонки, карточки с приоритетом и дедлайном, темы оформления, профиль
пользователя, форма поддержки. Командный проект школы GoIT.
Технологии: React, Redux Toolkit, React Router, Formik, Yup, Axios, MUI, Vercel.

**Моя часть — Welcome page:** вёрстка стартовой страницы, адаптивность под
мобильные, планшеты и десктоп, стили с учётом тем; также стили всплывающего
окна и правки в формах входа и регистрации.
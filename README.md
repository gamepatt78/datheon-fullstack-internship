# Datheon Full Stack Web Development Internship

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)

Four responsive front-end projects built for the **Datheon Full Stack Web Development Internship Program**. Each task applies modern web-development concepts, including responsive layouts, DOM state management, API integration, browser storage, and reusable user-interface patterns.

- **Repository:** [gamepatt78/datheon-fullstack-internship](https://github.com/gamepatt78/datheon-fullstack-internship)
- **Firebase project:** `full-stack-web-internship`
- **Live Portfolio:** [https://full-stack-web-internship.web.app](https://full-stack-web-internship.web.app)

## Project Overview

| Task # | Project Name | Tech Stack | Key Features |
|---:|---|---|---|
| 1 | Personal Developer Portfolio & Project Showcase | HTML5, CSS3, JavaScript ES6+ | Responsive layout, dark/light theme, smooth navigation, mobile menu, project modals |
| 2 | Dynamic Task Manager & Productivity Tracker | HTML5, CSS3, JavaScript, DOM APIs, LocalStorage | Complete CRUD, categories, due dates, status filters, search, persistent browser state |
| 3 | Real-Time Weather Forecast & Climate Telemetry | HTML5, CSS, JavaScript Fetch API, Async/Await, Open-Meteo API | City search, current metrics, five-day forecast, loading/error states, dynamic themes |
| 4 | E-Commerce Product Catalog & Interactive Shopping Cart | HTML5, CSS Grid, JavaScript, FakeStoreAPI | Product search/filtering, persistent cart, quantity controls, tax/shipping totals, checkout modal |

## Table of Contents

- [Project Overview](#project-overview)
- [Directory Structure](#directory-structure)
- [Task 1: Portfolio](#task-1-personal-developer-portfolio--project-showcase)
- [Task 2: Task Manager](#task-2-dynamic-task-manager--productivity-tracker)
- [Task 3: Weather Dashboard](#task-3-real-time-weather-forecast--climate-telemetry-app)
- [Task 4: E-Commerce Store](#task-4-e-commerce-product-catalog--shopping-cart)
- [Setup & Local Execution](#setup--local-execution)
- [Firebase Hosting Deployment](#firebase-hosting-deployment)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

## Directory Structure

```text
datheon-fullstack-internship/
├── README.md
├── task-1-portfolio/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── firebase.json
│   └── README.md
├── task-2-task-manager/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── firebase.json
│   └── README.md
├── task-3-weather-app/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── firebase.json
│   └── README.md
└── task-4-ecommerce-cart/
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── firebase.json
    └── README.md
```

## Task 1: Personal Developer Portfolio & Project Showcase

A mobile-first developer portfolio with semantic page sections and a polished project showcase.

### Features

- Responsive layout built with CSS Grid and Flexbox
- Hero, about, skills, projects, resume, and contact sections
- Persistent dark/light theme
- Smooth anchor navigation and mobile hamburger menu
- Accessible project modal dialogs
- Firebase Hosting-ready static configuration

### Run Task 1

```powershell
cd task-1-portfolio
python -m http.server 8080
```

Open `http://localhost:8080/`.

## Task 2: Dynamic Task Manager & Productivity Tracker

A browser-based productivity application that maintains tasks between page reloads.

### Features

- Create, view, edit, complete, and delete tasks
- Work, Personal, and Study categories
- Optional due dates
- All, Active, and Completed filters
- Task search and progress tracking
- LocalStorage persistence and completion animations

### Run Task 2

```powershell
cd task-2-task-manager
python -m http.server 8080
```

Open `http://localhost:8080/`.

## Task 3: Real-Time Weather Forecast & Climate Telemetry App

A global weather dashboard powered by asynchronous Open-Meteo API requests.

### Features

- City geocoding and weather search
- Temperature, humidity, wind, pressure, and apparent temperature
- Sunrise and sunset information
- Five-day forecast
- Loading and invalid-location error states
- Weather and day/night visual themes

### Run Task 3

```powershell
cd task-3-weather-app
python -m http.server 8080
```

Open `http://localhost:8080/`. An API key is not required for the current Open-Meteo implementation.

## Task 4: E-Commerce Product Catalog & Shopping Cart

**Aster Store** is a responsive storefront using product data from FakeStoreAPI.

### Features

- Remote product catalog loading
- Category and text filtering
- Product images, prices, and ratings
- Persistent local cart
- Quantity increment/decrement and item removal
- Subtotal, shipping, and tax calculations
- Order confirmation checkout dialog

### Run Task 4

```powershell
cd task-4-ecommerce-cart
python -m http.server 8080
```

Open `http://localhost:8080/`. A stable internet connection is required for FakeStoreAPI data.

## Setup & Local Execution

### Prerequisites

- Git
- A modern browser such as Chrome, Edge, or Firefox
- Visual Studio Code with the Live Server extension, or Python 3

### Clone the Repository

```powershell
git clone https://github.com/gamepatt78/datheon-fullstack-internship.git
cd datheon-fullstack-internship
```

### Option 1: VS Code Live Server

1. Open the repository in Visual Studio Code.
2. Navigate to one of the four task folders.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### Option 2: Python Local Server

Serve the complete repository from its root:

```powershell
python -m http.server 8080
```

Then visit the applications at:

```text
http://localhost:8080/task-1-portfolio/
http://localhost:8080/task-2-task-manager/
http://localhost:8080/task-3-weather-app/
http://localhost:8080/task-4-ecommerce-cart/
```

## Firebase Hosting Deployment

A Firebase CLI configuration file is included in each task folder. Deploy from the selected task directory:

```powershell
cd task-1-portfolio
firebase.cmd login
firebase.cmd init hosting
firebase.cmd deploy
```

During Hosting setup, use the following common values:

- **Firebase project:** `full-stack-web-internship`
- **Public directory:** `.` for the current task folder
- **Configure as a single-page app:** `No`
- **Overwrite the existing index.html:** `No`

Repeat the deployment workflow in each task folder when using a separate Hosting site.

## Future Enhancements

- Add React or TypeScript versions of selected projects
- Connect Task Manager data to Firebase Firestore
- Add an OpenWeatherMap API option and configurable API keys
- Add authentication and persistent user profiles
- Add automated unit and browser tests
- Improve cart analytics and real payment-provider integration
- Add continuous deployment for every repository task

## Contact

| Name | GitHub | Email |
|---|---|---|
| Your Name | [Your GitHub profile](https://github.com/your-username) | your.email@example.com |

## License

This repository is intended for internship and educational use. Add a repository license before using the projects for commercial distribution.

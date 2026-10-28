# Datheon Full Stack Web Development Internship

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

## Executive Summary

This repository contains four responsive web applications developed for the **Datheon Full Stack Web Development Internship**. The projects progress from semantic interface development and browser state management to REST API integration and interactive commerce workflows.

The repository is structured as a monorepo-style collection of independent, static applications. Every task can be run independently, deployed separately, and evaluated without a build tool or server-side runtime.

- **Repository:** [gamepatt78/datheon-fullstack-internship](https://github.com/gamepatt78/datheon-fullstack-internship)
- **Firebase Project:** `full-stack-web-internship`
- **Primary Live Demo:** [full-stack-web-internship.web.app](https://full-stack-web-internship.web.app)

## Project Matrix

| Task # | Project Name | Tech Stack | Key Features | Live Demo | Code Path |
|---:|---|---|---|---|---|
| 1 | Personal Developer Portfolio & Project Showcase | HTML5, Modern CSS, JavaScript ES6+, Firebase | Responsive layout, theme switching, smooth navigation, mobile menu, accessible project modals | [Open demo](https://full-stack-web-internship.web.app) | [`task-1-portfolio/`](task-1-portfolio/) |
| 2 | Dynamic Task Manager & Productivity Tracker | HTML5, CSS3, JavaScript, DOM API, LocalStorage | Full CRUD, categories, due dates, status filters, search, persistent state | [Open demo](https://task-2-task-manager.web.app) | [`task-2-task-manager/`](task-2-task-manager/) |
| 3 | Real-Time Weather Forecast & Climate Telemetry | HTML5, CSS Flexbox, Fetch API, Async/Await | City search, live metrics, five-day forecast, loading/error handling, dynamic themes | [Open demo](https://task-3-weather-app.web.app) | [`task-3-weather-app/`](task-3-weather-app/) |
| 4 | E-Commerce Product Catalog & Shopping Cart | HTML5, CSS Grid, JavaScript, FakeStoreAPI, LocalStorage | Remote catalog, filtering, persistent cart drawer, quantity controls, totals, checkout modal | [Open demo](https://task-4-ecommerce-cart.web.app) | [`task-4-ecommerce-cart/`](task-4-ecommerce-cart/) |

## Table of Contents

- [Executive Summary](#executive-summary)
- [Project Matrix](#project-matrix)
- [Directory Structure](#directory-structure)
- [Task 1: Personal Developer Portfolio & Project Showcase](#task-1-personal-developer-portfolio--project-showcase)
- [Task 2: Dynamic Task Manager & Productivity Tracker](#task-2-dynamic-task-manager--productivity-tracker)
- [Task 3: Real-Time Weather Forecast & Climate Telemetry App](#task-3-real-time-weather-forecast--climate-telemetry-app)
- [Task 4: E-Commerce Product Catalog & Shopping Cart](#task-4-e-commerce-product-catalog--shopping-cart)
- [Setup and Local Execution](#setup-and-local-execution)
- [Deployment Architecture](#deployment-architecture)
- [Engineering Highlights](#engineering-highlights)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Developer Contact](#developer-contact)

## Directory Structure

```text
datheon-fullstack-internship/
├── README.md
├── firebase.json
├── .firebaserc
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

A mobile-first developer portfolio that presents professional identity, technical capabilities, project work, resume information, and contact channels in a single semantic document.

### Technical Implementation

- Semantic HTML5 sections for navigation, hero, profile, skills, projects, and contact
- Responsive CSS Grid and Flexbox layouts with mobile breakpoints
- Accessible navigation, dialog controls, labels, and keyboard-compatible interactions
- JavaScript theme persistence and project modal state
- Firebase Hosting-compatible static output

### Key Features

- Mobile hamburger navigation
- Persistent light/dark theme
- Smooth in-page navigation
- Responsive skills and project grids
- Project detail modal dialogs
- Professional resume and contact presentation

### Local Run

```powershell
cd task-1-portfolio
python -m http.server 8080
```

Open `http://localhost:8080/` in a browser.

## Task 2: Dynamic Task Manager & Productivity Tracker

A client-side productivity application with explicit CRUD operations and browser persistence. Application state is derived from a task array and synchronized with LocalStorage.

### Technical Implementation

- DOM event delegation for task actions
- Explicit create, read, update, complete, and delete flows
- LocalStorage serialization for reload-safe persistence
- Filtered views for **All**, **Active**, and **Completed** tasks
- Responsive CSS transitions and task completion feedback

### Key Features

- Create, edit, complete, and delete tasks
- Work, Personal, and Study categories
- Optional due dates
- Status and text filtering
- Progress visualization
- Persistence across browser reloads

### Local Run

```powershell
cd task-2-task-manager
python -m http.server 8080
```

Open `http://localhost:8080/` in a browser.

## Task 3: Real-Time Weather Forecast & Climate Telemetry App

A global weather dashboard implemented with asynchronous API requests. The current implementation uses Open-Meteo, which provides geocoding and forecast data without an API key. OpenWeatherMap can be integrated through the same provider boundary by supplying a configured API key.

### Technical Implementation

- Fetch API with `async/await` and structured error boundaries
- City geocoding before weather retrieval
- Current weather and daily forecast rendering
- Loading, empty, and invalid-location states
- Day/night and precipitation visual themes

### Key Features

- Global city search
- Temperature, apparent temperature, humidity, wind, and pressure
- Sunrise and sunset times
- Five-day forecast
- Loading spinner and recoverable network errors
- Responsive climate-focused interface

### Local Run

```powershell
cd task-3-weather-app
python -m http.server 8080
```

Open `http://localhost:8080/`. The Open-Meteo implementation does not require an API key; OpenWeatherMap integration does.

## Task 4: E-Commerce Product Catalog & Shopping Cart

A browser-based storefront powered by FakeStoreAPI. Cart state, quantity calculations, totals, and checkout confirmation are managed locally without a backend dependency.

### Technical Implementation

- Remote catalog loading with Fetch API and loading/error states
- Derived category and search filtering
- LocalStorage-backed cart state
- Centralized quantity and order-total calculations
- Responsive CSS Grid product presentation

### Key Features

- Product catalog, images, ratings, and prices
- Category and text search filtering
- Persistent slide-out cart drawer
- Quantity increment/decrement and removal
- Subtotal, shipping, tax, and final total
- Demo checkout confirmation

### Local Run

```powershell
cd task-4-ecommerce-cart
python -m http.server 8080
```

Open `http://localhost:8080/`. Internet access is required to retrieve FakeStoreAPI catalog data.

## Setup and Local Execution

### Prerequisites

- Git 2.40 or newer
- Node.js 18 or newer for Firebase CLI workflows
- A modern browser such as Chrome, Edge, or Firefox
- Visual Studio Code

### Clone and Run

```powershell
git clone https://github.com/gamepatt78/datheon-fullstack-internship.git
cd datheon-fullstack-internship
```

### VS Code Live Server

1. Open the repository root in VS Code.
2. Open one task folder.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### Python HTTP Server

From the repository root, serve all modules together:

```powershell
python -m http.server 8080
```

| Module | Local URL |
|---|---|
| Portfolio | `http://localhost:8080/task-1-portfolio/` |
| Task Manager | `http://localhost:8080/task-2-task-manager/` |
| Weather App | `http://localhost:8080/task-3-weather-app/` |
| E-Commerce Store | `http://localhost:8080/task-4-ecommerce-cart/` |

## Deployment Architecture

### Firebase Hosting

Firebase CLI is recommended for static, independently deployable applications.

```powershell
npm.cmd install -g firebase-tools
firebase.cmd login
firebase.cmd init hosting
firebase.cmd deploy
```

For repository-wide multi-site deployment, configure the root `firebase.json` with named targets:

```json
{
  "hosting": [
    { "target": "task-1", "public": "task-1-portfolio" },
    { "target": "task-2", "public": "task-2-task-manager" },
    { "target": "task-3", "public": "task-3-weather-app" },
    { "target": "task-4", "public": "task-4-ecommerce-cart" }
  ]
}
```

Deploy all configured targets from the repository root:

```powershell
firebase.cmd deploy --only hosting
```

### Vercel

Each task can be deployed independently on Vercel:

1. Import `gamepatt78/datheon-fullstack-internship` in the Vercel dashboard.
2. Select one task folder as the project root.
3. Use no framework preset for the current static implementation.
4. Leave the build command empty and set the output directory to the project root.
5. Deploy, then repeat for each task directory.

## Engineering Highlights

- Separation of concerns across HTML structure, CSS presentation, and JavaScript behavior
- Mobile-first responsive layouts and predictable component spacing
- Defensive browser storage parsing and explicit empty states
- Centralized rendering for CRUD operations, filters, API output, and cart calculations
- Progressive enhancement with lightweight static hosting requirements
- Independent deployment targets allow modules to be released without affecting other tasks
- No framework dependency reduces setup time and hosting overhead

## Future Enhancements

- Migrate state-heavy modules to React and TypeScript
- Replace demo checkout behavior with a real payment provider
- Move Task Manager data to Firebase Authentication and Firestore
- Add unit and browser integration tests
- Add PWA support and offline caching
- Introduce automated linting, formatting, and accessibility checks
- Add GitHub Actions preview deployments for pull requests
- Add OpenWeatherMap configuration behind the weather-provider interface
- Improve image optimization and API response caching

## License

This repository is intended for internship evaluation and educational use. Add an explicit license, such as the MIT License, before using the projects commercially or distributing derivative work.

## Developer Contact

| Developer | GitHub | Contact |
|---|---|---|
| gamepatt78 | [github.com/gamepatt78](https://github.com/gamepatt78) | Contact through the GitHub profile |

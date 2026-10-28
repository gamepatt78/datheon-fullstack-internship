# Full Stack Web Development Internship

A collection of four responsive web applications completed as part of the Datheon Full Stack Web Development Internship.

## Live Applications

| Task | Application | Live URL | Source |
|---|---|---|---|
| 1 | Personal Developer Portfolio | [Firebase Hosting](https://full-stack-web-internship.web.app) | [View folder](task-1-personal-developer-portfolio) |
| 2 | Dynamic Task Manager | [Firebase Hosting](https://full-stack-web-internship.web.app/task-2-dynamic-task-manager/) | [View folder](task-2-dynamic-task-manager) |
| 3 | Weather Dashboard | [Firebase Hosting](https://full-stack-web-internship.web.app/task-3-weather-forecast-app/) | [View folder](task-3-weather-forecast-app) |
| 4 | Aster Store | [Firebase Hosting](https://full-stack-web-internship.web.app/task-4-e-commerce-product-catalog/) | [View folder](task-4-e-commerce-product-catalog) |

> Add or replace these links after each task is deployed to Firebase Hosting.

## Repository

- **GitHub:** https://github.com/gamepatt78/datheon-fullstack-internship
- **Firebase project:** `full-stack-web-internship`

## Tasks

### Task 1 — Personal Developer Portfolio

A responsive developer portfolio with a professional profile, skills, project showcase, contact links, theme switching, mobile navigation, smooth scrolling, and project modals.

**Technologies:** HTML5, CSS3, JavaScript (ES6+), Firebase Hosting

### Task 2 — Dynamic Task Manager

A complete productivity tracker with task creation, editing, deletion, completion, categories, due dates, status filters, search, animations, and browser `localStorage` persistence.

**Technologies:** HTML5, CSS3, JavaScript (ES6+), LocalStorage

### Task 3 — Weather Forecast Dashboard

A live weather application with city search, asynchronous API requests, current weather metrics, loading and error states, dynamic backgrounds, icons, and a five-day forecast.

**Technologies:** HTML5, CSS3, JavaScript Fetch API, Open-Meteo API

### Task 4 — E-Commerce Product Catalog

A storefront connected to FakeStoreAPI with category and text filtering, product ratings, a persistent cart drawer, quantity controls, totals, tax and shipping calculations, and checkout confirmation.

**Technologies:** HTML5, CSS Grid, JavaScript, FakeStoreAPI, LocalStorage

## Folder Structure

```text
datheon-fullstack-internship/
├── README.md
├── task-1-personal-developer-portfolio/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── firebase.json
│   └── README.md
├── task-2-dynamic-task-manager/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── firebase.json
│   └── README.md
├── task-3-weather-forecast-app/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── firebase.json
│   └── README.md
└── task-4-e-commerce-product-catalog/
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── firebase.json
    └── README.md
```

## Run Locally

From the repository folder, serve all four applications with Python:

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/task-1-personal-developer-portfolio/
http://localhost:8080/task-2-dynamic-task-manager/
http://localhost:8080/task-3-weather-forecast-app/
http://localhost:8080/task-4-e-commerce-product-catalog/
```

## Deploy to Firebase Hosting

From each task folder:

```powershell
firebase.cmd login
firebase.cmd init hosting
firebase.cmd deploy
```

Each task's `firebase.json` uses its current folder as the Hosting public directory.

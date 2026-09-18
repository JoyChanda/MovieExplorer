# 🎬 MovieExplorer — React Application

> **MovieExplorer** is a modern, responsive web application built with React that allows users to discover, search, and explore TV shows and movies in real-time powered by the public **TVMaze API**.

---

## 🛠️ Technology Stack

- **Core**: JavaScript (ES6+), React 18+
- **Routing**: React Router DOM (`react-router-dom`)
- **Icons**: Lucide React (`lucide-react`)
- **Styling**: Vanilla CSS (Custom Design Tokens, HSL tailored colors, Glassmorphism, CSS Grid & Flexbox)
- **Data Source**: [TVMaze REST API](https://www.tvmaze.com/api)
- **Build Tool**: Vite

---

## ✨ Features & Requirements Implemented

### 1. Home Page
- **Navbar**: Sticky glassmorphism header featuring brand logo `🎬 MovieExplorer`, navigation links, and a call-to-action button.
- **Hero Banner**: High-impact background backdrop, gradient typography, engaging headline, and primary CTA navigating to the Movie Listing page.
- **Features Teaser**: Highlights search capabilities, live ratings, interactive modal features, and device responsiveness.
- **Footer**: Brand info, copyright (`© 2026 MovieExplorer`), live TVMaze API credit, and GitHub social links.

### 2. Movie / Show Listing Page
- **All Shows Integration**: Fetches show lists from `GET https://api.tvmaze.com/shows` on page load.
- **Live Search**: Real-time search bar using `GET https://api.tvmaze.com/search/shows?q=:query`.
- **Loading State**: Custom animated spinner indicator displayed during network calls.
- **Error State**: User-friendly error alert card with a "Try Again" retry trigger.
- **Empty State**: Dedicated feedback view with a clear search button when zero titles match query strings.

### 3. Reusable Movie Cards
- High-resolution poster images with automatic fallback handling on image load errors.
- Movie title, release year, star rating badge (`⭐ 8.5`).
- `See Details` interactive button opening the details modal overlay.

### 4. Interactive Movie Details Modal
- Full-width backdrop poster image.
- Comprehensive overview summary with raw HTML tags cleanly stripped out.
- Rating, release year, runtime, status, network/channel, and genre badges.
- **Multiple Close Interactions**:
  - Close via top-right `✕` button.
  - Close via bottom `Close` button.
  - Close by clicking outside on the backdrop overlay.
  - Close using the `Escape` key on keyboard.
  - Locks background page scrolling when modal is open.

### 5. Responsive Design & UX
- **Mobile**: Single-column layout, touch-friendly buttons, responsive search bar.
- **Desktop**: 3–4+ column responsive grid with smooth hover transitions.

---

## 🌐 API Endpoints Used

| Feature | HTTP Method | Endpoint | Example |
| :--- | :--- | :--- | :--- |
| **All Shows** | `GET` | `https://api.tvmaze.com/shows` | `GET https://api.tvmaze.com/shows` |
| **Search Shows** | `GET` | `https://api.tvmaze.com/search/shows?q=:query` | `GET https://api.tvmaze.com/search/shows?q=girls` |

---

## 📁 Project Folder Structure

```text
Movietour/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Static media assets
│   ├── components/          # Reusable UI components
│   │   ├── EmptyState.jsx   # Zero search results component
│   │   ├── EmptyState.css
│   │   ├── ErrorMessage.jsx # API error handler with retry action
│   │   ├── ErrorMessage.css
│   │   ├── Footer.jsx       # Global footer with copyright & links
│   │   ├── Footer.css
│   │   ├── Hero.jsx         # Hero banner component
│   │   ├── Hero.css
│   │   ├── Loader.jsx       # Animated spinner component
│   │   ├── Loader.css
│   │   ├── Navbar.jsx       # Top navigation header
│   │   ├── Navbar.css
│   │   ├── SearchBar.jsx    # Search input component
│   │   ├── SearchBar.css
│   │   ├── ShowCard.jsx     # Reusable movie card component
│   │   ├── ShowCard.css
│   │   ├── ShowModal.jsx    # Movie details popup overlay
│   │   └── ShowModal.css
│   ├── pages/               # Page view components
│   │   ├── Home.jsx         # Home page with Hero & Features
│   │   ├── Home.css
│   │   ├── Movies.jsx       # Movie listing & search page
│   │   └── Movies.css
│   ├── services/            # API services
│   │   └── tvmazeApi.js     # TVMaze API fetch methods
│   ├── utils/               # Utility functions
│   │   └── formatters.js    # HTML stripper & date formatters
│   ├── App.jsx              # Main App layout & React Router setup
│   ├── App.css
│   ├── index.css            # Global CSS design tokens
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Local Setup & Installation Instructions

Follow these steps to run the project locally on your system:

### 1. Clone the repository & navigate to project folder
```bash
cd Movietour
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```

---

## 📌 Development Commit Roadmap

- `PART 1`: `feat: initialize project and build navbar`
- `PART 2`: `feat: build home hero and footer`
- `PART 3`: `feat: integrate TVMaze shows API`
- `PART 4`: `feat: add show search functionality`
- `PART 5`: `feat: add show cards and details modal`
- `PART 6`: `feat: polish responsive UI and documentation`

---

## 📄 License & Attribution

- Built as part of the **Foundation Program**.
- Data powered by [TVMaze API](https://www.tvmaze.com/api).
- Developed by **Joyc** — © 2026 MovieExplorer.

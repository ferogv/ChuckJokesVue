# ChuckJokesVue

Minimal Vue 3 + Vite app for Activity 12 and Homework 10: displays a list of Chuck Norris jokes as responsive cards using components and `v-for`, styled for a dark theme.

## What it does
- Stores the `chuck` array in `App.vue` with objects `{ icon_url, value }`.
- Renders jokes as responsive cards using a reusable component `ChuckCard.vue`.
- Responsive layout: 3 cards per row on large screens, 2 per row on medium, 1 per row on small.
- Cards have equal sizing, a Copy button, and dark-theme styling in `src/assets/styles.css`.

## Project structure
- `index.html` — Vite entry; includes Bootstrap CSS and project stylesheet  
- `src/`
  - `main.js` — mounts the app
  - `App.vue` — primary view, provides data and renders grid of cards
  - `components/ChuckCard.vue` — card component (props: `icon_url`, `value`)
  - `assets/styles.css` — global styles and theme
- `public/` — static assets (optional local avatar)
- `package.json`, `vite.config.js`, `README.md`

## Run locally (development)
Prereqs: Node 20.x or 22.x, npm.

1. Install dependencies

    npm install

2. Start dev server (two equivalent options)

    # cross-platform (npm script)
    npm run dev

    # or on Windows PowerShell from project root
    .\node_modules\.bin\vite.cmd

3. Open the Local URL printed by Vite (typically `http://localhost:5173/`).

Notes:
- If you placed avatars in `public/` use paths like `/chuck-norris.png`; otherwise the project uses CDN URLs by default.
- Ensure `src/main.js` imports `./assets/styles.css` so theme styles load.

## Build / Preview

    npm run build
    npm run preview

## Homework 10 / Task10 summary
- Added `src/components/ChuckCard.vue` that accepts `icon_url` and `value` props and uses Bootstrap layout integrated with the dark theme.
- Updated `src/App.vue` to provide the modified `chuck` array and render a responsive grid (`col-12 col-md-6 col-lg-4 d-flex`).
- Included Bootstrap CSS CDN in `index.html`.
- Ensured equal-size behavior via flex rules in `ChuckCard.vue` and small overrides in `src/assets/styles.css`.
- Implemented copy-to-clipboard behavior on each card.
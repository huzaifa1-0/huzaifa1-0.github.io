# Huzaifa Rashid's Portfolio

A modern, fast, component-based React portfolio application powered by Vite.

## Features
*   **React 19**: Component-driven UI development.
*   **Vite**: Extremely fast build tool and development server.
*   **Responsive Design**: Mobile-friendly layout with automatic light and dark themes.
*   **Single-page layout**: Anchor navigation between About, Work, Experience, Skills and Contact, with the active section highlighted.
*   **Interactive hero**: A canvas "embedding map" of skills where the cursor acts as a search query and the nearest skills are retrieved with a similarity score. It respects `prefers-reduced-motion`.
*   **Resume**: The downloadable PDF lives in `public/Huzaifa_Rashid_Resume.pdf`; replace it to update the download.

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
Clone this repository and run the following command in the project directory to install dependencies:
```bash
npm install
```

### Development
Start the local development server:
```bash
npm run dev
```

### Production Build
Build the project for production:
```bash
npm run build
```
The production-ready assets will be located in the `dist` directory.

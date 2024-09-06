# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## App Component

The `App.jsx` file is the main component of the application. It includes the following functionalities:

1. **Loading Screen**: Displays a loading screen with a fade-in animation for 3 seconds before showing the main content.
2. **Countdown Timer**: Calculates the time left until a specified date (November 22, 2024) and displays it in days, hours, minutes, and seconds.
3. **Navigation Bar**: Provides links to different sections of the website such as About, Gallery, Ceremony, RSVP, Blog, and Registry.
4. **Main Content**: Displays the main content including a heading, images, and a quote.

### Key Features

- **Loading Screen**: The loading screen is implemented using a separate `Loading` component that displays a GIF with a fade-in animation.
- **Countdown Timer**: The countdown timer is updated every second using the `useEffect` hook and `setTimeout`.
- **Navigation Bar**: The navigation bar contains links to different sections of the website, each represented by a `Link` component from `react-router-dom`.
- **Main Content**: The main content includes a heading, images, and a quote from William Shakespeare.

# Install dependencies
npm install

# Start the development server
npm run dev
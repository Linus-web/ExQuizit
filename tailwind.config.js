// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'hsl(0, 50%, 90%)', // Light mode primary color
          dark: 'hsl(0, 50%, 10%)',  // Dark mode primary color
        },
        secondary: {
          light: 'hsl(0, 50%, 95%)', // Light mode secondary color
          dark: 'hsl(0, 50%, 15%)',  // Dark mode secondary color
        },
        tertiary: {
          light: 'hsl(60, 80%, 20%)', // Light mode accent color
          dark: 'hsl(60, 80%, 80%)',
        },
        accent: {
          light: 'hsl(300, 80%, 20%)', // Light mode accent color
          dark: 'hsl(300, 80%, 80%)',  // Dark mode accent color
        },
      },
    },
  },
  plugins: [],
}

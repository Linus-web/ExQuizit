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
          light: 'hsl(236, 50%, 90%)', // Light mode primary color
          dark: 'hsl(236, 50%, 10%)',  // Dark mode primary color
        },
        secondary: {
          light: 'hsl(236, 50%, 95%)', // Light mode secondary color
          dark: 'hsl(236, 50%, 15%)',  // Dark mode secondary color
        },
        tertiary: {
          light: 'hsl(176, 80%, 20%)', // Light mode accent color
          dark: 'hsl(176, 80%, 80%)',
        },
        accent: {
          light: 'hsl(296, 80%, 20%)', // Light mode accent color
          dark: 'hsl(296, 80%, 80%)',  // Dark mode accent color
        },
      },
    },
  },
  plugins: [],
}

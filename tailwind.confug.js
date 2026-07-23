/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
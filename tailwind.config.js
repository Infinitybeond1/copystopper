// tailwind.config.js
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#DFF6FF',
      'accent-light': '#47B5FF',
      'accent-dark': '#256D85',
      'black': '#06283D',
    },
  },
  plugins: [],
}
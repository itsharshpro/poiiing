/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hw : "'Gloria Hallelujah', serif",
        excalifont: ['Excalifont', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


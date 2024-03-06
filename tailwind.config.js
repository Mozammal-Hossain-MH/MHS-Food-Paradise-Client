/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel"]
      }
    },
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [require("daisyui")],
}


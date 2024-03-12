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
      },
      boxShadow: {
        large: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [require("daisyui")],
}


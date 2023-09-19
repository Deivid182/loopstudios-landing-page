/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': "hsl(0, 0%, 100%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
        "slate-gray": "#6D6D6D",
      },
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
        Alata: ["Alata", "sans-serif"],
      }
    },
  },
  plugins: [],
}
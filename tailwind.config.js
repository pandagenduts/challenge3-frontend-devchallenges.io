/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      boxShadow: {
        bsOne: '0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
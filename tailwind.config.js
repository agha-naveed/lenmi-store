/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "muli-light": ["muli-light"],
        "muli-regular": ["muli-regular"],
        "muli-semibold": ["muli-semibold"],
        "muli-bold": ["muli-bold"]
      },
      colors: {
        orangeClr: "#f08a06"
      }
    },
  },
  plugins: [],
}
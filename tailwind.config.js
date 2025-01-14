/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "opensans-light": ["opensans-light"],
        "opensans-regular": ["opensans-regular"],
        "opensans-medium": ["opensans-medium"],
        "opensans-semibold": ["opensans-semibold"],
        "opensans-bold": ["opensans-bold"],
        "opensans-extraBold": ["opensans-extraBold"]
      },
      colors: {
        orangeClr: "#f08a06",
        lightGray: "rgb(241, 241, 241)"
      }
    },
  },
  plugins: [],
}
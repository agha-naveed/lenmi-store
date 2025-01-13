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
      animation: {
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
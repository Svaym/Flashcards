/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  plugins: [animations],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "5xl" : { max: "1920px" },
      "4xl" : { max: "1870px" },
      "3xl" : { max: "1680px" },
      "2xl" : { max: "1400px" },
      "xl" : { max: "1200px" },
      "lg" : { max: "992px" },
      "md" : { max: "768px" },
      "sm" : { max: "576px" },
      "xs" : { max: "450px" },
      "xxs" : { max: "375px" },
    },
    fontFamily: {
      'open': ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'darkGray': '#333333',
        'mainColor': '#4CAF50',
        'accentColor': '#cdff0b',
      },
    },
  },
}


/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "customPurple": {
          DEFAULT: "#293264",
          button: "#4D5B9E",
          answer: "#D6DBF5"
        },

        "checked": {
          wrong: "#F8BCBC",
          correct: "#94D7A2"
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
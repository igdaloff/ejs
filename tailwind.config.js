const { colors } = require('five-server/lib/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        green: '#659B81',
      },
      fontFamily: {
        sans: ['Work Sans', 'Helvetica Neue', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      screens: {},
    },
  },
  plugins: [],
}

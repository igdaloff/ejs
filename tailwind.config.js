const { colors } = require('five-server/lib/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    colors: {
      green: '#659B81',
      black: '#000000',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Work Sans', 'Helvetica Neue', 'sans-serif'],
      serif: ['Georgia', 'Times New Roman', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

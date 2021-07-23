const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        rexBaground : colors.coolGray[500],
        camptosaurusBaground : colors.sky[500],
        stegosaurusBaground: colors.indigo[700]
      }
  },
    },
  variants: {
    extend: {},
  },
  plugins: [],
  
}

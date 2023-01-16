/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        main: colors.white,
        secondary: { ...colors.neutral, ...{ 1000: '#000000' } },
        accent: colors.violet,
      },
      // fontFamily: {
      //   lexend: ["'Lexend'", 'sans-serif'],
      //   display: ["'Montserrat'", 'sans-serif'],
      //   sansita: 'Sansita Swashed, cursive',
      // },
      translate: {
        screen: '100vw',
      },
    },
  },
  plugins: [],
};

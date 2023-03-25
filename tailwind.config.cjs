/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const mainColors = [
  '#f5f5f5',
  '#e5e5e5',
  '#d4d4d4',
  '#a3a3a3',
  '#737373',
  '#525252',
  '#404040',
  '#333333',
  '#262626',
  '#1e1e1e',
  '#171717',
  '#111111',
  '#0a0a0a',
  '#040404',
].reverse();

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      '2xs': '400px',
      xs: '480px',
      ...defaultTheme.screens,
      '2xl': '1400px',
    },
    extend: {
      colors: {
        main: mainColors,
        'main-reverse': [...mainColors].reverse(),
        accent: colors.rose,
      },
      fontSize: {
        '7.5xl': ['5.25rem', '1'],
      },
      maxWidth: {
        '8xl': '87.5rem', // 1400px
      },
      rotate: {
        135: '135deg',
      },
      fontFamily: {
        righteous: ['Righteous', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      translate: {
        screen: '100vw',
      },
      keyframes: {
        arrowAnimation: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-7px) rotate(45deg)',
          },
          '40%, 60%': { opacity: 1 },
          '100%': {
            opacity: 0,
            transform: 'translateY(3px) rotate(45deg)',
          },
        },
        hueRotate: {
          '0%': {
            filter: 'hue-rotate(0deg)',
          },
          '100%': {
            filter: 'hue-rotate(360deg)',
          },
        },
      },
      animation: {
        arrowAnimation: 'arrowAnimation 2s linear infinite',
        spinSlowly: 'spin 20s linear infinite',
        hueRotate: 'hueRotate 15s linear infinite',
      },
    },
  },
  plugins: [],
};

const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        breath: {
          '0%, 100%': { transform: 'translate(0px,0px) scaleX(0.9)' },
          '50%': {
            transform: 'translate(10px,-30px) scaleX(1.2)',
          },
        },
        flash: {
          '0%': {
            filter: 'hue-rotate(0deg)',
            transform: 'rotate(0deg) scale(1)',
          },
          '50%': {
            filter: 'hue-rotate(180deg)',
            transform: 'rotate(180deg) scale(1.5,1)',
          },
          '100%': {
            filter: 'hue-rotate(360deg)',
            transform: 'rotate(360deg) scale(1)',
          },
        },
      },
      animation: {
        breath: '10s ease-in-out infinite breath',
        flash: '1.5s ease flash ',
      },
      fontFamily: {
        cursive: ['Bowlby One', 'cursive'],
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-red': '#D7263D',
        'brand-orange': '#F46036',
        'brand-blue': '#2E294E',
        'brand-green': '#1B998B',
        'brand-yellow': '#C5D86D',
      },
    },
  },
  plugins: [],
}

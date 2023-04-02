const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        breath: {
          '0%, 100%': { transform: 'translate(0px,0px)' },
          '50%': {
            transform: 'translate(10px,-30px) scaleX(1.2)',
          },
        },
      },
      animation: {
        breath: 'breath 10s ease-in-out infinite',
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

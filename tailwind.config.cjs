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
          from: {
            filter: 'hue-rotate(0deg)',
          },
          to: {
            filter: 'hue-rotate(360deg)',
          },
        },
      },
      animation: {
        breath: '10s ease-in-out infinite breath',
        flash: '3s linear infinite flash ',
      },
      fontFamily: {
        cursive: ['Bowlby One', 'cursive'],
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
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

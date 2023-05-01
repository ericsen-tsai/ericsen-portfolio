const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
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
        'brand-smoke': '#f6f6f6',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        xl: '0 16px 32px var(--tw-shadow-color)',
        outline:
          '2px 2px 0px var(--tw-shadow-color), 1px 1px 0px var(--tw-shadow-color), 2px 2px 0px var(--tw-shadow-color), 2px 3px 0px var(--tw-shadow-color)',
        glow: '0 0 5px #f6f6f6, 0 0 10px #f6f6f6, 0 0 15px #ec4899',
      },
      dropShadow: {
        glow: [
          '0 0 8px rgba(119, 190, 182, 0.8)',
          '0 0 16px rgba(27, 153, 139, 0.8)',
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

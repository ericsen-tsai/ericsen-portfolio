/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        skewing: {
          '0%, 100%': { transform: 'skew(0deg, 0deg) translateY(0px)' },
          '50%': { transform: 'skew(-1deg, -1deg) translateY(-10px)' },
        },
      },
      animation: {
        skewing: 'skewing 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

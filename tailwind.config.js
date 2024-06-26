/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "VT": ["VT323", "sans-serif"],
        "DJ": ["DJ", "sans-serif"],
      },
    },
  },
  plugins: [],
}


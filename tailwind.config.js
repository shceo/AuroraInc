/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customDark: "#0C0C0C",
      },
      screens: {
        xs: { max: '380px' },
      },
    },
  },
  plugins: [],
};

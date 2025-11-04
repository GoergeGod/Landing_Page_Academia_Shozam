/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f3d2e', // verde oscuro
          50: '#e6f2ee',
          100: '#cfe6de',
          200: '#9fd0bf',
          300: '#6fb9a0',
          400: '#3fa381',
          500: '#1e8363',
          600: '#16634c',
          700: '#104a39',
          800: '#0f3d2e',
          900: '#0c3125',
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#38343D',
          200: '#686071',
          300: '#797085',
          400: '#F4EFFA',
          500: '#FDFCFE',
        },
        red: {
          500: '#AA2222',
        },
      },
    },
  },
  plugins: [],
}

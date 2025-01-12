/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#edfaff',
          100: '#d6f2ff',
          200: '#b5eaff',
          300: '#83dfff',
          400: '#48cbff',
          500: '#1eadff',
          600: '#068fff',
          700: '#007bff',
          800: '#085ec5',
          900: '#0d519b',
          950: '#0e315d',
        },
        accent: {
          50: '#fafce9',
          100: '#f1f7d0',
          200: '#e4f0a6',
          300: '#d0e472',
          400: '#b4d137',
          500: '#9cba28',
          600: '#79941c',
          700: '#5d711a',
          800: '#4a5a1a',
          900: '#404d1a',
          950: '#202a09',
        },
      },
    },
  },
  plugins: [],
}

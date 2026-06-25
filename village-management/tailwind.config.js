/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f7',
          100: '#d4dcec',
          200: '#a9b9d9',
          300: '#7e96c6',
          400: '#5373b3',
          500: '#36548f',
          600: '#283f6f',
          700: '#1f3257',
          800: '#16243f',
          900: '#0c1527',
          950: '#070d18',
        },
        gold: {
          50: '#fdf8ec',
          100: '#faeec9',
          200: '#f4dd9c',
          300: '#eecb6e',
          400: '#e7ba47',
          500: '#d4af37',
          600: '#b8932a',
          700: '#937322',
          800: '#6e561a',
          900: '#4a3a12',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans Thai"', '"Inter"', 'sans-serif'],
        serif: ['"Noto Serif Thai"', 'serif'],
      },
      boxShadow: {
        gold: '0 4px 14px 0 rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
}

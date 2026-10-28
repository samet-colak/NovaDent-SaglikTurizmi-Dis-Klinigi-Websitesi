/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9fa',
          100: '#d7eff2',
          200: '#b2e0e6',
          300: '#75b2bf',
          400: '#4fa1b1',
          500: '#327c8c', // official clinic logo teal
          600: '#286573',
          700: '#23525e',
          800: '#21444e',
          900: '#1e3a43',
          950: '#0f2329',
        },
        navy: {
          800: '#0f172a',
          900: '#0a0f1d',
          950: '#060913',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(50, 124, 140, 0.3)',
        'glow-lg': '0 0 40px -10px rgba(50, 124, 140, 0.4)',
      }
    },
  },
  plugins: [],
}

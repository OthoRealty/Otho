/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foundation: '#F7F5F0',
        charcoal: {
          DEFAULT: '#111111',
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          400: '#777777',
          600: '#555555',
          800: '#222222',
          900: '#111111',
          950: '#0A0A0A',
        },
        slateSecondary: '#555555',
        luxuryGold: {
          DEFAULT: '#B08D57',
          light: '#C8A870',
          dark: '#8C6C38',
          subtle: 'rgba(176, 141, 87, 0.08)',
          border: 'rgba(176, 141, 87, 0.25)',
        },
        fineBorder: {
          DEFAULT: '#DDD9D0',
          light: '#ECE8DF',
          dark: '#CCC7BC',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'superwide': '0.22em',
      },
      boxShadow: {
        'fine': '0 1px 2px 0 rgba(17, 17, 17, 0.04)',
        'elevated': '0 12px 32px -4px rgba(17, 17, 17, 0.06)',
        'modal': '0 24px 64px -12px rgba(17, 17, 17, 0.16)',
      },
    },
  },
  plugins: [],
}

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#0b1120',
          900: '#121a31',
          800: '#1f2944',
          600: '#6a4d9d',
          500: '#7f5cc6',
          400: '#9b86e9',
        },
      },
      boxShadow: {
        glow: '0 20px 60px rgba(113, 83, 196, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;

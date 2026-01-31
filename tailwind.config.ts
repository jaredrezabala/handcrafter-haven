import type { Config } from 'tailwindcss';

const config: Config = {
 content: [
  './src/**/*.{ts,tsx}', // Esto cubre todo en src/
],
  theme: {
    extend: {
      colors: {
        terracotta: '#C97A63',
        sage: '#7D9D8C',
        cream: '#FAF7F2',
        charcoal: '#2E2E2E',
        mustard: '#E2B44A',
      },
      borderRadius: {
        soft: '10px',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

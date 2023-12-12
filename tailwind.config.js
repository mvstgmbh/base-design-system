import baseFigmaTheme from './figmaCrawler/output/baseFigmaTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...baseFigmaTheme.theme,
    },
  },
  plugins: [],
};

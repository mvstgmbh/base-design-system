import baseFigmaTheme from './figmaCrawler/output/baseFigmaTheme';

const { fontSize, colors, spacing, borderRadius } = baseFigmaTheme.theme;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize,
    extend: {
      colors,
      spacing,
      borderRadius,
    },
  },
  plugins: [],
};

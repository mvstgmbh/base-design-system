import baseFigmaTheme from './figmaCrawler/output/baseFigmaTheme';

const { fontSize, colors, spacing, borderRadius, screens } = baseFigmaTheme.theme;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize,
    screens,
    extend: {
      colors,
      spacing,
      borderRadius,
    },
  },
  plugins: [],
};

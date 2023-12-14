import baseFigmaTheme from './generated/theme';

const { fontSize, colors, spacing, borderRadius, screens } = baseFigmaTheme.theme;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize,
    screens,
    borderRadius,
    extend: {
      colors, // move to overrides
      spacing,
    },
  },
  plugins: [],
};

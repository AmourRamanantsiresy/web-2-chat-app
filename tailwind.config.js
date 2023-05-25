// tailwind.config.js
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.transition-1': {
          transition: 'all 500ms !important',
        },
        '.transition-top': {
          transitionProperty: 'opacity, top',
          transitionDuration: '500ms',
          transitionTiming: 'ease-in-out',
        },
        '.slide-bottom-0': {
          top: 0,
          opacity: 0,
        },
        '.slide-bottom-1': {
          top: '40%',
          opacity: 1,
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};

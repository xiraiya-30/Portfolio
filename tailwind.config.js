/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
        'nothing-45': ['Nothing-45'],
        'nothing-47': ['Nothing-47'],

      },
    },
  },
  plugins: [],
});

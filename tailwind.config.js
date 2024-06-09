/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      screens: {
        'sm': '300px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        
        'nothing-45': ['Nothing-45'],
        'sans': ['Nothing-47'],

      },

      animation: {
        'pop-up': 'pop-up 1.3s ease-out',
        'pop-down': 'pop-down 1.3s ease-out',
        'pop-left': 'pop-left 1.3s ease-out',
        'wiggle': 'wiggle 3s infinite' 
      },
      keyframes: {
        'wiggle': {
          '0%,100%': {
            transform: 'translateX(0)',
            
          },
          '50%': {
            transform: 'translateX(-14%)',
            
          },
          
          
        },
        'pop-up': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '80%': {
            transform: 'translateY(-20%)',
            opacity: '1',
          },
          '90%': {
            transform: 'translateY(10%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'pop-down': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '80%': {
            transform: 'translateY(5%)',
            opacity: '1',
          },
          '90%': {
            transform: 'translateY(-5%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'pop-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '80%': {
            transform: 'translateX(10%)',
            opacity: '1',
          },
          '90%': {
            transform: 'translateX(-5%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
});

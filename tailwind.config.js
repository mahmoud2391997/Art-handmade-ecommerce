/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "eb-garamond": ['"EB Garamond"', "serif"],
      },
      keyframes: {
        moveVertical: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }, 
        },
      },
      animation: {
        moveVertical: 'moveVertical 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
});

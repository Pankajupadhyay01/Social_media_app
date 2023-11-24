/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Hero: ' linear-gradient(to right top, #aff6fc, #a8eeff, #b5e3ff, #d0d5ff, #f0c5ff)',
        main: 'linear-gradient(to left bottom, #001738, #121b4b, #2d1c5a, #4b1766, #6a036c)',
      },
      colors: {
        mustard: "#fdcc0d",
        cyan: "#c6f3ea"
      },
      keyframes: {
        Bounce: {
          '100%': { transform: ' translateY(10px); ' }
        },
        bganimate: {
          '0%': { background: 'white', color: 'black' },
          '50%,100%': { background: 'black', color: 'white' },
        }
      }
    },
  },
  plugins: [],
}
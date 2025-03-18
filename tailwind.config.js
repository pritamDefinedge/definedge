/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // content: ['./index.html', './public/**/*.html', './src/*/*.{vue,js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        border: "border 4s linear infinite",
        "wave-move": "waveMove 0.5s linear infinite",
        "move-on-wave-1": "moveOnWave 2s linear infinite",
        "move-on-wave-2": "moveOnWave 2.5s linear infinite",
        "move-on-wave-3": "moveOnWave 3s linear infinite",
        "move-on-wave-4": "moveOnWave 3.5s linear infinite",
        "move-on-wave-5": "moveOnWave 4s linear infinite",
        "move-on-wave-6": "moveOnWave 4.5s linear infinite",
        "move-on-wave-7": "moveOnWave 5s linear infinite",
        "move-on-wave-8": "moveOnWave 5.5s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
        waveMove: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(200px)" },
        },
        moveOnWave: {
          "0%": { transform: "translateX(0) scale(0.2)", opacity: "0" },
          "25%": { transform: "translateX(50px) scale(1)", opacity: "1" },
          "50%": { transform: "translateX(100px) scale(1)", opacity: "1" },
          "75%": { transform: "translateX(150px) scale(1)", opacity: "1" },
          "100%": { transform: "translateX(200px) scale(0.2)", opacity: "0" },
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-motion")],
};

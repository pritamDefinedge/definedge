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
        "wave-move": "waveMove 1.5s linear infinite",
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
          "25%": { transform: "translateX(40px) scale(1)", opacity: "1" },
          "50%": { transform: "translateX(80px) scale(1)", opacity: "1" },
          "75%": { transform: "translateX(120px) scale(1)", opacity: "1" },
          "100%": { transform: "translateX(150px) scale(0.2)", opacity: "0" },
        },
      },
      screens: {
        "ipad-mini": { min: "768px", max: "834px" }, // iPad Mini
        "ipad-air": { min: "820px", max: "1180px" }, // iPad Air
        "ipad-pro11": { min: "834px", max: "1194px" }, // iPad Pro 11"
        "ipad-pro12": { min: "1024px", max: "1366px" }, // iPad Pro 12.9"
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-motion")],
};

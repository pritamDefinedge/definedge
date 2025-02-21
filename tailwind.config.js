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
        sans: ["Popins", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        100: "36rem",
        18: "4.5rem",
      },
      fontSize: {
        xxs: "0.6rem",
        "0xl": "1.625rem",
      },
      colors: {
        red: {
          550: "#FF3C3C",
        },
        sky: {
          901: "#9FBBDF",
          900: "#002d67",
          800: "#0b3872",
          700: "#134585",
          400: "#47c9f3",
          100: "#f1fbff",
          500: "#E5FAFF",
          101: "#2DC51C",
          102: "#EC0000",
          103: "#F1FBFF",
          104: "#effafe",
          // 105: "#daf5ff29",
          105: "#daf5ff1c",
          600: "#142d67",
          50: "#EBF1F7",
          25: "#2B9BC1",
        },
        newgreen: {
          400: "#58F347",
        },
        backgroundImage: {
          homeBgImage: "url('@/assets/homePageBg.png')",
        },
        boxShadow: {
          "3xl": "0 35px 60px 15px rgba(0,0,0,1)",
        },
        tableBorder: {
          300: "#dde4f1",
        },
        tableCellBg: {
          300: "#f6f9ff",
        },
        margin: {
          65: "65rem",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-motion")],
};

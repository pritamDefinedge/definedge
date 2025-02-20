module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#0369e0",
          800: "#1e40af",
          900: "#002D67",
          950: "#172554",
        },
      },
    },
    fontFamily: {
      body: ["Poppins", "Inter", "Roboto", "sans-serif"],
      sans: ["Poppins", "Inter", "Roboto", "sans-serif"],
    },
    gridTemplateColumns: {
      "70/30": "70% 28%",
    },
  },
  plugins: [require("tailwindcss-motion")],
};

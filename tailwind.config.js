/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Supreme", ...defaultTheme.fontFamily.sans],
        display: ["Clash Grotesk", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

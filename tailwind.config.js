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
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      pgray: {
        100: "#FBFBFB",
        200: "#EAEAEA",
        300: "#D2D2D2",
        500: "#A1A1A1",
        700: "#494949",
        900: "#151515",
      },
    },
  },
  plugins: [],
};

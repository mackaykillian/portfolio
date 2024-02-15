/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Supreme", ...defaultTheme.fontFamily.sans],
        display: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      neutral: {
        100: "#FDFDFD",
        200: "#F5F5F5",
        300: "#E9E9E9",
        400: "#D9D9D9",
        500: "#BDBDBD",
        600: "#888888",
        700: "#676767",
        800: "#3F3F3F",
        900: "#101010",
      },
    },
  },
  plugins: [],
};

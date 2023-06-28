/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      black: "#111517",
      "grey-dark": "#202C36",
      "grey-light": "#2B3844",
      white: "#FFFFFF"
    },
    extend: {}
  }
};

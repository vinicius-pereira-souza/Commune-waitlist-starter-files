/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#F6F9FE",
        "gray-text": "#686869",
        "blue-text": "#CCC1E6",
        "dark-blue": "#353252",
        "medium-blue": "#372865",
      },
      fontFamily: {
        "Nunito-Sans": ["Nunito Sans", "sans-serif"],
      },
      letterSpacing: {
        "01em": "0.01em",
      },
      lineHeight: {
        49: "49px",
      },
    },
  },
  plugins: [],
};

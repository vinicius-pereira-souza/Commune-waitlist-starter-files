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
      fontSize: {
        56: "56px",
      },
      letterSpacing: {
        "01em": "0.01em",
      },
      lineHeight: {
        49: "49px",
        71: "71px",
      },
      maxWidth: {
        tablet: "580px",
        desktop: "1140px",
        form: "525px",
        main: "730px",
      },
    },
  },
  plugins: [],
};

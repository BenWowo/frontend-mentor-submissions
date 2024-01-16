/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "light-pink": "#f9f0ff",
        "grayish-purple": "#8c6991",
        "dark-purple": "#2f1533",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      // fontWeight: {
      //   ''
      // }
    },
  },
  plugins: [],
};

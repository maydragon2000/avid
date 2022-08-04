module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "ITC-Kabel-Std-Demi": ["ITC Kabel Std Demi", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#2878d0",
        secondary: "#0bc3a2",
        "dark-green": "#0AA085",
        "light-blue": "#e3edf9",
        "bright-grey": "#f5f9fd",
      },
    },
  },
  variants: {
    extend: {
      borderOpacity: ["active"],
    },
  },
  plugins: [],
};

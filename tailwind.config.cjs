/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-blue": "#0079FF",
        "custom-gray": {
          100: "#F6F8FF",
          300: "#697C9A",
          800: "#2B3442",
          900: "#141D2F",
        },
        "custom-navi-blue": {
          600: "#4B6A9B",
          900: "#1E2A47",
        },
      },
      fontSize: {
        "custom-h1": ["1.625rem", "2.375rem"],
        "custom-h2": ["1.375rem", "2.0625rem"],
        "custom-h3": ["1rem", "1.5rem"],
        "custom-h4": ["0.8125rem", "1.25rem"],
        "custom-body": ["0.9375rem", "1.5625rem"],
      },
    },
  },
  plugins: [],
};

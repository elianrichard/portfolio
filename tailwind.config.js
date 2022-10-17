/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleBlack: "rgba(0,0,0,0.7)",
        mainRed: "rgba(239,68,68,0.9)",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};

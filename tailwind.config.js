/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Padauk", "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [require("flowbite/plugin")],
};

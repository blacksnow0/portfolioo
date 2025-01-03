/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "Arial", "sans-serif"], // Add Poppins & Inter
        serif: ["Merriweather", "Lora", "Georgia", "serif"], // Add Merriweather & Lora
        caveat: ["Caveat", "serif"],
      },
      colors: {
        customGreen: "#2b3d26",
        offWhite: "#f9f4d7",
      },
    },
  },
  plugins: [],
};

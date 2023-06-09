/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { min: "320px" },
      // => @media (min-width: 320px) { ... }

      tablet: { min: "768px" },
      // => @media (min-width: 768px) { ... }

      desktop: { min: "1280px" },
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundColor: {
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

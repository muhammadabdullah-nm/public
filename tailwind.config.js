/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "320px", max: "480px" },
      // => @media (min-width: 320px and max-width: 480px) { ... }

      md: { min: "481px", max: "768px" },
      // => @media (min-width: 481px and max-width: 768px) { ... }

      lg: { min: "769px", max: "1080px" },
      // => @media (min-width: 769px and max-width: 1024px) { ... }

      xl: { min: "1081px", max: "1180px" },
      // => @media (min-width: 1025px and max-width: 1280px) { ... }

      xxl: { min: "1181px", max: "1480px" },
      // => @media (min-width: 1025px and max-width: 1280px) { ... }

      xxxl: { min: "1481px", max: "1600px" },
      // => @media (min-width: 1281px) { ... }
    },
  },
  plugins: [],
};

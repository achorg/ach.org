/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_site/**/*.html",
    "./pages/*.{md,html,njk,js}",
    "./src/**/*.{md,html,njk,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["forma-djr-display", "sans-serif"],
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        extralight: "300",
        light: "400",
        regular: "500",
        medium: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colors: {
        primary: {
          100: "#dddbfb",
          200: "#a8aaff",
          400: "#5450bf",
          500: "#3c3783",
          800: "#232048",
          900: "#1c1832",
        },
        accent: {
          100: "#DBF4F8",
          200: "#C2E5F3",
          800: "#3A4B5E",
          900: "#1B283B",
        },
      },
      screens: {
        xs: "480px",
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": false,
            "code::after": false,
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:first-of-type::after": {
              content: "none",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

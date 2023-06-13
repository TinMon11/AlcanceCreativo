/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mainFont': ['Hanken Grotesk', 'sans-serif'],
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0A1A44",

          secondary: "#0A4074",

          accent: "#00B9BD",

          neutral: "#2b3440",

          "base-100": "#ffffff",

          "gray-100": "#f3f4f6",

          light: "0D98C9",

          white: "#ffffff",

          green: "#00B9BD",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

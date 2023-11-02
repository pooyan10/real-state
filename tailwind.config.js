/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { yekan: ["yekan"] },
      colors: {
        blue1: "#304ffe",
      },
      boxShadow: {
        "3xl": "0px 4px 15px",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};

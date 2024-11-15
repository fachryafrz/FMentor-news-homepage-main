/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        primary: {
          "Soft-orange": "hsl(35, 77%, 62%)",
          "Soft-red": "hsl(5, 85%, 63%)",
        },
        neutral: {
          "Off-white": "hsl(36, 100%, 99%)",
          "Grayish-blue": "hsl(233, 8%, 79%)",
          "Dark-grayish-blue": "hsl(236, 13%, 42%)",
          "Very-dark-blue": "hsl(240, 100%, 5%)",
        },
      },
    },
  },
  plugins: [],
};

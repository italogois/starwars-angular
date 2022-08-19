/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "site-bg": "url('/src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};

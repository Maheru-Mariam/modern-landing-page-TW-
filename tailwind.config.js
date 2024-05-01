/** @type {import('tailwindcss').Config} */


module.exports = {

  darkMode: "media",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '16': '16rem',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html/",
    "./src/**/*.{vue, js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          "1": "#594545",
        },
        yellow: {
          "1": "#E99F30",
        },
        grey: {
          "1": "",
        }
      }
    },
  },
  plugins: [],
}

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
          "2": "#645B5B",
          "3": "#815B5B",
        },
        yellow: {
          "1": "#E99F30",
          "2": "#FFF8EA",
        },
        gray: {
          "1": "#828282",
          "2": "#F6F6F6",
          "3": "#DADADA",
        }
      }
    },
  },
  plugins: [],
}

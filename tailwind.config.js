/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        header1:["Bebas Neue"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


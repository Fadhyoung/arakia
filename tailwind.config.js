/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '320px', // Custom breakpoint for iPhone 13
      '2xs': '240px',
      'lg': '1440px'
    },
  },
  plugins: [],
}


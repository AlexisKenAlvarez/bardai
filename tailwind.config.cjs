/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        eco: "url('/ecobg.webp')"
      },
      fontFamily: {
        'saira': ['Saira'],
        'poppins': ['Poppins']
      },
      colors: {
        hero: '#19003F',
        gblue: '#4285F4',
        gred: '#EA4335',
        gorange: '#FBBC05',
        ggreen: '#34A853',
        button: '#4286F5',
        aboutbg: '#0C001F',
        myborder: '#234797',
        myblack: '#020104'

      },
      boxShadow: {
        'eco': '0px -17px 51px 0px rgba(6,7,27,0.75)',
        'glow': '0px 0px 150px 60px rgba(35,71,151,0.40)',
      }
    },
  },
  plugins: [],
}

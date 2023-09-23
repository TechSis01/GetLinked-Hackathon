
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      smallest:['1.2rem', '2.1rem'],
      small:['1.3rem', '2.4rem'],
      smallTwo:['1.4rem', '2.4rem'],
      sbsmall:['1.34rem', '2.8rem'],
      medium:['2.0rem', '3.5rem'],
      sbbmedium:['2.4','4.2rem'],
      sbmedium:['3.2rem', '4.5rem'],
      base: ['1.6rem', '2.4rem'],
      large:['3.6rem','2.4rem']
    },
    extend: {
      colors:{
        "primary-purple":"#150e28",
        "white":"#FFFFFF",
        "bright-purple":"#D434FE",
        "brightest-purple":"#FE34B9",
        "dark-purple":"#903AFF",
        "purple":"#FF26B9",
        "darkest":"#100b20",
        "green":"#2DE100",
        "grey":"#1e1e1e",
        "red":"#FF0000"
      }
    },
  },
  plugins: [],
}
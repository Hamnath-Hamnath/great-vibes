/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      dark : "#212121",
      halfwhite : "#FAFAFA",
      error : "#D86161",
      placeholder : "#7A7A7A",
      primary : "#1597E4",
      semiGrey : '#E6E6E6',
      darkBlack : '#182021',
      mildGrey : '#D8D8D8',
      mildDark : '#212427'
    },
    borderColor:{},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing : {
        '577' : '36rem',
        '564' : '35.25rem',
        '85' : '85px',
        '30' : '30px'
      }
    },
  },
  plugins: [],
}


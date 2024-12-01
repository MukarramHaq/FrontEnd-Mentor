/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Kumbh Sans"'],
        body: ['Overpass']
      },
      zIndex: {
        '999': '999',
      },
      backgroundImage: {
        'left-pointer': "url('./images/icon-previous.svg')",
        'right-pointer': "url('./images/icon-next.svg')",
      },
    },
  },
  plugins: [],
}
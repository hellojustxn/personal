module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif']
      },
      colors: {
        'divider': '#171717',
        'gray-1000': '#808080'
      },
      maxWidth: {
        '9xl': '1900px'
      },
      minWidth: {
        'md': '32rem',
        'lg': '50rem',
      },
      backgroundImage: {
        'beach-profile': "url('./assets/beach-profile.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

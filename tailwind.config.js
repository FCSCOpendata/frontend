const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        accent: '#00BBC2',
        lightaccent: '#00bbc24d',
        darkaccent: '#00a8ae',
        darkbrown: '#A75001',
        darkerbrown: '#964800',
        lightestblue: '#F7FAFC',
        black: '#4D4D4D',
        gray: '#7C7C7C',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        raleway: ['raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        blogImg: 'inset 0 0 0 50vw rgba(0,28,49,0.76)',
      },
      backgroundImage: (theme) => ({
        blog1: "url('/images/blog/blog1.jpg')",
        blog2: "url('/images/blog/blog2.jpg')",
        blog3: "url('/images/blog/blog3.jpg')",
        'lang-gradient':
          'linear-gradient(90deg, #5EC7F7 -56.31%, #1F356C 192.69%)',
        'nav-underline':
          'linear-gradient(90deg, #5EC7F7 9.73%, #1F356C 90.96%)',
        'footer-background':
          'linear-gradient(180deg, #FFFFFF 16.93%, rgba(255, 255, 255, 0) 96.66%), url(/images/footer-background.png)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};

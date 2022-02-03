const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: '#00BBC2',
        lightaccent: '#00bbc24d',
        darkaccent: '#00a8ae',
        darkbrown: '#A75001',
        darkerbrown: '#964800',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        blog1:
          "url('/images/blog/blog1.jpg'); box-shadow: inset 0 0 0 50vw rgba(0,28,49,0.76)",
        blog2:
          "url('/images/blog/blog2.jpg'); box-shadow: inset 0 0 0 50vw rgba(0,28,49,0.76)",
        blog3:
          "url('/images/blog/blog3.jpg'); box-shadow: inset 0 0 0 50vw rgba(0,28,49,0.76)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};

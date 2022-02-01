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
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        mainbg:
          'linear-gradient(180deg, rgba(222, 222, 222, 0.72) 0%, rgba(0, 187, 194, 0.08) 45.73%, rgba(239, 239, 239, 0.468504) 68.65%, #FFFFFF 100%)',
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

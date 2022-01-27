const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: '#00BBC2',
        darkaccent: '#00a8ae',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        blog1: "url('/images/blog/blog1.jpg')",
        blog2: "url('/images/blog/blog2.jpg')",
        blog3: "url('/images/blog/blog3.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};

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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};

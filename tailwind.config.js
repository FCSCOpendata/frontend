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
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        blogImg: 'inset 0 0 0 50vw rgba(0,28,49,0.76)',
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

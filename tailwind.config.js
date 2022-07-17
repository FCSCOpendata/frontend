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
        primaryGreen: '#22B373',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        raleway: ['raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '3xl': '2.25rem',
        '4xl': '2.5rem',
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
        'button-gradient':
          'linear-gradient(82.67deg, #5EC7F7 -51.47%, #1F356C 239.3%)',
        waves: 'url(/images/waves-background.svg)',
      }),
    },
  },
  safelist: [
    {
      pattern: /green-\d*/,
    },
    {
      pattern: /blue-\d*/,
    },
    {
      pattern: /indigo-\d*/,
    },
    ...['#80E47E', '#C2B2E5', '#7EE4DE'].map((c) => `bg-[${c}]`),
    ...['#086F06', '#6444AC', '#00968D'].map((c) => `text-[${c}]`),
    'opacity-100',
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};

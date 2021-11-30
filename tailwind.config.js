module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        background1: 'url(/images/background1.jpg)',
        background2: 'url(/images/background2.jpg)',
      },
      animation: {
        fade: 'fade 3s',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
    variants: {
      extend: {
        overflow: ['hover', 'focus'],
      },
    },
    plugins: [],
  },
}

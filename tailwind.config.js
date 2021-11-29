module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        background: 'url(/images/background6.jpg)',
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
      extend: {},
    },
    plugins: [],
  },
}

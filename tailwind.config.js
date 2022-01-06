module.exports = {
  purge: [
    './pages/**/*.jsx',
    './components/**/*.jsx',
    './layouts/**/*.jsx',
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        background1: 'url(/images/background1.jpg)',
        background2: 'url(/images/background2.jpg)',
        background3: 'url(/images/background4.png)',
      },

      animation: {
        fade: 'fade 5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0', transform: 'scaleX(0), translateX(-5%)' },
          '30%': { transform: 'scaleX(1) ,translateX(0)' },
          '100%': { transform: 'scaleX(1) ,translateX(0)' },
          '30%, 100%': { opacity: '1' },
        },
      },
      variants: {
        extend: {
          overflow: ['hover', 'focus'],
        },
      },
      plugins: [],
    },
  },
}

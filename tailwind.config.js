module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['Impact'],
    },
    extend: {
      animation: {
        fade: 'fade 5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        slideIn: 'slideIn 1s cubic-bezier(0.25, 1, 0.5, 1) 1 forwards',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0', transform: 'scaleX(0), translateX(-5%)' },
          '30%': { transform: 'scaleX(1) ,translateX(0)' },
          '100%': { transform: 'scaleX(1) ,translateX(0)' },
          '30%, 100%': { opacity: '1' },
        },
        slideIn: {
          '0%': {
            transform: 'translateX(-240px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
          },
          '40%,100%': {
            opacity: '1',
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
  },
}

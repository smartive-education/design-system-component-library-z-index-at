/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins'],
    },
    extend: {
      keyframes: {
        textintro: {
          from: {
            opacity: 0,
            transform: 'translateY(100%)',
          },
          to: { opacity: 1 },
        },
      },
      animation: {
        textintro: 'textintro 1s both',
      },
    },
  },
  plugins: [],
};

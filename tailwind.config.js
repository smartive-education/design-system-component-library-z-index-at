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
          '0%': {
            opacity: 0,
            transform: 'translateY(100%)',
          },
          '60%': { opacity: 0.2 },
          '90%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        },
      },
      animation: {
        textintro: 'textintro 0.35s both',
      },
    },
  },
  plugins: [],
};

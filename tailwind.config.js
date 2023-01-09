/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins'],
    },
    extend: {
      keyframes: {
        iconrotation: {
          '0%': {
            transform: 'rotate(20deg)',
          },
          '100%': {
           transform: 'rotate(0deg)',
          }
        },
        textintro: {
          '0%': {
            opacity: 0,
            transform: 'translateY(30%)',
          },
          '20%': { opacity: 1, transform: 'translateY(-20%)' },
          '30%': { transform: 'translateY(10%)' },
          '35%': { transform: 'translateY(0%)' },
          '89%': { opacity: 1, transform: 'translateY(0%)' },
          '90%': { transform: 'translateY(-10%)' },
          '100%': { opacity: 0, transform: 'translateY(-50%)' },
        },
      },
      animation: {
        textintro: 'textintro 2s ease-in infinite',
        iconrotation: 'iconrotation 1.2s ease-out',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        xxs: '4px',
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '64px',
      },
      keyframes: {
        icontilt: {
          '0%': {
            transform: 'rotate(20deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
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
        skeleton: {
          '0%': {
            backgroundImage: 'linear-gradient(to right, #94a3b8 , #cbd5e1, #cbd5e1)',
          },
          '50%': {
            backgroundImage: 'linear-gradient(to right, #cbd5e1 , #94a3b8, #cbd5e1)',
          },
          '100%': {
            backgroundImage: 'linear-gradient(to right, #cbd5e1 , #cbd5e1, #94a3b8)',
          },
        },
        spinner: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        textintro: 'textintro 2s ease-in infinite',
        icontilt: 'icontilt 1.2s',
        skeleton: 'skeleton 0.75s linear infinite',
        spinner: 'spinner 1.5s ease-in-out infinite'
      },
    },
  },
  plugins: [],
};

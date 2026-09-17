/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#211C19',
        'dark-brown': '#332923',
        burgundy: '#5A2630',
        forest: '#26352D',
        cream: '#D9D0C2',
        taupe: '#A69B8D',
        'warm-brown': '#765D4A',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      letterSpacing: {
        'editorial': '0.3em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

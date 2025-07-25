module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        waveMove: 'waveMove 6s infinite ease-in-out',
        textSlide: 'textSlide 6s infinite',
      },
      keyframes: {
        waveMove: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-25px) translateX(25px)' },
          '50%': { transform: 'translateY(-50px) translateX(50px)' },
          '75%': { transform: 'translateY(-75px) translateX(75px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        textSlide: {
          '0%, 10%': { transform: 'translateY(100%)', opacity: '0' },
          '15%, 40%': { transform: 'translateY(0)', opacity: '1' },
          '50%, 100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
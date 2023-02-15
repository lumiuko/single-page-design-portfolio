/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF7F0',
        brown: '#7A746E',
        black: '#030303',
        purple: '#552049',
        cyan: '#61C4B7',
        red: '#EB7565',
        pink: '#F39E9E',
        yellow: '#F6A560',
        blue: '#755CDE'
      }
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif']
    },
    fontSize: {
      btn: '0.875rem',
      'heading-l-tablet': '2.75rem',
      'heading-l-desktop': '3.5rem',
      'heading-l': '2.25rem',
      'heading-m': '1.625rem',
      'heading-m-desktop': '2.5rem',
      'heading-s': '2rem',
      'body-m': '1.125rem',
      card: '1.5rem',
      default: '1rem'
    },
    lineHeight: {
      default: '1.75rem',
      'heading-l': '1.25',
      'heading-l-desktop': '4.375rem',
      'heading-m-desktop': '3.25rem',
      text: '1.625rem',
      'heading-s': '2.5rem'
    },
    borderRadius: {
      lg: '1.75rem',
      md: '0.625rem',
      sm: '0.5rem',
      full: '50%'
    },
    screens: {
      tablet: '768px',
      desktop: '1110px'
    },
    container: {
      center: true
    }
  },
  plugins: []
}

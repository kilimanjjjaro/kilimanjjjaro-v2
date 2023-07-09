/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': ['10rem', '1']
      },
      fontFamily: {
        'neue-haas-grotesk-display':
          'var(--neue-haas-grotesk-display-font), system-ui, sans-serif'
      },
      colors: {
        'kili-black': '#090909',
        'kili-white': '#F8F8F8',
        'kili-dark-gray': '#0C0C0C',
        'kili-light-gray': '#7A7A7A'
      },
      transitionDuration: {
        400: '400ms',
        800: '800ms'
      },
      transitionTimingFunction: {
        kili: 'cubic-bezier(0.17, 0.84, 0.44, 1)'
      },
      animation: {
        'fade-in-delay-0': 'fade-in 0.7s ease-out backwards',
        'fade-in-delay-300': 'fade-in 0.7s 0.3s ease-out backwards',
        'link-hover': 'link-hover 0.5s ease-in-out',
        'fade-in-headline': 'fade-in-headline 0.7s ease-in-out forwards',
        'fade-in-headline-delay':
          'fade-in-headline 0.7s 0.3s ease-in-out forwards'
      },
      keyframes: {
        'fade-in': {
          '0%': { transform: 'translateY(-64px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'link-hover': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '35%': { transform: 'translateY(-105%)', opacity: '1' },
          '40%': { transform: 'translateY(-105%)', opacity: '0' },
          '60%': { transform: 'translateY(105%)', opacity: '0' },
          '65%': { transform: 'translateY(105%)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in-headline': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}

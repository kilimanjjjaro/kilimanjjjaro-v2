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
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue-haas-grotesk-display':
          'var(--neue-haas-grotesk-display-font), system-ui, sans-serif'
      },
      colors: {
        'kili-black': '#090909',
        'kili-white': '#F8F8F8',
        'kili-dark-gray': '#0E0E0E',
        'kili-light-gray': '#7A7A7A'
      },
      transitionDuration: {
        400: '400ms',
        800: '800ms'
      },
      zIndex: {
        9998: 9998,
        9999: 9999
      },
      transitionTimingFunction: {
        'kili-ease': 'cubic-bezier(0.85, 0.01, 0.4, 1)'
      }
    }
  },
  plugins: []
}

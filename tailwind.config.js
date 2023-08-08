/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': ['10rem', '1']
      },
      colors: {
        'kili-black': '#090909',
        'kili-white': '#F8F8F8',
        'kili-dark-gray': '#0D0D0D',
        'kili-light-gray': '#7A7A7A'
      },
      transitionTimingFunction: {
        'kili-in': 'cubic-bezier(0.77, 0, 0.18, 1)'
      },
      boxShadow: {
        lg: [
          '0 10px 16px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5)'
        ]
      },
      animation: {
        'translate-y': 'translateY 1s ease-in-out',
        typing: 'blink 1.2s step-start infinite'
      },
      keyframes: {
        translateY: {
          '0%': { transform: 'translateY(0%)' },
          '49.9%': { transform: 'translateY(-105%)' },
          '50%': { transform: 'translateY(105%)' },
          '50.1%': { transform: 'translateY(105%)' },
          '100%': { transform: 'translateY(0%)' }
        },
        blink: {
          '50%': { opacity: 0 }
        }
      }
    }
  },
  plugins: []
}

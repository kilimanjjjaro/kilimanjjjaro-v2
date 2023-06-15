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
        neue: 'var(--neue-font), system-ui, sans-serif'
      },
      colors: {
        'kilimanjjjaro-black': '#090909',
        'kilimanjjjaro-white': '#F8F8F8',
        'kilimanjjjaro-dark-gray': '#0B0B0B',
        'kilimanjjjaro-light-gray': '#7A7A7A'
      }
    }
  },
  plugins: []
}

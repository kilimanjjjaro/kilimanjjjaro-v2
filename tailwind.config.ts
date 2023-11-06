import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans), system-ui, sans-serif'],
        'geist-mono': [
          'var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New"'
        ]
      },
      fontSize: {
        '10xl': ['10rem', '1'],
        '11xl': ['12rem', '1.01']
      },
      colors: {
        'monospace-black': '#030303',
        'monospace-white': '#F8F8F8',
        'monospace-dark-gray': '#080808',
        'monospace-light-gray': '#7A7A7A'
      },
      boxShadow: {
        lg: '0 10px 16px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5)'
      },
      animation: {
        'translate-y': 'translateY 1s ease-in-out-monospace',
        typing: 'blink 1.2s step-start infinite'
      },
      transitionTimingFunction: {
        'in-out-monospace': 'cubic-bezier(0.77, 0, 0.18, 1)'
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
          '50%': { opacity: '0' }
        }
      }
    }
  },
  plugins: []
}
export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        cormorant: ['var(--font-cormorant)'],
        argesta: ['var(--font-argesta)'],
        rosseta: ['var(--font-rosseta)'],
        inter: ['var(--font-inter)']
      },
      colors: {
        'custom-purple': '#4A67AE',
        'custom-purple-dark': '#32467a'
      },
      brightness: {
        20: '.20',
        25: '.25',
        30: '.30',
        35: '.35',
        40: '.40',
        60: '.60',
        70: '.70',
        80: '.80',
        90: '.90',
        100: '1',
        175: '1.75',
      },
      screens: {
        'tall': {
            'raw': `only screen and (max-height: 960px) and (max-width: 480px)`
        },
        'wide': {
            'raw': `only screen and (max-height: 480px) and (max-width: 960px)`
        },
        'portrait': {
            'raw': '(orientation: portrait)'
        },
        'landscape': {
            'raw': '(orientation: landscape)'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class'})
  ],
}

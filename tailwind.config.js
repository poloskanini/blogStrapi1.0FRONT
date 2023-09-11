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
        rosseta: ['var(--font-rosseta)']
      },
      colors: {
        'custom-purple': '#6089C3'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class'})
  ],
}

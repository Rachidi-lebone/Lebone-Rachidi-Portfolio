/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        moss: '#2E4036',
        clay: '#CC5833',
        cream: '#F2F0E9',
        charcoal: '#1A1A1A',
        fern: '#445A4C',
        mist: '#E6E0D2',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        panel: '0 24px 80px rgba(26, 26, 26, 0.12)',
        soft: '0 16px 50px rgba(46, 64, 54, 0.14)',
      },
      backgroundImage: {
        radial:
          'radial-gradient(circle at top, rgba(242, 240, 233, 0.18), transparent 55%)',
      },
    },
  },
  plugins: [],
};

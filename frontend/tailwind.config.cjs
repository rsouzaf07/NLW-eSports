/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      'sans' :  ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        background: "url('/background.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 40.08%, #43E7AD 74.94%, #E1D55D 7.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      }
    },
  },
  plugins: [],
}

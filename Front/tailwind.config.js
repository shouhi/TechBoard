module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        techuni: '#9cbfbc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      '2xs': { 'max': '470px' },
      'xs': { 'max': '520px' },
      'mobile': { 'max': '550px' },
      'mobile2': { 'max': '600px' },
      'mobile3': { 'max': '700px' },
      'mobile4': { 'max': '800px' },
      'mobile5': { 'max': '900px' },
      'tablet': { 'max': '1100px' },
      'tablet2': { 'max': '1220px' },
      'nav': '551px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': { 'max': '1280px'} ,
      '2xl': { 'max': '1536px'},
      '3xl': { 'max': '1600px'},
      '4xl': { 'max': '1710px'},
      '5xl': { 'max': '1920px'},
      '6xl': { 'max': '2560px'},
    },
    extend: {},
  },
  plugins: [],
}

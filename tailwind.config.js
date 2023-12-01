/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',  // or darkMode: 'class'
    plugins: [
        require('tailwind-scrollbar')
    ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar', 'tailwind-scrollbar'),
    
  ],
  variants: {
    scrollbar: ['rounded']
}
}

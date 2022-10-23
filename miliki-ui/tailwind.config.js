/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray': {
        DEFAULT: '#E6E6F1',
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
      },
      'miliki-gray': '#E6F1F0',
      'miliki-sky-blue': '#0394D5',
      'miliki-black': '#252525',
      'miliki-blue': '#042873',
      'miliki-green': '#38B64A',
    },
    extend: {
      boxShadow: {
        'miliki-shadow': '0px 0px 9.335793495178223px 0.9335793256759644px rgba(0, 0, 0, 0.15)'
      },
      lineClamp: {
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
  },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

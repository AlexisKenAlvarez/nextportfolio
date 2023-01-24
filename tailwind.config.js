/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand'],
        'raleway': ['Raleway'],
        'courier': ['Courier Prime'],
        'kanit': ['Kanit'],
        'roboto': ['Roboto Mono']
      },
      boxShadow: {
        'forBox': 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',

        'dark': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'

      },
      colors: {
        'mygreen': '#588F62',
        'lightg': '#5AE676',
        'db': '#151522',
        'grey': '#7d7d7d',
        'darkgrey': '#4f4f4f',
        'darkwhite': '#cecece',
        'darkerwhite': '#CCCCCC',
        'notSoBlack': '#515151',
        'lightBorder': '#929090',
        'footerBlack': "#0C0C0C"
      },

      backgroundImage: {
        'topog': "url('https://ik.imagekit.io/efpqj5mis/topog_fMXuZRb_k.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671535737002')",
        'darktopog': "https://ik.imagekit.io/efpqj5mis/darktopogwebp_89ugekk5R.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672295291016')",
        'blackTopog': "url('https://ik.imagekit.io/efpqj5mis/darktopogwebp_89ugekk5R.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672295291016')",

      },

      clipPath: {
        'divider': "polygon(50% 6%, 100% 0%, 100% 100%, 0 100%, 0 0)",
        'underline': "polygon(0 0, 100% 0, 76% 10%, 0 10%);",
        'forButton': 'polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 50%)',
        'forMode': 'polygon(100% 0, 100% 79%, 81% 100%, 0 100%, 0 0);'
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

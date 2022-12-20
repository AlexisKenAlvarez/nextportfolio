/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand']
      },
      colors: {
        'mygreen': '#588F62',
        'lightg': '#5AE676',
        'db': '#151522'
      },

      backgroundImage: {
        'topog': "url('https://ik.imagekit.io/efpqj5mis/topog_fMXuZRb_k.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671535737002')",
        'darktopog': "url('https://ik.imagekit.io/efpqj5mis/darktopg_DM8xxQIl3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671536881647')"
      },

      clipPath: {
        'divider': "polygon(50% 6%, 100% 0%, 100% 100%, 0 100%, 0 0)",
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

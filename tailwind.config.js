/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black: 'hsl(var(--color-black) / <alpha-value>)',
        grey: 'hsl(var(--color-grey) / <alpha-value>)',
        whitish: 'hsl(var(--color-whitish) / <alpha-value>)',
      },
      borderRadius:{
        button:'3.37px',
      },
      fontSize:{
        text: '10.11px',
      },
      backgroundImage:{
        'layout':"url('/src/assets/background-logo.svg')",
        'top-logo': "url('/src/assets/corner-logo-top.svg')",
        'bottom-logo': "url('/src/assets/corner-logo-bottom.svg')",
        'drop-down':"url('/src/assets/menu-down.svg')"
      }
    },
  },
  plugins: [],
}
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
      }
    },
  },
  plugins: [],
}
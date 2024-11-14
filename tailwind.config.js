/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      yellow_primary: '#F2D457',
      green_primary:'#16927E',
      black_line:'#1E1E1E',
      
      grad_top:'#F8FFF8',
      grad_bottom:'#FFF4C8'
    },
  },
  plugins: [],
}
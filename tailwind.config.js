/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'Lato' : ['Lato', 'sans-serif'],
      },
      colors: {
        'javasript' : '#f7df1e',
        'html' : '#e4f26',
        'css3' : '#264de4',
        'c++' : '#00599c',
        'mysql' : '#4479a1',
        'react' : '#61dafb',
        'nodejs' : '#68a063',
        'vscode' : '#007acc',
  
      }
 
    },
  },
  plugins: [],
}
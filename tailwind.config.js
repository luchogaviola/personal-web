/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'section': '107rem',
      },
      colors:{
        'color': '#2d2e32',
        'hovblue': '#147efb',
        
      },
      boxShadow: {
       '3xl' : '0 0 10px rgba(0, 0, 0, 0.09)'
      }, 
      height: {
        '65': '41rem',
        '35': '22rem',
        '18': '4.5rem',
        'auto': 'auto',

      },
      width: {
        '35': '22rem',
        '18': '4.5rem',
      },
      backgroundImage: {
        'perfil': "url('/perfil.jpg')",
      },
      zIndex: {
        '200': '200',
      },
      fontFamily: {
        'web': ['Poppins', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif']
      },
      transitionTimingFunction: {
        'all': 'all(.23s)',
        'transform': 'transform(10s)ease-in-out(0s)',
      },
      keyframes: {
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
        }
      },
        animation: {
          'morph': 'morph 8s ease-in-out infinite',
          'spin-slow': 'spin 8s linear infinite',
        },
        dropShadow: {
          '3xl': '0 0px 10px rgba(0, 0, 0, .1)',
        }
    },
  },
  plugins: [],
}
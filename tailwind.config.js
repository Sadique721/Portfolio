/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        float: { 
          '0%, 100%': { transform: 'translateY(0px)' }, 
          '50%': { transform: 'translateY(-20px)' } 
        },
        'pulse-glow': { 
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(34,211,238,0.5)' }, 
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(34,211,238,0.8)' } 
        },
        gradient: { 
          '0%, 100%': { backgroundPosition: '0% 50%' }, 
          '50%': { backgroundPosition: '100% 50%' } 
        }
      }
    },
  },
  plugins: [],
}

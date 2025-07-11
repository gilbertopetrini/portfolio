/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          'fix': '405px',
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
        }
      },
    },
      plugins: [],
  };
  
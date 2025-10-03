// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // heading: ['Poppins', 'sans-serif'],
        // body: ['Roboto', 'sans-serif'],
         cabin: ['Cabin', 'sans-serif'],
      },
      colors: {
        primary: '#FF005C',
        secondary: '#1A1A1A',
      },
      screens: {
        '3xl': '1670px', // 1600px se start hoga
        '4xl': '1920px',
        'xxl': '1600px',
        'sm': {'max': '500px'}  // optional agar aur chahiye
      },
    },
  },
  plugins: [],
};

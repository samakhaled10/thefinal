// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//      "./public/index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



// tailwind.config.js
export const content = [
  "./public/index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'custom-green': '#22db14',
    },
  },

};
export const plugins = [];

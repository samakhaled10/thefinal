// // postcss.config.js
// export const plugins = {
//   tailwindcss: {},
//   autoprefixer: {},
// };

// postcss.config.js
// export const plugins = [
//   require('tailwindcss'),
//   require('autoprefixer'),
// ];

// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};

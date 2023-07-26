const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
      padding: '16px', 
    },
    extend: {
        colors: {
            primary: '#2563EB',
            dark: '#0f172a',
            secondary: '#64748b',
        },
        screens: {
            '2xl': '1230px',
        }
    }  
  },
  plugins: [],
};

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
            primary: {
              "0":"#2563EB",
              "50":"#eff6ff",
              "100":"#dbeafe",
              "200":"#bfdbfe",
              "300":"#93c5fd",
              "400":"#60a5fa",
              "500":"#3b82f6",
              "600":"#2563eb",
              "700":"#1d4ed8",
              "800":"#1e40af",
              "900":"#1e3a8a",
              "950":"#172554"
            },
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

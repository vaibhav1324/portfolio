/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: 'dark',
    themes: [
      {
        myLightTheme: {
          primary: '#875FFA',
          secondary: '#db2777',
          accent: '#1FB2A5',
          neutral: '#191D24',
          'base-100': '#fff',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
        myDarkTheme: {
          primary: '#875FFA',
          secondary: '#db2777',
          accent: '#1FB2A5',
          neutral: '#191D24',
          'base-100': '#111827',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
};

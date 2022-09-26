/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  important: false,
  theme: {
    maxWidth: {
      '282px': '282px'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      '14px': '14px',
      '18px': '18px',
      '40px': '40px',
    },
    colors: {
      'separate': '#E5E5E5',
      'white': 'white',
      'black': 'black',
      'primary': 'var(--primary-color)',
      'tx-color': 'var(--text-color)',
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    extend: {
      width: {
        'leftBar-width': '240px',
      },
      height: {
        'header-height': '70px',
      },
      spacing: {
        '4px': '4px',
        '5px': '5px',
        '8px': '8px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '21px': '21px',
        '24px': '24px',
        '30px': '30px',
        '40px': '40px',
        '44px': '44px',
        '46px': '46px',
        '48px': '48px',
        '56px': '56px',
        '77px': '77px',
        '80px': '80px',
        '100px': '100px',
        '230px': '230px',
        '252px': '252px',
        '254px': '254px',
        // '330px': '330px',
      },
      translate: {
        '-1/2': '-50%'
      },
      borderRadius: {
        '4px': '4px',
        '6px': '6px'
      }
    },
  },
  plugins: [],
}
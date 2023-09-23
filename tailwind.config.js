/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.5rem",
      sm: "0.75rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      12: "0.75rem",
      13: "0.8125rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      26: "1.625rem",
      28: "1.75rem",
      30: "1.875rem",
      32: "2rem",
      34: "2.125rem",
      36: "2.25rem",
      38: "2.375rem",
      40: "2.5rem",
      44: "2.75rem",
      48: "3rem",
      52: "3.25rem",
      56: "3.5rem",
      60: "3.75rem",
    },
    screens: {
      xtn: "321px",
      tn: "376px",
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",

      "<xtn": { max: "320px" },
      "<tn": { max: "375px" },
      "<xs": { max: "479px" },
      "<sm": { max: "575px" },
      "<md": { max: "767px" },
      "<lg": { max: "991px" },
      "<xl": { max: "1199px" },
      "<2xl": { max: "1399px" },
      "<3xl": { max: "1599px" },
    },
    extend: {
      colors: {
        primary: '#EBA02D'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1rem",
        },
      },
    },
  },
  daisyui: {
    themes: [{
      "light":
      {
        "primary": "#EBA02D",
        "secondary": "#84CDF0",
        "accent": "#1FB2A5",
        "neutral": "#191D24",
        "base-100": "#999",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    }],
  },
  
  
  plugins: [
    require("daisyui"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen xtn": {
            maxWidth: "310px",
          },
          "@screen xs": {
            maxWidth: "400px",
          },
          "@screen sm": {
            maxWidth: "520px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1080px",
          },
          "@screen 2xl": {
            maxWidth: "1200px",
          },
        },
      })
    },
    function ({ addBase }) {
      addBase({
        'h1': { fontSize: 'calc(1.375rem + .6vw)' },
        'h2': { fontSize: 'calc(1.325rem + .1vw)' },
        'h3': { fontSize: 'calc(1.3rem + .1vw)' },
        'h4': { fontSize: 'calc(1.175rem + .01vw)' },
        'h5': { fontSize: '1.15rem' },
        'h6': { fontSize: '.95rem' },
      })
    }
  ],
};

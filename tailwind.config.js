/* eslint-env es6 */
/* eslint-disable no-console */

/** @type {import('tailwindcss/types').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  safelist: [
    {
      pattern: /border-(blue|green|indigo|pink|orange|rose|purple|cyan|yellow)-(200)/,
      variants: ['hover'],
    },
    {
      pattern: /bg-(blue|green|indigo|pink|orange|rose|purple|cyan|yellow)-50\/50/
    },
    {
      pattern: /border-(blue|green|indigo|pink|orange|rose|purple|cyan|yellow)-100/,
    },
    {
      pattern: /text-(blue|green|indigo|pink|orange|rose|purple|cyan|yellow)-400/,
    },
    {
      pattern: /ring-(blue|green|indigo|pink|orange|rose|purple|cyan|yellow)-300/,
      variants: ['group-hover'],
    },
    {
      pattern: /text-(blue|green|indigo|pink|orange|rose|purple|cyan|yellow)-500/,
      variants: ['group-hover'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

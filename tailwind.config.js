const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    mode: 'all',
    content: ['./**/**/*.html', './**/**/*.svelte'],

    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        ),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#F2CC8F',
      secondary: '#F4F1DE',
      accent: '#3d405b',
      cta: '#81b29a',
      gray: colors.coolGray,
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/img/me.jpeg')",
      }),
      backgroundPosition: {
        hero: '60% 40%',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};

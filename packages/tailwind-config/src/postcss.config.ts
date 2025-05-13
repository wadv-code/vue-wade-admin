import config from './index';
export default {
  plugins: {
    autoprefixer: {},
    '@tailwindcss/postcss': { config },
    'postcss-import': {},
    'postcss-preset-env': {},
    '@tailwindcss/nesting': {},
  },
};

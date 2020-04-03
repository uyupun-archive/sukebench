const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = withCSS({
  /* config options here */
});

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    return config;
  }
};

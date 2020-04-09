const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = withCSS({
  devIndicators: {
    autoPrerender: false,
  },
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    return config;
  },
  env: {
    apiUrl: 'http://localhost:5000/api'
  }
});

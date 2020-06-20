const path = require('path');
const withPlugins = require('next-compose-plugins');

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const optimizedImages = require('next-optimized-images');

const plugins = [
  bundleAnalyzer,
  [optimizedImages, {
    imagesFolder: 'chunks/images'
  }],
];

const config = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};

module.exports = withPlugins([...plugins], config);
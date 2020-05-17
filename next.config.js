const withPlugins = require('next-compose-plugins');

const withTM = require('next-transpile-modules')(['wazapp']);

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const plugins = [
  bundleAnalyzer,
  withTM
];

const config = {};

module.exports = withPlugins([...plugins], config);
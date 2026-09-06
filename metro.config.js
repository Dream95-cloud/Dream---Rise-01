/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 * Enables inlineRequires to improve cold-start performance
 */

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true
    }
  })
};

module.exports = config;

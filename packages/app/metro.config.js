const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');
defaultConfig.resolver.extraNodeModules = require("expo-crypto-polyfills");
module.exports = defaultConfig;

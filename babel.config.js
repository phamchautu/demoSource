module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin',
      {
        processNestedWorklets: true
      }
    ],
    ["react-native-worklets-core/plugin"],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          "@maui": "./packages/maui",
          "@core": "./src/@core/"
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".android.js", ".ios.js"],
      },
    ],
  ],
};

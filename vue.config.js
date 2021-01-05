const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@home": path.resolve(__dirname, "src/modules/home/index.ts"),
        "@i18n": path.resolve(__dirname, "src/shared/i18n/index.ts"),
      },
    },
  },
};

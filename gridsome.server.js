const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = api => {
  api.chainWebpack(config => {
    config.plugin('vuetify-loader').use(VuetifyLoaderPlugin);
  });
};

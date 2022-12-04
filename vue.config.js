const { merge } = require('webpack-merge');
const { VantResolver } = require('unplugin-vue-components/resolvers');
const Components = require('unplugin-vue-components/webpack');
const AutoImport = require('unplugin-auto-import/webpack');
const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const projectSettings = require('./src/settings.js');
const name = projectSettings.title || 'H5-Template'; // page title
const port = 8080; // dev port

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? projectSettings.publicPath : '/',
  parallel: false, // 未配置可能导致build后vantUI 无样式
  lintOnSave: true,
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    proxy: {
      // 三方mock服务 easyMock 或 Rap2
      '/mock-server': {
        target: 'http://api.easymock.com/app/mock/22', // 三方mock服务 easyMock 或 Rap2
        changeOrigin: true,
        pathRewrite: {
          '^/mock-server': '',
        },
      },
      // 本地serve代理
      '/local-server': {
        target: process.env.VUE_APP_LOCAL_HOST,
        changeOrigin: true,
        pathRewrite: {
          '^/local-server': '',
        },
      },
    },
  },
  configureWebpack: {
    name: name,
    plugins: [
      AutoImport({
        dts: true,
        imports: ['vue', 'vue-router', 'pinia'],
        eslintrc: {
          enabled: false,
        },
        resolvers: [VantResolver()],
      }),
      Components({
        dirs: ['src/components'],
        resolvers: [VantResolver()],
      }),
    ],
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            autoprefixer(),
            pxtoviewport({
              viewportWidth: 375,
            }),
          ],
        },
      },
    },
  },
};

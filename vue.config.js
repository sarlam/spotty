const path = require('path')

module.exports = {
  chainWebpack: config => {
    const IAddIstanbul = process.env.NODE_ENV === "test"
      || (process.env.NODE_ENV === "development" && process.env.VUE_APP_TARGET_ENV === 'web')

    if (IAddIstanbul) {
      config.devtool('eval')
      config.module
        .rule('istanbul')
        .test(/\.(js|vue)$/)
        .enforce('post')
        .include
        .add(path.resolve(__dirname, '/src'))
        .end()
        .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .options({esModules: true})
    }
  }
};

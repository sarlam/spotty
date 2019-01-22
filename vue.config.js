const path = require('path')

module.exports = {
  chainWebpack: config => {
    const IAddIstanbul = process.env.NODE_ENV === "test";

    if (IAddIstanbul) {
      config.devtool('eval')
      config.module
        .rule('istanbul')
        .test(/\.(js|vue)$/)
        .post()
        .include
        .add(path.resolve(__dirname, '/src/**/*'))
        .end()
        .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .options({esModules: true})
    }
  }
};

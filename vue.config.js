const path = require('path')

module.exports = {
  chainWebpack: config => {
    const IAddIstanbul = process.env.VUE_APP_WITH_ISTANBUL === 'true'

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
        .options({ esModules: true })
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@store': path.resolve(__dirname, 'src/store')
      }
    }
  }
}

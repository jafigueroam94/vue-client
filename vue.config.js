const path = require('path')

module.exports = {
  publicPath: process.env.VUE_APP_CMKTENV === 'production' ? process.env.VUE_APP_BASEPATH : '',
  outputDir: path.resolve(__dirname, '../server/client'),
  lintOnSave: true,
  devServer: {
    https: process.env.VUE_APP_CMKTENV !== 'development',
    disableHostCheck: process.env.VUE_APP_CMKTENV === 'development',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5050/'
      }
    }
  },
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    }
  },
  	transpileDependencies: [
    	'vuetify'
  	]
}

const path = require('path')
module.exports = {
  publicPath: process.env.VUE_APP_CDN_PATH,
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(process.cwd(), 'src'))
    // config.module
    //   .rule('less')
    //   .oneOf('vue')
    //   .use('extract-css-loader')
    //   .tap(options => {
    //     console.log('options', options)
    //     console.log(process.env.NODE_ENV)
    //     console.log(process.env.VUE_APP_CDN_PATH)
    //     // Set whatever you want as publicPath
    //     options.publicPath = process.env.VUE_APP_CDN_PATH
    //     return options
    // })
  }
}
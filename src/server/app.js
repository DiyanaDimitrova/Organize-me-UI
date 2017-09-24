const express = require('express')
const webpack = require('webpack')
const path = require('path')
const webpackConfig = require('../../webpack.config')
const webpackMiddleware = require('webpack-dev-middleware')

const app = express()

const fs = require('fs')

let envConfig = require('./config/default.json')

let port = process.env.$PORT || envConfig.server.server_port

registerWebpackMiddleware = function(){
  let webpackMiddlewareConfig = {
    publicPath: '/',
    stats: {
      chunks: false,
      chunkModules: false,
      colors: true
    }
  }
    //
    //  Assets are created inside memory
    //  path has no meaning
    //
  webpackConfig.output.path = '/'
  let webpackCompiler = webpack(webpackConfig)
  app.use(webpackMiddleware(webpackCompiler, webpackMiddlewareConfig))

  // return Always Index.html, for paths which are in /* pattern
  app.use(function (req, res, next) {
    webpackCompiler.outputFileSystem.readFile('index.html', function (err, result) {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
}

registerStaticFiles = function(){
  let staticPath = path.join(__dirname, '../')
  app.use(express.static(staticPath))
}

registerWebpackMiddleware()
registerStaticFiles()
app.listen(port, () => {
  console.log('Server is listening on port ' + port)
})

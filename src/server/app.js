// import * as express from 'express'
// import * as webpack from 'webpack'
// import * as path from 'path'
const express = require('express')
const webpack = require('webpack')
const path = require('path')
const webpackConfig = require('../../webpack.config')
const webpackMiddleware = require('webpack-dev-middleware')
// const proxy = require('http-proxy-middleware')

const app = express()

// const config = JSON.parse(webpackConfig.externals.envConfig)
const fs = require('fs')

// const env = process.env.NODE_ENV || 'production'

let envConfig = {}
try {
  envConfig = JSON.parse(fs.readFileSync('src/server/config/default.json', 'utf8'))
} catch (e) {
  envConfig = {}
}

const config = Object.assign({}, JSON.parse(fs.readFileSync('src/server/config/default.json', 'utf8')), envConfig)

// Enable proxy middleware if it has been enabled in the config.
// if (config.server.proxy && config.server.proxy.enabled) {
//     app.use('/', proxy(config.server.proxy.options))
// }

registerWebpackMiddleware()
registerStaticFiles()

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })

app.listen(config.server.server_port, () => {
  console.log('Server is listening on port ' + config.server.server_port)
})

registerWebpackMiddleware: () => {
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

registerStaticFiles: () => {
  let staticPath = path.join(__dirname, '../')
  app.use(express.static(staticPath))
}

const express = require('express')
const webpack = require('webpack')
const path = require('path')
const webpackConfig = require('../../webpack.config')
const webpackMiddleware = require('webpack-dev-middleware')

const app = express()

const fs = require('fs')

let envConfig = {}
try {
  envConfig = JSON.parse(fs.readFileSync('src/server/config/default.json', 'utf8'))
} catch (e) {
  envConfig = {}
}

const config = Object.assign({}, JSON.parse(fs.readFileSync('src/server/config/default.json', 'utf8')), envConfig)

registerWebpackMiddleware()
registerStaticFiles()
let port = process.env.$PORT || config.server.server_port
app.listen(port, () => {
  console.log('Server is listening on port ' + port)
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

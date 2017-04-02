"use strict";
var express = require("express");
var webpack = require("webpack");
var path = require("path");
var webpackConfig = require('../../webpack.config');
var webpackMiddleware = require('webpack-dev-middleware');
var proxy = require('http-proxy-middleware');
var app = express();
var fs = require('fs');
var envConfig = {};
try {
    envConfig = JSON.parse(fs.readFileSync('config/default.json', 'utf8'));
}
catch (e) {
    envConfig = {};
}
var config = Object.assign({}, JSON.parse(fs.readFileSync('config/default.json', 'utf8')), envConfig);
if (config.server.proxy && config.server.proxy.enabled) {
    app.use('/', proxy(config.server.proxy.options));
}
registerWebpackMiddleware();
registerStaticFiles();
app.listen(config.server.server_port, function () {
    console.log('Server is listening on port ' + config.server.server_port);
});
function registerWebpackMiddleware() {
    var webpackMiddlewareConfig = {
        publicPath: '/',
        stats: {
            chunks: false,
            chunkModules: false,
            colors: true
        },
    };
    webpackConfig.output.path = '/';
    var webpackCompiler = webpack(webpackConfig);
    app.use(webpackMiddleware(webpackCompiler, webpackMiddlewareConfig));
    app.use(function (req, res, next) {
        webpackCompiler.outputFileSystem.readFile('../index.html', function (err, result) {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
}
function registerStaticFiles() {
    var staticPath = path.join(__dirname, '../');
    app.use(express.static(staticPath));
}
//# sourceMappingURL=app.js.map
'use strict';

var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

var host = '127.0.0.1';
var port = 8080;

var server = express();

server.use('/assets', proxy(url.parse('http://localhost:8081/assets')));

server.get('/*', function(req, res) {
  res.sendFile(config.resolve.root + '/index.html');
});

new WebpackDevServer(webpack(config), {
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  quiet: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With'
  },
  stats: {
    colors: false
  }
}).listen(8081, host, function(err) {
  if (err) {
    console.log(err);
  }
});

server.listen(port);

console.log('Listening at ' + host + ':' + port);

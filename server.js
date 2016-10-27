require('babel-core/register')({
	presets: ['es2015','react']
});
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.dev.config');
var path = require('path');
var express = require('express');
var handleRender = require('./requestHandler');

var app = new express();
var port = 8000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler,{
	noInfo:true,
	publicPath : config.output.publicPath,
	historyApiFallback:true
}));

app.use(webpackHotMiddleware(compiler))
delete process.env.BROWSER

app.use(handleRender);
app.listen(port,function(err){
	if(err){
		console.log(err);
	}
	else{
		console.info('==> Listening on port %s',port);
	}
});

var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [
    //'webpack-dev-server/client?http://localhost:8080',
    //'webpack/hot/only-dev-server',
    './src/index.js',
		'webpack-hot-middleware/client'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
			loader: 'react-hot!babel'
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    },
    {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader'
    },
    {
      test:/\.(jpg|jpeg|png)$/,
      loader: 'file-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname + 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot:true,
    historyApiFallback: true
  },
	plugins:[
		new webpack.DefinePlugin({
		"process.env":{
				BROWSER:JSON.stringify(true)
			}
		})

	]
};

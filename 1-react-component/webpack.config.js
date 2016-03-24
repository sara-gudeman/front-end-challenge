var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'client/src/main.js'),
	output: {
		path: path.resolve(__dirname, 'client/dist'),
		publicPath: '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		{
			test: /\.css$/,
			loader: 'style!css'
		},
		{
			test: /\.json$/,
			loader: 'json'
		},
		{
			test: /\.jsx?$/,
			loader: 'babel-loader'
		}]
	}
};
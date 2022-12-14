const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { _ } = require('core-js');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
		publicPath: '/',
		assetModuleFilename: 'assets/img/[hash][ext][query]',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: './src/assets/favicon.ico',
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: 'defaults',
									debug: true,
									useBuiltIns: 'usage',
									corejs: 3,
								},
							],
							['@babel/preset-react', { runtime: 'automatic' }],
						],
					},
				},
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: '' },
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: 'asset',
			},
		],
	},
	devServer: {
		hot: true,
		port: 3000,
		open: true,
		historyApiFallback: true,
		historyApiFallback: {
			disableDotRule: true,
		},
	},
};

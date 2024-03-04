import { resolve as _resolve } from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export const entry = './src/app.ts';
export const mode = 'development';
export const devtool = 'cheap-source-map';
export const devServer = {
	static: './dist',
	hot: true,
	port: 8866
};
export const module = {
	rules: [
		{
			test: /\.ts$/,
			use: 'ts-loader',
			exclude: /node_modules/
		}
	]
};
export const resolve = {
	extensions: ['.ts', '.js']
};
export const optimization = {
	splitChunks: {
		cacheGroups: {
			default: false,
			commons: {
				test: /[\\/]node_modules[\\/]/,
				name: 'vendor',
				chunks: 'initial'
			}
		}
	}
};
export const output = {
	filename: '[name].bundle.js',
	chunkFilename: '[name].chunk.js',
	path: _resolve(__dirname, 'dist'),
	clean: true
};
export const plugins = [
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './src/index.html',
		inject: true
	}),
	new CopyPlugin({
		patterns: [
			{ from: 'src/assets/spritesheets/**', to: 'assets/spritesheets/[name][ext]' },
			{ from: 'src/settings.json', to: '[name][ext]' }
		]
	})
];

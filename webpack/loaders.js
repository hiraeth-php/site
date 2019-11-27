module.exports = {

	//
	// Javascript Loader
	//

	JSLoader: (argv) => ({
		test: /\.js$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		]
	}),

	//
	// CSS Loader
	//

	CSSLoader: (argv) => ({
		test: /\.css$|\.sss$/,
		use: [
			require("mini-css-extract-plugin").loader,
			{
				loader: 'css-loader',
				options: {
					sourceMap: process.env.NODE_ENV == 'production',
					importLoaders: 1
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: argv.mode == 'production',
					config: {
						path: __dirname + '/postcss.config.js',
						ctx: argv
					}
				}
			}
		]
	}),

	//
	// HTML Loader
	//

	HTMLLoader: (argv) => ({
		test: /\.html$/,
		loader: 'html-loader',
		exclude: "/node_modules/"
	})
};

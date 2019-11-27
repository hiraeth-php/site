module.exports = {

	//
	// Javascript Loader
	//

	JSLoader: (prod) => ({
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

	CSSLoader: prod => ({
		test: /\.css$|\.sss$/,
		use: [
			require("mini-css-extract-plugin").loader,
			{
				loader: 'css-loader',
				options: {
					sourceMap: prod,
					importLoaders: 1
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: prod,
					config: {
						path: __dirname + '/postcss.config.js',
						ctx: {
							prod: prod
						}
					}
				}
			}
		]
	}),

	//
	// HTML Loader
	//

	HTMLLoader: (prod) => ({
		test: /\.html$/,
		loader: 'html-loader',
		exclude: "/node_modules/"
	})
};

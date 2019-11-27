const path    = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const entries = require('./entries');
const command = require('get-options')(process.argv, {
	'-p, --production': ''
});

module.exports = {
	entry: entries,
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	stats: {
		entrypoints: false,
		children: false,
	},
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.esm.js"
		}
	},
	module: {
		rules: [
			loaders.HTMLLoader(command.options.production),
			loaders.CSSLoader(command.options.production),
			loaders.JSLoader(command.options.production)
		]
	},
	plugins: [
		plugins.MiniCSS
	],
	output: {
		path: path.resolve('./public'),
		filename: 'scripts/[name].js'
	},
	watchOptions: {
		aggregateTimeout: 300,
		poll: true
	},
	mode: command.options.production
		? 'production'
		: 'development'
};

//
// Add Browser Sync if serving
//

if (process.env.npm_lifecycle_event == 'serve') {
	module.exports.plugins.push(plugins.BrowserSync);
}

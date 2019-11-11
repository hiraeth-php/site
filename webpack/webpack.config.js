const path    = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const entries = require('./entries');

module.exports = {
	entry: entries,
		module: {
		rules: [
			loaders.JSLoader,
			loaders.CSSLoader,
            loaders.HTMLLoader
		]
	},
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
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
	}
};

//
// Add Browser Sync if serving
//

if (process.env.npm_lifecycle_event == 'serve') {
	module.exports.plugins.push(plugins.BrowserSync);
}

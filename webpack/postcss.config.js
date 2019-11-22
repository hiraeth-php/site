module.exports = {
	sourceMap: true,
	plugins: {
		'postcss-easy-import': {
			extensions: ['.css', '.sss']
		},
		'postcss-mixins': {

		},
		'postcss-preset-env': {
			stage: 0
		},
	},
};

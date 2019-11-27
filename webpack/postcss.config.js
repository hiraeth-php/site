module.exports = ({ options }) => ({
	parser: 'sugarss',
	plugins: {
		'postcss-easy-import': {
			extensions: [
				'.sss'
			]
		},
		'postcss-preset-env': {
			stage: 0,
			browsers: [
				'last 2 versions',
				'> 5%'
			],
			features: {
				'custom-properties': false
			}
		},
		'postcss-mixins': {},
		'postcss-nested': {},
		'postcss-simple-vars': {},
		'postcss-property-lookup': {},
		'cssnano': options.mode == 'production' ? {} : false
	}
});

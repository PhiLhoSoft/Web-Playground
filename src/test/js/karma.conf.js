module.exports = function(config)
{
config.set(
{
	basePath: '../../../',
	files:
	[
		'src/main/js/lib/jquery/dist/jquery.js',
		'src/main/js/lib/jquery-ui/jquery-ui.js',
		'src/main/js/lib/lodash/lodash.js',

		// Testing library
		'src/main/js/lib/mocks/mocks.js',

		// Tested application
		'src/main/js/app/**/*.js',

		// Testing utility
		'src/test/js/mock/Mocks.js',
		// The test files
		'src/test/js/*Suite/**/*.js',
		'src/test/js/TestFilters.js',
	],
	autoWatch: true,
	preprocessors:
	{
		'src/main/js/app/**/*.js': 'coverage'
	},
	frameworks: [ 'jasmine' ],
	//browsers: [ 'Chrome' ],
	//browsers: [ 'Firefox' ],
	browsers: [ 'PhantomJS' ],
	plugins:
	[
		'karma-phantomjs-launcher',
		'karma-chrome-launcher',
		'karma-firefox-launcher',
		'karma-jasmine',
		'karma-coverage'
	],
	singleRun: true,
	reporters: [ 'dots', 'coverage' ],
	coverageReporter:
	{
		dir: 'target/karma/',
		reporters:
		[
			{ type: 'html', subdir: 'coverage' },
			{ type: 'lcov', subdir: 'report-lcov' },
		]
	}
});
};

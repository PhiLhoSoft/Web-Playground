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
	frameworks: [ 'jasmine' ],
	browsers: [ 'Chrome' ],
	//browsers: [ 'Firefox' ],
	plugins:
	[
		'karma-chrome-launcher',
		'karma-firefox-launcher',
		'karma-jasmine'
	],
	singleRun: false,
	reporters: [ 'dots' ]
});
};

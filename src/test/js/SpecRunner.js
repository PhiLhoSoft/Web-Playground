require.config(
{
	baseUrl: "../..",
	paths:
	{
		// Application libraries
		'jquery': "asset/lib/jquery/dist/jquery",
		'jquery-ui': "asset/lib/jquery-ui/jquery-ui",
		'bootstrap': "asset/lib/bootstrap/dist/js/bootstrap",
		'lodash': "asset/lib/lodash/lodash",

		// Test libraries
		'mocha': "node_modules/mocha/mocha",
		'chai': "node_modules/chai/chai",
//~ 		'chai-jquery': 'node_modules/chai-jquery',
		'sinon': "node_modules/sinon/pkg/sinon",
		'sinon-chai': "node_modules/sinon-chai/lib/sinon-chai",

		// Application scripts
		'app': "src/main/js/App",
		'cow': "src/main/js/Cow",
		'helpers': "src/main/js/utility/Helpers",
		'math-utilities': "src/main/js/utility/MathUtilities",
		'component-with-loading-lifecycle': "src/main/js/utility/ComponentWithLoadingLifecycle"
	},
	shim:
	{
//~ 		'chai-jquery': [ 'jquery', 'chai' ]
		jquery:
		{
			exports: '$'
		},
		lodash:
		{
			exports: '_'
		}
	}
});

define(function(require)
{
	var chai = require('chai');
//	var mocha = require('mocha');
	require('mocha');
	require('jquery');
//~ 	require('chai-jquery');

	// Chai
	var expect = chai.expect;
//~ 	chai.use(chaiJquery);

	mocha.ui("bdd");
	mocha.bail(false);
	mocha.checkLeaks();
	mocha.globals([ "jQuery" ]);
	mocha.reporter("html");

	require(
	[
//		'src/test/js/TestApp',
		'src/test/js/TestCow',
		'src/test/js/utility/TestHelpers',
		'src/test/js/utility/TestMathUtilities'
	],
	function(/* require */)
	{
		if (window.mochaPhantomJS)
		{
			window.mochaPhantomJS.run();
		}
		else
		{
			mocha.run();
		}
	});
});

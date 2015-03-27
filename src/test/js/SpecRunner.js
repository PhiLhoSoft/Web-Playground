require.config(
{
	baseUrl: '../../../asset/lib',
	paths:
	{
		// Application libraries
		'jquery': "jquery/dist/jquery",
		'jquery-ui': "jquery-ui/jquery-ui",
		'bootstrap': "bootstrap/dist/js/bootstrap",
		'lodash': "lodash/lodash",

		// Test libraries
		'mocha': "../node_modules/mocha/mocha",
		'chai': "../node_modules/chai/chai",
//~ 		'chai-jquery': '../node_modules/chai-jquery',
		'sinon': "../node_modules/sinon/pkg/sinon"
		'sinon-chai': "../node_modules/sinon-chai/lib/sinon-chai"

		// Application scripts
		'app': "../../../main/js/App",
		'cow': "../../../main/js/Cow",
		'helpers': "../../../main/js/utility/Helpers",
		'math-utilities': "../../../main/js/utility/MathUtilities",
		'component-with-loading-lifecycle': "../../../main/js/utility/ComponentWithLoadingLifecycle"
	},
	shim:
	{
//~ 		'chai-jquery': [ 'jquery', 'chai' ]
	}
});

define(function(require)
{
	var chai = require('chai');
	var mocha = require('mocha');
	require('jquery');
//~ 	require('chai-jquery');

	// Chai
	expect = chai.expect;
//~ 	chai.use(chaiJquery);

	mocha.ui("bdd");
	mocha.bail(false);
	mocha.checkLeaks();
	mocha.globals([ "jQuery" ]);
	mocha.reporter("html");

	require(
	[
		'js/TestApp',
		'js/TestCow',
		'js/utility/TestHelpers',
		'js/utility/TestMathUtilities'
	],
	function(require)
	{
		if (window.mochaPhantomJS)
		{
			mochaPhantomJS.run();
		}
		else
		{
			mocha.run();
		}
	});
});

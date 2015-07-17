// Build the libraries bundle and the application too

// Useful information:
// - https://github.com/substack/node-browserify#methods of course
// - http://bl.ocks.org/jfsiii/9982955
// - https://www.npmjs.com/package/bower-resolve

var browserify = require('browserify');
var bowerResolve = require('bower-resolve');
var fs = require('fs');

var jsExt = ".js";
var mapExt = ".map.json";
var srcPath = "./src/main/js/";
var distPath = "./dist/";
var librariesFileName = "libraries";
var appFileName = "index";

// Marked as "dependencies: none" in npm, so no point in parsing them.
var noParseLibraries =
[
	'jquery',
	'lodash',
	'bootstrap', // Depends on jQuery, but not with require()
	'mithril'
];
var otherLibraries =
[
	'moment', // Can require locale files
//	'virtual-dom', // Not used yet
];
var configuration =
{
	debug: true, // For minifyify
		// These don't work (on Windows), I have to put the path in each dependency
//~ 	basedir: __dirname + "/asset/lib/",
//~ 	basedir: "./asset/lib/",
	noParse: noParseLibraries
};

bowerResolve.init(function ()
{
	var libraries = noParseLibraries.concat(otherLibraries);

	var b = browserify(configuration);

	// Create a bundle with the libraries

	libraries.forEach(function (lib)
	{
		b.require(bowerResolve(lib), { expose: lib });
	});
//	b.add(srcPath + 'common.js')
//		.transform('deamdify')
	b.transform('debowerify');
	b.plugin('minifyify', { map: false });
	b.bundle().pipe(fs.createWriteStream(distPath + librariesFileName + jsExt));

	// Create a bundle with the application, depending on the libraries above

	b = browserify(configuration);
	libraries.forEach(function (lib)
	{
		b.external(lib);
	});
	b.add(srcPath + 'App.js');
	b.plugin('minifyify', { map: appFileName + mapExt, output: distPath + appFileName + mapExt });
	b.bundle().pipe(fs.createWriteStream(distPath + appFileName + jsExt));
});

// Build the libraries bundle

var browserify = require('browserify');
var fs = require('fs');

var distPath = "dist/";
var output = "libraries.js";

var b = browserify(
{
//~ 	basedir: __dirname + "/asset/lib/",
//~ 	basedir: "./asset/lib/",
	// Marked as "dependencies: none" in npm, so no point in parsing them.
	noParse:
	[
		'jquery',
		'lodash',
		'moment',
		'kefir'
	]
}
)
.require(
[
	{ file: './asset/lib/jquery/dist/jquery.js', expose: 'jquery' },
	{ file: './asset/lib/lodash/lodash.js', expose: 'lodash' },
	{ file: './asset/lib/moment/moment.js', expose: 'moment' },
	{ file: './asset/lib/bootstrap/dist/js/bootstrap.js', expose: 'bootstrap' },
	{ file: './asset/lib/kefir/dist/kefir.js', expose: 'kefir' },
	{ file: './asset/lib/kefir-jquery/kefir-jquery.js', expose: 'kefir-jquery' }
	// Problems with its dependencies?
//~ 	{ file: './asset/lib/virtual-dom/dist/virtual-dom.js', expose: 'virtual-dom' }
]
)
//.transform('./node_modules/uglify-js/bin/uglifyjs"')
.bundle()
.pipe(fs.createWriteStream(distPath + output));

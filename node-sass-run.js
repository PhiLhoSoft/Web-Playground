// A bit redundant with the command line in package.json, but I keep it as an example of script
// which I feel was missing: https://github.com/sass/node-sass/issues/793

var sass = require("node-sass");
var fs = require("fs");

var fileName = "playground";
var sassPath = "src/main/sass/";
var cssPath = "asset/css/";
sass.render(
{
	file: sassPath + fileName + ".scss",
	includePaths: [ sassPath ],
	outFile: cssPath,
	outputStyle: "nested",
	sourceComments: true,
	sourceMap: true,
	importer: function(url)
	{
		return { file: url };
	}
},
function(error, result)  // >= v3.0.0
{
	if (error)
	{
		console.log(error);
	}
	else
	{
//		console.log("Result path: " + result.path); // Always undefined...
		console.log(result.stats);
		fs.writeFileSync(cssPath + fileName + ".css", result.css, "utf8");
		fs.writeFileSync(cssPath + fileName + ".css.map", result.map, "utf8");
	}
});

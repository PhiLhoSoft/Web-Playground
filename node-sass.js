var sass = require("node-sass"),
	path = require("path");

sass.render(
{
	file: __dirname + "/src/main/sass/playground.scss",
	includePaths: [ __dirname + "/src/main/sass" ],
	outFile: __dirname + "/src/main/css/playground.css",
	sourceMap: true,
	outputStyle: "nested",
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
//~ 		console.log(result.css.toString());
		console.log(result.path);
		console.log(result.stats);
//~ 		console.log(result.map.toString()); // or console.log(JSON.stringify(result.map));
	}
});

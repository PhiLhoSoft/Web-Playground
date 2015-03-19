var sass = require("node-sass");

sass.render(
{
	file: "src/main/sass/playground.scss",
	includePaths: [ "src/main/sass" ],
	outFile: "src/main/css",
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
		console.log("Result path: " + result.path);
		console.log(result.stats);
//~ 		console.log(result.css.toString());
//~ 		console.log(result.map.toString()); // or console.log(JSON.stringify(result.map));
	}
});

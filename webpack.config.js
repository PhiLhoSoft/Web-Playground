var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');

module.exports =
{
	// Files to run at startup
	entry:
	[
		"babel-polyfill", // Use Babel's polyfill
		"./src/main/sass/main.scss", // then the CSS
		"./src/main", // then the application
		"webpack-dev-server/client?http://localhost:8080" // Auto-reload on changes
	],
	// Where to put compiled files
	output:
	{
		// At root of project
		publicPath: "/",
		// Create a unique main.js file for the whole application
		filename: "main.js"
	},
	devtool: "source-map",
	module:
	{
		loaders:
		[
			{
				test:   /\.scss$/,
//~ 				loader: "style-loader!css-loader!postcss-loader!sass"
				loaders: [ "style", "css?sourceMap", "postcss?sourceMap", "sass?sourceMap" ]
			},
			{
				test: /\.js$/,
				include: path.join(__dirname, "src"),
				loader: "babel-loader",
				query:
				{
					presets: [ "es2015" ],
				}
			}
		]
	},
	postcss: [ autoprefixer({ browsers: [ "last 2 versions" ] }) ],
	devServer:
	{
		contentBase: "./src"
	},
	debug: true
};

var path = require("path");
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var port = process.env.PORT || 8080;

function buildOptions(inProduction)
{
	var entries =
	[
		"babel-polyfill", // Use Babel's polyfill
		"./src/dist/main.css", // then the CSS
		"./src/dist/index.html" // then the application
	],
	if (!inProduction)
	{
		entries.unshift(
			"webpack-dev-server/client?http://localhost:" + port, // Auto-reload on changes
			"webpack/hot/only-dev-server"
		);
	}

	var plugins =
	[
		new webpack.EnvironmentPlugin('NODE_ENV')
	];
	if (!inProduction)
	{
		plugins.unshift(new webpack.HotModuleReplacementPlugin());
	}
	else
	{
		plugins.push(
			new webpack.NoErrorsPlugin(),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin()
		);
	}

	return {
		context: path.join(__dirname, "src"),
		// Files to run at startup
		entry: entries,
		resolve:
		{
			modulesDirectories: [ "node_modules", "bower_components" ]
		},
		// Where to put compiled files
		output:
		{
			// At root of project
			publicPath: "/dist",
//~ 			path: path.resolve("./dist"),
			// Create a unique main.js file for the whole application
			filename: "main.js",
			libraryTarget: 'umd'
		},
		devtool: "source-map",
		module:
		{
			loaders:
			[
				{
					test:   /\.scss$/,
//~ 					loader: "style-loader!css-loader!postcss-loader!sass"
					loaders: [ "style", "css?sourceMap", "postcss?sourceMap", "sass?sourceMap" ]
//~ 					loaders:
//~ 					[
//~ 						"style-loader",
//~ 						"css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]",
//~ 						'autoprefixer-loader?{ browsers: [ "last 2 versions", "ie >= 10" ] }',
//~ 						"sass-loader"
//~ 					]
				},
				{
					test: /\.js$/,
					include: path.join(__dirname, "src"),
					exclude: /node_modules|bower_components/,
					loader: "babel-loader?optional[]=runtime&stage=0",
					query:
					{
						presets: [ "es2015" ],
					},
				},
				{
					test: /\.js$/,
					loader: "eslint-loader",
					exclude: /node_modules|bower_components/
				}
			]
		},
		postcss: [ autoprefixer({ browsers: [ "last 2 versions", "ie >= 10" ] ] }) ],
		plugins: plugins,
		devServer:
		{
			contentBase: "./src"
		},
		debug: !inProduction
	};
};

module.exports = buildOptions(process.env.NODE_ENV === 'production');

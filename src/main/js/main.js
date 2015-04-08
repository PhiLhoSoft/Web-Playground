//the require library is configuring paths
require.config(
{
	baseUrl: '../../../asset/lib',
	paths:
	{
		// Tries to load jQuery from Google's CDN first and falls back to load locally.
		jquery:
		[
			"http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
			"jquery/dist/jquery.min"
		],
		// http://matznermatzner.de/en/bernd/2013/11/loading-non-amd-modules-requirejs-part-1-jquery-ui/
		/* jQuery UI */
		// Massive library, don't load it monolithically
		// 'jquery.ui': "jquery-ui/jquery-ui.min",
		// Instead, load each module on demand, if needed
		'jquery.ui.accordion': "jquery-ui/ui/jquery.ui.accordion",
		'jquery.ui.autocomplete': "jquery-ui/ui/jquery.ui.autocomplete",
		'jquery.ui.button': "jquery-ui/ui/jquery.ui.button",
		'jquery.ui.core': "jquery-ui/ui/jquery.ui.core",
		'jquery.ui.datepicker': "jquery-ui/ui/jquery.ui.datepicker",
		'jquery.ui.dialog': "jquery-ui/ui/jquery.ui.dialog",
		'jquery.ui.draggable': "jquery-ui/ui/jquery.ui.draggable",
		'jquery.ui.droppable': "jquery-ui/ui/jquery.ui.droppable",
		'jquery.ui.effect-blind': "jquery-ui/ui/jquery.ui.effect-blind",
		'jquery.ui.effect-bounce': "jquery-ui/ui/jquery.ui.effect-bounce",
		'jquery.ui.effect-clip': "jquery-ui/ui/jquery.ui.effect-clip",
		'jquery.ui.effect-drop': "jquery-ui/ui/jquery.ui.effect-drop",
		'jquery.ui.effect-explode': "jquery-ui/ui/jquery.ui.effect-explode",
		'jquery.ui.effect-fade': "jquery-ui/ui/jquery.ui.effect-fade",
		'jquery.ui.effect-fold': "jquery-ui/ui/jquery.ui.effect-fold",
		'jquery.ui.effect-highlight': "jquery-ui/ui/jquery.ui.effect-highlight",
		'jquery.ui.effect-pulsate': "jquery-ui/ui/jquery.ui.effect-pulsate",
		'jquery.ui.effect-scale': "jquery-ui/ui/jquery.ui.effect-scale",
		'jquery.ui.effect-shake': "jquery-ui/ui/jquery.ui.effect-shake",
		'jquery.ui.effect-slide': "jquery-ui/ui/jquery.ui.effect-slide",
		'jquery.ui.effect-transfer': "jquery-ui/ui/jquery.ui.effect-transfer",
		'jquery.ui.effect': "jquery-ui/ui/jquery.ui.effect",
		'jquery.ui.menu': "jquery-ui/ui/jquery.ui.menu",
		'jquery.ui.mouse': "jquery-ui/ui/jquery.ui.mouse",
		'jquery.ui.position': "jquery-ui/ui/jquery.ui.position",
		'jquery.ui.progressbar': "jquery-ui/ui/jquery.ui.progressbar",
		'jquery.ui.resizable': "jquery-ui/ui/jquery.ui.resizable",
		'jquery.ui.selectable': "jquery-ui/ui/jquery.ui.selectable",
		'jquery.ui.slider': "jquery-ui/ui/jquery.ui.slider",
		'jquery.ui.sortable': "jquery-ui/ui/jquery.ui.sortable",
		'jquery.ui.spinner': "jquery-ui/ui/jquery.ui.spinner",
		'jquery.ui.tabs': "jquery-ui/ui/jquery.ui.tabs",
		'jquery.ui.tooltip': "jquery-ui/ui/jquery.ui.tooltip",
		'jquery.ui.widget': "jquery-ui/ui/jquery.ui.widget",

		'bootstrap':
		[
			"http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js",
			"bootstrap/dist/js/bootstrap.min"
		],
		'lodash':
		[
			"http://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.5.0/lodash.min.js",
			"lodash/lodash.min"
		]
	},
	shim:
	{
		jquery:
		{
			exports: '$'
		},
		lodash:
		{
			exports: '_'
		},
		'bootstrap':
		{
			// These script dependencies should be loaded before loading this library
			deps: [ "jquery" ],
			// Custom export name, this would be lowercase otherwise
			exports: "Backbone"
		},

		/* jQuery UI */
		'jquery.ui.core': { deps: [ 'jquery' ] },
		'jquery.ui.position': { deps: [ 'jquery' ] },
		'jquery.ui.widget': { deps: [ 'jquery' ] },
		'jquery.ui.mouse': { deps: [ 'jquery.ui.widget' ] },
		'jquery.ui.draggable':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.widget',
				'jquery.ui.mouse'
			]
		},
		'jquery.ui.droppable':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.widget',
				'jquery.ui.mouse',
				'jquery.ui.draggable'
			]
		},
		'jquery.ui.resizable':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.widget',
				'jquery.ui.mouse'
			]
		},
		'jquery.ui.selectable':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.widget',
				'jquery.ui.mouse'
			]
		},
		'jquery.ui.sortable':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.widget',
				'jquery.ui.mouse'
			]
		},

		'jquery.ui.button':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.widget'
			]
		},
		'jquery.ui.menu':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.position',
				'jquery.ui.widget'
			]
		},
		'jquery.ui.accordion':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.widget'
			]
		},
		'jquery.ui.autocomplete':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.position',
				'jquery.ui.widget',
				'jquery.ui.menu'
			]
		},
		'jquery.ui.datepicker':
		{
			deps:
			[
				'jquery.ui.core'
			]
		},
		'jquery.ui.dialog':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.position',
				'jquery.ui.widget',
				'jquery.ui.mouse',
				'jquery.ui.button',
				'jquery.ui.draggable',
				'jquery.ui.resizable'
			]
		},
		'jquery.ui.progressbar':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.widget'
			]
		},
		'jquery.ui.slider':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.mouse',
				'jquery.ui.widget'
			]
		},
		'jquery.ui.spinner':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.widget',
				'jquery.ui.button'
			]
		},
		'jquery.ui.tabs':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.widget'
			]
		},
		'jquery.ui.tooltip':
		{
			deps:
			[
				'jquery.ui.core',
				'jquery.ui.position',
				'jquery.ui.widget'
			]
		},
		/* jQuery UI effect */
		'jquery.ui.effect': { deps: [ 'jquery' ] },
		'jquery.ui.effect-blind': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-bounce': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-clip': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-drop': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-explode': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-fade': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-fold': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-highlight': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-pulsate': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-scale': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-shake': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-slide': { deps: [ 'jquery.ui.effect' ] },
		'jquery.ui.effect-transfer': { deps: [ 'jquery.ui.effect' ] }
	},
	// How long it tries to load a script before giving up, the default is 7
	waitSeconds: 10
});

// Requiring the scripts in the first argument and then passing the library namespaces into a callback.
// jQuery plugins doesn't need to be specified as variables, because they come with $
require([ 'jquery', 'jquery.ui.dialog', 'bootstrap', 'lodash', 'app' ],
function ( $,                            Bootstrap,   _,        App)
{
	new App();
});

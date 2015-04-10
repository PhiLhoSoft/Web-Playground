/* jshint -W097 */ "use strict";

var $ = require('jquery');

var Helpers = require("./utility/Helpers.js");
//var MathUtilities = require("./utility/MathUtilities.js");
//var ComponentWithLoadingLifecycle = require("./utility/ComponentWithLoadingLifecycle.js");

var SENTENCE = Helpers.createEnum("Hello World!");

$('body').find('#content').text(SENTENCE);

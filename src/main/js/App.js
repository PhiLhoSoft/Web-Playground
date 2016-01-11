import $ from 'jquery';

import Helpers from "utility/Helpers.js";
// import MathUtilities from "utility/MathUtilities.js";
// import ComponentWithLoadingLifecycle from "utility/ComponentWithLoadingLifecycle.js";

var SENTENCE = Helpers.createEnum("Hello World!");

$('body').find('#content').text(SENTENCE);

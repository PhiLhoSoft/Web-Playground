/* jshint -W097 */ "use strict";

var _ = require('lodash');

var Helpers = {};

/**
* Transforms a list of strings (arguments of the function) to a kind of enum.
* @param {(string[]|Object)} arguments - a list of strings to transform to enum names (name = key = value)
*        or an object whose keys become the enum names, and values become the enum values.
* @return an immutable object with specified properties (enumeration item names)
*/
Helpers.createEnum = function()
{
	var items = {}, list = [], nb = 0;
	if (arguments.length === 1 && _.isObject(arguments[0]))
	{
		_.forOwn(arguments[0], function(value, key)
		{
			items[key] = value;
			list[nb++] = value;
		});
	}
	else
	{
		_.forEach(arguments, function (value)
		{
			items[value] = value;
			list[nb++] = value;
		});
	}
	items.list = list;
	/* istanbul ignore else: browser dependent */
	if (Object.freeze) // IE 9 and above, modern browsers...
		return Object.freeze(items); // Cannot change the object
	else
		return items;
};

Helpers.hashString = function(string)
{
	var h = _.reduce(string, function(h, c)
	{
		// Java style hash code
		h = h * 31 + c.charCodeAt(0);
		return h;
	}, 0);
	h &= 0x7FFFFF; // Unsigned 32-bit integer
	return h.toString(16).toUpperCase();
};

module.exports = Helpers;

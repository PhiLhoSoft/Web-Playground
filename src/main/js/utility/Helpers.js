define(
function()
{
	'use strict';

	var Helpers = {};

	/**
	* Transforms a list of strings (arguments of the function) to a kind of enum.
	* @param {(string[]|Object)} arguments - a list of strings to transform to enum names (name = key = value)
	*        or an object whose keys become the enum names, and values become the enum values.
	* @return an immutable object with specified properties (enumeration item names)
	*/
	Helpers.createEnum = function()
	{
		var items = {};
		if (arguments.length === 1 && _.isObject(arguments[0]))
		{
			_.forOwn(arguments[0], function(value, key)
			{
				items[key] = value;
			});
		}
		else
		{
			_.each(arguments, function (value)
			{
				items[value] = value;
			});
		}
		/* istanbul ignore else: browser dependent */
		if (Object.freeze) // IE 9 and above, modern browsers...
			return Object.freeze(items); // Cannot change the object
		else
			return items;
	};

	return Helpers;
});

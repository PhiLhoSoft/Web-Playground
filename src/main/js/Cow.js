// Utilities objects and methods
// Based on https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/
"use strict";

function Cow(name)
{
	this.name = name || "Anonymous cow";
}

Cow.prototype =
{
	greets: function (target)
	{
		if (!target)
			throw new Error("Missing target");
		return this.name + " greets " + target;
	},

	consoleGreets: function (target)
	{
		if (!target)
		{
			console.error("Missing target");
			return;
		}

		console.log(this.name + " greets " + target);
	},

	lateGreets: function (target, cb)
	{
		setTimeout(function (self)
		{
			try
			{
				cb(null, self.greets(target));
			}
			catch (err)
			{
				cb(err);
			}
		}, 1000, this);
	}
};

export { Cow };

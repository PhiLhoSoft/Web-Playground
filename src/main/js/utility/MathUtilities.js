import Helpers from "utility/Helpers.js";

var MathUtilities = {};

MathUtilities.Constant = Helpers.createEnum(
	{
		MILLISECONDS_IN_MINUTES: 60 * 1000,
		MILLISECONDS_IN_HOURS: 60 * 60 * 1000
	}
);

MathUtilities._w = Date.now();
MathUtilities._initialZ = 2169981296321; // Arbitrary large value (some date in 2038...)
MathUtilities._z = MathUtilities._initialZ;

/**
 * Returns a number between 0.0 (inclusive) and 1.0 (exclusive).
 * If a seed is given as parameter, allows to start a reproducible new series of numbers.
 * @param {number} seed - initial seed
 * @return a number between 0 (inclusive) and 1 (exclusive)
 */
// Based on http://en.wikipedia.org/wiki/Random_number_generation#Computational_methods
MathUtilities.random = function (seed)
{
	if (seed !== undefined)
	{
		MathUtilities._w = seed;
		MathUtilities._z = MathUtilities._initialZ - seed;
	}
	var mask = 0xFFFFFFFF;
	var z = MathUtilities._z;
	var w = MathUtilities._w & mask;
	/* eslint-disable no-extra-parens */
	MathUtilities._z = (36969 * (z & 0xFFFF) + (z >> 16)) & mask;
	MathUtilities._w = (18000 * (w & 0xFFFF) + (w >> 16)) & mask;
	var result = ((z << 16) + w) & mask;
	/* eslint-ensable no-extra-parens */
	result /= mask + 1;
	return result + 0.5;
};

/**
* Returns a number between min (inclusive) and max (exclusive).
* If a seed is given as parameter, allows to start a reproducible new series of numbers.
* @param {number} min - lower bound (inclusive)
* @param {number} max - upper bound (exclusive)
* @param {number} seed - initial seed
* @return a number between min and max
*/
MathUtilities.boundedRandom = function (min, max, seed)
{
	var rnd = MathUtilities.random(seed);
	return min + (max - min) * rnd;
};

/**
 * Given a timestamp in milliseconds, reduces it down to the previous hour (eg. from 15:51:34 to 15:00:00).
 * @param {number} timestamp - timestamp in milliseconds
 * @return a new timestamp
 */
MathUtilities.truncateToOClock = function (timestamp)
{
	const msih = MathUtilities.Constant.MILLISECONDS_IN_HOURS;
	return Math.floor(timestamp / msih) * msih;
};

export { MathUtilities };

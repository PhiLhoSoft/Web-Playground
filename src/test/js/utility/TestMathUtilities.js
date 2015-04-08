define(function(require)
{
	describe('MathUtilities Test', function()
	{
		'use strict';

		var MathUtilities = require('math-utilities');

		beforeEach(function()
		{
		});

		it('should truncate a time stamp to the exact hour; on exact time', function()
		{
			// GIVEN a time stamp
			var timestamp = Date.parse('2011-02-24T09:00:00+00:00');

			// WHEN
			var rounded = MathUtilities.truncateToOClock(timestamp);

			// THEN
			expect(new Date(rounded).toISOString()).toBe('2011-02-24T09:00:00');
			expect(new Date(rounded).toISOString()).toBe('2011-02-24T09:00:00');
		});

		it('should truncate a time stamp to the exact hour; in the first half hour', function()
		{
			// GIVEN a time stamp
			var timestamp = Date.parse('2011-02-24T09:11:11+00:00');

			// WHEN
			var rounded = MathUtilities.truncateToOClock(timestamp);

			// THEN
			expect(new Date(rounded).toISOString()).toBe('2011-02-24T09:11:11');
			expect(new Date(rounded).toISOString()).toBe('2011-02-24T09:00:00');
		});

		it('should truncate a time stamp to the exact hour; in the second half hour', function()
		{
			// GIVEN a time stamp
			var timestamp = Date.parse('2011-02-24T09:52:14+00:00');

			// WHEN
			var rounded = MathUtilities.truncateToOClock(timestamp);

			// THEN
			expect(new Date(rounded).toISOString()).toBe('2011-02-24T09:52:14');
			expect(new Date(rounded).toISOString()).toBe('2011-02-24T09:00:00');
		});

		it('should generate numbers ([0.0, 1.0[ range) in a reproducible way', function()
		{
			// GIVEN a bunch of random numbers
			var length = 20, seed = 1234567890, i;
			var rndNb1 = [ MathUtilities.random(seed) ];
			for (i = 0; i < length; i++)
			{
				rndNb1.push(MathUtilities.random());
			}

			// WHEN we generate another array with the same mean
			var rndNb2 = [ MathUtilities.random(seed) ];
			for (i = 0; i < length; i++)
			{
				rndNb2.push(MathUtilities.random());
			}

			// THEN
			expect(rndNb1).toEqual(rndNb2);
			expect(_.every(rndNb1, function(n) { return n >= 0 && n < 1; })).toBe(true);
		});

		it('should generate numbers ([0.0, 1.0[ range) in a different ways', function()
		{
			// GIVEN a bunch of random numbers
			var length = 20, seed = 1234567890, i;
			var rndNb1 = [ MathUtilities.random(seed) ];
			for (i = 0; i < length; i++)
			{
				rndNb1.push(MathUtilities.random());
			}

			// WHEN we generate another array with the same mean
			var rndNb2 = [ MathUtilities.random(seed + 1) ];
			for (i = 0; i < length; i++)
			{
				rndNb2.push(MathUtilities.random());
			}

			// THEN
			expect(rndNb1).not.toEqual(rndNb2);
			expect(_.every(rndNb1, function(n) { return n >= 0 && n < 1; })).toBe(true);
			expect(_.every(rndNb2, function(n) { return n >= 0 && n < 1; })).toBe(true);
		});

		it('should generate bounded numbers ([10, 90[ range) in a reproducible way', function()
		{
			// GIVEN a bunch of random numbers
			var length = 20, seed = 1234567890, i;
			var rndNb1 = [ MathUtilities.boundedRandom(10, 90, seed) ];
			for (i = 0; i < length; i++)
			{
				rndNb1.push(MathUtilities.boundedRandom(10, 90));
			}

			// WHEN we generate another array with the same mean
			var rndNb2 = [ MathUtilities.boundedRandom(10, 90, seed) ];
			for (i = 0; i < length; i++)
			{
				rndNb2.push(MathUtilities.boundedRandom(10, 90));
			}

			// THEN
			expect(rndNb1).toEqual(rndNb2);
			expect(_.every(rndNb1, function(n) { return n >= 10 && n < 90; })).toBe(true);
		});

		it('should generate bounded numbers ([10, 90[ range) in a different ways', function()
		{
			// GIVEN a bunch of random numbers
			var length = 20, seed = 1234567890, i;
			var rndNb1 = [ MathUtilities.boundedRandom(10, 90, seed) ];
			for (i = 0; i < length; i++)
			{
				rndNb1.push(MathUtilities.boundedRandom(10, 90));
			}

			// WHEN we generate another array with the same mean
			var rndNb2 = [ MathUtilities.boundedRandom(10, 90, seed + 1) ];
			for (i = 0; i < length; i++)
			{
				rndNb2.push(MathUtilities.boundedRandom(10, 90));
			}

			// THEN
			expect(rndNb1).not.toEqual(rndNb2);
			expect(_.every(rndNb1, function(n) { return n >= 10 && n < 90; })).toBe(true);
			expect(_.every(rndNb2, function(n) { return n >= 10 && n < 90; })).toBe(true);
		});
	});
});

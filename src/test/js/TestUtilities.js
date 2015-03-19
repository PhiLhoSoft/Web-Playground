// Mocha test file
// Based on https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/
if (!chai)
{
	var chai = require("chai");
}
var expect = chai.expect;
if (!sinon)
{
	var sinon = require("sinon");
}

if (!Cow)
{
	var Cow = require("../../main/js/Utilities.js").Cow;
}

describe("Cow", function()
{
	var sandbox;

	beforeEach(function ()
	{
		// create a sandbox
		sandbox = sinon.sandbox.create();

		// stub some console methods
		sandbox.stub(console, "log");
		sandbox.stub(console, "error");
	});

	afterEach(function ()
	{
		// restore the environment as it was before
		sandbox.restore();
	});

	describe("constructor", function ()
	{
		it("should have a default name", function ()
		{
			var cow = new Cow();
			expect(cow.name).to.equal("Anonymous cow");
		});

		it("should set cow's name if provided", function ()
		{
			var cow = new Cow("Marguerite");
			expect(cow.name).to.equal("Marguerite");
		});
	});

	describe("#greets", function ()
	{
		it("should throw if no target is passed in", function ()
		{
			expect(function ()
			{
				(new Cow()).greets();
			}).to.throw(Error);
		});

		it("should greet passed target", function ()
		{
			var greetings = (new Cow("Paquerette")).greets("Marguerite");
			expect(greetings).to.equal("Paquerette greets Marguerite");
		});
	});

	describe("#consoleGreets", function ()
	{
		it("should log an error if no target is passed in", function ()
		{
			(new Cow()).consoleGreets();

			sinon.assert.notCalled(console.log);
			sinon.assert.calledOnce(console.error);
			sinon.assert.calledWithExactly(console.error, "Missing target")
		});

		it("should log greetings", function ()
		{
			var greetings = (new Cow("Paquerette")).consoleGreets("Marguerite");

			sinon.assert.notCalled(console.error);
			sinon.assert.calledOnce(console.log);
			sinon.assert.calledWithExactly(console.log, "Paquerette greets Marguerite")
		});
	});

	describe("#lateGreets", function ()
	{
		it("should pass an error if no target is passed", function (done)
		{
			(new Cow()).lateGreets(null, function (err, greetings)
			{
				expect(err).to.be.an.instanceof(Error);
				done();
			});
		});

		it("should greet passed target after one second", function (done)
		{
			(new Cow("Paquerette")).lateGreets("Marguerite", function (err, greetings)
			{
				expect(greetings).to.equal("Paquerette greets Marguerite");
				done();
			});
		});
	});
});

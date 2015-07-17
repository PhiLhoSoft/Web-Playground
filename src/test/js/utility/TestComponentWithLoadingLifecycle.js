define(function(require)
{
	describe("ComponentWithLoadingLifecycle Test", function()
	{
		'use strict';

		var ComponentWithLoadingLifecycle = require('ComponentWithLoadingLifecycle');

		beforeEach(function()
		{
		});

		it("should create a default model", function()
		{
			// Given
			var options = {};

			// When
			var dModel1 = ComponentWithLoadingLifecycle.create();
			var dModel2 = ComponentWithLoadingLifecycle.create(options);

			// Then
			expect(dModel1).toEqual(dModel2);
			expect(dModel1.size).toBe(0);
			expect(dModel1.state).toBe(ComponentWithLoadingLifecycle.State.LOADING);
			expect(dModel1.message).toBe('Loading...');
			expect(dModel1.isDisabled).toBe(true);
			expect(dModel1.isLoading).toBe(true);
			expect(dModel1.isLoaded).toBe(false);
			expect(dModel1.isEmpty).toBe(false);
		});

		it("should reject bad state", function()
		{
			// Given
			var options = {};

			// When
			var model = ComponentWithLoadingLifecycle.create(options);

			// Then
			expect(_.bind(model.setState, model, 'whatever')).toThrow();
		});

		it("should create a simple model in default state", function()
		{
			// Given
			var options = { select: 'S', empty: 'E' };

			// When
			var model = ComponentWithLoadingLifecycle.create(options);

			// Then
			expect(model.size).toBe(0);
			expect(model.state).toBe(ComponentWithLoadingLifecycle.State.LOADING);
			expect(model.message).toBe("Loading...");
			expect(model.isDisabled).toBe(true);
			expect(model.isLoading).toBe(true);
			expect(model.isLoaded).toBe(false);
			expect(model.isEmpty).toBe(false);

			// And when we have no data
			model.setSize(0);

			// Then
			expect(model.size).toBe(0);
			expect(model.state).toBe(ComponentWithLoadingLifecycle.State.EMPTY);
			expect(model.message).toBe('E');
			expect(model.isDisabled).toBe(true);
			expect(model.isLoading).toBe(false);
			expect(model.isLoaded).toBe(true);
			expect(model.isEmpty).toBe(true);

			// And when we have some data
			model.setSize(1);

			// Then
			expect(model.size).toBe(1);
			expect(model.state).toBe(ComponentWithLoadingLifecycle.State.LOADED);
			expect(model.message).toBe('S');
			expect(model.isDisabled).toBe(false);
			expect(model.isLoading).toBe(false);
			expect(model.isLoaded).toBe(true);
			expect(model.isEmpty).toBe(false);
		});

		it("should create a custom model in disabled state", function()
		{
			// Given a common use case
			var options = { state: ComponentWithLoadingLifecycle.State.DISABLED, select: "Se", empty: "Em", disabled: "Di", loading: "Lo" };

			// When
			var model = ComponentWithLoadingLifecycle.create(options);

			// Then
			expect(model.size).toBe(0);
			expect(model.state).toBe(ComponentWithLoadingLifecycle.State.DISABLED);
			expect(model.message).toBe("Di");
			expect(model.isDisabled).toBe(true);
			expect(model.isLoading).toBe(false);
			expect(model.isLoaded).toBe(false);
			expect(model.isEmpty).toBe(false);

			// And when we fetch data
			model.setState(ComponentWithLoadingLifecycle.State.LOADING);

			// Then
			expect(model.size).toBe(0);
			expect(model.state).toBe(ComponentWithLoadingLifecycle.State.LOADING);
			expect(model.message).toBe("Lo");
			expect(model.isDisabled).toBe(true);
			expect(model.isLoading).toBe(true);
			expect(model.isLoaded).toBe(false);
			expect(model.isEmpty).toBe(false);

			// And when we have no data
			model.setSize(0);

			// Then
			expect(model.size).toBe(0);
			expect(model.state).toBe(ComponentWithLoadingLifecycle.State.EMPTY);
			expect(model.message).toBe("Em");
			expect(model.isDisabled).toBe(true);
			expect(model.isLoading).toBe(false);
			expect(model.isLoaded).toBe(true);
			expect(model.isEmpty).toBe(true);

			// And when we have some data
			model.setSize(1);

			// Then
			expect(model.size).toBe(1);
			expect(model.state).toBe(ComponentWithLoadingLifecycle.State.LOADED);
			expect(model.message).toBe("Se");
			expect(model.isDisabled).toBe(false);
			expect(model.isLoading).toBe(false);
			expect(model.isLoaded).toBe(true);
			expect(model.isEmpty).toBe(false);
		});
	});
});

define(
[ "src/main/js/utility/Helpers" ],
function(Helpers)
{
	'use strict';

	var State = Helpers.createEnum('DISABLED', 'LOADING', 'LOADED', 'EMPTY');

	function isStateValid(state)
	{
		return State[state] !== undefined;
	}

	function ComponentWithLoadingLifecycle(configuration)
	{
		_.defaults(configuration,
		{
			state: State.LOADING,
			loading: "Loading...",
			select: "Select an option",
			empty: "Empty",
			disabled: "-"
		});
		this._configuration =
		{
			loadingMessage: configuration.loading,
			selectMessage: configuration.select,
			emptyMessage: configuration.empty,
			disabledMessage: configuration.disabled
		};
		this.setState(configuration.state);
		this.size = 0;
	}

	ComponentWithLoadingLifecycle.prototype._updateMessage = function()
	{
		switch (this.state)
		{
			case State.LOADING: return this._loadingMessage;
			case State.LOADED: return this._loadedMessage;
			case State.EMPTY: return this._emptyMessage;
			case State.DISABLED: return this._disabledMessage;
		}
	};

	ComponentWithLoadingLifecycle.State = State;

	/**
	 * Sets the new state, and update the message and the boolean flags accordingly.
	 * @param {State} state - the new state
	 */
	ComponentWithLoadingLifecycle.prototype.setState = function(state)
	{
		if (!isStateValid(state))
			throw new Error("Invalid state '" + state + "'");

		// Real public properties.
		this.state = state;
		this.message = this._updateMessage();
		this.isDisabled = this.state === State.DISABLED || this.state === State.LOADING || this.state === State.EMPTY;
		this.isLoading = this.state === State.LOADING;
		this.isLoaded = this.state === State.LOADED || this.state === State.EMPTY; // Empty => loaded with zero items
		this.isEmpty = this.state === State.EMPTY;
	};

	/**
	 * Tells the model the size of the data (number of elements) in the component.
	 * Mostly to allow it to see if it is empty.
	 */
	ComponentWithLoadingLifecycle.prototype.setSize = function(size)
	{
		this.size = size;
		if (size === 0)
		{
			this.setState(State.EMPTY);
		}
		else
		{
			this.setState(State.LOADED);
		}
	};

	/**
	 * Creates a ComponentWithLoadingLifecycle with an object specifying the messages corresponding to the various states,
	 * and the initial state (LOADING by default). The models provides defaults messages for unspecified ones.
	 *
	 * @param {Object} configuration - definition of various messages, and the initial state
	 *   @param {State} [state] - initial state; if not specified, will be State.LOADING
	 *   @param {string} [loadingMessage] - message for loading state, telling data is being fetched
	 *   @param {string} [selectMessage] - message for loaded state, telling to select a value
	 *   @param {string} [emptyMessage] - message for empty state, when the list of data is empty (nothing to select)
	 *   @param {string} [disabledMessage] - message for disabled state
	 *
	 * @return {Object} model
	 *   @param {State} state - current state: DISABLED, LOADING, LOADED or EMPTY
	 *   @param {string} message - current message
	 *   @param {boolean} isDisabled - true if state is DISABLED or LOADING or EMPTY
	 *   @param {boolean} isLoading - true if state is LOADING
	 *   @param {boolean} isLoaded - true if state is LOADED
	 *   @param {boolean} isEmpty - true if state is EMPTY
	 *   @param {number} size - given number of elements in the component
	 */
	ComponentWithLoadingLifecycle.create = function(configuration)
	{
		var conf = {};
		if (_.isObject(configuration))
		{
			conf = _.clone(configuration);
		}
		return new ComponentWithLoadingLifecycle(conf);
	};

	return ComponentWithLoadingLifecycle;
});

define(
[ "src/main/js/utility/Helpers" ],
function(Helpers)
{
	'use strict';

	// Private property.
	var State = Helpers.createEnum('DISABLED', 'LOADING', 'LOADED', 'EMPTY');

	// Private functions.

	function isStateValid(state)
	{
		return State[state] !== undefined;
	}

	// Constructor, with class name.
	function ComponentWithLoadingLifecycle(state, loadedMessage, emptyMessage, disabledMessage)
	{
		// Public but using underscore convention to mark them as "private".
		this._loadedMessage = loadedMessage;
		this._emptyMessage = emptyMessage;
		this._disabledMessage = disabledMessage === undefined ? '' : disabledMessage;
		this.setState(state);
	}

	// Public methods, assigned to prototype, so shared among instances.

	/**
	 * Sets the new state, and update the message and the boolean flags accordingly.
	 * @param {State} state - the new state
	 */
	ComponentWithLoadingLifecycle.prototype.setState = function(state)
	{
		if (!isStateValid(state))
			throw 'Invalid state';

		// Real public properties.
		this.state = state;
		this.message = this._updateMessage();
		this.isDisabled = this.state === State.DISABLED || this.state === State.LOADING;
		this.isLoading = this.state === State.LOADING;
		this.isLoaded = this.state === State.LOADED;
		this.isEmpty = this.state === State.EMPTY;
	};

	// Public but underscore convention mark it as private
	ComponentWithLoadingLifecycle.prototype._updateMessage = function()
	{
		switch (this.state)
		{
			case State.LOADING: return 'Loading...';
			case State.LOADED: return this._loadedMessage;
			case State.EMPTY: return this._emptyMessage;
			case State.DISABLED: return this._disabledMessage;
		}
	};

	// Public static property.
	ComponentWithLoadingLifecycle.State = State;

	// Public static method, assigned to class.
	// Instance ('this') is not available in static context.
	/**
	 * Creates a ComponentWithLoadingLifecycle in LOADING state with the messages corresponding to the various states.
	 * @param {string} loadedMessage - message for loaded state, telling to start interactiing with the component
	 * @param {string} emptyMessage - message for empty state, when the list of data is empty (nothing to select)
	 * @param {string} [disabledMessage] - message for disabled state; can be omitted if this state won't be used
	 */
	ComponentWithLoadingLifecycle.create = function(loadedMessage, emptyMessage, disabledMessage)
	{
		return new ComponentWithLoadingLifecycle(State.LOADING, loadedMessage, emptyMessage, disabledMessage);
	};
	/**
	 * Creates a ComponentWithLoadingLifecycle in DISABLED state with the messages corresponding to the various states.
	 * @param {string} loadedMessage - message for loaded state, telling to start interactiing with the component
	 * @param {string} emptyMessage - message for empty state, when the list of data is empty (nothing to select)
	 * @param {string} [disabledMessage] - message for disabled state; can be omitted if this state won't be used
	 */
	ComponentWithLoadingLifecycle.createDisabled = function(loadedMessage, emptyMessage, disabledMessage)
	{
		return new ComponentWithLoadingLifecycle(State.DISABLED, loadedMessage, emptyMessage, disabledMessage);
	};

	// Return the constructor function (the object).
	return ComponentWithLoadingLifecycle;
});

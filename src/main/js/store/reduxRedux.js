/*
(Simplified) re-implementation of Redux (https://github.com/rackt/redux/), using Lodash and RxJS.
JSDoc comes from the Redux project...
RxJS usage roughly based on rx-redux project.

Typically called as:
var reducer = combineReducers({ foo: fooReducer, bar: barReducer });
var createStoreWithMiddleware = applyMiddleware(middleware1, middleware2)(createStore);
var store = createStoreWithMiddleware(reducer);
*/
// Unfinished (not tested at all!)

import rx from 'rx';

var store = {};
var storeAPI = {};

var INITIAL_ACTION = { type: '__INITIAL__ACTION__' };

// One per application instance
store.dispatcher = new rx.Subject();
store.listeners = [];


// ===== Store API =====

/**
 * Reads the state tree managed by the store.
 *
 * @returns {any}  The current state tree of your application.
 */
storeAPI.getState = function ()
{
	return store.state;
};

/**
 * Adds a change listener. It will be called any time an action is dispatched,
 * and some part of the state tree may potentially have changed. You may then
 * call `getState()` to read the current state tree inside the callback.
 *
 * @param {Function} listener  A callback to be invoked on every dispatch.
 * @returns {Function}  A function to remove this change listener.
 */
storeAPI.subscribe = function (listener)
{
	store.listeners.push(listener);

	return function unsubscribe()
	{
		_.remove(store.listeners, listener);
	};
};

/**
 * Dispatches an action. It is the only way to trigger a state change.
 *
 * The `reducer` function, used to create the store, will be called with the current state tree
 * and the given `action`. Its return value will be considered the **next** state of the tree,
 * and the change listeners will be notified.
 *
 * The base implementation only supports plain object actions.
 * If you want to dispatch a Promise, an Observable, a thunk, or something else,
 * you need to wrap your store creating function into the corresponding middleware.
 * Even the middleware will eventually dispatch plain object actions using this method.
 *
 * @param {Object} action  A plain object representing “what changed”.
 *        It is a good idea to keep actions serializable so you can record and replay user
 *        sessions, or use the time travelling `redux-devtools`. An action must have
 *        a `type` property which may not be `undefined`. It is a good idea to use
 *        string constants for action types.
 *
 * @returns {Object}  For convenience, the same action object you dispatched.
 *
 * Note that, if you use a custom middleware, it may wrap `dispatch()` to
 * return something else (for example, a Promise you can await).
 */
storeAPI.dispatch = function (action)
{
	store.dispatcher.onNext(action);
	return action;
};

/**
 * Replaces the reducer currently used by the store to calculate the state.
 *
 * You might need this if your app implements code splitting and you want to
 * load some of the reducers dynamically. You might also need this if you
 * implement a hot reloading mechanism.
 *
 * @param {Function} nextReducer  The reducer for the store to use instead.
 * @returns {void}
 */
storeAPI.replaceReducer = function (newReducer)
{
	store.rootReducer = newReducer;
	store.dispatch(INITIAL_ACTION);
};


// ===== Store utilities =====

/**
 * Creates a store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * To specify how different parts of the state tree respond to actions,
 * you may combine several reducers into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer  A function that returns the next state tree, given
 *        the current state tree and the action to handle. (state, action) => newState
 *
 * @param {any} [initialState]  The initial state. You may optionally specify it
 *        to hydrate the state from the server in universal apps, or to restore a
 *        previously serialized user session.
 *        If you use `combineReducers` to produce the root reducer function, this must be
 *        an object with the same shape as `combineReducers` keys.
 *
 * Returns a store that lets you read the state, dispatch actions and subscribe to changes.
 */
store.createStore = function (reducer, initialState)
{
	if (!_.isfunction (reducer))
		throw new Error('The reducer must be a function.');

	var store =
		{
			rootReducer: reducer
		};
	store.state = reducer(initialState, INITIAL_ACTION);

	function reduce(action)
	{
		if (!_.isPlainObject(action))
			throw new Error('Actions must be plain objects. Use middleware to handle function actions.');

		store.state = store.rootReducer(store.state, action);

		return store.state;
	}

	function callListeners()
	{
		_.forEach(store.listeners, listener => listener());
	}

	var observedState = store.dispatcher.map(reduce).share().startWith(store.state);

	observedState.subscribe(
		callListeners,
		error => { throw error; }
	);

	// Inject the base API
	_.extend(store, storeAPI);
	return store;
};

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers  An object whose values correspond to different reducer functions
 *        (signature (state, action) => newState) that need to be combined into one.
 *        The reducers should never return undefined for any action. Instead, they should return
 *        an initial state if the state passed to them was undefined,
 *        and the current state for any unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 *          passed object, and builds a state object with the same shape.
 */
store.combineReducers = function (reducers)
{
	// Keeps only reducers which are functions
	var realReducers = _.pick(reducers, _.isFunction);

	return function combine(state, action)
	{
		if (_.isUndefined(state)) // Intial call, should be invoked once only
		{
			// Keep keys with `undefined` values
			state = _.mapValues(realReducers, v => undefined);
		}

		var hasChanged = false;
		var resultState = _.mapValues(realReducers, (reducer, key) =>
		{
			var previousStateForKey = state[key];
			var nextStateForKey = reducer(previousStateForKey, action);
			if (_.isUndefined(nextStateForKey))
				throw new Error('Reducers must not return `undefined`');

			hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
			return nextStateForKey;
		});

		return hasChanged ? resultState : state;
	};
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as arguments.
 *
 * @param {...Function} middlewares  The middleware chain to be applied.
 * @returns {Function}  A store enhancer applying the middleware.
 */
/*
Typical middleware looks like:

function logger(store)
{
  return function wrapDispatchToAddLogging(nextDispatch)
  {
	return function dispatchAndLog(action)
	{
	  console.log('dispatching', action);
	  let result = nextDispatch(action);
	  console.log('next state', store.getState());
	  return result; // Might return something else, like an undo function.
	}
  }
}
*/
store.applyMiddleware = function (middlewares)
{
	return function apply(createStore)
	{
		// Returns a new createStore function, including the chain of middlewares
		return function newCreateStore(reducer, initialState)
		{
			var store = createStore(reducer, initialState);
			var currentDispatch = store.dispatch;

			// Small subset of Store API
			var storeApiForMiddleware =
				{
					getState: store.getState,
					dispatch: function dispatch(action)
					{
						return currentDispatch(action); // Close over the current store dispatch
					}
				};
			// Get the dispatch wrappers
			var chain = _.map(middlewares, middleware => middleware(storeApiForMiddleware));
			// Add the current one, at the "end" of the chain
			chain.unshift(currentDispatch);
			// Apply the wrappers in chain, to get a dispatch including this one
			var flowRightOnArray = _.spread(_.flowRight);
			var newDispatch = flowRightOnArray(chain);

			// Copy store with dispatch replaced by newDispatch
			return _.assign({}, store, { dispatch: newDispatch });
		};
	};
};

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * The only use case for `bindActionCreators` is when you want to pass
 * some action creators down to a component that isn’t aware of this architecture,
 * and you don’t want to pass `dispatch` or the store to it.
 * So it transforms action creations to plain old callbacks...
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators  An object whose values are action
 * creator functions. You may also pass a single function.
 *
 * @param {Function} dispatch  The `dispatch` function available on your store.
 *
 * @returns {Function|Object}  The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
store.bindActionCreators = function (actionCreators, dispatch)
{
	if (_.isfunction (actionCreators))
		return bindActionCreator(actionCreators, dispatch);

	return _.mapValues(actionCreators, actionCreator => bindActionCreator(actionCreator, dispatch));
};

function bindActionCreator(actionCreator, dispatch)
{
	return () => dispatch(actionCreator(...arguments));
}

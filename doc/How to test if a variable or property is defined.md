# How to test if a variable or property is defined

## The problem

There are several use cases for testing if a variable or property is defined. We will examine them before examining the ways to check the state.

- Check if a global variable exists.<br>
Of course, in our code, we carefully avoid to create global variables... We use `var` each time we declare variable, and `'use strict';` guards against forgetting it.<br>
But still, we can have global variables, at least when we load 'old-school' libraries: jQuery's `$` and Underscore / lodash's `_` are famous examples.<br>
In generic code, we might want to check if these variables are defined, and if not, to provide an alternative implementation.<br>
Reminder: in a browser, these global variables are attached to the `window` object.<br>
In the general case, we have two scenarii: the variable is not declared at all, or it is declared but no value has been assigned to it yet.<br>
In the first case, if we try to use it, we will have an error complaining about a non-existing variable.
In the second case, the variable has the value `undefined`.

- Check if a local variable exists.<br>
Actually, I will ignore this one: it is the same case than the above, and a simple look at the code around is better than coding a check! It is here only for exhausting the cases...

- Check if a property is defined on an object.<br>
That's the most common case. It is used against global objects (to see if a browser object has one of the latest features), against library objects (to handle old versions), against object parameters (optional properties on a parameter), etc.

- Check if a function parameter is defined.<br>
A function expecting a number of parameters can be called with only part of them, or even none.
In this case, the missing parameters (always at the end of the list) are declared but have the value `undefined`.

## The possible checks

JavaScript offers several ways to do this check. What is the "best" one?<br>
As often, the answer is: "It depends"...

A rather universal / safe way is to use the `typeof` operator:
```
if (typeof someIdentifier == 'undefined')
```
But honestly, it is verbose / cumbersome... :-)<br>
Still, it is good to know it, because in the case of a non-declared variable, it is the only check not throwing an error...<br>
Note: since typeof is guarantee to return a string result, we can use the `==` check. If that's the policy of your project (which might be enforced by some tools), you might prefer to use `===` comparison.

A simpler way to do the check is to compare against `undefined`:
```
if (someIdentifier === undefined)
```
Beware: don't use `==` as automatic type conversions done by JavaScript will bite you!

Some people object that this method can be flawed because JavaScript doesn't prevent from assigning a value to `undefined`:
`undefined = {};` is legal!
Now, it is unlikely to happen, unless somebody made a programming mistake like forgetting a `=` in an oddly constructed test: `if (undefined = foo)`. If this code is included in your codebase, you have a bigger problem than you thought... :-)
And ECMAScript 5, implemented in all major modern browsers, now prevent this, making (at least!) `undefined` immutable.


TODO

if (foo.do)

angular.isObject(foo) or _.isString(bar)
etc.



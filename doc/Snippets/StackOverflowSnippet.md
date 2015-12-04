### // http://stackoverflow.com/questions/32017764/lodash-using-rearg-in-chain/32393644#32393644

I know the question is old, but it is one of the rare SO questions about chaining in Lodash remaining unanswered, and trying to answer it allows me to dig deeper in the documentation and in understanding this library...
And it is a good opportunity to try the "Run JS code" feature of Stack Overflow...

I finally understood that it cannot work as you did.

First, is `rearg` really chainable? The answer is: yes.
I tried with this code:

    var last = _(twoParams).ary(1).rearg([1, 0]).value();

and indeed, when I call `last` with two parameters, it calls `twoParams` with only the last one.

Of course, `rearg` can be only chained with functions providing a function as output, and expecting a function as input, ie. only in a chain of functions processing functions.

Now, your code doesn't work because if `rearg` is chainable, its output isn't!
Its output is a plain old JavaScript function, and these are not chainable.
The good news is that Lodash, in its great wisdom, provides a way to make a function to be chainable.
You have to use `mixin` which, by default, adds the provided function to Lodash and makes it chainable.
See, for example, http://stackoverflow.com/questions/21163594/create-chain-in-lodash-with-custom-functions which explains how to do it.
Unlike these examples, I will follow the advice of the Lodash documentation, and use `runInContext` to avoid polluting Lodash with a new function that should remain local.

Here are my experiments. I took the liberty to rename some identifiers, as I hate the myXxx names and prefer more descriptive names...

<!-- begin snippet: js hide: false -->

<!-- language: lang-js -->

    // Generic code to display resuts

    var results = document.getElementById('pls-results');
    function showHTML(html)
    {
      results.insertAdjacentHTML('beforeend', html);
    }
    function show(text)
    {
      showHTML("<p>" + text + "<p>");
    }
    function showObject(obj)
    {
      show("<p>" + JSON.stringify(obj) + "<p>");
    }

    // The real code

    var keyList = [ 'a', 'b', 'c', 'd' ];
    var incompleteJson = { "a": 1, "b": 2 };
    var fullJson = { "a": 1, "b": 2, "c": true, "d": "yes" };

    // A simple way to do what is implied by the variable name
    showHTML("<h3>Has all keys</h3>");

    show("Incomplete Json");

    var diff = _.difference(keyList, _.keys(incompleteJson));
    var hasAllKeys = diff.length === 0;

    show(hasAllKeys);

    show("Full Json");

    diff = _.difference(keyList, _.keys(fullJson));
    hasAllKeys = diff.length === 0;

    show(hasAllKeys);

    // What you try to do
    showHTML("<h3>Consume Expected Keys</h3>");

    var localLodash = _.runInContext();
    localLodash.mixin(
        {
            'reverseDiff': _.rearg(_.difference, [1, 0])  // switching order of arguments
        }
    );

    show("Incomplete Json");

    var expectedKeys = localLodash.chain(incompleteJson)
         .keys()
         .reverseDiff(keyList)
         .value();

    showObject(expectedKeys);

    show("Full Json");

    expectedKeys = localLodash.chain(fullJson)
         .keys()
         .reverseDiff(keyList)
         .value();

    showObject(expectedKeys);

<!-- language: lang-html -->

    <div id="pls-results"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.js"></script>

<!-- end snippet -->


### http://stackoverflow.com/questions/33069411/rxjs-subscribe-to-button-clicks-not-working-plain-js

<!-- begin snippet: js hide: false -->

<!-- language: lang-js -->

    var button = document.querySelector('#button');
    var buttonClickStream = Rx.Observable.fromEvent(button, 'click');

    var buttonClick = buttonClickStream.subscribe(
      function(i){console.log("read")},
      function(e){console.log(e)},
      function(){console.log("done")}
    );

<!-- language: lang-html -->

    <button type="button" id="button">read</button>

    <script src="http://cdnjs.cloudflare.com/ajax/libs/rxjs/4.0.1/rx.all.js"></script>

<!-- end snippet -->

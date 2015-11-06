# Web-Playground

Skeleton / experimentation area to explore making / using a Web stack for a simple single-page application.

The first hardest part, with such project, is to choose the tools:

- Grunt? Gulp? Something else like Brunch? Nothing? (ie. pure NPM)
- Bower or pure NPM?
- RequireJS? Browserify? Webpack? StealJS? Babel? Rollup?

The second hardest part is to choose libaries / frameworks!

## History

I used Bower, but choose to use pure NPM for tasks.

But the latter is a bit annoying: long command lines, hard to get OK cross-platform, no comments in the Json file (why have chosen Json? OK for data, stupid for configuration...).
I lean toward using Webpack, today, to try...
I will probably drop Bower in favor of... pure NPM. Latest version is able to do flat dependencies, AFAIK.
I will try and use Babel / ES2015, too. Thus, I want to use ES6's requires, etc.
Also dropping JSHint in favor of ESLint.

The whole project has to be updated!

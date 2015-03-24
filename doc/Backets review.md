Brackets review

I installed Brackets (v. 1.2 on Windows 7 with 8 GB of memory), it went out quite smoothly, just asking to directory where to install it.
I opened it, it starts very fast.
It has a dark UI but a light editing area. Not fan of dark theme, but I will try and keep it to see if it is effective to have a contrast between the UI and the editing area.
Default syntax coloring theme looks OK so far.
There is no drag'n'drop by default, which is why I rejected it on my first try (before 1.0) but it has been introduced in this version, and the blog post about this release [1] shows how to activate it.
It is a bit primitive out of the box. You have to install several extensions to get things done efficiently... That's OK because you keep the application streamlined: no need to install CoffeeScript or Less extensions iif you code only in JavaScript and use Sass...
There are not much settings either: you have to edit Json files to customize things. A bit less intuitive, but I am OK with that, as that's the way I customize ScITE, my favorite (general purpose) source code editor. And not having complex dialogs to set every option also keeps the application light.


[1] http://blog.brackets.io/2015/03/02/brackets-1-2-now-available/

### Installed extensions

File Tree Exclude
Excludes folders (eg. containing generated stuff) from the file tree (less noise), find in files and quick open.
https://github.com/JonathanWolfe/file-tree-exclude

Brackets Outline List
Display a list of the functions or definitions in the currently opened document.
https://github.com/Hirse/brackets-outline-list

Whitespace Sanitizer
Help keep white spaces and tabs consistent. Also trims trailing whitespaces and ensures newline at end of file.
https://github.com/MiguelCastillo/Brackets-wsSanitizer
See also https://github.com/adobe/brackets/wiki/How-to-Use-Brackets#preferences to set up tab preferences per language

Show Whitespace
Show indentation. Useful with the previous one...
https://github.com/DennisKehrig/brackets-show-whitespace

Select Lines
Select lines by clicking / dragging in the gutter.
https://github.com/talmand/Brackets-Select-Lines

Various Improvements
Add more information in the status bar, lowercase and uppercase converter, super clipboard, button close all folders in file tree, files search.
https://github.com/Dammmien/brackets-various-improvements

Display Shortcuts
Display current keyboard shortcuts in a bottom panel that can be sorted and filtered.
https://github.com/redmunds/brackets-display-shortcuts
See also https://github.com/adobe/brackets/wiki/User-Key-Bindings and https://github.com/adobe/brackets/blob/master/src/command/Commands.js to define (or change) your shortcuts.


#### Support of auto-completion, hinting & linting

InteractiveLinter
Brings realtime JSHint/JSLint/CoffeeLint reports into Brackets as you work on your code, in form of margin indicators.
https://github.com/MiguelCastillo/Brackets-InteractiveLinter

JSHint
Enable JSHint support, which can (should) supercedes JSLint. The latter is a bit too strict about "rules". The former is very flexible.
https://github.com/cfjedimaster/brackets-jshint

JSCS
JSCS <http://jscs.info/> support: JSHint supports some code style rules, but they are deprecated in favor of JSCS.
https://github.com/globexdesigns/brackets-jscs

SCSS Lint
SCSS lint support.
https://github.com/chimo/brackets-scss-lint

CSSLint
https://github.com/cfjedimaster/brackets-csslint

SASSHints
Autocompletion for SASS/SCSS variables.
https://github.com/konstantinkobs/brackets-SASShints

Emmet
Facilitates typing of HTML: div>(header>ul>li*2>a)+footer>p + Tab key procudes a div with a header and a footer, the former with a list inside.
https://github.com/emmetio/brackets-emmet

Brackets Snippets
Imitate Sublime Text's behavior of snippets: insert snippets of code by typing an abbreviation and a shortcut key.
https://github.com/chuyik/brackets-snippets

Ternific
JavaScript hinting and refactoring powered by Tern.
https://github.com/MiguelCastillo/Brackets-Ternific


#### Other tools

Brackets SASS
Enable Live Preview and compile SASS files.
https://github.com/jasonsanjose/brackets-sass

Markdown Preview
As the name implies...
https://github.com/gruehle/MarkdownPreview

SpellCheck
As the name implies... Not real time.
https://github.com/couzteau/SpellCheck

Perforce
Enables Perforce source control integration (no GUI, just check out / add / delete files when dirty).
https://github.com/JoshGalvin/brackets-perforce

SVG Preview
Live preview SVG files inline as you edit them
https://github.com/peterflynn/svg-preview


### Extensions that might be installed someday

Beautify
Format JavaScript, HTML, and CSS files
https://github.com/drewhamlett/brackets-beautify

Git
https://github.com/zaggino/brackets-git

Code Folding
Provides simple code folding for files edited in brackets. Supports brace folding, tag folding, indent folding and multi-line comment folding.
https://github.com/thehogfather/brackets-code-folding




brackets.json

{
    "debug.showErrorsInStatusBar": false,
    "useTabChar": true,
    "jslint.options": {
        "white": true
    },
    "linting.collapsed": false,
    "linting.enabled": true,
	"language": {
		"javascript": {
			"linting.prefer": [ "JSHint", "JSCS" ],
			"linting.usePreferredOnly": true
		}
	},
    "dragDropText": true,
    "styleActiveLine": true,
    "jwolfe.file-tree-exclude.list": [
        "node",
        "node_modules",
        "bower_components",
        ".git",
        ".idea",
        ".sass-cache",
        "dist",
        ".settings",
        "target"
    ],
    "hirse.outline.enabled": true
}

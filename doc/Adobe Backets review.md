title: Adobe Brackets revew
description: a review of the Brackets IDE for the Web, at version 1.5
date: 2015-09-25 13:24:00
---

# Adobe Brackets - IDE for the Web

Integrated Development Environment oriented toward the Web technologies

http://brackets.io/

## Quick review

I installed Brackets (v. 1.2 on Windows 7 with 8 GB of memory; currently at v.1.4), it went out quite smoothly, just asking for the directory where to install it.
I opened it, it starts very fast.
It has a dark UI but a light editing area. Not fan of dark theme, but I will try and keep it to see if it is effective to have a contrast between the UI and the editing area.
Default syntax coloring theme looks OK so far. It can be changed with theme plugins.
Actually, the UI theme cannot be changed easily, it needs a plugin to be able to modify it.
There is no drag'n'drop of text by default, which is why I rejected this editor on my first try (before 1.0), because I use this operation a lot; but it has been introduced in this version, and the [blog post about this release](http://blog.brackets.io/2015/03/02/brackets-1-2-now-available/) shows how to activate it.
The editor is a bit primitive out of the box. You have to install several extensions to get things done efficiently... That's OK because this keeps the application streamlined: no need to install CoffeeScript or Less extensions if you code only in JavaScript and use Sass...
There are not much settings either: you have to edit Json files to customize things. A bit less intuitive, but I am OK with that, as that's the way I customize ScITE, my favorite (general purpose) source code editor. And not having complex dialogs to set every option also keeps the application light.

After a few weeks of using Brackets, I appreciate it a lot: it is much less memory hungry than WebStorm or Eclipse, it is flexible and easy to use.
I recommend it.

Still, I regret some base editor features are missing and must be fixed with extensions. Among them:

- Jump to matching brace (bracket / parenthesis);
- Gutter selection of lines;
- Recall previous searches / replacements;
- Autofill of search field with text under caret (text has to be selected);
- Show whitespace / end of lines / indentation guides / right margin;
- Selection to upper / lower case; and some more.

Some of these features has been addressed by adding extensions, but I feel these should be native.
I will list here a number of these extensions I found useful.

I give the links to the GitHub projects, but the best way to install these extensions is to go to the Extension Manager in Brackets, to type (paste) the name of the extension and to install it from there. The manager also checks for updated and allows to install them easily.

## Installed extensions

### General improvement

- **File Tree Exclude**
 - Jon Wolfe (https://github.com/JonathanWolfe/) - 0.6.3
 - Excludes folders (eg. containing generated stuff) from the file tree (less noise), find in files and quick open.
 - https://github.com/JonathanWolfe/file-tree-exclude

- **Brackets Outline List**
 - Jan Pilzer (https://github.com/Hirse) - 0.7.0
 - Display a list of the functions or definitions in the currently opened document.
 - https://github.com/Hirse/brackets-outline-list

- **White Space Sanitizer**
 - Miguel Castillo (https://github.com/MiguelCastillo) - 1.2.1
 - Help keep white spaces and tabs consistent. Also trims trailing whitespaces and ensures newline at end of file.
 - https://github.com/MiguelCastillo/Brackets-wsSanitizer
 - See also https://github.com/adobe/brackets/wiki/How-to-Use-Brackets#preferences to set up tab preferences per language

- **Show Whitespace**
 - Dennis Kehrig (https://github.com/DennisKehrig) - 2.0.1
 - Show indentation. Useful with the previous one...
 - https://github.com/DennisKehrig/brackets-show-whitespace

- **Select Lines**
 - Travis Almand (https://github.com/talmand) - 1.3.0
 - Select lines by clicking / dragging in the gutter.
 - https://github.com/talmand/Brackets-Select-Lines

- **Display Shortcuts**
 - Randy Edmunds (https://github.com/redmunds) - 1.3.5
 - Display current keyboard shortcuts in a bottom panel that can be sorted and filtered.
 - https://github.com/redmunds/brackets-display-shortcuts
 - See also https://github.com/adobe/brackets/wiki/User-Key-Bindings and https://github.com/adobe/brackets/blob/master/src/command/Commands.js to define (or change) your shortcuts.

- **Go to Matching Bracket**
 - David Waterston (https://github.com/davidwaterston) - 2.1.0
 - Instantly locate and place the cursor on the matching bracket to the one under the cursor.
 - Shortcut: Ctrl+Alt+Right Arrow
 - https://github.com/davidwaterston/goto-matching-bracket

- **Rename JavaScript Identifier**
 - Asger Feldthaus (https://github.com/asgerf) - 0.2.9
 - Intelligent renaming of JS variables.
 - Shortcut: Ctrl+R
 - https://github.com/asgerf/bracket-rename

- **BracketstoIX**
 - ApptoIX Limited (https://github.com/apptoix) - 3.2.0
 - Swiss knife toolset... Useful: to upper or to lower case, single to double quote and back, RGB to hex colors and back, etc.
 - Shortcuts: use the Command Mapper to define them as you want. Use Display Shortcuts to see what is available or overridable.
 - https://github.com/apptoix/bracketstoix - http://www.apptoix.com/fr/bracketstoix.html

### Support of auto-completion, hinting & linting

- **Interactive Linter**
 - Miguel Castillo (https://github.com/MiguelCastillo) - 1.0.5
 - Brings realtime JSHint/JSLint/CoffeeLint reports into Brackets as you work on your code, in form of margin indicators.
 - https://github.com/MiguelCastillo/Brackets-InteractiveLinter

- **SCSS Lint**
 - chimo (https://github.com/chimo) -  0.2.0
 - SCSS lint support.
 - https://github.com/chimo/brackets-scss-lint

- **SASSHints**
 - Konstantin Kobs (https://github.com/konstantinkobs) - 1.1.0
 - Auto-completion for SASS/SCSS variables.
 - https://github.com/konstantinkobs/brackets-SASShints

- **Emmet**
 - Sergey Chikuyonok (https://github.com/sergeche) - 1.2.2
 - Facilitates typing of HTML: div>(header>ul>li*2>a)+footer>p + Tab key procures a div with a header and a footer, the former with a list inside.
 - https://github.com/emmetio/brackets-emmet

- **Brackets Snippets**
 - Edward Chu (https://github.com/chuyik) - 1.8.1
 - Imitate Sublime Text's behavior of snippets: insert snippets of code by typing an abbreviation and a shortcut key.
 - https://github.com/chuyik/brackets-snippets

- **Ternific**
 - Miguel Castillo (https://github.com/MiguelCastillo) - 0.8.0
 - JavaScript hinting and refactoring powered by Tern.
 - https://github.com/MiguelCastillo/Brackets-Ternific

- **QuickDocsJS**
 - Ole Kröger (https://github.com/Wikunia) - 1.6.7
 - Inline short documentation for JavaScript functions, including a summary,syntax and parameters.
 - Shortcut: Ctrl+K
 - https://github.com/Wikunia/brackets-QuickDocsJS

- **FuncDocr**
 - Ole Kröger (https://github.com/Wikunia) - 0.8.26
 - Generates JS/PHPDoc annotations for your functions.
 - Shortcut: Ctrl+Alt+D
 - https://github.com/Wikunia/brackets-FuncDocr

#### Removed because Interactive Linter supports them anyway

- **JSHint**
 - Enable JSHint support, which can (should) supercedes JSLint. The latter is a bit too strict about "rules". The former is very flexible.
 - https://github.com/cfjedimaster/brackets-jshint

- **JSCS**
 - JSCS <http://jscs.info/> support: JSHint supports some code style rules, but they are deprecated in favor of JSCS.
 - https://github.com/globexdesigns/brackets-jscs

- **CSSLint**
 - https://github.com/cfjedimaster/brackets-csslint

### Other tools

- **Brackets SASS**
 - Jason San Jose (https://github.com/jasonsanjose) - 2.0.3-132
 - Enable Live Preview and compile SASS files.
 - https://github.com/jasonsanjose/brackets-sass

- **Markdown Preview**
 - Glenn Ruehle (http://github.com/gruehle) - 1.0.10
 - As the name implies...
 - https://github.com/gruehle/MarkdownPreview

- **Spell-check**
Jochen Hagentröm (https://github.com/couzteau) - 0.5.8
As the name implies... Not real time.
 - https://github.com/couzteau/SpellCheck

- **Perforce**
 - Joshua Galvin (https://github.com/JoshGalvin) - 1.0.1
 - Enables Perforce source control integration (no GUI, just check out / add / delete files when dirty).
 - https://github.com/JoshGalvin/brackets-perforce

- **SVG Preview**
 - Peter Flynn (https://github.com/peterflynn) - 1.3.0
 - Live preview SVG files inline as you edit them
 - https://github.com/peterflynn/svg-preview

### Extensions that might be installed someday

- **Beautify**
 - Format JavaScript, HTML, and CSS files
 - https://github.com/drewhamlett/brackets-beautify

- **Git**
 - https://github.com/zaggino/brackets-git

#### Removed

- **Various Improvements**
 - Add more information in the status bar, lowercase and uppercase converter, super clipboard, button close all folders in file tree, files search.
 - https://github.com/Dammmien/brackets-various-improvements

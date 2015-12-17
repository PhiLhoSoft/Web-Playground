title: GitHub Atom review
description: a review of the GitHub Atom editor (IDE), at version 0.10
date: 2015-12-15 10:40:00
---

# GitHub Atom review

"A hackable text editor for the 21st Century"

https://atom.io/

## Quick review

I downloaded the installer. It is big! Of the IDEs I tried, it is among the biggest:

| Name	|	Version	|	Size |
| ----- | --------- | ------ |
| Brackets	|	1.5	|	37 MB |
| Visual Studio Code	|	0.10.3	|	43 MB |
| Light Table	|	0.7.2	|	48 MB |
| Atom	|	1.3.1	|	88 MB |
| WebStorm	|	9	|	140MB |

I installed Atom (v. 1.3.1 on Windows 7 with 8 GB of memory).
It doesn't ask where to install, it goes arbitrarily at C:\Users\<user name>\AppData\Local\atom. I would prefer to install it beside my other programs, to locale it easily. And I would appreciate it asks me before installing something on the desktop (I have no icons there!) or on the start menu (I no longer care about this one, but still...).
It is a bit "all over the place", as it also has a C:\Users\<user name>C:\Users\plhoste\.atom\AppData\Roaming\Atom folder (for cache?), and a C:\Users\<user name>\.atom folder (settings, packages...).

I opened it, it starts quickly (at least as second load, after the initial one after install).
It has a dark UI, which I don't like, but I quickly found where to change this to the default light theme. Good point than several themes are bundled by default: no need to hunt for them. The default light UI theme is rather nice. I also chose the One Light syntax theme among four. A bit too pale (low contrast) for my taste, I will eventually see if I can tweak it.

As I feared (I searched a bit before, given the Visual Studio Code deception), drag'n'drop of code isn't available out of the box. Actually, I saw several plugins activating it. That's one of the problems with this editor: there is a plethora of plugins, which can be nice, but it is confusing to choose one... And I still think such feature should be built-in in the editor.
Same for column (rectangular) selections!
I find a bit unsettling to have to install lot of plugins to get base editor features. I have the same issue with Brackets, but it has at least these two features built-in (but D'n'D must be activated by a setting).
That said, I found several features out of the box for which I had to install a plugin in Brackets:
- Jump to matching brace / bracket
- Gutter selection


I expected to find a feature not present in Brackets: click on a word, hit Ctrl+F to find the word under caret. Nope, not better, I have to select the word (double-click as usual; Ctrl+D does it as well, but I assign it to duplicate line instead) to have it picked up by default. At least, it memorizes the last search. But unlike SciTE (my all-purpose lightweight text editor of choice), it doesn't keep an history of searches.
Good point: it allows to change text in selection only (a feature I miss in Brackets), and to limit searches to word only (something I rarely use but which is sometime useful).

OK, I switched to Atom to type this text (in Markdown format). Good surprise: it has spell checking enabled out of the box. And it can suggest words, although I am not sure of the logic of suggestions (scanning existing buffers, apparently; nice point: it is not obtrusive). Little bug (or unwanted feature ;-) -- I see a misspelled word in the text (red underline), I right-click directly on it, and choose Correct spelling. It does nothing... I found out I have to left-click first on the word to get spelling suggestions.
I see no way to add words to a user dictionary.

The Welcome Guide is nice, I just saw a way to customize the styling. Although it lacks concrete examples: eg. how do I change the color of titles in Markdown? (I avoid reddish colors, reserved to mark errors). Ah, I suppose I have to study an existing style, like https://github.com/atom/atom-light-syntax/blob/master/index.less
And I can see the actual styles by showing the developer tools (View > Developer > Toggle Developer Tools) and using it like Chrome DevTools.
Also a bug: I have _Choose a Theme_ and _Customize the Styling_ opened, I can't scroll back above _Install a Package_. I have to close one to see the top!

Another bug or unwanted feature: it ensures there is an empty line at the end of a file when saving it, which can be nice (I generally want that), but if I have several lines, it removes the extra ones (which is annoying in a text file, because I want to keep my future paragraph empty lines). Will see if I can disable that.

Undo coalescing is a bit strange: when I type a word, then undo, it removes parts of the word, successively, instead of whole word.

Atom lacks a nice feature of Brackets: in an HTML file, Brackets can auto-complete the path of a resource (script, CSS file, etc.). Found a plugin for that, of course... Although it is slightly less convenient.

Annoyance: I can hit Ctrl+F in the Settings > Package page (for example), but it doesn't find anything there (can be convenient to find a given package by something else than its name).

Command palette: good idea to highlight searched terms, but on light theme, I get light gray highlight, nearly unreadable on very light gray background...

Minor quibble: title and closing cross in inactive tabs are one or two pixels too low (one pixel lower than the active tab, at least). It "hurts" my sense of tidiness... :-)

## Installed packages

Good point: once a plugin / package is installed, no need to restart Atom to get it working.

- Sublime Style Column Selection
1.3.0 by bigfive
https://atom.io/packages/Sublime-Style-Column-Selection
https://github.com/bigfive/atom-sublime-select

- simple-drag-drop-text
0.3.0 by mark-hahn
https://atom.io/packages/simple-drag-drop-text
https://github.com/mark-hahn/simple-drag-drop-text

- highlight-selected
0.11.1 by richrace
https://atom.io/packages/highlight-selected
https://github.com/richrace/highlight-selected

- minimap-highlight-selected
4.3.1 by atom-minimap
https://atom.io/packages/minimap-highlight-selected
https://github.com/atom-minimap/minimap-highlight-selected

- autocomplete-paths
1.0.2 by atom-community
https://atom.io/packages/autocomplete-paths
https://github.com/atom-community/autocomplete-paths
With patch https://github.com/atom-community/autocomplete-paths/pull/51/files applied manually...

- autoclose-html
0.19.0 by mattberkowitz
https://atom.io/packages/autoclose-html
https://github.com/mattberkowitz/autoclose-html

- rest-client
0.5.0 by ddavison
https://atom.io/packages/rest-client
https://github.com/ddavison/rest-client

- minimap
4.18.0 by atom-minimap
https://atom.io/packages/minimap
https://github.com/atom-minimap/minimap

- markdown-mindmap
0.2.4 by dundalek
https://atom.io/packages/markdown-mindmap
https://github.com/dundalek/atom-markdown-mindmap

- linter
1.11.3 by atom-community
https://atom.io/packages/linter
https://github.com/atom-community/linter

- linter-eslint
5.2.6  by AtomLinter
https://atom.io/packages/linter-eslint
https://github.com/AtomLinter/linter-eslint

- linter-htmlhint
0.2.1 by AtomLinter
https://atom.io/packages/linter-htmlhint
https://github.com/AtomLinter/linter-htmlhint

- linter-csslint
1.1.0 by AtomLinter
https://atom.io/packages/linter-csslint
https://github.com/AtomLinter/linter-csslint

- linter-sass-lint
0.4.3 by DanPurdy
https://atom.io/packages/linter-sass-lint
https://github.com/DanPurdy/linter-sass-lint

- pigments
0.19.3 by abe33
https://atom.io/packages/pigments
https://github.com/abe33/atom-pigments

- atom-beautify
0.28.19 by Glavin001
https://atom.io/packages/atom-beautify
https://github.com/Glavin001/atom-beautify

- tree-ignore
0.2.6 by leny
https://github.com/leny/atom-tree-ignore
Installation failed silently (not mentioning an error; I see the error when going to _Packages_), I had to go to the console of the DevTools to see the errors. Apparently, an issue with node-gyp on Windows.

- file-icons
1.6.13 by DanBrooker
https://atom.io/packages/file-icons
https://github.com/DanBrooker/file-icons

# Themes

- gl-light-syntax
2.1.1 by gouvinb
https://atom.io/themes/gl-light-syntax
https://github.com/gouvinb/gl-light-syntax/tree/master/styles/languages

- naturerainbow-light-syntax
0.1.0 by fthiagogv
https://atom.io/themes/naturerainbow-light-syntax
https://github.com/fthiagogv/naturerainbow-light-syntax

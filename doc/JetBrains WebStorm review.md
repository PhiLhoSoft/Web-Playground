title: JetBrains WebStorm review
description: a review of the WebStorm IDE for Web applications, at version 9
date: 2015-03-02 11:42:00
---

# JetBrains WebStorm review

For Java coding, I elected Eclipse as my main IDE. I tried NetBeans, and appreciated it, but at the time, it was Java-centric so I went back to Eclipse instead, more polyglot. Now, NetBeans is more versatile, but now I know Eclipse well, with its quirks, warts and all, so I remain there.
When I had to code JavaScript (with AngularJS, how original!) at work, for a new project, I naturally tried to use Eclipse, with an Angular plugin. It wasn't so bad, but still a bit frustrating, with no renaming of local variables, loosing the capability to drag'n'drop code in CSS or HTML editors (a long-standing bug...), and some other frustrations.
A colleague advised to try WebStorm.
At first, I was a bit reluctant. First, it is a payware, something I usually avoid. Of course, there is chance my company finally pays for the software, if it was a real productivity tool. But then, that's something that I would use at work, and couldn't use at home (I have zero software budget...).
Secondly, I tried IntelliJ IDEA some years ago, and wasn't convinced. Perhaps it was less mature than now, or perhaps I didn't try hard enough, but I went back to my Eclipse quite quickly.

Well, I installed it (v. 9.0.3 on Windows 7 with 8 GB of memory) and, as usual in a first contact, I went to the settings, to get a first feel of the capabilities of the application. They are quite complete, yet not overwhelming.
I first chose the Eclipse keyboard configuration, allowing me to find back a familiar interface. And I customized some that I also customize on Eclipse (to find back shortcuts I use in my favorite source code editor, SciTE). It went well and fast.

I also customized the color settings. IIRC, it defaults to a dark theme, which I dislike. I chose a clear theme, and customized the colors to my taste. It is quite flexible, too.
Lastly, I changed the JavaScript formatting to follow the rules we use at work. Also easy and flexible, with still some quirks that have corresponding open issues in their backlog.

One surprise: I imported our project, I selected Perforce (the VCS we use at work) as VCS for it (or it even proposed it, perhaps because it found a .p4ignore file), and it went forward without asking any question (except my password), finding settings in the environment variables. The VCS integration is rather well made.

I have collected a little list of pros and cons:

PROS

- Good auto-completion. It first propose local occurrences, then some more distant ones. See a cons for this feature, though.
- It is aware of file paths in code (in script tags): if I delete a JS file, it can warn it is still used in some source code.
- Good renaming facility, powerful, but because of the inherent nature of JavaScript, can be too wide (see the cons).
- Smart HTML, CSS (and SCSS) editing, with good auto-completion and formatting.
- Good editing capabilities, including column (rectangular) selection mode and drag'n'drop of text.
- Good, fast open resource (Ctrl+Shift+R) facility with real-time list of matching names, and pre-selection of recently / frequently used files. Compensates a bit the issue with tabs (see below).
- Good, clear project management: you just import a directory, and mark some folders as excluded (generated files like target), or resource. They are marked with colors in the project tree.
Colors are also used by the VCS to mark new files, changed files, etc.
- Natively knows lot of Web languages (JS, Dart, Typescript, Coffeescript), markup (CSS, HTML, XML, Json, Yaml...) and tools (Gherkin, HAML, LESS, SASS, SCSS, etc.).
- Good analysis of code, with hints, eg. when we forget a semi-colon, or errors (sometime too discrete).
- Support of Emmet in HTML and CSS. For example, if we type, in an HTML editor, table>thead>tr>th*8^^^tbody>tr*5>td*8 then Tab, we get a full HTML table with headers (8 columns) and body (5 rows).
- Shortcut to view the current HTML file in any main browser.

CONS

- I am often confused with Tab management. Perhaps I am too used to Eclipse, where I can have lot of open tabs: I have a drop-down list of these tabs, where I can type the first letter to quickly find the editor I want. WS has the same drop-down, but only shows there non-displayed tabs (instead of all of them), and isn't searchable (apparently). The concept of non-displayed is fuzzy too, as some tabs are out of view and I have to scroll them (with the mouse wheel) to see them.
So I don't know if a tab is out of view or non-displayed. I find myself relying on the Project view (hierarchical) to switch between two related files (eg. controller and template), but they are relatively far spaced there, so I scroll a lot, and have to double-click on a file name (even if already opened) to switch to it.
PS.: I just found out I can have tabs on several rows, I will try this disposition.
I find myself loosing lot of time on this. A little pro thought: it is easy to move a tab to put it close to the related one. At least when both are visible!
- auto-completion sometime kicks in automatically in the middle of typing an identifier, and sometime it can be annoying as it might freeze completely WebStorm: I get a spinning cursor and I have to wait for several dozens of seconds before being able to resume the typing. I think there is an open bug on this topic.
- Lot of operations like auto-completion rely on Node.js for parsing JavaScript and providing a database of identifiers. The Node.js instance can grow enormous (near a gigabyte of memory) and is likely the culprit for the freezing described above.
- Renaming a non-local identifier is greedy: it will find all occurrences of this string in the project (can include strings and comments) and will propose all of them. It can be slow (see above) and we have to examine each occurrence. This encourages to use unique names: if we have to data stores, for example, instead of naming the Crud methods with generic names (create, update, delete, etc.), it is better to name them to the specific objects they operate on (createFoo, updateFoo, deleteFoo...). This eases auto-completion and renaming by narrowing the possible occurrences.
- Bad management of Azerty keyboard: commenting code can be made with Ctrl+/ where / is shifted on my keyboard. I can't get it to work... I just mapped the command to one I use in SciTE, anyway.

I hadn't time to test how to debug JavaScript within WS, but it also something it can do.

Overall, I am quite impressed by this IDE, which has a deep knowledge of the Web environment, offers good editing facilities and is very pleasant to use.




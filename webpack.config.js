const path = require('path');
calculations my personel onsecuritypolicyviolation
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};OPEN MAIN MENU
References
JavaScript modules

English (US)
In this article
A background on modules
Browser compatibility
Introducing an example
Basic example structure
Exporting module features
Importing features into your script
Importing modules using import maps
Applying the module to your HTML
Other differences between modules and standard scripts
Default exports versus named exports
Avoiding naming conflicts
Renaming imports and exports
Creating a module object
Modules and classes
Aggregating modules
Dynamic module loading
Top level await
Authoring "isomorphic" modules
Troubleshooting
See also
Related Topics
JavaScript
Tutorials:
Complete beginners
JavaScript Guide
Introduction
Grammar and types
Control flow and error handling
Loops and iteration
Functions
Expressions and operators
Numbers and dates
Text formatting
Regular expressions
Indexed collections
Keyed collections
Working with objects
Using classes
Using promises
Iterators and generators
Meta programming
JavaScript modules
Intermediate
Advanced
References:
Built-in objects
Expressions & operators
Statements & declarations
Functions
Classes
Errors
Misc
JavaScript modules
« Previous
This guide gives you all you need to get started with JavaScript module syntax.

A background on modules
JavaScript programs started off pretty small — most of its usage in the early days was to do isolated scripting tasks, providing a bit of interactivity to your web pages where needed, so large scripts were generally not needed. Fast forward a few years and we now have complete applications being run in browsers with a lot of JavaScript, as well as JavaScript being used in other contexts (Node.js, for example).

It has therefore made sense in recent years to start thinking about providing mechanisms for splitting JavaScript programs up into separate modules that can be imported when needed. Node.js has had this ability for a long time, and there are a number of JavaScript libraries and frameworks that enable module usage (for example, other CommonJS and AMD-based module systems like RequireJS, and more recently Webpack and Babel).

The good news is that modern browsers have started to support module functionality natively, and this is what this article is all about. This can only be a good thing — browsers can optimize loading of modules, making it more efficient than having to use a library and do all of that extra client-side processing and extra round trips.

Use of native JavaScript modules is dependent on the import and export statements; these are supported in browsers as shown in the compatibility table below.

Browser compatibility
javascript.statements.import
Report problems with this compatibility data on GitHub
desktop	mobile	server
Chrome
Edge
Firefox
Opera
Safari
Chrome Android
Firefox for Android
Opera Android
Safari on iOS
Samsung Internet
WebView Android
Deno
Node.js
import

61
Toggle history	
16
Toggle history	
60
Toggle history	
48
Toggle history	
10.1
Toggle history	
61
Toggle history	
60
Toggle history	
45
Toggle history	
10.3
Toggle history	
8.0
Toggle history	
61
Toggle history	
1.0
Toggle history	
13.2.0
footnotemore
Toggle history
Import assertions
Non-standard

91
Toggle history	
91
Toggle history	
No
footnote
Toggle history	
No
Toggle history	
15
Toggle history	
91
Toggle history	
No
footnote
Toggle history	
No
Toggle history	
15
Toggle history	
16.0
Toggle history	
91
Toggle history	
1.17
Toggle history	
16.14.0
more
Toggle history
import assert {type: json}
Non-standard

91
Toggle history	
91
Toggle history	
No
footnote
Toggle history	
No
Toggle history	
15
Toggle history	
91
Toggle history	
No
footnote
Toggle history	
No
Toggle history	
15
Toggle history	
16.0
Toggle history	
91
Toggle history	
1.17
Toggle history	
17.5.0
more
Toggle history
Available in workers

80
Toggle history	
80
Toggle history	
No
footnote
Toggle history	
No
Toggle history	
15
Toggle history	
80
Toggle history	
No
footnote
Toggle history	
No
Toggle history	
15
Toggle history	
13.0
Toggle history	
80
Toggle history	
1.0
Toggle history	
No
Toggle history
Legend
Tip: you can click/tap on a cell for more information.

Full support
Full support
No support
No support
Non-standard. Check cross-browser support before using.
See implementation notes.
User must explicitly enable this feature.
Has more compatibility info.
javascript.statements.export
Report problems with this compatibility data on GitHub
desktop	mobile	server
Chrome
Edge
Firefox
Opera
Safari
Chrome Android
Firefox for Android
Opera Android
Safari on iOS
Samsung Internet
WebView Android
Deno
Node.js
export

61
Toggle history	
16
Toggle history	
60
Toggle history	
48
Toggle history	
10.1
Toggle history	
61
Toggle history	
60
Toggle history	
45
Toggle history	
10.3
Toggle history	
8.0
Toggle history	
61
Toggle history	
1.0
Toggle history	
13.2.0
footnotemore
Toggle history
default keyword with export

61
Toggle history	
16
Toggle history	
60
Toggle history	
48
Toggle history	
10.1
Toggle history	
61
Toggle history	
60
Toggle history	
45
Toggle history	
10.3
Toggle history	
8.0
Toggle history	
No
Toggle history	
1.0
Toggle history	
13.2.0
footnotemore
Toggle history
export * as namespace

72
Toggle history	
79
Toggle history	
80
Toggle history	
60
Toggle history	
14.1
Toggle history	
72
Toggle history	
80
Toggle history	
51
Toggle history	
14.5
Toggle history	
11.0
Toggle history	
No
Toggle history	
1.0
Toggle history	
13.2.0
footnotemore
Toggle history
Legend
Tip: you can click/tap on a cell for more information.

Full support
Full support
No support
No support
See implementation notes.
User must explicitly enable this feature.
Has more compatibility info.
Introducing an example
To demonstrate usage of modules, we've created a simple set of examples that you can find on GitHub. These examples demonstrate a simple set of modules that create a <canvas> element on a webpage, and then draw (and report information about) different shapes on the canvas.

These are fairly trivial, but have been kept deliberately simple to demonstrate modules clearly.

Note: If you want to download the examples and run them locally, you'll need to run them through a local web server.

Basic example structure
In our first example (see basic-modules) we have a file structure as follows:

index.html
main.js
modules/
    canvas.js
    square.js
Copy to Clipboard
Note: All of the examples in this guide have basically the same structure; the above should start getting pretty familiar.

The modules directory's two modules are described below:

canvas.js — contains functions related to setting up the canvas:
create() — creates a canvas with a specified width and height inside a wrapper <div> with a specified ID, which is itself appended inside a specified parent element. Returns an object containing the canvas's 2D context and the wrapper's ID.
createReportList() — creates an unordered list appended inside a specified wrapper element, which can be used to output report data into. Returns the list's ID.
square.js — contains:
name — a constant containing the string 'square'.
draw() — draws a square on a specified canvas, with a specified size, position, and color. Returns an object containing the square's size, position, and color.
reportArea() — writes a square's area to a specific report list, given its length.
reportPerimeter() — writes a square's perimeter to a specific report list, given its length.
Aside — .mjs versus .js
Throughout this article, we've used .js extensions for our module files, but in other resources you may see the .mjs extension used instead. V8's documentation recommends this, for example. The reasons given are:

It is good for clarity, i.e. it makes it clear which files are modules, and which are regular JavaScript.
It ensures that your module files are parsed as a module by runtimes such as Node.js, and build tools such as Babel.
However, we decided to keep using .js, at least for the moment. To get modules to work correctly in a browser, you need to make sure that your server is serving them with a Content-Type header that contains a JavaScript MIME type such as text/javascript. If you don't, you'll get a strict MIME type checking error along the lines of "The server responded with a non-JavaScript MIME type" and the browser won't run your JavaScript. Most servers already set the correct type for .js files, but not yet for .mjs files. Servers that already serve .mjs files correctly include GitHub Pages and http-server for Node.js.

This is OK if you are using such an environment already, or if you aren't but you know what you are doing and have access (i.e. you can configure your server to set the correct Content-Type for .mjs files). It could however cause confusion if you don't control the server you are serving files from, or are publishing files for public use, as we are here.

For learning and portability purposes, we decided to keep to .js.

If you really value the clarity of using .mjs for modules versus using .js for "normal" JavaScript files, but don't want to run into the problem described above, you could always use .mjs during development and convert them to .js during your build step.

It is also worth noting that:

Some tools may never support .mjs.
The <script type="module"> attribute is used to denote when a module is being pointed to, as you'll see below.
Exporting module features
The first thing you do to get access to module features is export them. This is done using the export statement.

The easiest way to use it is to place it in front of any items you want exported out of the module, for example:

export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
Copy to Clipboard
You can export functions, var, let, const, and — as we'll see later — classes. They need to be top-level items; you can't use export inside a function, for example.

A more convenient way of exporting all the items you want to export is to use a single export statement at the end of your module file, followed by a comma-separated list of the features you want to export wrapped in curly braces. For example:

export { name, draw, reportArea, reportPerimeter };
Copy to Clipboard
Importing features into your script
Once you've exported some features out of your module, you need to import them into your script to be able to use them. The simplest way to do this is as follows:

import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
Copy to Clipboard
You use the import statement, followed by a comma-separated list of the features you want to import wrapped in curly braces, followed by the keyword from, followed by the module specifier.

The module specifier provides a string that the JavaScript environment can resolve to a path to the module file. In a browser, this could be a path relative to the site root, which for our basic-modules example would be /js-examples/module-examples/basic-modules. However, here we are instead using the dot (.) syntax to mean "the current location", followed by the relative path to the file we are trying to find. This is much better than writing out the entire absolute path each time, as relative paths are shorter and make the URL portable — the example will still work if you move it to a different location in the site hierarchy.

So for example:

/js-examples/module-examples/basic-modules/modules/square.js
Copy to Clipboard
becomes

./modules/square.js
Copy to Clipboard
You can see such lines in action in main.js.

Note: In some module systems, you can use a module specifier like modules/square that isn't a relative or absolute path, and that doesn't have a file extension. This kind of specifier can be used in a browser environment if you first define an import map.

Once you've imported the features into your script, you can use them just like they were defined inside the same file. The following is found in main.js, below the import lines:

const myCanvas = create('myCanvas', document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
Copy to Clipboard
Note: Although imported features are available in the file, they are read only views of the feature that was exported. You cannot change the variable that was imported, but you can still modify properties similar to const. Additionally, these features are imported as live bindings, meaning that they can change in value even if you cannot modify the binding unlike const.

Importing modules using import maps
Above we saw how a browser can import a module using a module specifier that is either an absolute URL, or a relative URL that is resolved using the base URL of the document:

import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
Copy to Clipboard
Import maps allow developers to instead specify almost any text they want in the module specifier when importing a module; the map provides a corresponding value that will replace the text when the module URL is resolved.

For example, the imports key in the import map below defines a "module specifier map" JSON object where the property names can be used as module specifiers, and the corresponding values will be substituted when the browser resolves the module URL. The values must be absolute or relative URLs. Relative URLs are resolved to absolute URL addresses using the base URL of the document containing the import map.

<script type="importmap">
  {
    "imports": {
      "shapes": "./shapes/square.js",
      "shapes/square": "./modules/shapes/square.js",
      "https://example.com/shapes/": "/shapes/square/",
      "https://example.com/shapes/square.js": "./shapes/square.js",
      "../shapes/square": "./shapes/square.js",
    }
  }
</script>
Copy to Clipboard
The import map is defined using a JSON object inside a <script> element with the type attribute set to importmap. There can only be one import map in the document, and because it is used to resolve which modules are loaded in both static and dynamic imports, it must be declared before any <script> elements that import modules.

With this map you can now use the property names above as module specifiers. If there is no trailing forward slash on the module specifier key then the whole module specifier key is matched and substituted. For example, below we match bare module names, and remap a URL to another path.

// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/moduleshapes/square.js";
Copy to Clipboard
If the module specifier has a trailing forward slash then the value must have one as well, and the key is matched as a "path prefix". This allows remapping of whole classes of URLs.

// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/square.js";
Copy to Clipboard
It is possible for multiple keys in an import map to be valid matches for a module specifier. For example, a module specifier of shapes/circle/ could match the module specifier keys shapes/ and shapes/circle/. In this case the browser will select the most specific (longest) matching module specifier key.

Import maps allow modules to be imported using bare module names (as in Node.js), and can also simulate importing modules from packages, both with and without file extensions. While not shown above, they also allow particular versions of a library to be imported, based on the path of the script that is importing the module. Generally they let developers write more ergonomic import code, and make it easier to manage the different versions and dependencies of modules used by a site. This can reduce the effort required to use the same JavaScript libraries in both browser and server.

The following sections expand on the various features outlined above.

Feature detection
You can check support for import maps using the HTMLScriptElement.supports() static method (which is itself broadly supported):

if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
Copy to Clipboard
Importing modules as bare names
In some JavaScript environments, such as Node.js, you can use bare names for the module specifier. This works because the environment can resolve module names to a standard location in the file system. For example, you might use the following syntax to import the "square" module.

import { name, draw, reportArea, reportPerimeter } from "square";
Copy to Clipboard
To use bare names on a browser you need an import map, which provides the information needed by the browser to resolve module specifiers to URLs (JavaScript will throw a TypeError if it attempts to import a module specifier that can't be resolved to a module location).

Below you can see a map that defines a square module specifier key, which in this case maps to a relative address value.

<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
Copy to Clipboard
With this map we can now use a bare name when we import the module:

import { name as squareName, draw } from "square";
Copy to Clipboard
Remapping module paths
Module specifier map entries, where both the specifier key and its associated value have a trailing forward slash (/), can be used as a path-prefix. This allows the remapping of a whole set of import URLs from one location to another. It can also be used to emulate working with "packages and modules", such as you might see in the Node ecosystem.

Note: The trailing / indicates that the module specifier key can be substituted as part of a module specifier. If this is not present, the browser will only match (and substitute) the whole module specifier key.

Packages of modules
The following JSON import map definition maps lodash as a bare name, and the module specifier prefix lodash/ to the path /node_modules/lodash-es/ (resolved to the document base URL):

{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
Copy to Clipboard
With this mapping you can import both the whole "package", using the bare name, and modules within it (using the path mapping):

import _ from "lodash";
import fp from "lodash/fp.js";
Copy to Clipboard
It is possible to import fp above without the .js file extension, but you would need to create a bare module specifier key for that file, such as lodash/fp, rather than using the path. This may be reasonable for just one module, but scales poorly if you wish to import many modules.

General URL remapping
A module specifier key doesn't have to be path — it can also be an absolute URL (or a URL-like relative path like ./, ../, /). This may be useful if you want to remap a module that has absolute paths to a resource with your own local resources.

{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
Copy to Clipboard
Scoped modules for version management
Ecosystems like Node use package managers such as npm to manage modules and their dependencies. The package manager ensures that each module is separated from other modules and their dependencies. As a result, while a complex application might include the same module multiple times with several different versions in different parts of the module graph, users do not need to think about this complexity.

Note: You can also achieve version management using relative paths, but this is subpar because, among other things, this forces a particular structure on your project, and prevents you from using bare module names.

Import maps similarly allow you to have multiple versions of dependencies in your application and refer to them using the same module specifier. You implement this with the scopes key, which allows you to provide module specifier maps that will be used depending on the path of the script performing the import. The example below demonstrates this.

{
  "imports": {
    "coolmodule": "/node_modules/coolmodule/index.js"
  },
  "scopes": {
    "/node_modules/dependency/": {
      "coolmodule": "/node_modules/some/other/location/coolmodule/index.js"
    }
  }
}
Copy to Clipboard
With this mapping, if a script with an URL that contains /node_modules/dependency/ imports coolmodule, the version in /node_modules/some/other/location/coolmodule/index.js will be used. The map in imports is used as a fallback if there is no matching scope in the scoped map, or the matching scopes don't contain a matching specifier. For example, if coolmodule is imported from a script with a non-matching scope path, then the module specifier map in imports will be used instead, mapping to the version in /node_modules/coolmodule/index.js.

Note that the path used to select a scope does not affect how the address is resolved. The value in the mapped path does not have to have to match the scopes path, and relative paths are still resolved to the base URL of the script that contains the import map.

Just as for module specifier maps, you can have many scope keys, and these may contain overlapping paths. If multiple scopes match the referrer URL, then the most specific scope path is checked first (the longest scope key) for a matching specifier. The browsers will fall back to the next most specific matching scoped path if there is no matching specifier, and so on. If there is no matching specifier in any of the matching scopes, the browser checks for a match in the module specifier map in the imports key.

Improve caching by mapping away hashed filenames
Script files used by websites often have hashed filenames to simplify caching. The downside of this approach is that if a module changes, any modules that import it using its hashed filename will also need to be updated/regenerated. This potentially results in a cascade of updates, which is wasteful of network resources.

Import maps provide a convenient solution to this problem. Rather than depending on specific hashed filenames, applications and scripts instead depend on an un-hashed version of the module name (address). An import map like the one below then provides a mapping to the actual script file.

{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
Copy to Clipboard
If dependency_script changes, then its hash contained in the file name changes as well. In this case, we only need to update the import map to reflect the changed name of the module. We don't have to update the source of any JavaScript code that depends on it, because the specifier in the import statement does not change.

Applying the module to your HTML
Now we just need to apply the main.js module to our HTML page. This is very similar to how we apply a regular script to a page, with a few notable differences.

First of all, you need to include type="module" in the <script> element, to declare this script as a module. To import the main.js script, we use this:

<script type="module" src="main.js"></script>
Copy to Clipboard
You can also embed the module's script directly into the HTML file by placing the JavaScript code within the body of the <script> element:

<script type="module">
  /* JavaScript module code here */
</script>
Copy to Clipboard
The script into which you import the module features basically acts as the top-level module. If you omit it, Firefox for example gives you an error of "SyntaxError: import declarations may only appear at top level of a module".

You can only use import and export statements inside modules, not regular scripts.

Other differences between modules and standard scripts
You need to pay attention to local testing — if you try to load the HTML file locally (i.e. with a file:// URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server.
Also, note that you might get different behavior from sections of script defined inside modules as opposed to in standard scripts. This is because modules use strict mode automatically.
There is no need to use the defer attribute (see <script> attributes) when loading a module script; modules are deferred automatically.
Modules are only executed once, even if they have been referenced in multiple <script> tags.
Last but not least, let's make this clear — module features are imported into the scope of a single script — they aren't available in the global scope. Therefore, you will only be able to access imported features in the script they are imported into, and you won't be able to access them from the JavaScript console, for example. You'll still get syntax errors shown in the DevTools, but you'll not be able to use some of the debugging techniques you might have expected to use.
Module-defined variables are scoped to the module unless explicitly attached to the global object. On the other hand, globally-defined variables are available within the module. For example, given the following code:

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link rel="stylesheet" href="" />
  </head>
  <body>
    <div id="main"></div>
    <script>
      // A var statement creates a global variable.
      var text = "Hello";
    </script>
    <script type="module" src="./render.js"></script>
  </body>
</html>
Copy to Clipboard
/* render.js */
document.getElementById("main").innerText = text;
Copy to Clipboard
The page would still render Hello, because the global variables text and document are available in the module. (Also note from this example that a module doesn't necessarily need an import/export statement — the only thing needed is for the entry point to have type="module".)

Default exports versus named exports
The functionality we've exported so far has been comprised of named exports — each item (be it a function, const, etc.) has been referred to by its name upon export, and that name has been used to refer to it on import as well.

There is also a type of export called the default export — this is designed to make it easy to have a default function provided by a module, and also helps JavaScript modules to interoperate with existing CommonJS and AMD module systems (as explained nicely in ES6 In Depth: Modules by Jason Orendorff; search for "Default exports").

Let's look at an example as we explain how it works. In our basic-modules square.js you can find a function called randomSquare() that creates a square with a random color, size, and position. We want to export this as our default, so at the bottom of the file we write this:

export default randomSquare;
Copy to Clipboard
Note the lack of curly braces.

We could instead prepend export default onto the function and define it as an anonymous function, like this:

export default function (ctx) {
  // …
}
Copy to Clipboard
Over in our main.js file, we import the default function using this line:

import randomSquare from './modules/square.js';
Copy to Clipboard
Again, note the lack of curly braces. This is because there is only one default export allowed per module, and we know that randomSquare is it. The above line is basically shorthand for:

import {default as randomSquare} from './modules/square.js';
Copy to Clipboard
Note: The as syntax for renaming exported items is explained below in the Renaming imports and exports section.

Avoiding naming conflicts
So far, our canvas shape drawing modules seem to be working OK. But what happens if we try to add a module that deals with drawing another shape, like a circle or triangle? These shapes would probably have associated functions like draw(), reportArea(), etc. too; if we tried to import different functions of the same name into the same top-level module file, we'd end up with conflicts and errors.

Fortunately there are a number of ways to get around this. We'll look at these in the following sections.

Renaming imports and exports
Inside your import and export statement's curly braces, you can use the keyword as along with a new feature name, to change the identifying name you will use for a feature inside the top-level module.

So for example, both of the following would do the same job, albeit in a slightly different way:

// inside module.js
export {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName
};

// inside main.js
import { newFunctionName, anotherNewFunctionName } from './modules/module.js';
Copy to Clipboard
// inside module.js
export { function1, function2 };

// inside main.js
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from './modules/module.js';
Copy to Clipboard
Let's look at a real example. In our renaming directory you'll see the same module system as in the previous example, except that we've added circle.js and triangle.js modules to draw and report on circles and triangles.

Inside each of these modules, we've got features with the same names being exported, and therefore each has the same export statement at the bottom:

export { name, draw, reportArea, reportPerimeter };
Copy to Clipboard
When importing these into main.js, if we tried to use

import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
import { name, draw, reportArea, reportPerimeter } from './modules/circle.js';
import { name, draw, reportArea, reportPerimeter } from './modules/triangle.js';
Copy to Clipboard
The browser would throw an error such as "SyntaxError: redeclaration of import name" (Firefox).

Instead we need to rename the imports so that they are unique:

import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from './modules/square.js';

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from './modules/circle.js';

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from './modules/triangle.js';
Copy to Clipboard
Note that you could solve the problem in the module files instead, e.g.

// in square.js
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
Copy to Clipboard
// in main.js
import { squareName, drawSquare, reportSquareArea, reportSquarePerimeter } from './modules/square.js';
Copy to Clipboard
And it would work just the same. What style you use is up to you, however it arguably makes more sense to leave your module code alone, and make the changes in the imports. This especially makes sense when you are importing from third party modules that you don't have any control over.

Creating a module object
The above method works OK, but it's a little messy and long-winded. An even better solution is to import each module's features inside a module object. The following syntax form does that:

import * as Module from './modules/module.js';
Copy to Clipboard
This grabs all the exports available inside module.js, and makes them available as members of an object Module, effectively giving it its own namespace. So for example:

Module.function1();
Module.function2();
Copy to Clipboard
Again, let's look at a real example. If you go to our module-objects directory, you'll see the same example again, but rewritten to take advantage of this new syntax. In the modules, the exports are all in the following simple form:

export { name, draw, reportArea, reportPerimeter };
Copy to Clipboard
The imports on the other hand look like this:

import * as Canvas from './modules/canvas.js';

import * as Square from './modules/square.js';
import * as Circle from './modules/circle.js';
import * as Triangle from './modules/triangle.js';
Copy to Clipboard
In each case, you can now access the module's imports underneath the specified object name, for example:

const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, 'blue');
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
Copy to Clipboard
So you can now write the code just the same as before (as long as you include the object names where needed), and the imports are much neater.

Modules and classes
As we hinted at earlier, you can also export and import classes; this is another option for avoiding conflicts in your code, and is especially useful if you've already got your module code written in an object-oriented style.

You can see an example of our shape drawing module rewritten with ES classes in our classes directory. As an example, the square.js file now contains all its functionality in a single class:

class Square {
  constructor(ctx, listId, length, x, y, color) {
    // …
  }

  draw() {
    // …
  }

  // …
}
Copy to Clipboard
which we then export:

export { Square };
Copy to Clipboard
Over in main.js, we import it like this:

import { Square } from './modules/square.js';
Copy to Clipboard
And then use the class to draw our square:

const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
square1.draw();
square1.reportArea();
square1.reportPerimeter();
Copy to Clipboard
Aggregating modules
There will be times where you'll want to aggregate modules together. You might have multiple levels of dependencies, where you want to simplify things, combining several submodules into one parent module. This is possible using export syntax of the following forms in the parent module:

export * from 'x.js'
export { name } from 'x.js'
Copy to Clipboard
For an example, see our module-aggregation directory. In this example (based on our earlier classes example) we've got an extra module called shapes.js, which aggregates all the functionality from circle.js, square.js, and triangle.js together. We've also moved our submodules inside a subdirectory inside the modules directory called shapes. So the module structure in this example is:

modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
Copy to Clipboard
In each of the submodules, the export is of the same form, e.g.

export { Square };
Copy to Clipboard
Next up comes the aggregation part. Inside shapes.js, we include the following lines:

export { Square } from './shapes/square.js';
export { Triangle } from './shapes/triangle.js';
export { Circle } from './shapes/circle.js';
Copy to Clipboard
These grab the exports from the individual submodules and effectively make them available from the shapes.js module.

Note: The exports referenced in shapes.js basically get redirected through the file and don't really exist there, so you won't be able to write any useful related code inside the same file.

So now in the main.js file, we can get access to all three module classes by replacing

import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';
import { Triangle } from './modules/triangle.js';
Copy to Clipboard
with the following single line:

import { Square, Circle, Triangle } from './modules/shapes.js';
Copy to Clipboard
Dynamic module loading
A recent addition to JavaScript modules functionality is dynamic module loading. This allows you to dynamically load modules only when they are needed, rather than having to load everything up front. This has some obvious performance advantages; let's read on and see how it works.

This new functionality allows you to call import() as a function, passing it the path to the module as a parameter. It returns a Promise, which fulfills with a module object (see Creating a module object) giving you access to that object's exports. For example:

import('./modules/myModule.js')
  .then((module) => {
    // Do something with the module.
  });
Copy to Clipboard
Let's look at an example. In the dynamic-module-imports directory we've got another example based on our classes example. This time however we are not drawing anything on the canvas when the example loads. Instead, we include three buttons — "Circle", "Square", and "Triangle" — that, when pressed, dynamically load the required module and then use it to draw the associated shape.

In this example we've only made changes to our index.html and main.js files — the module exports remain the same as before.

Over in main.js we've grabbed a reference to each button using a document.querySelector() call, for example:

const squareBtn = document.querySelector('.square');
Copy to Clipboard
We then attach an event listener to each button so that when pressed, the relevant module is dynamically loaded and used to draw the shape:

squareBtn.addEventListener('click', () => {
  import('./modules/square.js').then((Module) => {
    const square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  })
});
Copy to Clipboard
Note that, because the promise fulfillment returns a module object, the class is then made a subfeature of the object, hence we now need to access the constructor with Module. prepended to it, e.g. Module.Square( /* … */ ).

Another advantage of dynamic imports is that they are always available, even in script environments. Therefore, if you have an existing <script> tag in your HTML that doesn't have type="module", you can still reuse code distributed as modules by dynamically importing it.

<script>
  import("./modules/square.js").then((module) => {
    // Do something with the module.
  });
  // Other code that operates on the global scope and is not
  // ready to be refactored into modules yet.
  var btn = document.querySelector(".square");
</script>
Copy to Clipboard
Top level await
Top level await is a feature available within modules. This means the await keyword can be used. It allows modules to act as big asynchronous functions meaning code can be evaluated before use in parent modules, but without blocking sibling modules from loading.

Let's take a look at an example. You can find all the files and code described in this section within the top-level-await directory, which extends from the previous examples.

Firstly we'll declare our color palette in a separate colors.json file:

{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
Copy to Clipboard
Then we'll create a module called getColors.js which uses a fetch request to load the colors.json file and return the data as an object.

// fetch request
const colors = fetch('../data/colors.json')
  .then((response) => response.json());

export default await colors;
Copy to Clipboard
Notice the last export line here.

We're using the keyword await before specifying the constant colors to export. This means any other modules which include this one will wait until colors has been downloaded and parsed before using it.

Let's include this module in our main.js file:

import colors from './modules/getColors.js';
import { Canvas } from './modules/canvas.js';

const circleBtn = document.querySelector('.circle');

// …
Copy to Clipboard
We'll use colors instead of the previously used strings when calling our shape functions:

const square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, colors.blue);

const circle1 = new Module.Circle(myCanvas.ctx, myCanvas.listId, 75, 200, 100, colors.green);

const triangle1 = new Module.Triangle(myCanvas.ctx, myCanvas.listId, 100, 75, 190, colors.yellow);
Copy to Clipboard
This is useful because the code within main.js won't execute until the code in getColors.js has run. However it won't block other modules being loaded. For instance our canvas.js module will continue to load while colors is being fetched.

Authoring "isomorphic" modules
The introduction of modules encourages the JavaScript ecosystem to distribute and reuse code in a modular fashion. However, that doesn't necessarily mean a piece of JavaScript code can run in every environment. Suppose you discovered a module that generates SHA hashes of your user's password. Can you use it in the browser front end? Can you use it on your Node.js server? The answer is: it depends.

Modules still have access to global variables, as demonstrated previously. If the module references globals like window, it can run in the browser, but will throw an error in your Node.js server, because window is not available there. Similarly, if the code requires access to process to be functional, it can only be used in Node.js.

In order to maximize the reusability of a module, it is often advised to make the code "isomorphic" — that is, exhibits the same behavior in every runtime. This is commonly achieved in three ways:

Separate your modules into "core" and "binding". For the "core", focus on pure JavaScript logic like computing the hash, without any DOM, network, filesystem access, and expose utility functions. For the "binding" part, you can read from and write to the global context. For example, the "browser binding" may choose to read the value from an input box, while the "Node binding" may read it from process.env, but values read from either place will be piped to the same core function and handled in the same way. The core can be imported in every environment and used in the same way, while only the binding, which is usually lightweight, needs to be platform-specific.
Detect whether a particular global exists before using it. For example, if you test that typeof window === "undefined", you know that you are probably in a Node.js environment, and should not read DOM.
// myModule.js
let password;
if (typeof process !== "undefined") {
  // We are running in Node.js; read it from `process.env`
  password = process.env.PASSWORD;
} else if (typeof window !== "undefined") {
  // We are running in the browser; read it from the input box
  password = document.getElementById('password').value;
}
Copy to Clipboard
This is preferable if the two branches actually end up with the same behavior ("isomorphic"). If it's impossible to provide the same functionality, or if doing so involves loading significant amounts of code while a large part remains unused, better use different "bindings" instead.
Use a polyfill to provide a fallback for missing features. For example, if you want to use the fetch function, which is only supported in Node.js since v18, you can use a similar API, like the one provided by node-fetch. You can do so conditionally through dynamic imports:
// myModule.js
if (typeof fetch === "undefined") {
  // We are running in Node.js; use node-fetch
  globalThis.fetch = (await import("node-fetch")).default;
}
// …
Copy to Clipboard
The globalThis variable is a global object that is available in every environment and is useful if you want to read or create global variables within modules.
These practices are not unique to modules. Still, with the trend of code reusability and modularization, you are encouraged to make your code cross-platform so that it can be enjoyed by as many people as possible. Runtimes like Node.js are also actively implementing web APIs where possible to improve interoperability with the web.

Troubleshooting
Here are a few tips that may help you if you are having trouble getting your modules to work. Feel free to add to the list if you discover more!

We mentioned this before, but to reiterate: .mjs files need to be loaded with a MIME-type of text/javascript (or another JavaScript-compatible MIME-type, but text/javascript is recommended), otherwise you'll get a strict MIME type checking error like "The server responded with a non-JavaScript MIME type".
If you try to load the HTML file locally (i.e. with a file:// URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server. GitHub pages is ideal as it also serves .mjs files with the correct MIME type.
Because .mjs is a non-standard file extension, some operating systems might not recognize it, or try to replace it with something else. For example, we found that macOS was silently adding on .js to the end of .mjs files and then automatically hiding the file extension. So all of our files were actually coming out as x.mjs.js. Once we turned off automatically hiding file extensions, and trained it to accept .mjs, it was OK.
See also
Using JavaScript modules on the web, by Addy Osmani and Mathias Bynens
ES modules: A cartoon deep-dive, Hacks blog post by Lin Clark
ES6 in Depth: Modules, Hacks blog post by Jason Orendorff
Exploring JS: Modules, Book by Axel Rauschmayer
« Previous
Found a problem with this page?
Edit on GitHub
Source on GitHub
Report a problem with this content on GitHub
Want to fix the problem yourself? Learn how to contribute!
Last modified: Dec 18, 2022, by MDN contributors

Your blueprint for a better internet.

MDN on Twitter
MDN on GitHub
MDN
About
Hacks Blog
Careers
Support
Product help
Report an issue
Our communities
MDN Community
MDN Forum
MDN Chat
Developers
Web Technologies
Learn Web Development
MDN Plus
Website Privacy Notice
Cookies
Legal
Community Participation Guidelines
Visit Mozilla Corporation’s not-for-profit parent, the Mozilla Foundation.
Portions of this content are ©1

Firebase
Documentation
Fundamentals
Was this helpful?

Send feedbackSet up and manage a Firebase project using the Management REST API

bookmark_border


The Firebase Management REST API enables programmatic setup and management of Firebase projects, including a project's Firebase resources and Firebase Apps.

This overview describes the general workflow to add Firebase resources and apps to an existing Google Cloud project that does not currently use Firebase services.

You can jump to specific sections of this page if you just want to:

Add Firebase services to your project
Add Firebase Apps to your Firebase project
Link your Firebase project to a Google Analytics account
Finalize your project's default location
Before following any steps on this page, make sure that you enable the API.

For information about access management for the Firebase Management API, visit the Cloud Identity Access Management (IAM) API documentation.

Note: If you don't already have an existing Google Cloud project, you can create one using the projects.create method in the Google Cloud Resource Manager API or by using the Google Cloud Console.

Visit Understand Firebase projects for details about the number of projects allowed per account.
Before you begin
Before you begin, you'll need to enable the Management API for your Google Cloud project and generate your access token.

Enable the Management REST API for your Google Cloud project
If you haven't already, you'll need to enable the Firebase Management API for use with your Google Cloud project.

Open the Firebase Management API page in the Google APIs console.
When prompted, select your Google Cloud project.
Click Enable on the Firebase Management API page.
Generate your API access token
Here's an example for Node.js that retrieves your access token.

First, if you aren't in a Google Cloud environment, set the GOOGLE_APPLICATION_CREDENTIALS environment variable to the path to your service account key.

Linux or macOS
Windows

export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-file.json"
Then, use the Firebase Admin SDK to get an access token from your service account credentials:


const admin = require('firebase-admin');

function getAccessToken() {
  return admin.credential.applicationDefault().getAccessToken()
      .then(accessToken => {
        return accessToken.access_token;
      })
      .catch(err => {
        console.error('Unable to get access token');
        console.error(err);
      });
}
Find the resource name of your project
You can find the Google Cloud projects which are available for adding Firebase services.

To call this endpoint:
You must have an existing Google Cloud project and an API access token.
A project member must be a Viewer, at minimum, of the existing Google Cloud project.
REQUEST
Call availableProjects.list. The request body for this call must be empty.

Here's an example for Node.js to request a list of available Google Cloud projects:


const fetch = require('node-fetch');

async function listProjects() {
  const accessToken = getAccessToken();
  const uri = 'https://firebase.googleapis.com/v1beta1/availableProjects';
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },
  };

  try {
    const rawResponse = await fetch(uri, options);
    const resp = await rawResponse.json();
    const projects = resp['projectInfo'];
    console.log('Project total: ' + projects.length);
    console.log('');
    for (let i in projects) {
      const project = projects[i];
      console.log('Project ' + i);
      console.log('ID: ' + project['project']);
      console.log('Display Name: ' + project['displayName']);
      console.log('');
    }
  } catch(err) {
    console.error(err);
  }
}
RESULT
The response body from a call to availableProjects.list contains a list of ProjectInfo objects. If the list of projects is too long, the response body also contains a nextPageToken that you can use as a query parameter to get the next page of projects.

Here's an example response body of an availableProjects.list call:


{
  "projectInfo": [
    {
      "project": "projects/first-cloud-project",
      "displayName": "First Cloud Project"
    },
    {
      "project": "projects/second-cloud-project",
      "displayName": "Second Cloud Project"
    }
  ]
}
This example response has two Google Cloud projects that can have Firebase services added to them. Note that the project field provides the globally unique resource name for a project.

You can use any project value listed in the response from availableProjects.list to add Firebase services or add apps to your project.

In the next section, we'll add Firebase services to First Cloud Project using the projects/first-gcp-project resource name.

Add Firebase services to your project
Google Cloud projects can take advantage of the services offered by Firebase. In this section, you'll learn how to add Firebase services to your existing Google Cloud project programmatically. Note that you can also add Firebase services to your existing Google Cloud project in the Firebase console.

To call this endpoint:
You must have an existing Google Cloud project, an API access token, and the unique resource name of your project.
A project member or service account must have the following permissions. If you are an Editor or Owner of the existing Google Cloud project, then you have these permissions.
firebase.projects.update
resourcemanager.projects.get
serviceusage.services.enable
serviceusage.services.get
REQUEST
Call projects.addFirebase. The request body for this call must be empty.

Here's an example for Node.js to add Firebase services to your Google Cloud project:


const fetch = require('node-fetch');

async function addFirebase(projectId) {
  const accessToken = getAccessToken();
  const uri = 'https://firebase.googleapis.com/v1beta1/projects/' + projectId + ':addFirebase';
  const options = {
    method: 'POST',
    // Use a manual access token here since explicit user access token is required.
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },
  };

  try {
    const rawResponse = await fetch(uri, options);
    const resp = await rawResponse.json();
    console.log(resp);
  } catch(err) {
    console.error(err['message']);
  }
}
RESULT
The result of a call to projects.addFirebase is an Operation. Before you can call other Firebase-related endpoints for your project, the operation must be successful.

To check if the operation is successful, you can call operations.get on the operation until the value of done is true and its response is of type FirebaseProject. If the operation fails, its error is set to google.rpc.Status.

Here's the response body of an operations.get call:


{
  "name": "operations/...",
  "done": true,
  "response": {
    "@type": "type.googleapis.com/google.firebase.service.v1beta1.FirebaseProject",
    "projectId": "first-cloud-project",
    "projectNumber": "...",
    "displayName": "First Cloud Project",
    "name": "projects/first-cloud-project",
    "resources": {
      "hostingSite": "first-cloud-project",
      "realtimeDatabaseInstance": "first-cloud-project"
    }
  }
}
Since done is true and the response type is a FirebaseProject, the Google Cloud project now has Firebase services. The response also contains other useful information about your newly created FirebaseProject, like its projectNumber and its default resources. The Operation is automatically deleted after completion.

Add Firebase Apps to your project
Many different apps can use a FirebaseProject, including iOS, Android, and web apps. In this section, you'll learn how to add Firebase Apps to your existing FirebaseProject programmatically. Note that you can also add Firebase Apps to your existing Firebase project in the Firebase console.

To call the endpoints in this section:
You must have an API access token and an existing FirebaseProject.
A project member must be an Editor or Owner of the existing Firebase project.
Select a type of Firebase App to add to your Firebase project.

iOS Android Web
Link your Firebase project to a Google Analytics account (Optional)
You can link an existing Google Analytics account to your existing FirebaseProject programmatically. Note that you can also link your existing Firebase project to Google Analytics in the Integrations tab of your Project Settings.

To call this endpoint:
You must have an API access token and an existing FirebaseProject.
A project member must be an Owner of the existing Firebase project.
The call to projects.addGoogleAnalytics requires an analytics_resource, which can either be an analyticsAccountId or an analyticsPropertyId:

Specify an existing analyticsAccountId to provision a new Google Analytics property within the specified account and associate the new property with your Firebase project.

Specify an existing analyticsPropertyId to associate the Google Analytics property with your Firebase project.

You can find both your analyticsAccountId and any existing analyticsPropertyId on the Google Analytics website.

When you call projects.addGoogleAnalytics:

The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in your FirebaseProject (based on the packageName or bundleId associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to Android Apps and iOS Apps.

If no corresponding data streams are found for your Firebase Apps, new data streams are provisioned in the Google Analytics property for each of your Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in your Analytics property.

Learn more about the hierarchy and structure of Google Analytics accounts in the Analytics documentation.

Note: If you have Firebase Web Apps in your Firebase project before linking your project with Google Analytics, the Firebase configuration objects for those apps will be updated with a new measurementId field. This updated config object is required for your Web App to use Analytics. Call projects.webApps.getConfig to obtain updated config objects.
REQUEST
Call projects.addGoogleAnalytics.

In the request body for our example call to project.addGoogleAnalytics, we'll specify our Google Analytics account analyticsAccountId. This call will provision a new Google Analytics property and associate the new property with the FirebaseProject.


{
  "analyticsAccountId": "<your-google-analytics-account-id>"
}
Here's an example for Node.js to link a Firebase project with a Google Analytics account:


const fetch = require('node-fetch');

async function addGoogleAnalytics(projectId, analyticsAccountId) {
  const accessToken = getAccessToken();
  const uri = 'https://firebase.googleapis.com/v1beta1/projects/' + projectId + ':addGoogleAnalytics';
  const options = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },
    body: JSON.stringify({
      'analyticsAccountId': analyticsAccountId
    }),
  };

  try {
    const rawResponse = await fetch(uri, options);
    const resp = await rawResponse.json();
    console.log(resp);
  } catch(err) {
    console.error(err['message']);
  }
}
RESULT
The result of a call to projects.addGoogleAnalytics is an Operation. Before you can call other Firebase-related endpoints for your project, the operation must be successful.

To check if the operation is successful, you can call operations.get on the operation until the value of done is true and the response is of type analyticsDetails. If the operation fails, its error is set to google.rpc.Status.

Here's the response body of an operations.get call:


{
  "name": "operations/...",
  "none": true,
  "response": {
    "@type": "type.googleapis.com/google.firebase.service.v1beta1.AnalyticsDetails",
    "analyticsProperty": [
      {
        "id": "...",
        "displayName": "..."
      }
    ],
    "streamMappings": [
      {
        "app": "...",
        "streamId": "...",
        "measurementId": "..."
      }
    ]
  }
}
Since done is true and the response type is analyticsDetails, the FirebaseProject is now linked to the specified Google Analytics account. The Operation is automatically deleted after completion.

Finalize your project's default location (Optional)
If your Firebase project will use Cloud Firestore, Cloud Storage, or an App Engine app, you can finalize the default Google Cloud Platform (GCP) resource location for your project programmatically. Note that you can also select a location in the Firebase console.

To call this endpoint:
You must have an API access token and an existing FirebaseProject.
A project member must be an Owner of the existing Firebase project.
Warning: This setting cannot be undone or changed later. Once you set the default Google Cloud Platform (GCP) resource location for your project, it cannot be changed.
Before setting this location, check out Select locations for your project for information on which location is best for your project. You should also call projects.availableLocations to return a list of the valid locations for your project because if your project is part of a Google Cloud organization, then your organization policies might restrict which locations are valid for your project.

Calling this defaultLocation.finalize method creates an App Engine application with a default Cloud Storage bucket located in the locationId that you provide in the request body.

The default GCP resource location may have already been specified if the Project already has an App Engine application or this defaultLocation.finalize method was previously called.

Note: If you have Firebase Web Apps in your Firebase project before finalizing your default resource location, the Firebase configuration objects for those apps will be updated with the storageUrl for the project's default bucket. This updated config object is required for your Web App to use Cloud Storage. Call projects.webApps.getConfig to obtain updated config objects.
REQUEST
Call projects.defaultLocation.finalize. Here's how to construct your request body:

Required:

locationId: The location where your data is stored for GCP services that require a location setting, like Cloud Firestore or Cloud Storage.

{
  "locationId": "us-west2"
}
Here's an example for Node.js to finalize your project's default location:


const fetch = require('node-fetch');

async function finalizeProjectLocation(projectId, locationId) {
  const accessToken = getAccessToken();
  const uri = 'https://firebase.googleapis.com/v1beta1/projects/' + projectId + '/defaultLocation:finalize';
  const options = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },
    body: JSON.stringify({
      'locationId': locationId
    }),
  };

  try {
    const rawResponse = await fetch(uri, options);
    const resp = await rawResponse.json();
    console.log(resp);
  } catch(err) {
    console.error(err['message']);
  }
}
RESULT
The result of a call to projects.defaultLocation.finalize is an Operation. Before you can call other Firebase-related endpoints for your project, the operation must be successful.

To check if the operation is successful you can call operations.get on the operation until the value of done is true and its response is of type google.protobuf.Empty. If the operation is unsuccessful, the response body error will be of type google.rpc.Status. The Operation is automatically deleted after completion.

Was this helpful?

Send feedback
Recommendations

Firebase Support
Get help quickly with Firebase support. Read our FAQs, Release notes, and guides, ask the community, then get direct support from the Firebase team.

Updated Oct 13, 2022
Fundamentals
Developer documentation for Firebase

Updated Oct 5, 2021
Understand Firebase projects
Developer documentation for Firebase

Updated Jan 12, 2023
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2023-01-12 UTC.

Learn
Guides
Reference
Samples
Libraries
GitHub
Stay connected
Blog
Firebase Summit
Twitter
YouTube
Support
Contact support
Stack Overflow
Slack community
Google group
Release notes
FAQs
Google Developers
Android
Chrome
Firebase
Google Cloud Platform
All products
Terms
Privacy





VAT Registration: GB138656875
Company Number: 07626452


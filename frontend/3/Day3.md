# Day 3: JavaScript Libraries & Frameworks

Quick notes on the popular JavaScript libraries and frameworks, frontend first, then backend.

## Frontend

### React.js

A component-based UI library made by Facebook (now Meta). You build the page out of small reusable components written in JSX, which looks like HTML inside JavaScript. It only handles the view, so things like routing come from other libraries.

### Vue.js

A progressive framework created by Evan You. "Progressive" means you can drop it into one part of an existing page or use it to build a whole app. It's known for being easy to learn, and its templates look a lot like normal HTML.

### Angular

A full framework made by Google, written in TypeScript. It follows an MVC-style structure and comes with everything built in: routing, forms, HTTP client and testing tools. Harder to learn than the others, but really common in big company projects.

### Svelte

A framework that does its work at build time instead of in the browser. The compiler turns your components into plain JavaScript that updates the DOM directly, so there's no virtual DOM. Reactivity feels "real": you just change a variable and the page updates.

### Preact

A lightweight alternative to React, only about 3KB. It has almost the same API as React, so most React code works with little or no changes. Good for when page size and speed really matter.

### Ember.js

A framework with a classic MVC structure, made for big apps. It follows "convention over configuration", so there's one standard way to organize everything and fewer decisions to make. It comes with its own CLI that generates files for you.

### Alpine.js

A tiny library for adding interactivity right inside your HTML. You put attributes like `x-data`, `@click` and `x-show` directly on elements, kind of like jQuery but more modern. No build step needed, just add one script tag.

## Backend

### Node.js

A runtime that lets you run JavaScript on the server instead of only in the browser. It uses Chrome's V8 engine and handles lots of requests at once thanks to the event loop and non-blocking I/O. It's not a framework itself, everything else in this list runs on top of it.

### Express.js

A minimalist web framework for Node.js, and the one I used in week 1. It gives you routing, middleware and helpers like `res.json()` without forcing any project structure on you. It's the most popular Node framework, so there are tutorials and packages for almost everything.

### NestJS

A backend framework built with TypeScript, with an architecture inspired by Angular. You organize code into modules, controllers and services, and use decorators like `@Get()` and dependency injection. It runs on Express (or Fastify) under the hood but adds a lot of structure, which helps a lot in big projects.

### Fastify

A web framework focused on high performance and low overhead. It's a lot faster than Express in benchmarks and has built-in JSON schema validation for requests and responses. Its plugin system keeps the code organized as the app grows.

### Koa.js

A framework made by the same team that created Express, with a more modern middleware style. It's built around `async/await` instead of callbacks, so middleware is cleaner and error handling is easier. It's even smaller than Express and doesn't include routing, so you add only what you need.

### Hapi.js

A configuration-focused framework, originally built at Walmart to handle Black Friday traffic. Routes are defined as config objects, and it has strong validation (through Joi) and a powerful plugin system. Popular for big, enterprise-style APIs.

## Full-Stack

These handle both the frontend and the backend in one project. Two terms that keep coming up:

- **SSR** (server-side rendering) = the server builds the page's HTML on every request, so it loads fast and is good for SEO.
- **SSG** (static site generation) = pages are built once at build time and served as plain files, which is even faster.

### Next.js

A full-stack framework built on React, made by Vercel. It supports SSR and SSG, and folders inside `app/` automatically become pages. You can write API routes in the same project, so you don't need a separate Express server.

### Nuxt.js

Basically the Next.js of Vue. It supports SSR and SSG, uses file-based routing, and auto-imports components so there's less boilerplate. Backend code goes in the `server/` folder in the same project.

### SvelteKit

The official full-stack framework for Svelte, made by the Svelte team. It has file-based routing, SSR/SSG, and `+page.server.js` files for loading data on the server. It uses Vite, so the dev server is really fast.

### Remix

A full-stack framework built on React, focused on web standards like HTML forms and the Fetch API's `Request`/`Response`. Data is loaded with `loader` functions and changed with `action` functions that run on the server, so a lot of things work even before the JavaScript loads. Its features have since been merged into React Router v7.

## State Management

State = data the app has to remember, like the logged-in user or what's in the cart. When lots of components need the same data, passing it down through props gets messy, so these libraries keep it in one central place (a "store") that any component can read from.

### Redux

Predictable state management, mostly used with React. All the state lives in one store and can only be changed by dispatching actions, which are handled by reducers, so every change is easy to track and debug. These days you use it through Redux Toolkit, which cuts out a lot of the boilerplate.

### Zustand

Small, fast and simple state management for React. You create a store with one function and use it like a hook, with no providers or boilerplate. A popular, lighter alternative to Redux.

### MobX

Reactive state management. You mark your state as observable, and any component that uses it re-renders automatically when it changes. You can change the state directly, so it feels less strict than Redux.

### Vuex / Pinia

State management for Vue. Vuex was the old official one, and Pinia is the official recommendation now (Vuex is only in maintenance mode). Pinia is simpler, has better TypeScript support and doesn't need mutations.

## Testing Tools

Tests are code that checks your code still works. The main kinds:

- **Unit tests** check one small piece, like a single function.
- **Integration tests** check that a few pieces work together, like a route plus its middleware.
- **E2E (end-to-end) tests** open a real browser and click through the app like a user would.

### Jest

A testing framework made by Facebook. It works with almost zero setup and has everything built in: test runner, assertions like `expect(add(2, 3)).toBe(5)`, mocking and code coverage. Really common in React and Node projects.

### Mocha

A flexible test framework for Node.js and the browser. It only gives you the test runner (`describe` / `it`), so you choose your own extras, like Chai for assertions and Sinon for mocking. More setup than Jest, but you get more control.

### Cypress

A popular tool for E2E testing. It opens a real browser and clicks buttons, fills in forms and checks the page just like a user would. It has a nice visual runner where you can watch every step of the test.

### Playwright

Microsoft's cross-browser testing tool. One API lets you test in Chromium, Firefox and WebKit (Safari's engine). It automatically waits for elements to be ready, which makes tests less flaky, and it can run tests in parallel.

## Build Tools & Package Managers

Browsers don't understand things like JSX, TypeScript or importing straight from `node_modules`, and loading hundreds of small files is slow. Build tools (bundlers) take all your files and turn them into a few small, optimized files the browser can actually run.

### Webpack

A module bundler. It follows all your imports (JS, CSS, images, fonts) and packs them into a few files for the browser. Really powerful thanks to its loaders and plugins, but the config can get complicated fast.

### Vite

A fast dev server and build tool that works with React, Vue, Svelte and more. In development it serves your files as native ES modules, so the server starts almost instantly and changes show up right away. For production it builds an optimized bundle for you.

### esbuild

An ultra-fast bundler written in Go, often 10-100x faster than older bundlers. It has fewer features and plugins than Webpack, so it's often used inside other tools instead of on its own.

### Rollup

A bundler optimized for packaging libraries. It outputs clean, small bundles and was one of the first to do tree-shaking (removing code you never actually use). Lots of npm packages are built with it.

### Parcel

A zero-config bundler. You point it at your `index.html` and it figures out the rest (JS, CSS, images, TypeScript) on its own. Great for small projects when you don't want to write any config.

### npm / yarn / pnpm

Package managers that install dependencies from the npm registry, all using the same `package.json`. npm comes with Node, yarn was made by Facebook back when npm was slow, and pnpm saves disk space by storing each package once and linking it into your projects. Each one has its own lock file (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`), so stick to one per project.

## Mobile App Development

Two ways to build mobile apps with web skills:

- **Native**: your code renders real iOS/Android UI components, so it looks and feels like any other app.
- **Hybrid**: your web app (HTML, CSS, JS) runs inside a native "shell" that shows it in a built-in browser view (WebView).

### React Native

Lets you build native mobile apps with React, made by Meta. You write components in JavaScript, but they turn into real native UI elements instead of a web page. One codebase works for both iOS and Android.

### Ionic

A framework for building hybrid mobile apps with web technologies. It comes with UI components that look like native iOS and Android ones, and works with Angular, React or Vue. Since it's all web code, the same app can also run as a normal website.

### Capacitor

Turns a web app into a native iOS or Android app, made by the Ionic team. It wraps your app in a native shell and gives you JavaScript APIs for things like the camera, GPS and push notifications. It works with any web framework, not just Ionic.

### Expo

An easier development environment for React Native. You can start a project with one command and test it right on your phone with the Expo Go app, without setting up Xcode or Android Studio. The React Native docs now recommend starting new projects with it.

## Desktop App Development

Same idea as hybrid mobile apps, but for Windows, macOS and Linux: you build the UI with web technologies and it runs in its own desktop window.

### Electron

Lets you build desktop apps with HTML, CSS and JavaScript, and it's what VS Code, Discord and Slack are built with. Every app ships with its own copy of Chromium and Node.js, so it can use web tech and still access files and the OS. The downside is that apps are big (often 100MB+) and use a lot of RAM.

### Tauri

A lighter and more secure alternative to Electron, with a Rust backend. Instead of bundling Chromium, it uses the webview that's already built into the OS, so apps can be just a few MB. It's also more secure by default, since things like file access have to be explicitly allowed.

## Other Important Libraries

Libraries that don't really fit the categories above but show up everywhere.

### jQuery

A library for DOM manipulation, AJAX and animations, with short syntax like `$('.btn').hide()`. It's old, and most of what it did is now built into plain JavaScript (`querySelector`, `fetch`). Still used on tons of websites though, especially WordPress ones.

### Lodash

A utility library full of helper functions for arrays, objects and strings, like `_.debounce`, `_.cloneDeep` and `_.groupBy`. It saves you from writing these yourself. Some of them are built into JavaScript now, but it's still really common.

### Axios

A Promise-based library for making HTTP requests, in the browser and in Node. Compared to `fetch`, it parses JSON for you and throws an error on 4xx/5xx responses (`fetch` doesn't). It also has interceptors, so you can do things like attach an auth token to every request in one place.

### D3.js

A library for data visualization: charts, maps, graphs and so on. It connects your data to SVG/HTML elements, so you can build pretty much any custom chart you can think of. Very powerful, but hard to learn, so for simple charts something like Chart.js is easier.

### Three.js

A library for 3D graphics in the browser using WebGL. Writing raw WebGL is really hard, and Three.js gives you simple things like scenes, cameras, lights and 3D models instead. Used for 3D product viewers, games and those fancy 3D landing pages.

### Socket.IO

Real-time, two-way communication between the browser and the server, built on WebSocket. Instead of the client asking the server for new data over and over, the server can push it the moment something happens, which is perfect for chat apps, live notifications and multiplayer games. Both sides need the Socket.IO library though, since it's not plain WebSocket.

## Programming Languages

There are lots of different ways to tell a computer what we want it to do, and each language is better at some jobs than others.

### Python

Used for AI, data science, machine learning, automation scripts, data analysis and web backends. Its syntax is really clean and easy to read, so it's often the first language people learn. It has huge libraries like pandas and PyTorch, and frameworks like Django and FastAPI for the web.

### C / C++

Used for operating systems, game engines and embedded systems (code running on small devices). They're very fast and give you direct control over memory, which is why they're used close to the hardware. The Linux kernel is written in C and Unreal Engine in C++, but they're harder to learn and memory bugs are easy to make.

### Go

The language Docker and Kubernetes are written in, made by Google. It's simple, compiles into one fast executable file, and has really good built-in support for doing lots of things at once (goroutines). That's why it's popular for cloud tools and servers.

### PHP

The language behind WordPress, Laravel and Drupal. It's a server-side language made for building websites, and WordPress alone runs a huge part of the web. Laravel is the modern PHP framework most people use for new projects.

### Java

Used for enterprise systems, banking systems and mobile app backends. It runs on the JVM, so the same code works on any machine ("write once, run anywhere"), and it's strict and stable, which big companies and banks like. Android apps were traditionally written in Java (Kotlin is preferred now, but it runs on the JVM too).

### C#

The language Unity uses for game development, made by Microsoft. In Unity you write C# scripts to control how objects in the game behave. Outside of games, it's also used for .NET web backends and Windows apps.

## JavaScript & ECMAScript

- **JavaScript** = the actual language, made by Brendan Eich at Netscape in 1995 (in about 10 days).
- **ECMAScript (ES)** = the official standard that says how JavaScript should work. A committee called TC39 maintains it, and browsers and Node follow it.

So JS is the language and ES is the rulebook. "ES6" just means version 6 of that rulebook. Things like `document`, `fetch` or `fs` aren't part of ES, those come from the browser or Node.

### ES5 (2009)

The version that was the standard for years, and that every browser supports, even really old ones.

- `'use strict'` mode
- array methods: `forEach`, `map`, `filter`, `reduce`, `some`, `every`
- `JSON.parse` / `JSON.stringify` built in
- `Object.keys`, `Array.isArray`, `bind`, `trim`

What it didn't have: only `var` (function scoped), no classes (just prototypes), no modules, and async code meant callbacks inside callbacks ("callback hell").

### ES6 / ES2015

The biggest update JS ever got. After it, a new version comes out every year and is named after the year (ES2016, ES2017...).

```js
// let / const (block scoped, unlike var)
const name = 'Akmuhammet';
let count = 0;

// arrow functions
const add = (a, b) => a + b;

// template literals
console.log(`Hello, ${name}!`);

// destructuring
const { age, city } = person;
const [first, second] = numbers;

// default params + spread
function sayHi(name = 'Guest') {}
const newNumbers = [...numbers, 4, 5];

// classes
class User {
    constructor(name) {
        this.name = name;
    }
}

// modules
import express from 'express';
export default app;

// promises
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
wait(1000).then(() => console.log('1 second later'));
```

Also: `Map`, `Set`, `for...of`, `Symbol`, shorthand objects (`{ name, age }`), and new methods like `find`, `Object.assign`, `Array.from`, `Number.isInteger` and `includes` for strings.

### After ES6

Smaller yearly updates. Highlights:

- **ES2016**: `array.includes()`, `**` for powers (`2 ** 3` = 8)
- **ES2017**: `async` / `await`, `Object.values()`, `Object.entries()`
- **ES2018**: object spread `{ ...person, age: 23 }` (array spread was ES6, objects came later)
- **ES2019**: `array.flat()`, `Object.fromEntries()`
- **ES2020**: optional chaining `user?.address?.city`, nullish coalescing `req.body ?? {}`, `BigInt`
- **ES2021**: `replaceAll()`, number separators like `1_000_000`
- **ES2022**: `array.at(-1)` for the last item, private class fields (`#password`), top-level `await`
- **ES2023**: `toSorted()` / `toReversed()`, which return a copy instead of changing the original array
- **ES2024**: `Object.groupBy()`

## Type Coercion (Implicit / Explicit)

JS converting a value from one type to another, either automatically (implicit) or because you told it to (explicit).

**Implicit** = JS does it on its own when the types don't match:

```js
true + 1        // 2      (true becomes 1)
'5' + 1         // '51'   (+ with a string glues them together)
'5' - 1         // 4      (- only works with numbers, so '5' becomes 5)
'5' * '2'       // 10
null + 1        // 1      (null becomes 0)
undefined + 1   // NaN
[] + {}         // '[object Object]'
'' == 0         // true
'0' == false    // true
```

**Explicit** = converting it yourself, on purpose:

```js
Number('5')       // 5
String(10)        // '10'
Boolean(1)        // true
Number('abc')     // NaN
Number('')        // 0     (careful with this one)
parseInt('42px')  // 42
Boolean('')       // false
Boolean('0')      // true  (any non-empty string is true)
```

**Explicit conversion is preferred**, because anyone reading the code can see exactly what type they're getting.

It's dangerous because the results are hard to predict and there's no error, the code just keeps running with the wrong value. Example from the backend: `req.query.page` is a string, so `page + 1` gives `'21'` instead of `3`. And `'0' == false` is `true`, but `'0'` still counts as true in an `if`.

How to stay safe:

- use `===` instead of `==`, since `===` never converts types
- convert on purpose with `Number()`, `String()` or `Boolean()` before doing math or comparing
- remember the falsy values: `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`. Everything else is truthy, even `'0'`, `[]` and `{}`.

## Encode / Decode

Encoding = turning data into a format that can be safely sent or stored. Decoding = turning it back. It keeps data from breaking when it moves between systems, so they stay compatible.

**It's not encryption.** There's no key or password, anyone can decode it. Never "hide" passwords with Base64.

Where it's used:

- URLs
- JSON / API communication
- sending binary data (like images) as text

### URL encoding

URLs can only contain certain characters, so spaces, Turkish letters and symbols like `&` get turned into `%` codes.

```js
encodeURIComponent('Onur Yalçın');               // 'Onur%20Yal%C3%A7%C4%B1n'
decodeURIComponent('Onur%20Yal%C3%A7%C4%B1n');  // 'Onur Yalçın'

// ad=Onur Yalçın  ->  ad=Onur%20Yal%C3%A7%C4%B1n
```

The space becomes `%20`, `ç` becomes `%C3%A7` and `ı` becomes `%C4%B1`. Use `encodeURIComponent` for a single value (like a query param), and `encodeURI` for a whole URL, since it leaves `?`, `&` and `/` alone.

### JSON

`JSON.stringify()` encodes an object into text so it can be sent through an API, and `JSON.parse()` decodes it back into an object on the other side.

```js
const user = { name: 'Onur', age: 30 };

JSON.stringify(user);                     // '{"name":"Onur","age":30}'   (encode, now it's a string)
JSON.parse('{"name":"Onur","age":30}');   // { name: 'Onur', age: 30 }    (decode, back to an object)
```

Same thing `res.json()` and `express.json()` do in Express.

### Base64

Turns any data (even images or files) into plain text using only 64 safe characters (A-Z, a-z, 0-9, `+`, `/`).

```js
btoa('merhaba');        // 'bWVyaGFiYQ=='   (encode)
atob('bWVyaGFiYQ==');   // 'merhaba'        (decode)
```

- the `=` at the end is just padding
- the result is about 33% bigger than the original
- `btoa` only works with basic Latin characters, so `btoa('Yalçın')` throws an error. In Node, use `Buffer.from('Yalçın').toString('base64')` instead
- used for things like images inside HTML/CSS (`data:image/png;base64,...`), email attachments, and HTTP Basic Auth headers (which is why those need HTTPS, since Base64 is readable by anyone)

## Scope

Scope = where a variable can be seen and used.

- **Block scope** = limited to the `{ }` it's in. `let` and `const` work like this.
- **Function scope** = only cares about function boundaries and ignores other blocks like `if` and `for`. `var` works like this.

```js
if (true) {
    let a = 1;
    const b = 2;
    var c = 3;
}
console.log(c); // 3, var ignores the if block
console.log(a); // ReferenceError: a is not defined

function test() {
    var d = 4;
}
console.log(d); // ReferenceError, var does stop at functions
```

The classic `var` bug in loops:

```js
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)); // 3 3 3
for (let j = 0; j < 3; j++) setTimeout(() => console.log(j)); // 0 1 2
```

With `var` there's only one `i` shared by the whole loop, and by the time the timeouts run (event loop!) it's already 3. With `let` every loop round gets its own copy. That's a big reason to just use `let` and `const`.

## Operators

| Operator | What it does         | Example  | Result |
| -------- | -------------------- | -------- | ------ |
| `+`      | addition             | `5 + 2`  | `7`    |
| `-`      | subtraction          | `5 - 2`  | `3`    |
| `*`      | multiplication       | `5 * 2`  | `10`   |
| `**`     | exponent (power)     | `2 ** 3` | `8`    |
| `/`      | division             | `10 / 3` | `3.333...` |
| `%`      | modulo (remainder)   | `10 % 3` | `1`    |
| `++`     | increment (add 1)    | `x++`    | `x + 1` |
| `--`     | decrement (minus 1)  | `x--`    | `x - 1` |

Things to remember:

- `+` with a string glues them together instead of adding: `'5' + 2` is `'52'` (type coercion again)
- `/` always gives a decimal if needed, there's no integer division. Use `Math.floor(10 / 3)` to get `3`
- dividing by zero doesn't throw an error, `10 / 0` is just `Infinity`
- `%` is handy for checking even/odd: `n % 2 === 0` means even
- `x++` returns the old value and then adds 1, `++x` adds 1 first and returns the new value:

```js
let x = 5;
console.log(x++); // 5 (x is 6 now)
console.log(++x); // 7
```

## Conditionals

### if / else

```js
if (condition) {
    // runs when the condition is true
} else {
    // runs in every other case
}
```

Add `else if` to check more than one thing (from `2/loops/server.js`):

```js
const score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B'); // this one runs
} else {
    console.log('Grade: F');
}
```

The condition doesn't have to be a real boolean, it just has to be truthy or falsy (see type coercion above). For simple cases there's a one-line version, the ternary: `const status = age >= 18 ? 'adult' : 'minor';`

### switch

```js
switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
}
```

- it compares with `===`, so `'1'` won't match `case 1`
- forget the `break` and it keeps running into the next case too ("fall through"). You can use that on purpose to group cases
- `default` runs when nothing matches, like `else`

```js
switch (day) {
    case 'saturday':
    case 'sunday':
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}
```

Use `switch` when you're comparing one value against lots of fixed options, and `if/else` for ranges (`score >= 90`) or more complex conditions.

## Arrays

An ordered list of values. Indexes start at 0.

```js
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

fruits[0];      // 'Banana'
fruits.length;  // 4
fruits.at(-1);  // 'Mango' (last item)
```

### push

Adds an item to the **end** and returns the new length.

```js
fruits.push('Kiwi'); // 5
// ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']
```

This works even though `fruits` is a `const`. `const` only means you can't reassign the variable (`fruits = []`), but you can still change what's inside the array.

### splice

Removes (and/or adds) items at any position: `splice(start, howManyToDelete, ...itemsToAdd)`. It **changes the original array** and returns the items it removed.

```js
let basket = ['apple', 'pear', 'banana', 'strawberry'];

// starting at index 1, delete 2 items
basket.splice(1, 2);   // returns ['pear', 'banana']
console.log(basket);   // ['apple', 'strawberry']
```

I used it in the backend to delete a note: `notes.splice(noteIndex, 1)`. Don't mix it up with `slice`, which only copies part of the array and leaves the original alone.

### filter

Goes through the array and builds a **new array** with only the items that pass a test (the function returns `true`). The original array doesn't change.

```js
const numbers = [5, 12, 8, 130, 44];

const filtered = numbers.filter((num) => num > 10);
console.log(filtered); // [12, 130, 44]
```

Works great with arrays of objects:

```js
const users = [
    { id: 1, name: 'Onur', age: 30 },
    { id: 2, name: 'Ahmet', age: 17 },
    { id: 3, name: 'Ayşe', age: 22 },
];

const adults = users.filter((user) => user.age >= 18);
console.log(adults);
// [
//     { id: 1, name: 'Onur', age: 30 },
//     { id: 3, name: 'Ayşe', age: 22 }
// ]
```

If nothing matches, you get an empty array `[]`. That's different from `find`, which returns just the first match, or `undefined` if there isn't one.

### Other methods

Every example below starts from the original `['Banana', 'Orange', 'Apple', 'Mango']`.

**Adding / removing** (these change the original array):

```js
fruits.pop();                       // removes the last item, returns 'Mango'
fruits.unshift('Lemon');            // adds to the start, returns the new length (5)
fruits.shift();                     // removes the first item, returns 'Banana'
fruits.splice(1, 1);                // from index 1, remove 1 item -> ['Banana', 'Apple', 'Mango']
fruits.splice(2, 0, 'Lemon', 'Kiwi'); // at index 2, remove 0, insert 2 -> ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
```

**Copying / combining** (these return something new and leave the original alone):

```js
fruits.slice(1, 3);                 // ['Orange', 'Apple'] (from index 1 up to, not including, 3)
fruits.concat(['Kiwi', 'Lemon']);   // a new array with both
[...fruits, 'Kiwi'];                // same idea with spread
fruits.join(', ');                  // 'Banana, Orange, Apple, Mango' (array to string)
fruits.toString();                  // 'Banana,Orange,Apple,Mango'
```

`toString()` is the same as `join()` with no argument: just commas, no spaces. Use `join` when you want to pick the separator.

**Searching:**

```js
fruits.indexOf('Apple');    // 2
fruits.indexOf('Kiwi');     // -1 (not found)
fruits.includes('Mango');   // true
```

**Looping and transforming** (with `const numbers = [5, 1, 10, 3]`):

```js
numbers.forEach((n) => console.log(n));        // just loops, returns nothing
numbers.map((n) => n * 2);                     // [10, 2, 20, 6]
numbers.filter((n) => n > 3);                  // [5, 10]
numbers.find((n) => n > 3);                    // 5 (first match only)
numbers.findIndex((n) => n > 3);               // 0
numbers.some((n) => n > 8);                    // true (at least one matches)
numbers.every((n) => n > 0);                   // true (all of them match)
numbers.reduce((sum, n) => sum + n, 0);        // 19 (squash it down to one value)
```

`map`, `filter` and `find` are the ones I used the most in the backend, like `notes.find((note) => note.id === id)`.

**Sorting** (changes the original):

```js
fruits.sort();                          // ['Apple', 'Banana', 'Mango', 'Orange']
fruits.reverse();                       // ['Mango', 'Apple', 'Orange', 'Banana']

[5, 1, 10, 3].sort();                   // [1, 10, 3, 5]  wrong!
[5, 1, 10, 3].sort((a, b) => a - b);    // [1, 3, 5, 10]  right
```

`sort()` compares everything as strings by default, so `'10'` comes before `'3'`. For numbers, always pass `(a, b) => a - b`. If you don't want to change the original, use `toSorted()` instead.

### Destructuring (array / object)

A shortcut for pulling values out of an object or array into separate variables in one line.

**Object** (matched by property name):

```js
const user = { name: 'Onur', age: 30 };

const { name } = user;
console.log(name); // 'Onur'
```

Without destructuring that would be `const name = user.name;`. You can grab several at once, rename, or set a default:

```js
const { name, age } = user;            // 'Onur', 30
const { name: userName } = user;       // rename: userName = 'Onur'
const { city = 'Istanbul' } = user;    // default, since user has no city
```

**Array** (matched by position):

```js
const fruits = ['Banana', 'Orange', 'Apple'];

const [first, second] = fruits;   // 'Banana', 'Orange'
const [, , third] = fruits;       // skip with commas: 'Apple'
const [head, ...rest] = fruits;   // 'Banana', ['Orange', 'Apple']
```

Swapping two variables without a temp variable: `[a, b] = [b, a];`

I use this all the time in Express: `const { title, content } = req.body;`, `const { id } = req.params;`, and even in function parameters like `function sayHi({ name })` from day 2.

### Multi-dimensional arrays

An array whose items are also arrays. The most common one is a 2D array (a matrix), like a table with rows and columns.

```js
// a 3x4 matrix (3 rows, 4 columns)
const matrix = [
    [1, 2, 3, 4],    // row 0
    [5, 6, 7, 8],    // row 1
    [9, 10, 11, 12], // row 2
];

matrix[0][0]; // 1  -> row 0, column 0
matrix[1][2]; // 7  -> row 1, column 2
matrix[2][3]; // 12 -> row 2, column 3
matrix[1];    // [5, 6, 7, 8] (the whole row)
```

First index = row, second index = column. `matrix.length` is the number of rows (3), and `matrix[0].length` is the number of columns (4).

To go through every item, use a loop inside a loop:

```js
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(matrix[row][col]); // 1, 2, 3 ... 12
    }
}
```

`matrix.flat()` turns it into one normal array: `[1, 2, 3, ..., 12]`. Used for things like game boards (tic-tac-toe, chess), spreadsheets and image pixels.

## Loops

Loops run the same code over and over. They're used all the time for in-between steps, like going through an array and running some function on each item to build the result you want. Best for working through a list with a known, limited size.

```js
let text = '';

for (let i = 0; i < 5; i++) {
    text += 'The number is ' + i + '<br>';
}
// 'The number is 0<br>The number is 1<br>... The number is 4<br>'
```

`for (start; condition; step)`: start at `i = 0`, keep going while `i < 5`, add 1 after each round.

Other kinds:

```js
for (const fruit of fruits) {}      // for...of: goes through the VALUES of an array
for (const key in car) {}           // for...in: goes through the KEYS of an object
fruits.forEach((fruit) => {});      // array method version of for...of

while (count < 3) { count++; }      // runs while the condition is true
do { count++; } while (count < 3);  // same, but always runs at least once
```

- `break` stops the loop completely
- `continue` skips to the next round
- careful with `while`, if the condition never becomes false you get an infinite loop and everything freezes

## Objects

A collection of `key: value` pairs. Writing one with `{ }` like this is called an **object literal**:

```js
const car = { type: 'Fiat', model: '500', color: 'white' };
```

### Reading properties

```js
car.type;       // 'Fiat'   (dot notation, the normal way)
car['model'];   // '500'    (bracket notation)
car.year;       // undefined (doesn't exist, no error)
```

Brackets are needed when the key is in a variable (`car[key]`) or has spaces or dashes (`user['first name']`).

### Functions inside objects (methods)

A function stored inside an object is called a method. Inside it, `this` means the object it was called on.

```js
const user = {
    name: 'Onur',
    preferences: [],

    async getPreferences() {
        const res = await axios.get('/api/preferences');
        this.preferences = res.data;
    },

    sayHi() {
        console.log(`Hi, I'm ${this.name}`);
    },
};

user.sayHi(); // "Hi, I'm Onur"
```

- `axios.get()` returns a Promise, so it needs `await`. Without it, `this.preferences` would hold the Promise instead of the actual data.
- don't use arrow functions as methods, they don't have their own `this`
- my `counter` object from day 2 works the same way (`this.count++`)

### Object methods

Built-in helpers on `Object`:

```js
Object.keys(car);     // ['type', 'model', 'color']                          (list of keys)
Object.values(car);   // ['Fiat', '500', 'white']                            (list of values)
Object.entries(car);  // [['type', 'Fiat'], ['model', '500'], ['color', 'white']]  (key-value pairs)
Object.freeze(car);   // locks it: no adding, changing or deleting anymore
```

After `Object.freeze`, `car.color = 'red'` gets ignored (or throws an error in strict mode). It's only shallow though, nested objects inside can still be changed.

### Immutability

Immutability = not changing existing data, making a new copy with the changes instead.

```js
user.name = 'Ali';                         // not recommended, changes the original
const newUser = { ...user, name: 'Ali' };  // recommended, makes a new object
```

Creating a new object is the safer way. If some other part of the code is still using `user`, it won't suddenly change under it. React also depends on this, since it only notices a change when it gets a new object.

### Deep clone

Spread (`{ ...user }`) only copies the top level. Nested objects are still shared, so changing `copy.address.city` also changes the original. A deep clone copies everything, all the way down.

```js
const copy1 = JSON.parse(JSON.stringify(user)); // old way
const copy2 = structuredClone(user);            // new way, use this one
```

The JSON way breaks some things: `Date` objects turn into strings, and functions and `undefined` values just disappear. `structuredClone` keeps `Date`, `Map` and `Set` properly. Neither one can copy functions though (`structuredClone` throws an error on them).

## JSON

JSON (JavaScript Object Notation) is a lightweight, text-based format for storing data and sending it between systems.

- it's language independent: Python, Java, Go, PHP... all of them can read and write it
- data is stored as key-value pairs

```json
{
    "name": "Onur",
    "age": 30,
    "isDeveloper": true,
    "skills": ["JavaScript", "Node.js", "React"],
    "address": {
        "city": "İstanbul",
        "country": "Türkiye"
    }
}
```

It looks like a JS object, but the rules are stricter:

- keys **must** be in double quotes
- strings only use double quotes, never single
- no trailing commas, no comments
- allowed values: string, number, boolean, `null`, array, object (no functions, no `undefined`)

Since it's already in this key-value shape, it's easy to store in document databases (NoSQL) like MongoDB. My `5/fsapi/data/notes.json` is a JSON file too. For converting it back and forth with `JSON.stringify` / `JSON.parse`, see Encode / Decode above.

## Functions

A reusable block of code that does one job. Three ways to write one:

```js
function add(a, b) {           // declaration
    return a + b;
}

const subtract = function (a, b) {  // expression
    return a - b;
};

const multiply = (a, b) => a * b;   // arrow function
```

Function declarations are hoisted, so you can call them before the line where they're written. Expressions and arrow functions can't be called that early.

Some facts about them:

- **They usually run when something happens (an event).** A button click, a timer finishing, a request hitting a route: `button.addEventListener('click', () => { ... })` or `app.get('/', (req, res) => { ... })`.
- **They're the base of object-oriented programming in JS.** Before classes existed, objects were made with constructor functions (`function Car(type) { this.type = type; }` + `new Car('Fiat')`). Classes are just a nicer way to write the same thing, `typeof` a class is even `'function'`.
- **A function declared globally gets attached to the `window` object.** This is in the browser, in a normal `<script>`: `function hello() {}` becomes `window.hello`. It doesn't happen with `let`/`const`, in ES modules, or in Node files, where each file is its own module.
- **Every function comes from the global `Function` object.** Functions are actually objects: `add instanceof Function` is `true`, and they have properties like `add.name` (`'add'`) and `add.length` (number of parameters, `2`).

### return

`return` sends a value back to wherever the function was called from.

```js
function add(a, b) {
    return a + b;
}

const result = add(2, 3); // 5
```

- `return` also **stops the function** right there, nothing after it runs
- no `return` = the function gives back `undefined`
- that's why in Express I write `return res.status(400).json(...)`, so the handler stops early and doesn't try to send a second response

### The arguments object

Inside a normal function, `arguments` holds every value that was passed in, even more than the function has parameters for.

```js
function add(p1, p2, p3) {
    let sum = 0;
    for (let arg of arguments) sum += arg;
    return sum;
}

let x = add(4, 6, 10);   // 20
add(1, 2, 3, 4, 5);      // 15, the extra 2 still get counted
```

- it's only "array-like": it has `length` and indexes (`arguments[0]`), but no `map`, `filter` etc.
- arrow functions don't have their own `arguments`
- the modern way is **rest parameters**, which gives you a real array:

```js
function add(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}

add(4, 6, 10); // 20
```

### Recursion

When a function calls itself. Every recursive function needs a **base case** (when to stop), otherwise it keeps calling itself forever.

```js
function factorial(n) {
    if (n === 1) return 1;          // base case
    return n * factorial(n - 1);    // calls itself with a smaller number
}

factorial(5); // 120
```

How `factorial(3)` runs: `3 * factorial(2)` -> `3 * 2 * factorial(1)` -> `3 * 2 * 1` = `6`.

Each call waits on the call stack until the one after it returns (see the event loop section). If it never reaches the base case, the stack fills up and you get `RangeError: Maximum call stack size exceeded`. That's exactly what happens with `factorial(0)` here, since `n` goes 0, -1, -2... and never hits 1. Using `if (n <= 1) return 1;` fixes it.

Recursion is great for things that are nested inside themselves, like folders inside folders, nested comments or the DOM tree.

### Built-in functions

Functions that come with JavaScript, ready to use.

```js
parseInt('10px');       // 10    (reads a whole number from the start, stops at the first non-digit)
parseFloat('10.5px');   // 10.5  (same, but keeps decimals)
String(true);           // 'true'
Number('10px');         // NaN   (Number is strict, the whole string has to be a number)
isNaN('abc');           // true
Number.isNaN('abc');    // false
eval('2 + 2');          // 4
```

- `parseInt` vs `Number`: `parseInt('10px')` gives `10`, but `Number('10px')` gives `NaN`. Use `parseInt` for things like `'10px'`, and `Number` when the value should be a clean number.
- `isNaN` vs `Number.isNaN`: `isNaN` converts the value to a number first, so `'abc'` becomes `NaN` and you get `true`. `Number.isNaN` only returns `true` if the value is literally `NaN`, so `'abc'` gives `false`. Use `Number.isNaN`, since `NaN === NaN` is `false` and can't be used to check.
- `eval` runs a string as code. **Never use it**, especially with user input, because anyone could run any code they want through it.

## Object-Oriented Programming (OOP)

A way of organizing code around **objects** that hold both data and the functions that work on that data. Pretty much every modern language uses it, and it keeps code organized and modular, since each object takes care of its own stuff.

The main concepts, all supported in JavaScript:

- **Class**: the blueprint (in older JS, made with a function)
- **Object**: an actual thing made from the class, also called an instance
- **Constructor**: the function that sets up a new object
- **Property**: data on the object (`width`, `height`)
- **Method**: a function on the object (`area()`)
- **Inheritance**: a class getting everything from another class and adding its own stuff

### Class the original way (constructor function)

Before ES6, a "class" was just a normal function called with `new`:

```js
function Rectangle(width, height) {
    this.width = width;     // properties
    this.height = height;
}

Rectangle.prototype.area = function () {   // method
    return this.width * this.height;
};

const square = new Rectangle(5, 5);   // object
console.log(square.area());           // 25
```

- `new` creates an empty object, sets `this` to it, runs the function, and returns the object
- methods go on `prototype`, so every rectangle shares the same `area` function instead of each one getting its own copy

### Class the modern way (ES6)

ECMAScript 2015 (ES6) added the `class` syntax, which makes the same thing much easier to write and read. Under the hood it still works with prototypes (`typeof Rectangle` is `'function'`).

```js
// defining the Rectangle class
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // method that calculates the area
    area() {
        return this.width * this.height;
    }
}

// creating two objects from it
const square1 = new Rectangle(5, 5);   // 5x5 square
const square2 = new Rectangle(10, 10); // 10x10 square

console.log('square1 area:', square1.area()); // 25
console.log('square2 area:', square2.area()); // 100
```

One class, as many objects as you want. Each one has its own `width` and `height`, but they all share the same `area()` method.

### Inheritance

`extends` makes a class that gets everything from another one. `super()` calls the parent's constructor.

```js
class Square extends Rectangle {
    constructor(size) {
        super(size, size); // a square is a rectangle with equal sides
    }
}

const sq = new Square(5);
sq.area();               // 25, area() comes from Rectangle
sq instanceof Rectangle; // true
```

## Error Handling

`try/catch` lets you catch errors instead of letting them crash the whole program.

```js
try {
    // code that might throw an error
} catch (err) {
    // if anything inside try throws, we jump here
} finally {
    // optional, runs no matter what
}
```

As soon as something in `try` throws, the rest of the `try` block is skipped and it goes straight to `catch`. Example, broken JSON:

```js
try {
    const data = JSON.parse('{bad json}');
    console.log(data); // never runs
} catch (err) {
    console.log(err.name);    // 'SyntaxError'
    console.log(err.message); // what went wrong
}
```

You can throw your own errors with `throw`, like in my day 2 calculator:

```js
function divide(a, b) {
    if (b === 0) throw new Error('Division by zero is not allowed.');
    return a / b;
}
```

- `err.message` is the readable text and `err.name` is the type (`SyntaxError`, `TypeError`...)
- try/catch does **not** catch errors inside callbacks that run later (like `setTimeout`), since by then the try block is already finished
- for async code use `try { await ... } catch (err) { ... }`, which does work
- don't wrap everything in try/catch, only the parts that can actually fail (parsing, reading files, network requests)

## Debugging

### console.log

Prints values to the console so you can see what's going on.

```js
console.log('User: ', user);   // User:  { name: 'Onur', age: 30 }
console.log('User: ' + user);  // User: [object Object]
```

Use a **comma**, not `+`. With a comma the console shows the actual object and you can expand it, while `+` turns it into the useless `[object Object]` string.

Other useful ones: `console.error()` (shows in red), `console.warn()`, and `console.table(users)`, which shows an array of objects as a table.

### debugger

```js
function calculateTotal(items) {
    debugger; // execution pauses here
    return items.reduce((sum, item) => sum + item.price, 0);
}
```

When DevTools is open, the code stops at the `debugger` line, and you can see every variable at that moment and go through the code line by line. If DevTools is closed it does nothing. It's only for development, so remove it before committing.

### See whatever the mouse is hovering over

A really useful little snippet: paste it into the browser console and it logs every element your mouse goes over.

```js
document.addEventListener('mouseover', (e) => {
    console.log(e.target);
}, { passive: true });
```

- `e.target` is the exact element that triggered the event
- one listener on `document` is enough, because events "bubble up" from the element to its parents, all the way to `document` (this is called event delegation)
- `{ passive: true }` tells the browser this listener will never call `e.preventDefault()`, so it doesn't have to wait for it (that mostly matters for scroll and touch events, keeping them smooth)
- great for finding which element is causing a weird layout or spacing problem. Refresh the page to get rid of it

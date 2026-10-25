# Backend Notes

My notes from week 1 of backend. Code examples are from the folders in here (`1/` = day 1, `2/` = day 2, etc).

## Backend vs Frontend

- **Frontend** = what the user sees and clicks. Runs in the browser. HTML, CSS, JS.
- **Backend** = everything behind the scenes. Runs on a server. Saves data, checks logins, handles the logic, sends data back (usually JSON).

I think of it like a restaurant: frontend is the dining room, backend is the kitchen, and the API is the waiter running between them.

They talk over HTTP. Frontend sends `GET /notes`, backend sends back JSON + a status code.

Important: users can see and change frontend code (DevTools), so validation and password checks always have to happen on the backend too.

## npm

Node Package Manager. Comes with Node. It's both the place where packages live (npmjs.com) and the command you use to install them.

```bash
npm init -y              # new project
npm i express            # install a package
npm i -D nodemon         # install a dev-only package
npm i                    # install everything in package.json
npm uninstall express    # remove one
npm start / npm run dev  # run scripts
```

`npx` runs a package without installing it globally, e.g. `npx nodemon app.js`.

## JavaScript & the Event Loop

JS is the language of the browser. Node.js takes Chrome's engine (V8) and runs JS outside the browser, so we can write servers with it.

Random stuff from day 2:

- no int/float, both are just `number`
- `typeof []` is `'object'` (use `Array.isArray()`)
- `typeof null` is also `'object'`, old bug, never getting fixed
- `const` by default, `let` if it changes, no `var`

**Event loop:** JS only has one thread, so it can only do one thing at a time. Slow stuff (timers, reading files, network) gets handed off to the background (libuv in Node). When it's done, its callback waits in a queue. Once the call stack is empty, the event loop runs whatever's waiting. Promise callbacks (microtasks) go before `setTimeout` ones.

```js
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// 1 4 3 2
```

So if you do something slow and _sync_ (like `readFileSync` on a big file), the whole server waits for it. Don't block the event loop.

## API

Application Programming Interface. Basically the rules for how two programs talk to each other. You don't care how the other side works inside, just what you can ask for and what comes back. (The waiter from before.)

A web API = a server with URLs (endpoints) that return data instead of web pages. Like my notes API: `GET /notes` gives back a JSON list.

## REST

A style for designing APIs, not a library. Main rules:

- URLs are nouns: `/notes`, `/users/5` (not `/getNotes`)
- the HTTP method is the verb
- stateless, every request has everything the server needs
- JSON + proper status codes

```
GET    /notes       all notes
GET    /notes/:id   one note
POST   /notes       create
PUT    /notes/:id   update
DELETE /notes/:id   delete
```

PUT = replace the whole thing, PATCH = change just some fields.

## CRUD

Create, Read, Update, Delete. The 4 basic things you do with data.

- Create = POST
- Read = GET
- Update = PUT / PATCH
- Delete = DELETE

Pretty much every app is CRUD underneath.

## Express.js

A framework on top of Node's built-in `http` module. On day 1 I did routing with plain `http` and it was one big if/else on `req.url`, with `writeHead` and `JSON.stringify` everywhere. With Express it's just:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ page: 'Ana Sayfa' }));

app.listen(3000);
```

You get routing, `req.params` / `req.query` already parsed, middleware, `res.json()`, etc.

We're on Express 5. Differences from 4 (most tutorials are still 4):

- wildcards need a name: `/products/*path`
- optional params: `/users{/:id}`
- errors in async handlers get caught automatically
- `req.body` is `undefined` when there's no body (used to be `{}`)

## Routes

Method + path + handler.

```js
app.get('/users/:id', (req, res) => { ... });
```

- Express checks routes top to bottom, first match wins. So `/users/search` has to come _before_ `/users/:id`.
- `express.Router()` = a mini app so routes can live in their own file. Mount it with `app.use('/notes', notesRouter)`, then inside the router `/` means `/notes` and `/:id` means `/notes/:id`.

## Middleware

A function that runs between the request coming in and the response going out. Gets `(req, res, next)`.

It has to do one of these:

- send a response (e.g. 401 if not logged in), or
- call `next()` to pass it on

If it does neither, the request just hangs. If it does both, you get "Cannot set headers after they are sent".

```js
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger); // runs on every request
```

- order matters, `express.json()` has to be before anything that uses `req.body`
- 404 handler = normal middleware at the very end
- error handler = 4 args `(err, req, res, next)`, that's how Express knows it's one

## req, res, next

- `req` = what the client sent (method, url, params, query, body, headers)
- `res` = how I answer: `res.status()`, `res.json()`, `res.send()`, `res.redirect()`
- `next` = go to the next middleware. `next(err)` jumps straight to the error handler

Only one response per request, that's why I write `return res.status(400).json(...)`.

### req.params

From the `:something` parts of the path.

```js
// GET /users/5
app.get('/users/:id', (req, res) => {
    req.params.id; // '5'
});
```

Always a **string**! `1 === '1'` is false, so do `Number(req.params.id)` first.

Used for _which_ thing: `/notes/:id`.

### req.query

Stuff after the `?`.

```js
// GET /products?page=2&limit=5
const { page = 1, limit = 10 } = req.query; // '2' and '5'
```

Also always strings. `Number.isInteger('2')` is false, convert first.

Used for optional stuff: filtering, search, sorting, pagination.

### req.body

The data sent with POST/PUT (like a new note). You need `app.use(express.json())` or it's `undefined`. In Postman/curl, set `Content-Type: application/json`.

GET requests don't have a body, so in Express 5 `req.body` is `undefined` and destructuring it crashes. Use `req.body ?? {}`.

### res.json() vs express.json()

Easy to mix up:

- `express.json()` = middleware, turns incoming JSON into `req.body` (JSON to object)
- `res.json(obj)` = sends an object back as JSON and sets the Content-Type (object to JSON)

There's no `req.json()`.

`res.json()` takes ONE argument. Want a message too? Put it in the same object: `res.json({ message: 'ok', notes })`.

## module.exports & require

Every file is its own module. Nothing is shared unless you export it.

```js
// server.js
module.exports = { add, subtract };

// require.js
const { add } = require('./server');
```

- `./file` = my own file, `express` = from node_modules, `fs` = built into Node
- require caches the file, so everyone gets the same object (that's why the notes array is shared between files)
- `exports = {...}` doesn't work, use `module.exports`
- `require.main === module` is true only when you run the file directly (`node app.js`)
- the newer way is `import` / `export` (ES modules), needs `"type": "module"` in package.json

## fs.readFileSync & fs.writeFileSync

`fs` = built-in module for files. On day 5 I saved notes to a JSON file so they don't disappear on restart.

```js
const data = fs.readFileSync(notesFile, 'utf-8'); // string
const notes = JSON.parse(data);                    // array

fs.writeFileSync(notesFile, JSON.stringify(notes, null, 2));
```

- forget `'utf-8'` and you get a Buffer instead of a string
- `writeFileSync` **overwrites** the whole file, so: read everything, change it, write everything back
- wrap it in try/catch, a missing file or bad JSON throws
- use `path.join(__dirname, 'data', 'notes.json')`, otherwise the path depends on where you ran `node` from
- `Sync` = blocks the event loop. Fine for small stuff, on a real server use `fs/promises` with `await fs.readFile(...)`

## nodemon

Restarts the server every time you save, so no more Ctrl+C and `node app.js` over and over.

```json
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}
```

Then `npm run dev`. Type `rs` to restart manually.

It should be a devDependency (`npm i -D nodemon`). Mine's in normal dependencies right now, which works, it's just not the usual way. Newer Node also has `node --watch app.js` built in.

## package.json & package-lock.json

**package.json** = the project's info, scripts and dependencies. Made by `npm init`.

- `scripts`: shortcuts. `npm start` / `npm test` work directly, everything else is `npm run <name>`
- `dependencies`: needed to run the app
- `devDependencies`: only needed while developing
- `^5.3.0` = any 5.x that's 5.3.0 or newer, `~5.3.0` = only 5.3.x, `5.3.0` = exactly that

**package-lock.json** = the exact version of every installed package, including the dependencies of dependencies. So everyone gets the same versions. Commit it, don't edit it by hand.

**node_modules** = where the packages actually get downloaded. Never commit it (it's in `.gitignore`), `npm install` brings it back.

## npm init + installing stuff

```bash
mkdir my-api && cd my-api
npm init -y          # creates package.json (-y skips the questions)
npm i express        # goes into dependencies
npm i -D nodemon     # goes into devDependencies
```

Installing downloads the package into `node_modules`, adds it to package.json, and updates the lock file.

Cloned someone's project? Just run `npm install` (no name) and it installs everything from package.json.

## .env

For secrets (passwords, API keys) and stuff that changes between my laptop and the server (port, database URL).

```
PORT=3000
JWT_SECRET=something-long-and-random
```

```js
const PORT = process.env.PORT || 3000;
```

- Node doesn't load it by itself: `require('dotenv').config()` at the top, or `node --env-file=.env app.js` (Node 20.6+)
- values are always strings
- **put `.env` in `.gitignore`**. Pushed a secret to GitHub = leaked, even if you delete it after
- commit a `.env.example` with fake values so others know what to set

## HTTP status codes

- **1xx** info, rare (101 = switching to WebSockets)
- **2xx** success
  - 200 OK
  - 201 Created (after POST)
  - 204 No Content (after DELETE, no body)
- **3xx** redirect
  - 301 moved permanently
  - 302 moved temporarily (what `res.redirect()` sends)
  - 304 not modified, use your cached copy
- **4xx** the client messed up
  - 400 bad request (missing fields, bad input)
  - 401 unauthorized = not logged in / wrong password
  - 403 forbidden = logged in but not allowed
  - 404 not found
  - 409 conflict (e.g. username already taken)
  - 429 too many requests
- **5xx** the server messed up
  - 500 internal server error (something crashed)
  - 502 bad gateway
  - 503 service unavailable (down or overloaded)

Easy way to remember: 4xx = the user can fix it, 5xx = only a dev can fix it.

## HTTP vs HTTPS

HTTP = the rules for how the browser and server send requests and responses. Problem: it's plain text, so anyone in between (public wifi, your ISP) can read it or change it.

HTTPS = HTTP + TLS (people still call it SSL). Same requests, just encrypted.

- nobody in the middle can read it
- the server has a certificate proving it's really who it says it is (the padlock)
- data can't be secretly changed on the way
- HTTP uses port 80, HTTPS uses 443

`http://localhost` is fine for dev since it never leaves my laptop. Anything deployed should be HTTPS. Let's Encrypt gives free certificates, and Vercel, Render etc. set it up for you.

## not-found
[![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

not found middleware for express

based on the [express application generator][generator-url].; this middleware needs to be the last “non-error” middleware in the application; it assumes that if the application got here, the requested uri does not exist and generates an error.

## setup
```bash
npm install dan-nl/not-found
```

## use
see [express-http-skeleton][skeleton-url] for an example of use in an application context.

```javascript
var express = require( 'express' );
var app = express();
var notFound = require( 'not-found' );

// ... middleware declarations
// ... route declarations

app.use( notFound );
```

## license
[MIT License][mit-license]

[david-dm-image]: https://david-dm.org/dan-nl/not-found.svg
[david-dm-url]: https://david-dm.org/dan-nl/not-found
[david-dm-dev-image]: https://david-dm.org/dan-nl/not-found/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/not-found?type=dev
[generator-url]: http://expressjs.com/en/starter/generator.html
[mit-license]: https://raw.githubusercontent.com/dan-nl/not-found/master/license.txt
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/1b4b9d9e-524a-40e7-9422-c99aa9338f7f/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/1b4b9d9e-524a-40e7-9422-c99aa9338f7f
[skeleton-url]: https://github.com/dan-nl/express-http-skeleton/blob/master/app.js

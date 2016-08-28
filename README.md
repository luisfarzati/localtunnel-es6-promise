<a href="http://promisesaplus.com/">
    <img src="https://promises-aplus.github.io/promises-spec/assets/logo-small.png" align="right" alt="Promises/A+ logo" />
</a>

# localtunnel-es6-promise

[![Build Status](https://travis-ci.org/luisfarzati/localtunnel-es6-promise.svg?branch=master)](https://travis-ci.org/luisfarzati/localtunnel-es6-promise)

This package is similar to [`localtunnel`](https://www.npmjs.com/package/localtunnel) but uses native ES6 promises. [It's so small](/lib/index.js) that you might prefer to just write down the code in your app.

## installation ##

`localtunnel` is defined as a peer-dependency and thus has to be installed separately.

```
npm install localtunnel
npm install localtunnel-es6-promise
```

## use ##

```javascript
import localtunnel from 'localtunnel-es6-promise';

let tunnel = localtunnel(port).then(tunnel => {
  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;
}).catch(err => {
  if (err) ...
});
```

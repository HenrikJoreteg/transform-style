# transform-style

Apply transform style property with proper prefix to an element. For use with browserify / CommonJS.

Normally I'm all for styles living in CSS, but there are times when it makes sense to position items using JS and transforms are the most performant way to do it. Hence, this tiny library.

## installing

```
npm i transform-style
```

## using

```js
var applyTransform = require('transform-style');

// get an element 
var el = document.getElementById('#someId');

// pass it the element and whatever transform you want
applyTransform(el, 'translateY(40px)');
```

## credits

If you like this, follow [@HenrikJoreteg] on twitter.

## license

MIT

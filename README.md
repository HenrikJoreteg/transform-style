# transform-style

Apply transform style property with proper prefix to an element. For use with browserify / webpack / CommonJS.

There are times when it makes sense to position items using JS and transforms are the most performant way to do it. Hence, this tiny library.

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

**note:** It works by replacing whatever is in `-{{prefix}}-transform`. If you wish to transform in an additive way, pass `true` as a third argument like this:

```js
var applyTransform = require('transform-style');

// get an element 
var el = document.getElementById('#someId');

// will move it 20px right
applyTransform(el, 'translateX(20px)');

// will move it *an additional* 20px right (40px total)
applyTransform(el, 'translateX(20px)', true);

// this will return it to original position (not additive)
applyTransform(el, 'translateX(0px)');
```

## credits

If you like this, follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

## license

MIT

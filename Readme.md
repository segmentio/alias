
# alias

  Change an object's keys to new keys.

## Installation

    $ component install segmentio/alias
    $ npm install @segment/alias

## Example

By dictionary:

```js
var alias = require('alias');
var obj = { a: 1 };

alias(obj, { a: 'b' });
// { b: 1 }
```

By function:

```js
var alias = require('alias');
var obj = { a: 1 };

alias(obj, function (key) { return key + key; });
// { aa: 1 }
```

## API

### alias(object, dictionary || convert)

  Changes an `object`'s keys using a `dictionary` of new key names, or a `convert` function.

## License

  MIT

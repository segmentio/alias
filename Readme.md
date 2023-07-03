
# alias

> **Note**  
> Segment has paused maintenance on this project, but may return it to an active status in the future. Issues and pull requests from external contributors are not being considered, although internal contributions may appear from time to time. The project remains available under its open source license for anyone to use.

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

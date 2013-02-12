
# alias

  Component: change an objects keys to new keys.

## Installation

    $ component install segmentio/alias

## API

### alias(object, keys)

  Changes an objects keys to new key names. `keys` is a 
  dictionary of the changes:

    alias({a : 1}, {
        'a' : 'b'
    });
    // {b : 1}

## License

  MIT

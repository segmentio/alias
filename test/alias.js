var alias = require('..');

suite('alias');

var object = { a : 1 };

test('should alias nothing', function () {
    alias(object);
    object.should.eql({ a : 1 });
});

test('should alias keys', function () {
    alias(object, { 'a' : 'b' });
    object.should.eql({ b : 1 });
});
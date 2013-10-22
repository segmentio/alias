describe('alias', function () {

  var alias = require('alias');
  var assert = require('assert');

  it('should convert by dictionary', function () {
    var obj = { key: 'value' };
    var clone = alias(obj, { key: 'kee' });
    assert('value' == clone.kee);
    assert(!clone.key);
  });

  it('should not add undefined aliases', function () {
    var obj = { a: 'value' };
    var clone = alias(obj, { b: 'c' });
    var l = 0;
    for (var key in clone) l++;
    assert(1 == l);
  });

  it('should convert by function', function () {
    var obj = { key: 'value' };
    var clone = alias(obj, function (key) { return 'kee'; });
    assert('value' == clone.kee);
    assert(!clone.key);
  });

});
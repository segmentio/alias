describe('alias', function () {

  var alias = require('alias');
  var assert = require('assert');

  it('should convert by dictionary', function () {
    var obj = { key: 'value' };
    alias(obj, { key: 'kee' });
    assert('value' == obj.kee);
    assert(!obj.key);
  });

  it('should not add undefined aliases', function () {
    var obj = { a: 'value' };
    alias(obj, { b: 'c' });
    var l = 0;
    for (var key in obj) l++;
    assert(1 == l);
  });

  it('should convert by function', function () {
    var obj = { key: 'value' };
    alias(obj, function (key) { return 'kee'; });
    assert('value' == obj.kee);
    assert(!obj.key);
  });

});
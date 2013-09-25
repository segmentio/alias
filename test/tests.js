describe('alias', function () {

var assert = require('assert')
  , alias = require('alias');

it('should convert by dictionary', function () {
  var obj = { key: 'value' };
  alias(obj, { key: 'kee' });
  assert(obj.kee == 'value');
  assert(!obj.key);
});

it('should convert by function', function () {
  var obj = { key: 'value' };
  alias(obj, function (key) { return 'kee'; });
  assert(obj.kee == 'value');
  assert(!obj.key);
});

});
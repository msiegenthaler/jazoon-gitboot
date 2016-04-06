import { niceNumber } from 'gitboot/helpers/nice-number';
import { module, test } from 'qunit';

module('Unit | Helper | nice number');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.equal(niceNumber(), "");
  assert.equal(niceNumber([42]), "42");
  assert.equal(niceNumber([1424]), "1.4K");
});

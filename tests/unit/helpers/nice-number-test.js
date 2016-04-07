import { niceNumber } from 'gitboot/helpers/nice-number';
import { module, test } from 'qunit';

module('Unit | Helper | nice number');

// Replace this with your real tests.
test('it returns 1 for 1', function(assert) {
  let result = niceNumber([1]);
  assert.equal(result, "1");
});
test('it returns 14 for 14', function(assert) {
  let result = niceNumber([14]);
  assert.equal(result, "14");
});
test('it returns 999 for 999', function(assert) {
  let result = niceNumber([999]);
  assert.equal(result, "999");
});
test('it returns 1K for 1005', function(assert) {
  let result = niceNumber([1005]);
  assert.equal(result, "1K");
});
test('it returns 2K for 1905', function(assert) {
  let result = niceNumber([1905]);
  assert.equal(result, "1.9K");
});
test('it returns 42K for 42034', function(assert) {
  let result = niceNumber([42034]);
  assert.equal(result, "42K");
});
test('it returns 42.1K for 42134', function(assert) {
  let result = niceNumber([42134]);
  assert.equal(result, "42.1K");
});

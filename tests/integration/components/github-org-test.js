import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-org', 'Integration | Component | github org', {
  integration: true
});

test('it renders the name and the star icon', function(assert) {
  this.set('repo', {id: 1, name: 'Test'});
  this.render(hbs`{{github-org repo=repo}}`);

  assert.equal(this.$('.material-icons').text().trim(), 'star_border');
  assert.equal(this.$('a').text().trim(), 'Test');
});

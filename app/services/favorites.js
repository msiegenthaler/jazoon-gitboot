import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  isFavorite(repoId) {
    return this.get('items').contains(repoId);
  },

  toggle(repoId) {
    const items = this.get('items');
    if (items.contains(repoId)) {
      items.popObject(repoId);
    } else {
      items.pushObject(repoId);
    }
  }
});

import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  toggle(repoId) {
    const items = this.get('items');
    if (items.contains(repoId)) {
      items.popObject(repoId);
    } else {
      items.pushObject(repoId);
    }
    console.log("Favorites: " + items.join(", "));
  }
});

import Ember from 'ember';

export default Ember.Service.extend({
  items: null,

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  toggle(repoId) {
    if (this.get('items').contains(repoId)) {
      this.get('items').pop(repoId);
      console.log("Removing "+repoId);
    } else {
      this.get('items').push(repoId);
      console.log("Adding "+repoId);
    }
    console.log("Favorites: "+this.get('items'));
  }
});

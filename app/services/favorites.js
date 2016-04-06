import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.set('items', []);
  },
  toggleFavoriteRepo(repo) {
    const items = this.get('items');
    if (items.contains(repo.id)) {
      items.removeObject(repo.id);
    } else {
      items.addObject(repo.id);
    }
    console.log(items.join(', '));
  }
});

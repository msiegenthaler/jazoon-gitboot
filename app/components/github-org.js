import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  isFavorited: Ember.computed('repo', 'favorites.items.[]', function(){
    const id = this.get('repo').id;
    return this.get('favorites').isFavorite(id);
  }),

  actions: {
    favorite(id) {
      this.get('favorites').toggle(id);
    }
  }
});

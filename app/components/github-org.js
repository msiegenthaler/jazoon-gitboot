import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    favorite(id) {
      this.get('favorites').toggle(id);
    }
  }
});

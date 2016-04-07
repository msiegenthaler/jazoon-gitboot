import Ember from 'ember';

export default Ember.Controller.extend({
  favorites: Ember.inject.service(),

  actions: {
    favorite(id) {
      this.get('favorites').toggle(id);
    }
  }
});

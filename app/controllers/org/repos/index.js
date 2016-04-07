import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    favorite(id) {
      console.log("I like "+id);
    }
  }
});

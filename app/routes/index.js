import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'Ember.js'
    }, {
      id: 'Netflix'
    }, {
      id: 'Facebook'
    }];
  }
});

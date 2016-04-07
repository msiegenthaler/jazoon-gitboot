import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {id: 'emberjs'};
  },

  setupController: function(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});

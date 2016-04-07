import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('repository', params.repo);
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('org');
    return org.get('repositories');
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});

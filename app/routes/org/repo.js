import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({

  setupController(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});

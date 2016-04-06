import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('org');
    return fetch(`https://emberconf-state-api.herokuapp.com/api/organizations/${org.id}/repositories`).then((raw) => {
      return raw.json().then((data) => {
        return data.data.map((r) =>{
          return Ember.merge({id: r.id}, r.attributes);
        });
      });
    });
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});

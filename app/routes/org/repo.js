import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const org = this.modelFor('org').id;
    return fetch(`https://emberconf-state-api.herokuapp.com/api/organizations/${org}/repositories/${params.repo}`)
      .then(d => d.json())
      .then(json => {
        return {
          id: json.data.id,
          name: json.data.attributes.name
        };
      });
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});

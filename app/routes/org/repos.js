import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const org = this.modelFor('org').id;
    return fetch(`https://emberconf-state-api.herokuapp.com/api/organizations/${org}/repositories`)
      .then(d => d.json())
      .then(json => {
        return json.data.map(item => {
          return {
            id: item.id,
            name: item.attributes.name
          };
        });
      });
  }
});

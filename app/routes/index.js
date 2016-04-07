import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    return fetch('https://emberconf-state-api.herokuapp.com/api/organizations')
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

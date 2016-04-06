import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    return fetch('https://emberconf-state-api.herokuapp.com/api/organizations').then((data) => {
      return data.json().then((x) => {
        return x.data.map((i) => {
          return Ember.merge({id: i.id}, i.attributes);
        });
      });
    });
  }
});

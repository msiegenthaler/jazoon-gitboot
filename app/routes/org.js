import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model(params) {
    return fetch(`https://emberconf-state-api.herokuapp.com/api/organizations/${params.id}`).then((raw) =>{
      return raw.json().then((data) => {
        return Ember.merge({id: data.data.id}, data.data.attributes);
      });
    });
  }
});

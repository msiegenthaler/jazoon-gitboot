import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    return fetch(`https://emberconf-state-api.herokuapp.com/api/organizations/${params.id}`)
      .then(d => d.json())
      .then(json => {
        return {
          id: json.data.id,
          name: json.data.attributes.name
        };
      });
  }
});

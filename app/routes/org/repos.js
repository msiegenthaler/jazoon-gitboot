import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
      id: 'emberjs'
    }, {
      id: 'data'
    }, {
      id: 'emberjs.github.io'
    }];
  }
});

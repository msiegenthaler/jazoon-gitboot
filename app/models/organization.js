import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  repositories: DS.hasMany('repository')
});

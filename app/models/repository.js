import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  homepage: DS.attr(),
  'stargazers-count': DS.attr(),
  organization: DS.belongsTo('organization')
});

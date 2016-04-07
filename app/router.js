import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('org', {path: "org/:id"}, function() {
    this.route('repos', function() {});
    this.route('repo', {path: "repo/:repo"}, function() {});
    this.route('no-repo');
  });
  this.route('loading');
  this.route('error');
});

export default Router;

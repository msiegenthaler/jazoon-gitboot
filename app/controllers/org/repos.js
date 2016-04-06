import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  favorites: inject.service(),
  actions: {
    repoFavorited(repo) {
      this.get('favorites').toggleFavoriteRepo(repo);
    }
  }
});

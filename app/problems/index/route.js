import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('problem');
  },
  actions: {
    delete: function(problem) {
      problem.destroyRecord();
      return false;
    }
  }
});

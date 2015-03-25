import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('quizSession');
  },
  actions: {
    delete: function(quizSession) {
      quizSession.destroyRecord();
      return false;
    }
  }
});

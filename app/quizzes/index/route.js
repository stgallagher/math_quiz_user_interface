import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('quiz');
  },
  actions: {
    delete: function(quiz) {
      quiz.destroyRecord();
      return false;
    }
  }
});

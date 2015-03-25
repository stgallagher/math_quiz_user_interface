import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      return this.store.createRecord('quiz');
    },
    deactivate: function() {
      var model = this.modelFor('quizzes/new');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
});

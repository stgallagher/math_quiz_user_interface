import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      return this.store.createRecord('quizSession');
    },
    deactivate: function() {
      var model = this.modelFor('quizSessions/new');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
});

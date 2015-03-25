import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      return this.store.createRecord('teacher');
    },
    deactivate: function() {
      var model = this.modelFor('teachers/new');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
});

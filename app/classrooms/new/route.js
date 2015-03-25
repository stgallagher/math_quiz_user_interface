import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      return this.store.createRecord('classroom');
    },
    deactivate: function() {
      var model = this.modelFor('classrooms/new');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
});

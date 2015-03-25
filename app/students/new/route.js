import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('student');
  },
  deactivate: function() {
    var model = this.modelFor('students/new');

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }
});

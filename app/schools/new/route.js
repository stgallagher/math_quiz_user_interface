import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      return this.store.createRecord('school');
    },
    deactivate: function() {
      var model = this.modelFor('schools/new');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
});

import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      return this.store.createRecord('problem');
    },
    deactivate: function() {
      var model = this.modelFor('problems/new');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('teacher');
  },
  actions: {
    delete: function(teacher) {
      teacher.destroyRecord();
      return false;
    }
  }
});

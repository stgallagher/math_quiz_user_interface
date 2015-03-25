import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log("save called on classrooms.edit.controller");
      var _this = this;

      this.get('model').save().then(function(classroom) {
        _this.transitionToRoute('classrooms.show', classroom);
      },
      function () {
          console.log("Classroom edit failed.");
      });

      return false;
    },
    cancel: function() {
      this.transitionTo('classrooms');
      return false;
    }
  }
});

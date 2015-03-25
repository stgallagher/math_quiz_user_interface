import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log("save called on students.edit.controller");
      var _this = this;

      this.get('model').save().then(function(teacher) {
        _this.transitionToRoute('students.show', teacher);
      },
      function () {
          console.log("Student edit failed.");
      });

      return false;
    },
    cancel: function() {
      this.transitionTo('students');
      return false;
    }
  }
});

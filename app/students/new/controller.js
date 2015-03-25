import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log("save called on student.new.controller");
      var _this = this;

      this.get('model').save().then(function(student) {
        _this.transitionToRoute('students.show', student);
      },
      function () {
          console.log("Student save failed.");
      });

      return false;
    },
    cancel: function() {
      this.transitionToRoute('students');

      return false;
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log("save called on classroom.new.controller");
      var _this = this;

      this.get('model').save().then(function(classroom) {
        _this.transitionToRoute('classrooms.show', classroom);
      },
      function () {
          console.log("classroom save failed.");
      });

      return false;
    },
    cancel: function() {
      this.transitionToRoute('classrooms');

      return false;
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log("save called on teacher.new.controller");
      var _this = this;

      this.get('model').save().then(function(teacher) {
        _this.transitiontoroute('teachers.show', teacher);
      },
      function () {
          console.log("teacher save failed.");
      });

      return false;
    },
    cancel: function() {
      this.transitiontoroute('teachers');

      return false;
    }
  }
});

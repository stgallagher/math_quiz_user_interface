import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log("save called on school.new.controller");
      var _this = this;

      this.get('model').save().then(function(school) {
        _this.transitiontoroute('schools.show', school);
      },
      function () {
          console.log("school save failed.");
      });

      return false;
    },
    cancel: function() {
      this.transitiontoroute('schools');

      return false;
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log("save called on problem.edit.controller");
      var _this = this;

      this.get('model').save().then(function(problem) {
        _this.transitionToRoute('problems.show', problem);
      },
      function () {
          console.log("problem edit failed.");
      });

      return false;
    },
    cancel: function() {
      this.transitionTo('problems');
      return false;
    }
  }
});

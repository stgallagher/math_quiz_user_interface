import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      save: function() {
        console.log("save called on school.edit.controller");
        var _this = this;

        this.get('model').save().then(function(school) {
          _this.transitionToRoute('schools.show', school);
        },
        function () {
            console.log("school edit failed.");
        });

        return false;
      },
      cancel: function() {
        this.transitionTo('schools');
        return false;
      }
  }
});

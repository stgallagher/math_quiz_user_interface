import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log("save called on quiz.edit.controller");
      var _this = this;

      this.get('model').save().then(function(quiz) {
        _this.transitionToRoute('quizzes.show', quiz);
      },
      function () {
          console.log("quiz edit failed.");
      });

      return false;
    },
    cancel: function() {
      this.transitionTo('quizzes');
      return false;
    }
  }
});

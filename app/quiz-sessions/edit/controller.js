import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log("save called on quizSession.edit.controller");
      var _this = this;

      this.get('model').save().then(function(quizSession) {
        _this.transitionToRoute('quizSessions.show', quizSession);
      },
      function () {
          console.log("quizSession edit failed.");
      });

      return false;
    },
    cancel: function() {
      this.transitionTo('quizSessions');
      return false;
    }
  }
});

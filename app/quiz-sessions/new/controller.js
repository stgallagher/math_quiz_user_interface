import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log("save called on quizSession.new.controller");
      var _this = this;

      this.get('model').save().then(function(quizSession) {
        _this.transitionToRoute('quizSessions.show', quizSession);
      },
      function () {
          console.log("quizSession save failed.");
      });

      return false;
    },
    cancel: function() {
      this.transitionToRoute('quizSessions');

      return false;
    }
  }
});

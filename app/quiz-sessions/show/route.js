import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('quizSession', params.quiz_session_id);
  }
});

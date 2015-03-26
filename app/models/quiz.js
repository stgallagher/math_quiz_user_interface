import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  level: DS.attr('string'),
  operator: DS.attr('string'),
  maxTime: DS.attr(),
  problems: DS.hasMany('problem', { async: true }),
  quizSessions: DS.hasMany('quiz_sessions', { async: true }),
  operation: Ember.computed('operator', function() {
    switch (this.get('operator')) {
      case '+':
        return 'addition';
      case '-':
        return 'subtraction';
      case '*':
        return 'multiplication';
      case '/':
        return 'division';
      default:
        return 'ERROR';
    }
  })
});

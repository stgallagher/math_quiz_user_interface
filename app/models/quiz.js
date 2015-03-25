import DS from 'ember-data';

export default DS.Model.extend({
  level: DS.attr('string'),
  operator: DS.attr('string'),
  maxTime: DS.attr(),
  problems: DS.hasMany('problem', { async: true }),
  quizSessions: DS.hasMany('quiz_sessions', { async: true })
});

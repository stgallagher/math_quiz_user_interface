import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  gender: DS.attr('string'),
  grade: DS.attr('string'),
  classroom: DS.belongsTo('classroom', {async: true }),
  quizSessions: DS.hasMany('quizSessions', {async: true }),
  quizzes: DS.hasMany('quiz', {async: true }),

  fullName: Ember.computed('firstName', 'lastName', function(){
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});

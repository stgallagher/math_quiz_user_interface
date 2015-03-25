import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  date: DS.attr('date'),
  timeTaken: DS.attr(),
  correct: DS.attr(),
  wrong: DS.attr(),
  unanswered: DS.attr(),
  score: DS.attr(),
  student: DS.belongsTo('student', { async: true }),
  quiz: DS.belongsTo('quiz', { async: true }),

  formattedDate: Ember.computed('date', function(){
    return moment(this.get('date')).format('MMMM Do YYYY');
  })
});

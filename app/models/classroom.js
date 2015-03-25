import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  teacher: DS.belongsTo('teacher', {async: true}),
  school: DS.belongsTo('school', {async: true}),
  students: DS.hasMany('student', {async: true})
});

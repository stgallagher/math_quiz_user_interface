import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  classrooms: DS.hasMany('classroom', { async: true }),
  students: DS.hasMany('students', { async: true })
});

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('students', function() {
    this.route('new');
    this.route('show', { path: ':student_id' });
    this.route('edit', { path: ':student_id/edit'});
  });

  this.resource('teachers', function() {
    this.route('new');
    this.route('show', { path: ':teacher_id' });
    this.route('edit', { path: ':teacher_id/edit' });
  });

  this.resource('classrooms', function() {
    this.route('new');
    this.route('show', { path: ':classroom_id'});
    this.route('edit', { path: ':classroom_id/edit'});
  });

  this.resource('problems', function() {
    this.route('new');
    this.route('show', { path: ':problem_id'});
    this.route('edit', { path: ':problem_id/edit' });
  });
  this.resource('quizSessions', function() {
    this.route('new');
    this.route('show', { path: ':quiz_session_id'});
    this.route('edit', { path: ':quiz_session_id/edit'});
  });
  this.resource('quizzes', function() {
    this.route('new');
    this.route('show', { path: ':quiz_id'});
    this.route('edit', { path: ':quiz_id/edit'});
  });
  this.resource('schools', function() {
    this.route('new');
    this.route('show', { path: ':school_id'});
    this.route('edit', { path: ':school_id/edit'});
  });
});

export default Router;

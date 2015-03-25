import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    classroom: { embedded: 'always'},
    students: { embedded: 'always'}
  }
});

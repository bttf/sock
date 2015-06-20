import Ember from 'ember';

export default Ember.Controller.extend({
  bmIsSaving: false,
  actions: {
    saveBm: function(bookmark) {
      var self = this;
      self.set('bmIsSaving', true);
      bookmark.save().then(function() {
        bookmark.reload();
        self.send('flushBm');
        self.set('bmIsSaving', false);
      });
    },
    deleteBm: function(bookmark) {
      bookmark.destroyRecord();
    },
    flushBm: function() {
      this.set('newBookmark', this.store.createRecord('bookmark'));
    }
  }
});

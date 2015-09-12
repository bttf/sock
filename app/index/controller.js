import Ember from 'ember';

export default Ember.Controller.extend({
  bmIsSaving: false,

  actions: {
    saveBm: function(bookmark) {
      var self = this;
      self.store.find('user', self.get('session.secure.id')).then(function (user) {
        self.set('bmIsSaving', true);
        bookmark.set('user', user);
        bookmark.save().then(function (bookmark) {
          self.send('flushBm');
          self.set('bmIsSaving', false);
          self.get('bookmarks').unshiftObject(bookmark);
        });
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

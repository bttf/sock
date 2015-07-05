import Ember from 'ember';

export default Ember.Controller.extend({
  bmIsSaving: false,

  actions: {
    saveBm: function(bookmark) {
      var self = this;
      self.store.find('user', self.get('session.secure.id')).then(function (user) {
        bookmark.set('user', user);
        console.log('test', user.get('bookmarks.length'));
        self.set('bmIsSaving', true);
        bookmark.save().then(function() {
          user.save();
          bookmark.reload();
          self.send('flushBm');
          self.set('bmIsSaving', false);
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

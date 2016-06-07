import Ember from 'ember';
import ENV from 'sock/config/environment';

var $ = Ember.$;

export default Ember.Controller.extend({
  bmIsSaving: false,
  doingASearch: false,

  actions: {
    saveBm: function(bookmark) {
      var self = this;
      self.store.find('user', self.get('session.secure.id')).then(function(user) {
        self.set('bmIsSaving', true);
        bookmark.set('user', user);
        bookmark.save().then(function (bookmark) {
          self.send('flushBm');
          self.set('bmIsSaving', false);
          self.get('bookmarks').unshiftObject(bookmark);
        });
      });
    },

    search: function(term) {
      this.set('bookmarks', this.get('allBookmarks').filter(bookmark => {
        const search = term.toLowerCase();
        const title = bookmark.getWithDefault('title', '').toLowerCase();
        const url   = bookmark.getWithDefault('url', '').toLowerCase();
        return title.indexOf(search) > -1 || url.indexOf(search) > -1;
      }));
    },

    resetBms() {
      this.set('bookmarks', this.get('allBookmarks'));
    },

    deleteBm: function(bookmark) {
      bookmark.destroyRecord();
    },

    flushBm: function() {
      this.set('newBookmark', this.store.createRecord('bookmark'));
    }
  }
});

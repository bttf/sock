import Ember from 'ember';

export default Ember.Controller.extend({
  bmIsFetched: false,

  actions: {
    sendUrl: function(url) {
      this.set('url', url);
    },
    saveBm: function(bookmark) {
      bookmark.save();
      if (this.get('bmIsFetched')) {
        this.send('flushBm');
      }
    },
    saveBmIfSaved: function(bookmark) {
      this.set('bmIsFetched', true);
      if (bookmark.get('dirtyType') === 'updated') {
        bookmark.save();
        this.send('flushBm');
      }
    },
    deleteBm: function(bookmark) {
      bookmark.destroyRecord();
    },
    flushBm: function() {
      this.toggleProperty('bmIsFetched');
      this.set('newBookmark', this.store.createRecord('bookmark'));
    }
  }
});

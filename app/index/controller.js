import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendUrl: function(url) {
      this.set('url', url);
    },
    saveBm: function(bookmark) {
      bookmark.save();
    },
    saveBmIfSaved: function(bookmark) {
      if (bookmark.get('dirtyType') === 'updated') {
        bookmark.save();
      }
    }
  }
});

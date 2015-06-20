import Ember from 'ember';

var $ = Ember.$;

export default Ember.Component.extend({
  fixBrokenFavicon: Ember.on('didInsertElement', function() {
    var id = '#' + this.get('elementId');
    $(id + ' img').error(function() {
      $(this).attr('src', '/sock.ico');
    });
  }),

  actions: {
    delete: function(bookmark) {
      this.sendAction('delete', bookmark);
    }
  }
});

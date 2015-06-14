import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['main-input'],
  lookupTimeouts: [],
  keyUp: function(e) {
    console.log("test", e.keyCode);
    var self = this;
    var arr = this.get('lookupTimeouts');
    var input = this.get('bm.url');
    var lookupFn = function() {
      if (isUrl(input)) {
        self.sendAction('sendUrl', input);
      }
    };

    if (e.keyCode === 13) {
      console.log('test?');
      this.sendAction('saveBm', this.get('bm'));
    }

    for (var i = 0; i < arr.length; i++) {
      window.clearTimeout(arr.pop());
    }

    var timeoutId = window.setTimeout(lookupFn, 1000);
    arr.push(timeoutId);
  }
});

function isUrl(url) {
  if (url.indexOf('http') === 0) {
    return true;
  }
  return false;
}

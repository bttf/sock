import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['main-input'],
  lookupTimeouts: [],

  keyUp: function(e) {
    if (e.keyCode === 13 && isUrl(this.get('bm.url'))) {
      this.sendAction('saveBm', this.get('bm'));
    }
  }
});

function isUrl(url) {
  if (url.indexOf('http') === 0) {
    return true;
  }
  return false;
}

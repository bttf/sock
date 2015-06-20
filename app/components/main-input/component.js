import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['main-input'],
  lookupTimeouts: [],

  keyUp: function(e) {
    if (e.keyCode === 13) {
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

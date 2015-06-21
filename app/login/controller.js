import Ember from 'ember';

export default Ember.Controller.extend({
  passwordMismatch: false,

  actions: {
    signUp: function(email, password, confirm) {
      if (password === confirm) {
        this.set('passwordMismatch', false);
        this.sendAction('createUserRequest', email, password);
      } else {
        this.set('passwordMismatch', true);
      }
    },

    createUserRequest: function(email, password) {
      // send ajax
      // on success, redirect to profile page?
      // on failure, report failure
    }
  }
});

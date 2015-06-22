import Ember from 'ember';
import ENV from 'sock/config/environment';

export default Ember.Controller.extend({
  passwordMismatch: false,

  actions: {
    signUp: function(email, password, confirm) {
      if (password === confirm) {
        this.set('passwordMismatch', false);
        this.send('createUserRequest', email, password);
      } else {
        this.set('passwordMismatch', true);
      }
    },

    createUserRequest: function(email, password) {
      var self = this;
      $.ajax({
        url: ENV.footAPI + '/users',
        type: 'POST',
        data: {
          email: email,
          password: password
        }
      }).done(function (data) {
        console.log('recevied data', data);
        self.get('session').authenticate('authenticator:foot', {
          email: email,
          password: password
        }).then(function() {
          console.log('transitioning?');
          this.transitionToRoute('account');
        }, function(err) {
          console.log('ERROR transitioning?', err);
          this.transitionToRoute('error', err);
        });
      }).fail(function (err) {
        console.error('error w/ users ajax call', err);
      });
    }
  }
});

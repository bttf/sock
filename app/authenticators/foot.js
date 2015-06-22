import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ENV from 'sock/config/environment';

var $ = Ember.$;

export default Base.extend({
  restore(data) {
    return Ember.RSVP.reject();
  },

  authenticate(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      $.ajax({
        url: ENV.footAPI + '/auth',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          email: options.email,
          password: options.password
        })
      }).done(function(response) {
        resolve({ token: response.token });
      }).fail(function(xhr, status, err) {
        reject(err);
      });
    });
  },

  invalidate(data) {
    return Ember.RSVP.resolve();
  }
});

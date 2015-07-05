import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var self = this;
    return Ember.RSVP.hash({
      newBookmark: this.store.createRecord('bookmark'),
      bookmarks: this.store.find('user', this.get('session.secure.id')).then(function (user) {
        return user.get('bookmarks');
      })
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  }
});

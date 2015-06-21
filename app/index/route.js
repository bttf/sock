import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      bookmarks: this.store.find('bookmark'),
      newBookmark: this.store.createRecord('bookmark')
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  }
});

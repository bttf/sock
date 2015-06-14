import Ember from 'ember';

export default Ember.Route.extend({
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

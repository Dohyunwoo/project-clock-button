import Ember from 'ember';
fjkdsjdkl
export default Ember.Route.extend({
  model(){
    return new Date();
  },
  actions: {
    clickRefresh() {
      this.refresh();
    }
  },
  setupController(controller, model) {
    this._super(controller, model);
  }
});

var TwitterCloneApp = TwitterCloneApp || {};

TwitterCloneApp.Status = Backbone.Model.extend({
   urlRoot: '/statuses',

   defaults: {
    username: 'boch',
    content: 'how good'
   }
});
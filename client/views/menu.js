Template.menu.helpers({
    isActive: function(url) {
        if (Router.current().url == url) return ['active'];

        return [''];
    },

    getClickCount: function() {
        return Session.get('clickCount');
    }
});

Template.menu.events({
    'click ul.nav li a': function() {
         // aren't there a way to put it in Router hooks ? actually i don't succeed coz data are removed when they come from server. Tried on waitOn, onReRun...
         if (Meteor.isClient) {
           Characters.find().forEach(function(item) {
             Characters.remove(item._id);
           });
         }
      
        var count = Session.get('clickCount');
        count++;
        Session.set('clickCount', count);
    }
});
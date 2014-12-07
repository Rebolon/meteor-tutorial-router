Meteor.publish('router-citations', function() {
    return Citations.find();
});

Meteor.publish('router-citations-for-waiton', function() {
    return Citations.find();
});
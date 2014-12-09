// Collection
Citations = new Mongo.Collection('mly-citations');
if (Meteor.isClient) {
  Characters = new Meteor.Collection("mly-marvel-characters");
}

if (Meteor.isServer) {
  Characters = new Meteor.Collection("mly-marvel-characters", {connection: null});
  // to allow insert/remove/update methods on client using an in-memory Collection
  // @thanks to http://stackoverflow.com/questions/22378761/meteor-collections-what-the-different-between-new-collectionnull-and-new-col
  Characters._connection = Meteor.server;
  Characters._defineMutationMethods();
  Characters._connection = null;
}


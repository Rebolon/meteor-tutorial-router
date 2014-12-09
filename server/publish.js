Meteor.publish('router-citations', function() {
    return Citations.find();
});

Meteor.publish('router-citations-for-waiton', function() {
    console.log('publish', arguments);
  
    var MarvelAPI = function (settings) {
      // check
      if (!_.isObject(settings)
          || !(_.has(settings, 'public_key')
              && _.has(settings, 'private_key'))) {

        throw new Meteor.Error(420, 'Bad argument');
      }
      
      // 
      var dateCall,
          public = settings.public_key,
          private = settings.private_key;

      return {
        setTimestamp: function(renew) {
          if (!dateCall 
             || renew === true) {
            dateCall = (new Date());
          }
          
          return this;
        },
        
        getHash: function() {
          this.setTimestamp();

          var hash = CryptoJS.MD5(this.getTimestamp() + private + public).toString();

          return hash;
        },
        
        getTimestamp: function() {
          this.setTimestamp();
          
          return dateCall.getTime();
        },
        
        getPublicKey: function() {
          return public;
        }
      }
    },
        marvel = new MarvelAPI(Meteor.settings[Meteor.settings.environment].marvel);
  
  // sync call
  var timestamp = marvel.getTimestamp(),
      apiKey = marvel.getPublicKey(),
      hash = marvel.getHash(),
      url = "http://gateway.marvel.com:80/v1/public/characters?ts=" + timestamp + "&apikey=" +  apiKey + "&hash=" + hash,
      resHttp;

  resHttp = HTTP.get(url);

  _.each(resHttp.data.data.results, function(item) {
      Characters.insert(item);
  });

  return Characters.find();
});
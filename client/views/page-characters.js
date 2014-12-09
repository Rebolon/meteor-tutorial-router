Template.marvel_characters.helpers({
    getCharacters: function() {
        var chars = Characters.find({});
        console.log('getCharacters', chars.count());
        return chars;
    },
  
  getThumb: function(format) {
    console.log('getThumb', arguments);
    var availableFormat = ["portrait_small", "portrait_medium", "portrait_xlarge", "portrait_fantastic", "portrait_uncanny", "portrait_incredible"],
        defaultFormat = _.first(availableFormat),
        selectedFormat = _.contains(availableFormat, format) ? format : defaultFormat,
        imgSrc;
    
    // @TODO finish it iqwth a real blank image
    if (typeof this.thumbnail.path == undefined) {
      return "blank.jpg";
    }
    
    imgSrc = this.thumbnail.path + "/" + selectedFormat +  "." + this.thumbnail.extension;
    
    return imgSrc;
  }
});
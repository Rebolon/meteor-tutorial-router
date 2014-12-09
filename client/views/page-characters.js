Template.marvel_characters.helpers({
    getCharacters: function() {
        var chars = Characters.find({});
        console.log('getCharacters', chars.count());
        return chars;
    },
  
  getThumb: function(format) {
    var availableFormat = ["portrait_small", "portrait_medium", "portrait_xlarge", "portrait_fantastic", "portrait_uncanny", "portrait_incredible"],
        defaultFormat = _.first(availableFormat),
        selectedFormat = _.contains(availableFormat, format) ? format : defaultFormat,
        imgSrc = this.thumbnail.path + "/" + ($format?$format:defaultFormat) +  "." + this.thumbnail.extension;
    
    return imgSrc;
  }
});
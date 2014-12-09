Meteor.methods({
    "addCites": function(cites) {
        var citesList = [];
        if (!_.isArray(cites)) {
            citesList.push(cites);
        } else {
            citesList = cites;
        }

        _.each(cites, function(item) {
            if (!_.isObject(item)) throw new Meteor.Error(420, 'Bad argument');

            var cleanItem = _.pick(item, "cite", "author");

            if (cleanItem.cite
                && !Citations.findOne({cite: cleanItem.cite})) {
                Citations.insert(cleanItem);
            }
        });
    }
});
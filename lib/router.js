// Router
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('Home');
});

Router.route('/one', function () {
    this.render('page_1');
});

Router.route('/two', function () {
    this.render('page_2');
});

Router.route('/subs', {
    subscriptions: function() {
        console.info('subscriptions');
        return Meteor.subscribe('router-citations', Session.get('clickCount'), function() {console.warn('data loaded')});
    },
    // why onRun is never called, or only sometimes ?
    onRun: function () {
        console.info('onRun');
        this.next();
    },
    onRerun: function () {
        console.info('onRerun');
    },
    onBeforeAction: function () {
        console.info('onBeforeAction');
        this.next();
    },
    onAfterAction: function () {
        console.info('onAfterAction');
    },
    onStop: function () {
        console.info('onStop');
    },
    data: function() {
        console.info('data');
        return Citations.find();
    },
    action: function() {
        console.info('action');
        this.render('subs');
        this.render('cites_footer', {to: 'footer'});
    }
});

Router.route('/waiton', {
     waitOn: function() {
         console.info('waitOn');
         // remove previous data before receive new ones
         // @TODO only when if i don't change pagination
         if (Meteor.isClient) {
           Characters.find().forEach(function(item) {
             Characters.remove(item._id);
           });
         }
         return Meteor.subscribe('router-citations-for-waiton', Session.get('clickCount'), function() {console.warn('data loaded')});
     },
    onRun: function () {
        console.info('onRun');
        this.next();
    },
    onRerun: function () {
        console.info('onRerun');
	      this.next();
    },
    onBeforeAction: function () {
        console.info('onBeforeAction');
        this.next();
    },
    onAfterAction: function () {
        console.info('onAfterAction');
    },
    onStop: function () {
        console.info('onStop');
    },
    data: function() {
        console.info('data');
        return Characters.find();
    },
    action: function() {
        console.info('action');
        this.render('waiton');
        this.render('marvel_footer', {to: 'footer'});
    }
});

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
         console.info('waitOn', Characters.find().count());
         return Meteor.subscribe('router-citations-for-waiton', Session.get('clickCount'), function() {console.warn('data loaded',  Characters.find().count())});
     },
    onRun: function () {
        console.info('onRun', Characters.find().count());
        this.next();
    },
    onRerun: function () {
        console.info('onRerun', Characters.find().count());
	      this.next();
    },
    onBeforeAction: function () {
        console.info('onBeforeAction', Characters.find().count());
        this.next();
    },
    onAfterAction: function () {
        console.info('onAfterAction', Characters.find().count());
    },
    onStop: function () {
        console.info('onStop', Characters.find().count());
    },
    data: function() {
        console.info('data', Characters.find().count());
        return Characters.find();
    },
    action: function() {
        console.info('action', Characters.find().count());
        this.render('waiton');
        this.render('marvel_footer', {to: 'footer'});
    }
});

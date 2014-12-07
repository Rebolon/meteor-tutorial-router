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
    }
});

// ARGH IT FAILED AND I DON'T UNDERSTAND WHY :
Router.route('/waiton', {
     waitOn: function() {
         console.info('waitOn');
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
        return Citations.findOne();
    }
});

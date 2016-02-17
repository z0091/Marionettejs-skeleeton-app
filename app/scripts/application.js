define(function (require) {
    'use strict';

    var Marionette = require('marionette');
    var Communicator = require('communicator');
    var Welcome_tmpl = require('hbs!tmpl/welcome');

    var App = new Marionette.Application();

    /* Add application regions here */
    App.addRegions({});

    /* Add initializers here */
    App.addInitializer(function () {
        document.body.innerHTML = Welcome_tmpl({success: "CONGRATS!"});
        Communicator.mediator.trigger("APP:START");
    });

    return App;
});

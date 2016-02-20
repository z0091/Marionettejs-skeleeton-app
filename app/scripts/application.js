define(function (require) {
    'use strict';

    var _ = require('underscore');
    var Marionette = require('marionette');
    var Backbone = require('backbone');
    var Welcome_tmpl = require('hbs!tmpl/welcome');

    var App = new Marionette.Application();

    /* Add application regions here */
    App.addRegions({
        rgWrapper: ".rgWrapper"
    });

    /* Test model */
    var TestModel = Backbone.Model.extend({
        urlRoot: '/api/user',

        defaults: {
            name: 'Test_user_name'
        }
    });

    /* Test view */
    var TestView = Marionette.ItemView.extend({
        template: Welcome_tmpl,

        ui: {
            button: '.save_btn'
        },

        events: {
            'click @ui.button': function() {
                this.model.fetch();
            }
        },

        modelEvents: {
            'change': 'render'
        }
    });

    /* Add initializers here */
    App.addInitializer(function () {
    });

    App.on("start", function () {
        var view = new TestView({
            model: new TestModel()
        });

        App.getRegion('rgWrapper').show(view);
    });

    return App;
});

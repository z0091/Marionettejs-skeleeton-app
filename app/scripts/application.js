define(function (require) {
    'use strict';

    var _ = require('underscore');
    var Marionette = require('marionette');
    var Backbone = require('backbone');

    var usersListTpl = require('hbs!tmpl/users_list');
    var usersListItemTpl = require('hbs!tmpl/users_item');

    var App = new Marionette.Application();

    /* Add application regions here */
    App.addRegions({
        rgWrapper: ".rgWrapper"
    });

    /* Test model */
    var Users = Backbone.Collection.extend({
        url: '/api/users'
    });

    var RowView = Marionette.ItemView.extend({
        tagName: "tr",
        template: usersListItemTpl
    });

    /* Test view */
    var UsersList = Marionette.CompositeView.extend({
        template: usersListTpl,
        childViewContainer: "table",

        collection: new Users(),
        childView: RowView,

        ui: {
            input_field: "input",
            button: ".save_btn"
        },

        events: {
            'click @ui.button': function(event) {
                event.preventDefault();

                var name = this.ui.input_field.val();

                if (name) {
                    this.collection
                        .add({"name": name})
                        .save();
                }
            }
        }
    });

    /* Add initializers here */
    App.addInitializer(function () {
    });

    App.on("start", function () {
        var view = new UsersList();

        view.collection.fetch();

        App.getRegion('rgWrapper').show(view);
    });

    return App;
});

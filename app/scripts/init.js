require.config({
    baseUrl: "/scripts",
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'underscore': '../bower_components/underscore/underscore-min',
        'backbone': '../bower_components/backbone/backbone',
        'backbone-validation': '../bower_components/backbone.validation/dist/backbone-validation-amd-min',
        'backbone-nested-model': '../bower_components/backbone-nested-model/backbone-nested',
        'backbone.paginator': '../bower_components/backbone.paginator/lib/backbone.paginator.min',
        'backbone.stickit': '../bower_components/backbone.stickit/backbone.stickit',
        'backbone.radio': '../bower_components/backbone.radio/build/backbone.radio',
        'marionette': '../bower_components/backbone.marionette/lib/backbone.marionette',
        'modernizr': 'lib/modernizr',
        'hbs': '../bower_components/require-handlebars-plugin/hbs',
        'text': '../bower_components/require-handlebars-plugin/hbs',
        'bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
        'tmpl': '../templates',
        'radio.shim': 'lib/radio.shim'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        }
    },
    hbs: {
        disableI18n: true,
        helperDirectory: '../template/helpers/',
        i18nDirectory: 'i18n',
        templateExtension: "hbs",
        disableHelpers: false
    },
    deps: [
        'main',
        'jquery',
        'underscore',
        'marionette',
        'backbone-validation',
        'backbone-nested-model',
        'backbone.paginator',
        'backbone.stickit'
    ]
});

require.config({
    baseUrl: "../app/scripts",
    urlArgs: 'cb=' + Math.random(),

    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'underscore': '../bower_components/underscore/underscore-min',
        'backbone': '../bower_components/backbone/backbone',
        'backbone-validation': '../bower_components/backbone.validation/dist/backbone-validation-amd-min',
        'backbone-nested-model': '../bower_components/backbone-nested-model/backbone-nested',
        'backbone.paginator': '../bower_components/backbone.paginator/lib/backbone.paginator.min',
        'backbone.stickit': '../bower_components/backbone.stickit/backbone.stickit',
        'marionette': '../bower_components/backbone.marionette/lib/backbone.marionette',
        'modernizr': '../bower_components/modernizr/modernizr',
        'hbs': '../bower_components/require-handlebars-plugin/hbs',
        'bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
        'tmpl': '../templates',

        spec: '../../test/spec', // lives in the test directory
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
        disableI18n: true
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

/* require test suite */
require([
        'jquery',
        'spec/testSuite'
    ],
    function( $, testSuite ) {

        'use strict';

        /* on dom ready require all specs and run */
        $( function() {
            require(testSuite.specs, function() {

                if (window.mochaPhantomJS) {
                    mochaPhantomJS.run();
                }
                else {
                    mocha.run();
                }

            });
        });
    });

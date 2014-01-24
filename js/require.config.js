// Configure the AMD module loader
requirejs.config({
    // The path where your JavaScripts are located
    baseUrl: './js/',
    // Specify the paths of vendor libraries
    paths: {
        jquery: '../bower_components/jquery/jquery',
        jqueryui: '../bower_components/jquery-ui/ui/jquery-ui',
        underscore: '../bower_components/lodash/dist/lodash',
        backbone: '../bower_components/backbone/backbone',
        chaplin: '../bower_components/chaplin/chaplin',
        moment: '../bower_components/momentjs/moment',
        momentja: '../bower_components/momentjs/lang/ja',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/requirejs-text/text'
    },
    // Underscore and Backbone are not AMD-capable per default,
    // so we need to use the AMD wrapping of RequireJS
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        jqueryui: {
            deps: ['jquery']
        },
        momentja: {
            deps: ['moment']
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
    // For easier development, disable browser caching
    // Of course, this should be removed in a production environment
    //, urlArgs: 'bust=' +  (new Date()).getTime()
});

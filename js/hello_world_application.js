define([
  'chaplin',
  'views/layout',
  'routes'
], function(Chaplin, Layout, routes) {
  'use strict';

  // The application object
  // Choose a meaningful name for your application
  var HelloWorldApplication = Chaplin.Application.extend({

    // Set your application name here so the document title is set to
    // “Controller title – Site title” (see Layout#adjustTitle)
    title: 'Chaplin Example Application',

    initialize: function() {
      // Call the parent constructor.
      Chaplin.Application.prototype.initialize.apply(this, arguments);
      //console.debug 'HelloWorldApplication#initialize'

      // Initialize core components
      this.initDispatcher();
      this.initLayout();
      this.initMediator();

      // Application-specific scaffold
      this.initControllers();

      // Register all routes and start routing
      this.initRouter(routes);
      // You might pass Router/History options as the second parameter.
      // Chaplin enables pushState per default and Backbone uses / as
      // the root per default. You might change that in the options
      // if necessary:
      // this.initRouter routes, pushState: false, root: '/subdir/'

      // Freeze the application instance to prevent further changes
      if (Object.freeze) Object.freeze(this);
    },

    // Override standard layout initializer
    // ------------------------------------
    initLayout: function() {
      // Use an application-specific Layout class. Currently this adds
      // no features to the standard Chaplin Layout, it’s an empty placeholder.
      this.layout = new Layout({title: this.title});
    },

    // Instantiate common controllers
    // ------------------------------
    initControllers: function() {
      // These controllers are active during the whole application runtime.
      // You don’t need to instantiate all controllers here, only special
      // controllers which do not to respond to routes. They may govern models
      // and views which are needed the whole time, for example header, footer
      // or navigation views.
      // e.g. new NavigationController()
    },

    // Create additional mediator properties
    // -------------------------------------
    initMediator: function() {
      // Create a user property
      Chaplin.mediator.user = null;
      // Add additional application-specific properties and methods
      // Seal the mediator
      Chaplin.mediator.seal();
    },
  });

  return HelloWorldApplication;
});

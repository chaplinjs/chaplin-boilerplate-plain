define([
  'chaplin',
  'routes'
], function(Chaplin, routes) {
  'use strict';

  // The application object
  // Choose a meaningful name for your application
  var Application = Chaplin.Application.extend({

    // Set your application name here so the document title is set to
    // “Controller title – Site title” (see Layout#adjustTitle)
    title: 'Chaplin Example Application',

    initialize: function() {
      // Call the parent constructor.
      Chaplin.Application.prototype.initialize.apply(this, arguments);

      // Initialize core components.
      // ---------------------------

      // Register all routes and start routing.
      // You might pass Router/History options as the second parameter.
      // Chaplin enables pushState per default and Backbone uses / as
      // the root per default. You might change that in the options
      // if necessary:
      // this.initRouter(routes, {pushState: false, root: '/subdir/'});
      this.initRouter(routes);

      // Dispatcher listens for routing events and initialises controllers.
      this.initDispatcher({controllerSuffix: '-controller'});

      // Layout listens for click events & delegates internal links to router.
      this.initLayout();

      // Composer grants the ability for views and stuff to be persisted.
      this.initComposer();

      // Mediator is a global message broker which implements pub-sub pattern.
      this.initMediator();

      // Actually start routing.
      this.startRouting();

      // Freeze the application instance to prevent further changes.
      if (Object.freeze) Object.freeze(this);
    },

    // Create additional mediator properties
    // -------------------------------------
    initMediator: function() {
      // Add additional application-specific properties and methods
      // e.g. mediator.prop = null
      // Create a user property
      Chaplin.mediator.user = null;
      // Add additional application-specific properties and methods
      // Seal the mediator
      Chaplin.mediator.seal();
    }
  });

  return Application;
});

define([
  'handlebars',
  'chaplin',
  'lib/utils'
], function(Handlebars, Chaplin, utils) {
  'use strict';

  // Application-specific Handlebars helpers
  // -------------------------------------------

  Handlebars.registerHelper('url', function(routeName) {
    var params = [].slice.call(arguments, 1);
    var url;
    Chaplin.mediator.publish('!router:reverse', routeName, params, function(result) {
      url = result;
    });
    "/" + url;
  });

  return null;
});

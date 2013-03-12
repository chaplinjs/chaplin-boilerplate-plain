define([
  'handlebars',
  'chaplin',
  'lib/utils'
], function(Handlebars, Chaplin, utils) {
  'use strict';

  // Application-specific Handlebars helpers
  // -------------------------------------------

  // Get Chaplin-declared named routes. {{#url "like" "105"}}{{/url}}.
  Handlebars.registerHelper('url', function(routeName) {
    var params = [].slice.call(arguments, 1);
    var options = params.pop();
    var url;
    // Backbone events are synchronous, so this is possible.
    Chaplin.mediator.publish('!router:reverse', routeName, params, function(result) {
      url = result ? '/' + result : routeName;
    });
    return url;
  });
});

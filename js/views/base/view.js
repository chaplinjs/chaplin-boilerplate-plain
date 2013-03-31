define([
  'handlebars',
  'chaplin',
  'lib/view-helper' // Just load the view helpers, no return value
], function(Handlebars, Chaplin) {
  'use strict';

  var View = Chaplin.View.extend({

    getTemplateFunction: function(){

      // Template compilation
      // --------------------

      // This demo uses Handlebars templates to render views.
      // The template is loaded with Require.JS and stored as string on
      // the view prototype. On rendering, it is compiled on the
      // client-side. The compiled template function replaces the string
      // on the view prototype.
      //
      // In the end you might want to precompile the templates to JavaScript
      // functions on the server-side and just load the JavaScript code.
      // Several precompilers create a global JST hash which stores the
      // template functions. You can get the function by the template name:
      //
      // templateFunc = JST[@templateName];

      var template = this.template,
          templateFunc = null;

      if (typeof template === 'string') {
        // Compile the template string to a function and save it
        // on the prototype. This is a workaround since an instance
        // shouldn’t change its prototype normally.
        templateFunc = Handlebars.compile(template);
        this.constructor.prototype.template = templateFunc;
      }
      else {
        templateFunc = template;
      }

      return templateFunc;
    }
  });

  return View;
});

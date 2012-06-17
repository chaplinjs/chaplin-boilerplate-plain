define([
  'views/base/view',
  'text!templates/hello_world.hbs'
], function(View, template) {
  'use strict';

  var HelloWorldView = View.extend({

    // Save the template string in a prototype property.
    // This is overwritten with the compiled template function.
    // In the end you might want to used precompiled templates.
    template: template,

    className: 'hello-world',

    // Automatically append to the DOM on render
    container: '#page-container',
    // Automatically render after initialize
    autoRender: true
  });

  return HelloWorldView;
});

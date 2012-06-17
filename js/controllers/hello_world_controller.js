define([
  'controllers/base/controller',
  'models/hello_world',
  'views/hello_world_view',
  'lib/inherits'
], function(Controller, HelloWorld, HelloWorldView, inherits) {
  'use strict';

  var HelloWorldController = inherits(Controller, {

    title: 'Hello World',

    historyURL: function(params) {
      return '';
    },

    show: function(params) {
      //console.debug 'HelloWorldController#show'
      this.model = new HelloWorld()
      this.view = new HelloWorldView({ model: this.model });
    }
  });

  return HelloWorldController;
});

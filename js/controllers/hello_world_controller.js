define([
  'base/controller',
  'models/hello_world',
  'views/hello_world_view'
], function(Controller, HelloWorld, HelloWorldView) {
  'use strict';

  var HelloWorldController = Controller.extend({

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

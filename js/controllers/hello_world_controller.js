define([
  'controllers/base/controller',
  'models/hello_world',
  'views/hello_world_view'
], function(Controller, HelloWorld, HelloWorldView) {
  'use strict';

  var HelloWorldController = Controller.extend({
    show: function(params) {
      //console.debug('HelloWorldController#show');
      this.model = new HelloWorld();
      this.view = new HelloWorldView({ model: this.model });
    }
  });

  return HelloWorldController;
});

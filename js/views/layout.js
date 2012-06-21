define([
  'chaplin'
], function(Chaplin) {
  'use strict';

  var Layout = Chaplin.Layout.extend({

    initialize: function(){
      Chaplin.Layout.prototype.initialize.apply(this, arguments);
      //this.subscribeEvent('startupController', this.doSomething);
    }

    //, doSomething: function() {
      // So something cool here.
    //}
  });

  return Layout;
});

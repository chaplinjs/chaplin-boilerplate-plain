define([
  'chaplin',
  'lib/inherits'
], function(Chaplin, inherits) {
  'use strict';

  var Layout = inherits(Chaplin.Layout, {

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

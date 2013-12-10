define([
  'chaplin',
  'models/base/model'
], function(Chaplin, Model) {
  'use strict';

  var Collection = Chaplin.Collection.extend({
    // Mixin a synchronization state machine.
    // initialize: function() {
    //   _.extend(this, Chaplin.SyncMachine);
    //   Chaplin.Model.prototype.apply(this, arguments);
    //   this.on('request', this.beginSync);
    //   this.on('sync', this.finishSync);
    //   this.on('error', this.unsync);
    // }
    model: Model
    // Place your application-specific collection features here
  });

  return Collection;
});

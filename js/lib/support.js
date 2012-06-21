define([
  'underscore',
  'lib/utils',
  'chaplin'
], function(_, utils, Chaplin) {

  // Application-specific feature detection
  // --------------------------------------

  // Delegate to Chaplin’s support module
  support = utils.beget(Chaplin.support);

  // Add additional application-specific properties and methods

  // _(support).extend({
  //   someProperty: 'foo',
  //   someMethod: function(){}
  // });

  return support;
});

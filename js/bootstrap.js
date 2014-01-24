// Bootstrap the application
require(['application', 'routes'], function(Application, routes) {
  new Application({routes: routes, controllerSuffix: '-controller', root: location.pathname});
});

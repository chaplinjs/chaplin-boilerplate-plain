![Chaplin](http://s3.amazonaws.com/imgly_production/3401027/original.png)

# Plain JS Boilerplate Application for Chaplin.js

This is a boilerplate applicatoin built with [Chaplin.js](https://github.com/chaplinjs/chaplin), an application structure on top of Backbone.js.

While Chaplin itself is coded in CoffeeScript, any front-end developer can put the
framework to use in their web applications.  This boilerplate serves as an example
for how to build a Chaplin-powered application using plain javascript.  Chaplin
(with the help of require.js) provides all the neccesary functionality and helpers
to code a clean, modular, easy to read application without the syntactic sugar that
CoffeeScript enables.

If you prefer coding in CoffeeScript, you should head over to the
[CoffeeScript Chaplin Boilerplate](https://github.com/chaplinjs/chaplin-boilerplate).

## Running the Example

Copy the contents of this folder to the document root of your favorite webserver.

If you don’t have any, [pushserve](https://github.com/paulmillr/pushserve)
is a suggested http server with simple syntax and HTML5 pushState support.
Install it with nodejs package manager: `npm install -g pushserve` and then launch `pushserve`.

Visit `index.html` in your browser. If everything is running correctly you will
see a 'Hello World!' message render.

## Architectural Documentation

### Directory Structure

This example has a standard Chaplin MVC directory structure:

- `js/models`
- `js/views`
- `js/controllers`
- `js/libs`

All vendor libraries like jQuery and Backbone are located `js/vendor/`.

This repository also contains a recent built of the Chaplin library in `js/vendor/chaplin-*.js`.


### Application Startup

There are two special files which are responsible for the application bootstrap:

- `js/application.js`
- `js/routes.js`

`application.js` is the application root class which inherits from `Chaplin.Application`. It starts up all Chaplin core modules and starts the routing. It is loaded and instantiated in `index.html`.

`routes.js` contains all application routes which map URLs to controller actions.

### Templating

Since Chaplin is template-engine agnostic, you have to decide which templating solution you want to use and how you want to load the templates. This example uses [Handlebars](http://handlebarsjs.com/) templates and loads them on-demand using the [RequireJS Text](http://requirejs.org/docs/api.html#text) plugin.

Chaplin expects that views implement the `getTemplateFunction` method which needs to return the actual templating function. Since all views in this example use the same templating solution, `getTemplateFunction` is provided once by two base classes all other views inherit from:

- `js/views/base/view.js`
- `js/views/base/collection_view.js`

The actual `.hbs` template files are located in the `js/templates` directory.

### Application-specific Extensions

To ease the development, this repository also provides application-specific base classes for models, collections and controllers. They inherit from the Chaplin base classes:

- `js/models/base/model.js`
- `js/models/base/collection.js`
- `js/controllers/base/controller.js`

Furthermore, `js/lib/support.js` and `js/lib/utils.js` demonstrate how to extend the feature testing and utility files of Chaplin.

Last but not least, this example uses a specific `Layout` class which can be found in `js/views/layout.js`.

## [The Cast](https://github.com/chaplinjs/chaplin/blob/master/AUTHORS.md#the-cast)

## [The Producers](https://github.com/chaplinjs/chaplin/blob/master/AUTHORS.md#the-producers)

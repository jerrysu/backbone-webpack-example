# Backbone.js & Webpack TodoMVC Example

This example uses Webpack to bundle all JavaScript and CSS dependencies in the app!

## Loaders

For JavaScript:

* [babel](http://babeljs.io/) - Turns ES6+ code into ES5-friendly code, supports React, JSX, and Flow as well
* [react-hot](https://github.com/gaearon/react-hot-loader) - Enables live-editing of React components, preserving their state
* [eslint](http://eslint.org/) - Add lint rules to enforce best practices, supports ES6, React, and JSX as well
* [jshint](https://github.com/webpack/jshint-loader) - Similar to above
* [markdown](https://github.com/peerigon/markdown-loader) - Loads markdown from a file that can then be easily rendered as HTML
* [handlebars](https://github.com/altano/handlebars-loader), [mustache](https://github.com/deepsweet/mustache-loader), [ejs](https://github.com/okonet/ejs-loader), etc - Various flavors of templating

For CSS:

* [postcss]() - Transform CSS with autoprefixing, minification, RTL, etc.
* [sass]() - Extends CSS with more traditional programming mechanisms (mixins, functions, etc.)
* [less]() - Similar to above
* [autoprefixer]() - Adds vendor prefixes to CSS

## Plug-ins

* [HotModuleReplacementPlugin](http://webpack.github.io/docs/list-of-plugins.html#hotmodulereplacementplugin) - Replaces JavaScript/CSS modules without reloading the browser
* [I18n](https://github.com/webpack/i18n-webpack-plugin) - Create locale-specific bundles with translations baked in
* [Rewire](https://github.com/jhnns/rewire-webpack) - Modify behavior of modules for easier unit testing in node.js
* [UglifyJs](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin) - Minifies JavaScript output in bundles (use in a production config)

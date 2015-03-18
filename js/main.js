'use strict';

require('todomvc-common');
require('todomvc-common/base.css');
require('todomvc-app-css/index.css');

require('styles/main.css');

require([
	'backbone',
	'views/app',
	'routers/router'
], function (Backbone, AppView, Workspace) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();

	// Initialize the application view
	new AppView();
});

import 'es5-shim';

import 'todomvc-common';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import AppView from 'views/app';
import Backbone from 'backbone';
import Demo from 'Demo.jsx';
import React from 'react';
import Workspace from 'routers/router';
import $ from 'jquery';

import 'styles/main.css';

// Initialize routing and start Backbone.history()
new Workspace();
Backbone.history.start();

// Initialize the application view
$(function() {
  new AppView()

  // Add demo features
  React.render(<Demo />, document.getElementById('demo'));
});

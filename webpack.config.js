module.exports = {
  // Entry point for static analyzer
  entry: {
    app: ['webpack/hot/dev-server', './js/main.js']
  },

  output: {
    // Where to build results
    path: __dirname + '/assets',

    // Filename to use in HTML
    filename: 'bundle.js',

    // Path to use in HTML
    publicPath: '/assets/'
  },

  resolve: {
    // Absolute path that contains modules
    root: __dirname,

    // Directory names to be searched for modules
    modulesDirectories: ['js', 'node_modules'],

    // Replace modules with other modules or paths for compatibility or convenience
    alias: {}
  },

  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel?experimental'], exclude: /node_modules/},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
};

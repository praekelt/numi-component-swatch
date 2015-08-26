var webpack = require('webpack');


module.exports = function(grunt) {
  grunt.initConfig({
    paths: {
      js: [
        'gruntfile.js',
        'src/**/*.js',
        'src/**/*.jsx'
      ]
    },
    jshint: {
      all: ['<%= paths.js %>'],
      options: {
        jshintrc: true,
        additionalSuffixes: ['.js']
      }
    },
    jscs: {
      all: ['<%= paths.js %>']
    },
    webpack: {
      all: {
        entry: {
          collection: './src/client/views/collection/index.js'
        },
        devtool: '#sourcemap',
        output: {
          path: 'static/js/',
          filename: '[name].min.js',
          publicPath: '/static/js/'
        },
        module: {
          loaders: [{
            test: /\.jsx$/,
            loader: 'babel'
          }]
        },
        plugins: [new webpack.optimize.UglifyJsPlugin()]
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('build:scripts', ['webpack']);
  grunt.registerTask('build', ['build:scripts']);

  grunt.registerTask('default', []);
  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('test', []);
  grunt.registerTask('ci', ['lint']);
  grunt.registerTask('perf', []);
};

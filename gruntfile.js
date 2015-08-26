var extend = require('extend');
var webpack = require('./webpack.config');


module.exports = function(grunt) {
  grunt.initConfig({
    paths: {
      js: [
        '*.js',
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
      all: webpack,
      watch: extend({
        watch: true,
        keepalive: true
      }, webpack)
    }
  });

  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('build:scripts', ['webpack:all']);
  grunt.registerTask('build', ['build:scripts']);

  grunt.registerTask('watch:scripts', ['webpack:watch']);
  grunt.registerTask('watch', ['watch:scripts']);

  grunt.registerTask('default', []);
  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('test', []);
  grunt.registerTask('ci', ['lint']);
  grunt.registerTask('perf', []);
};

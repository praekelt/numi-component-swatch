var extend = require('extend');
var webpack = require('./webpack.config');


module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.renameTask('watch', 'watchFiles');

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
    sass: {
      all: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true
        },
        files: {
          'static/css/collection-core.css': [
            'src/styles/views/collection/core.scss'
          ],
          'static/css/collection-enhanced.css': [
            'src/styles/views/collection/enhanced.scss'
          ]
        }
      }
    },
    watchFiles: {
      styles: {
        options: {atBegin: true},
        files: ['src/styles/**/*.scss'],
        tasks: ['build:styles']
      }
    },
    concurrent: {
      watch: {
        options: {logConcurrentOutput: true},
        tasks: ['watch:styles', 'watch:scripts']
      }
    },
    webpack: {
      build: webpack,
      watch: extend({
        watch: true,
        keepalive: true
      }, webpack)
    }
  });

  grunt.registerTask('build:scripts', ['webpack:build']);
  grunt.registerTask('build:styles', ['sass:all']);
  grunt.registerTask('build', ['build:styles', 'build:scripts']);

  grunt.registerTask('watch:scripts', ['webpack:watch']);
  grunt.registerTask('watch:styles', ['watchFiles:styles']);
  grunt.registerTask('watch', ['concurrent:watch']);

  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('test', []);
  grunt.registerTask('ci', ['lint']);
  grunt.registerTask('perf', []);

  grunt.registerTask('default', ['lint', 'build']);
};

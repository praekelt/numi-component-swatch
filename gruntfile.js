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
    }
  });

  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('default', []);
  grunt.registerTask('build', []);
  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('test', []);
  grunt.registerTask('ci', ['lint']);
  grunt.registerTask('perf', []);
};

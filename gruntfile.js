module.exports = function(grunt) {
  grunt.initConfig({
    paths: {
      js: [
        'gruntfile.js',
        'src/scripts/**/*.js',
        'src/scripts/**/*.jsx'
      ]
    },
    jshint: {
      all: ['<%= paths.js %>'],
      options: {jshintrc: true}
    },
    jscs: {
      all: ['<%= paths.js %>']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('default', []);
  grunt.registerTask('build', []);
  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('test', []);
  grunt.registerTask('ci', ['lint']);
  grunt.registerTask('perf', []);
};

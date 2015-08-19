module.exports = function(grunt) {
  grunt.initConfig({
    paths: {
      js: ['gruntfile.js']
    },
    scsslint: {
      all: ['<%= paths.scss %>']
    },
    jshint: {
      all: ['<%= paths.js %>']
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

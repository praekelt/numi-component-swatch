module.exports = function(grunt) {
  grunt.initConfig({
    jscs: {

      // TODO js paths
      all: [
        'gruntfile.js'
      ]

    }
  });


  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('default', []);
  grunt.registerTask('build', []);
  grunt.registerTask('lint', ['jscs']);
  grunt.registerTask('test', []);
  grunt.registerTask('ci', ['lint']);
  grunt.registerTask('perf', []);
};

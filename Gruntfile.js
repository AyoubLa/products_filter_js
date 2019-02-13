module.exports = function(grunt) {

  grunt.initConfig({
    sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
          files: {                         // Dictionary of files
            'css/style/style.css': 'css/src/main.scss',       // 'destination': 'source'
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);
}
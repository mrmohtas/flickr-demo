module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'style.css': 'style.sass'
        }
      }
    },
    connect: {
      port: 1337
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-connect');

  grunt.registerTask('default', ['sass', 'connect']);
}
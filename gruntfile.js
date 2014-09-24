module.exports = function (grunt) {   
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          mangle: false,
          compress:true
        },
        my_target: {
          files: {
            'lib/js/bundle/bundle.js': [
                'lib/angular/angular.min.js',
                'lib/angular/angular-route.min.js',
                'lib/js/app.js',
                'lib/js/routes.js',
                'lib/js/objects.js',
                'lib/js/controllers/homeController.js' 
            ]
          }
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);  
};
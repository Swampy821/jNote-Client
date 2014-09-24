module.exports = function (grunt) {   
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              "lib/less.gen/bundle.gen.css": "lib/less/*"
            }
          }
        },
      cssmin: {
          combine: {
            files: {
              'lib/bundle/bundle.min.css': [
                'lib/less.gen/bundle.gen.css'
              ]
            }
          }
      },
      uglify: {
        options: {
          mangle: false,
          compress:true
        },
        my_target: {
          files: {
            'lib/bundle/bundle.min.js': [
                'lib/angular/angular.min.js',
                'lib/angular/angular-route.min.js',
                'lib/angular/angular-cookies.min.js',
                'lib/js/app.js',
                'lib/js/routes.js',
                'lib/js/objects.js',
                'lib/js/controllers/*.js' 
            ]
          }
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less', 'uglify', 'cssmin']);  
};
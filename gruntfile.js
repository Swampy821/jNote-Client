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
              "dev/lib/less.gen/bundle.gen.css": "dev/lib/less/*"
            }
          }
        },
      cssmin: {
          combine: {
            files: {
              'dev/lib/bundle/bundle.min.css': [
                'dev/lib/less.gen/bundle.gen.css'
              ],
              'build/lib/bundle/bundle.min.css': [
                'dev/lib/bundle/bundle.min.css'
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
            'dev/lib/bundle/bundle.min.js': [
                'dev/lib/angular/angular.min.js',
                'dev/lib/angular/angular-route.min.js',
                'dev/lib/angular/angular-cookies.min.js',
                'dev/lib/js/app.js',
                'dev/lib/js/routes.js',
                'dev/lib/js/objects.js',
                'dev/lib/js/controllers/*.js' 
            ],
            'build/lib/bundle/bundle.min.js':[
            'dev/lib/bundle/bundle.min.js']
          }
        }
      },
      watch: {
        files: ['**/*.less', '**/*.js'],
        tasks: ['less', 'uglify', 'cssmin']
      },
      htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'build/index.html': 'dev/index.html',     // 'destination': 'source'
            'build/lib/partials/home.html': 'dev/lib/partials/home.html',
            'build/lib/partials/notes.html': 'dev/lib/partials/notes.html'
          }
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['less', 'uglify', 'cssmin','htmlmin']);  
};
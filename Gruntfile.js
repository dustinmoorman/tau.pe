module.exports = function(grunt) {

    var paths = {
        js: ['*.js', 'assets/**/*.js', 'assets/js/foundation/*.js','assets/js/foundation/vendor/*.js'],
        html: ['*.html', 'views/**'],
        css: ['*.css', 'assets/css/*.css']
    }

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        watch: {
            js: {
                files: paths.js,
                options: {
                    livereload: true
                }
            },
            html: {
                files: paths.html,
                options: {
                    livereload: true
                }
            },
            css: {
                files: paths.css,
                options: {
                    livereload: true
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['concurrent']);

};
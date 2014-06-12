'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);

    var paths = {
        js: ['*.js', 'assets/**/*.js', 'assets/js/foundation/*.js','assets/js/foundation/vendor/*.js'],
        html: ['*.html', 'views/**'],
        css: ['*.css', 'assets/css/*.css']
    }

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            dev: {
                script: 'app.js'
            }
        },
        watch: {
            js: {
                files: paths.js,
		tasks: ['jshint'],
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
        },
	jshint: {
	    all: {
		src: paths.js,
		options: {
		  jshintrc: true
		}
	    }
	}
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    
    grunt.registerTask('default', ['concurrent', 'jshint']);

};

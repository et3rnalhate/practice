module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'app/**/*.js',
                    'app/*.js'
                ],
                dest: 'js/main.js'
            },
        },

        uglify: {
            build: {
                src: 'js/main.js',
                dest: 'js/main.min.js',
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/style.css': 'css/build/main.scss'
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/style.min.css': ['css/style.css']
                }
            }
        },

        watch: {

            scripts: {
                files: [
                    'app/**/*.js',
                    'app/*.js'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },

            scripts_vendor: {
                files: []
            },

            css: {
                files: ['css/build/*.scss', 'css/build/**/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat'); // concat jscript
    grunt.loadNpmTasks('grunt-contrib-uglify'); // optimize jscript
    grunt.loadNpmTasks('grunt-contrib-cssmin'); // css min
    grunt.loadNpmTasks('grunt-contrib-watch'); // listener change and start tasks
    grunt.loadNpmTasks('grunt-contrib-sass'); // sass compiler

    grunt.registerTask('default', ['watch']); // , 'watch'

};
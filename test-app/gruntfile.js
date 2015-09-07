(function(){
    'use strict';
    module.exports = function(grunt){
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: {
                mainappimages: {
                    cwd:'',
                    src: ['test-app/images/**/*.*'],
                    dest: '.build/',
                    expand: true
                },
                mainappsounds: {
                    cwd:'',
                    src: ['test-app/sound/**/*.*'],
                    dest: '.build/',
                    expand: true
                },
                mainapphtml: {
                    cwd:'',
                    src: ['test-app/**/*.html'],
                    dest: '.build/',
                    expand: true
                },
                mainappbower: {
                    cwd:'',
                    src: ['bower-components/**/*.*'],
                    dest: '.thirdparty/',
                    expand: true
                }
            }
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.registerTask('default', ['copy']);
    }
})();

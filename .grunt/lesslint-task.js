(function () {
    'use strict';
    module.exports={
        jshint: {
            all: [
                'gruntfile.js',
                'test-app/scripts/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            },
            cwd: '',
            src: ['test-app/scripts/**/*.js'],
            dest: '.build/test-app/scripts',
            expand: true
        }
    };
})();
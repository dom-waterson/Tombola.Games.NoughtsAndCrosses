(function () {
    'use strict';
    module.exports={
        jshint: {
            all: [
                'gruntfile.js',
                'test-app/scripts/*.js'
            ],
            cwd: '',
            src: ['test-app/scripts/**/*.js'],
            dest: '.build/test-app/scripts',
            expand: true
        }
    };
})();
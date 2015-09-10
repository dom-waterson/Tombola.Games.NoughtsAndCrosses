(function () {
    'use strict';
    module.exports={
        jshint: {
            all: [
                'gruntfile.js',
                'noughts-and-crosses/app/scripts/*.js'
            ],
            cwd: '',
            src: ['noughts-and-crosses/app/scripts/**/*.js'],
            dest: '.build/noughts-and-crosses/app/scripts',
            expand: true
        }
    };
})();
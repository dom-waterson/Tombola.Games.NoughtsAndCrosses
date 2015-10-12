(function () {
    'use strict';
    module.exports={
        javascript: {
            cwd: '',
            src: ['noughts-and-crosses/app/scripts/**/*.js'],
            dest: '.build/noughts-and-crosses/app/scripts',
            expand: true
        },
        tests: {
            cwd: '',
            src: ['noughts-and-crosses/tests/**/*.js'],
            dest: '.build/noughts-and-crosses/tests',
            expand: true
        }
    };
})();
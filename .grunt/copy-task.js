(function () {
    'use strict';
    module.exports= {
        mainappimages: {
            cwd: '',
            src: ['test-app/images/**/*.*'],
            dest: '.build/',
            expand: true
        },
        mainappsounds: {
            cwd: '',
            src: ['test-app/sound/**/*.*'],
            dest: '.build/',
            expand: true
        },
        mainapphtml: {
            cwd: '',
            src: ['test-app/**/*.html'],
            dest: '.build/',
            expand: true
        },
        mainappbower: {
            cwd: '',
            src: ['bower_components/**/*.*'],
            dest: '.build/thirdparty/',
            expand: true
        }
    };
})();
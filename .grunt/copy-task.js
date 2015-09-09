(function () {
    'use strict';
    module.exports= {
        mainappimages: {
            cwd: '',
            src: ['noughts-and-crosses/app/images/**/*.*'],
            dest: '.build/',
            expand: true
        },
        mainappsounds: {
            cwd: '',
            src: ['noughts-and-crosses/app/sound/**/*.*'],
            dest: '.build/',
            expand: true
        },
        mainapphtml: {
            cwd: '',
            src: ['noughts-and-crosses/app/**/*.html'],
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
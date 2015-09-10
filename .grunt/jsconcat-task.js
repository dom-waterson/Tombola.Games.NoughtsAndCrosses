(function () {
    'use strict';
    module.exports= {
        jsconcat: {
            cwd: '',
            src: ['noughts-and-crosses/app/scripts/*.js',
                'noughts-and-crosses/app/scripts/Controllers/*.js',
                'noughts-and-crosses/app/scripts/Directives/*.js',
                'noughts-and-crosses/app/scripts/Services/*.js'],
            dest: '.build/noughts-and-crosses/app/scripts/app.js',
            expand: false
        }
    };
})();
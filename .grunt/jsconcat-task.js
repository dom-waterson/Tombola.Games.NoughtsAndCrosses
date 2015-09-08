(function () {
    'use strict';
    module.exports= {
        jsconcat: {
            cwd: '',
            src: ['test-app/scripts/*.js',
                'test-app/scripts/Controllers/*.js',
                'test-app/scripts/Directives/*.js',
                'test-app/scripts/Services/*.js'],
            dest: '.build/test-app/scripts/app.js',
            expand: false
        }
    };
})();
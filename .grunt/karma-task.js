(function () {
    'use strict';
    module.exports={
        unit: {
            configFile: 'karma.conf.js',
            options: {
                files: [
                    'noughts-and-crosses/tests/**/*.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    'noughts-and-crosses/app/scripts/*.js',
                    'noughts-and-crosses/app/scripts/Controllers/*.js',
                    'noughts-and-crosses/app/scripts/Directives/*.js',
                    'noughts-and-crosses/app/scripts/Services/*.js',
                    'noughts-and-crosses/mocks/*.js'
                ]
            }
        }
    };
})();
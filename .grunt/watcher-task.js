(function () {
    'use strict';
    module.exports={
        watchscripts: {
            files: ['test-app/scripts/**/*.js'],
            tasks: ['JSFiles']
        },
        watchless: {
            files: ['test-app/less/*.less'],
            tasks: ['lessFiles']
        },
        watchhtml: {
            files: ['test-app/*.html', 'test-app/scripts/Directives/*.html'],
            tasks: ['htmlFiles']
        },
        watchimages: {
            files: ['test-app/images/*.*'],
            tasks: ['imageFiles']
        },
        watchsounds: {
            files: ['test-app/sound/*.*'],
            tasks: ['soundFiles']
        }
    }
})();
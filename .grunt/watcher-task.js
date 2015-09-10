(function () {
    'use strict';
    module.exports={
        watchscripts: {
            files: ['noughts-and-crosses/app/scripts/**/*.js'],
            tasks: ['JSFiles']
        },
        watchless: {
            files: ['noughts-and-crosses/app/less/*.less'],
            tasks: ['lessFiles']
        },
        watchhtml: {
            files: ['noughts-and-crosses/app/*.html', 'noughts-and-crosses/app/scripts/Directives/*.html'],
            tasks: ['htmlFiles']
        },
        watchimages: {
            files: ['noughts-and-crosses/app/images/*.*'],
            tasks: ['imageFiles']
        },
        watchsounds: {
            files: ['noughts-and-crosses/app/sound/*.*'],
            tasks: ['soundFiles']
        }
    }
})();
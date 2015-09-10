(function () {
    'use strict';
    module.exports={
        lessconverter: {
            expand: true,
            cwd: 'noughts-and-crosses/app/less/',
            src: ['**/*.less'],
            dest: '.build/noughts-and-crosses/app/css/',
            ext: '.css'
        }
    };
})();
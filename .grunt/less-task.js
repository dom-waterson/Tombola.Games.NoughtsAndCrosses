(function () {
    'use strict';
    module.exports={
        lessconverter: {
            expand: true,
            cwd: 'test-app/less/',
            src: ['**/*.less'],
            dest: '.build/test-app/css/',
            ext: '.css'
        }
    };
})();
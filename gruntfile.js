(function(){
    'use strict';
    var copyTask = require('./.grunt/copy-task'),
        lintjsTask = require('./.grunt/lintjs-task'),
        concatjsTask = require('./.grunt/jsconcat-task');
    module.exports = function(grunt){
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: copyTask,
            //lesslint: lessLintTask,
            //less: lessLintTask,
            jshint: lintjsTask,
            concat: concatjsTask
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.registerTask('lintJS', ['jshint']);
        grunt.registerTask('jsConcatFiles', ['concat']);
        grunt.registerTask('default', ['copy', 'lintJS', 'concat']);
    }
})();

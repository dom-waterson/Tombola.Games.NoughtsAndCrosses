(function(){
    'use strict';
    var port = 35001,
        copyTask = require('./.grunt/copy-task'),
        lintjsTask = require('./.grunt/lintjs-task'),
        concatjsTask = require('./.grunt/jsconcat-task'),
        lessTask = require('./.grunt/less-task'),
        cleanTask = require('./.grunt/clean-task'),
        server = require('./server/server.js'),
        watchTask = require('./.grunt/watcher-task');
    module.exports = function(grunt){
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: copyTask,
            lesslint: lessTask,
            less: lessTask,
            jshint: lintjsTask,
            concat: concatjsTask,
            clean: cleanTask,
            watch: watchTask
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-express-server');
        grunt.registerTask('lessFiles', ['lesslint', 'clean:css', 'less']);
        grunt.registerTask('JSFiles', ['jshint', 'clean:javascript', 'concat']);
        grunt.registerTask('htmlFiles', ['clean:html', 'copy:mainapphtml']);
        grunt.registerTask('soundFiles', ['clean:sounds', 'copy:mainappsounds']);
        grunt.registerTask('imageFiles', ['clean:images', 'copy:mainappimages']);
        grunt.registerTask('server', 'Start a custom web server', function(){
            server.listen(port);
            grunt.log.writeln('Listening on port ' + port);
        });
        grunt.registerTask('default', ['copy:mainappbower', 'JSFiles', 'lessFiles', 'htmlFiles', 'soundFiles', 'imageFiles', 'server', 'watch']);
    }
})();

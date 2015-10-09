(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('SoundService', ['$timeout', function($timeout){
            var me = this,
                audio = '',
                stopAudio = function(){
                    audio.get(0).pause();
                    me.currentlyPlaying = false;
                };

            me.currentlyPlaying = false;

            me.playGameSound = function(startTime, duration){
                audio = angular.element('#soundplayer');
                audio.prop('currentTime', startTime);
                audio.get(0).play();
                me.currentlyPlaying = true;
                $timeout(stopAudio, duration, true);
            };
        }]);
})();
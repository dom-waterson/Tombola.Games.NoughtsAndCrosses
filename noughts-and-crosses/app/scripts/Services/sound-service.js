(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('SoundService', ['$timeout', function(){
            var me = this,
                audio = '';

            me.playGameSound = function(startTime, duration){
                audio = angular.element.find("tombola-sound");
                audio.currentTime = startTime;

            };
        }]);
})();
(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .factory('SoundConstants', function(){
            return {
                SILLY_LOSE_STATE_START: 0,
                SILLY_LOSE_STATE_DURATION: 1484,
                DEFAULT_LOSE_STATE_START: 2,
                DEFAULT_LOSE_STATE_DURATION: 2847,
                DEFAULT_PLAYER_CLICK_START: 5,
                DEFAULT_PLAYER_CLICK_DURATION: 1291,
                SILLY_PLAYER_CLICK_START: 7,
                SILLY_PLAYER_CLICK_DURATION: 743,
                VICTORY_START: 8,
                VICTORY_DURATION: 6350
            };
        });
})();
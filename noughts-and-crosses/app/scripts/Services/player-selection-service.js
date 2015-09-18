(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('PlayerSelectionService', function(){
            var me = this,
                changePlayerType = function(playerNumber){
                    me.players[playerNumber] = playerChanger(me.players[playerNumber]);
                },

                playerChanger = function(player){
                    if (player === 'human'){
                        return 'pre-trained';
                    }
                    else if (player === 'pre-trained'){
                        return 'random';
                    }
                    else{
                        return 'human';
                    }
                };

            me.players = ['human','human'];
            me.playing = false;
            me.togglePlayer1Type = function(){
                changePlayerType(0);
            };
            me.togglePlayer2Type = function(){
                changePlayerType(1);
            };
    });
})();
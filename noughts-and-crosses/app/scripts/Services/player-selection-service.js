(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('PlayerSelectionService', function(){
            var me = this,
                changePlayerType = function(playerNumber){
                    if(playerNumber === 1){
                        me.player1Type = playerChanger(me.player1Type);
                    }
                    if(playerNumber === 2){
                        me.player2Type = playerChanger(me.player2Type);
                    }
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

            me.player1Type = 'human';
            me.player2Type = 'human';
            me.playing = false;
            me.togglePlayer1Type = function(){
                changePlayerType(1);
            };
            me.togglePlayer2Type = function(){
                changePlayerType(2);
            };
    });
})();